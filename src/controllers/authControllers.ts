import { PrismaClient } from "../generated/prisma";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import e, { Request, Response } from "express";

dotenv.config();
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

if (!ACCESS_TOKEN_SECRET || !REFRESH_TOKEN_SECRET) {
    throw new Error("Token secrets must be defined in the environment");
}

const accessTokenLife = "1h";
const refreshTokenLife = "7d";

let refreshTokens: string[] = [];
const prisma = new PrismaClient();

/**
 * Genera un par de tokens (accessToken y refreshToken) para un usuario autenticado.
 * @param user - Objeto del usuario que debe tener al menos las propiedades id_usuario y rol.
 * @returns Un objeto que contiene el accessToken y el refreshToken.
 */
const generateToken = (user: any) => {
    // Genera el token de acceso usando la clave ACCESS_TOKEN_SECRET y su tiempo de expiración.
    const accessToken = jwt.sign(
        { id: user.id_usuario, rol: user.rol },
        ACCESS_TOKEN_SECRET,
        { expiresIn: accessTokenLife }
    );

    console.log("Access Token generado:", accessToken);
    
    // Genera el token de refresco usando la clave REFRESH_TOKEN_SECRET y su tiempo de expiración.
    const refreshToken = jwt.sign(
        { id: user.id_usuario, rol: user.rol },
        REFRESH_TOKEN_SECRET,
        { expiresIn: refreshTokenLife }
    );
    
    // Guarda el refreshToken en un arreglo para mantenerlo activo o poder revocarlo en el futuro.
    refreshTokens.push(refreshToken);
    console.log("Refresh Token generado:", refreshToken);
    
    return { accessToken, refreshToken };
};


/**
 * Controlador para el login del usuario.
 * Verifica las credenciales recibidas en el cuerpo de la petición.
 * Si el usuario es válido y está activo, se actualiza el último acceso,
 * se generan los tokens y se envían en la respuesta.
 * 
 * @param req - Objeto Request de Express.
 * @param res - Objeto Response de Express.
 */
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Busca el usuario en la base de datos usando su nombre de usuario.
        const user = await prisma.usuarios.findUnique({
            where: {
                nombre_usuario: username
            }
        });
        
        // Si el usuario existe pero no está activo, se rechaza el acceso.
        if (user && user.estado !== 'activo') {
            res.status(403).send("El usuario está desactivado o no existe");
        }
        // Si el usuario existe y la contraseña es correcta, se procede con el login.
        else if (user && user.clave_hash === password) {
            // Actualiza el campo 'ultimo_acceso' del usuario.
            await prisma.usuarios.update({
                where: {
                    id_usuario: user.id_usuario
                },
                data: {
                    ultimo_acceso: new Date()
                }
            });

            console.log("Usuario autenticado:", user);

            // Genera el accessToken y refreshToken para el usuario autenticado.
            const { accessToken, refreshToken } = generateToken(user);
            
            // Guarda el refreshToken en una cookie httpOnly para mayor seguridad.
            res.cookie('refreshToken', refreshToken, { httpOnly: true });
            
            res.status(200).json({
                message: "Login successful",
                user: user,
                accessToken: accessToken,
            });
        }
        // Si las credenciales no son válidas, se devuelve un error 401.
        else {
            res.status(401).send("Invalid credentials");
        }
    }
    catch (error) {
        // En caso de error durante el proceso, se devuelve un error 500.
        res.status(500).send('Ocurrió un error al intentar iniciar sesión: ' + error);
    }
};


export const register = async(req: Request, res: Response) => {
    const { nombre_usuario, clave_hash, rol, nombre, apellido} = req.body;

    try{
        const usuarioExistente = await prisma.usuarios.findUnique({
            where: {
                nombre_usuario: nombre_usuario
            }
        })

        if(usuarioExistente){
            res.status(400).json({ message: "El nombre de usuario ya está en uso" });
            return;
        }

        const nuevoUsuario = await prisma.usuarios.create({
            data: {
                nombre_usuario: nombre_usuario,
                apellido: apellido,
                nombre: nombre,
                clave_hash: clave_hash,
                rol: rol,
                fecha_creacion: new Date(),
                estado: 'activo'
            }
        })

        res.status(201).json({
            meessage: "Usuario registrado exitosamente",
            usuario: {
                id_usuario: nuevoUsuario.id_usuario,
                nombre_usuario: nuevoUsuario.nombre_usuario,
                rol: nuevoUsuario.rol
            }
        })
    } 
    catch(error) {
        res.status(500).json({ message: "Error al registrar el usuario: " + error });
}
}

export const refresh = (req: Request, res: Response) => {
    const {refreshToken} = req.cookies;

    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        res.status(403).send("Refresh token no es valido");
    }

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err: any, user: any) => {
        if(err) {
            res.status(403).send("Refresh token expirado");
            return
        }

        const newAccessToken = jwt.sign(
            { id: user.id, rol: user.rol },
            ACCESS_TOKEN_SECRET,
            { expiresIn: accessTokenLife }
        );

        res.status(200).json({
            accessToken: newAccessToken
        });

    })
}


export const logout = (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        res.status(403).send("Refresh token no es valido");
    }
    else{
    // Elimina el refreshToken del arreglo de tokens activos.
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    
    // Elimina la cookie del cliente.
    res.clearCookie('refreshToken');
    
    res.status(200).send("Sesión Terminada exitosamente");
    }
};

