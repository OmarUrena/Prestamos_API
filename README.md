# 💰 Sistema de Préstamos - API REST

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

## 📋 Descripción

Sistema completo de gestión de préstamos desarrollado con **TypeScript** y **Node.js**, diseñado para instituciones financieras o cooperativas de crédito. Esta API REST robusta implementa todas las funcionalidades necesarias para la administración integral de préstamos, clientes, pagos y usuarios, siguiendo las mejores prácticas de desarrollo backend moderno.

## 🚀 Características Principales

### 🔐 Sistema de Autenticación y Autorización
- **JWT (JSON Web Tokens)** con refresh tokens para sesiones seguras
- **Autenticación basada en roles** (Admin, Cobrador, Secretario)
- **Hash de contraseñas** con bcrypt para máxima seguridad
- **Middleware de autorización** personalizado
- **Gestión de cookies** para tokens de autenticación

### 👥 Gestión de Clientes
- **CRUD completo** de clientes con validación de datos
- **Sistema de geolocalización** (latitud/longitud) para direcciones
- **Gestión de referencias** y datos de contacto
- **Historial de actividades** por usuario
- **Validación de cédulas** únicas

### 💳 Sistema de Préstamos
- **Múltiples tipos de interés** (simple/compuesto)
- **Frecuencias de pago flexibles** (diario, semanal, quincenal, mensual)
- **Cálculo automático de cuotas** con capital e intereses
- **Estados de préstamos** (activo, finalizado, mora)
- **Control de desembolsos** y total pagado

### 💰 Gestión de Pagos y Cuotas
- **Sistema de cuotas automático** con fechas de vencimiento
- **Múltiples formas de pago** (efectivo, transferencia, otros)
- **Cálculo automático de intereses de mora**
- **Estados de cuotas** (pendiente, pagada, atrasada, parcial)
- **Generación de recibos** numerados

### 📊 Movimientos de Caja
- **Registro automático** de entradas y salidas
- **Trazabilidad completa** de transacciones
- **Reportes financieros** detallados
- **Vinculación con préstamos y pagos**

### ⏰ Automatización y Jobs
- **Cron Jobs** para actualización automática de estados
- **Cálculo automático de mora** diario
- **Actualización de estados** de cuotas vencidas
- **Mantenimiento programado** de la base de datos

## 🛠️ Stack Tecnológico

### Backend
- **Node.js** - Runtime de JavaScript
- **TypeScript** - Tipado estático y desarrollo escalable
- **Express.js** - Framework web minimalista y flexible
- **Prisma ORM** - ORM type-safe de nueva generación

### Base de Datos
- **PostgreSQL** - Base de datos relacional robusta
- **Migraciones automáticas** con Prisma
- **Schemas declarativos** para consistencia de datos

### Seguridad
- **JWT** - Autenticación sin estado
- **bcrypt** - Hash seguro de contraseñas
- **CORS** - Control de acceso cross-origin
- **Middleware de autenticación** personalizado

### Documentación y Testing
- **Swagger/OpenAPI** - Documentación automática de API
- **JSDoc** - Documentación de código
- **TypeScript** - Tipado estático como testing

### DevOps y Deployment
- **Railway** - Deployment en la nube
- **Environment Variables** - Configuración segura
- **Multi-platform builds** - Soporte multiplataforma

## 📁 Arquitectura del Proyecto

```
src/
├── controllers/           # Lógica de negocio
│   ├── authControllers.ts     # Autenticación y autorización
│   ├── services.ts            # Servicios compartidos
│   └── client/                # Controladores por módulo
│       ├── clientesController.ts
│       ├── prestamosController.ts
│       ├── pagosController.ts
│       ├── movimientosController.ts
│       ├── usuariosController.ts
│       └── actividadController.ts
├── routes/               # Definición de rutas
│   ├── authRoutes.ts
│   ├── clientRoutes.ts
│   └── [otros routes...]
├── jobs/                 # Tareas programadas
│   └── moraJob.ts            # Job de cálculo de mora
├── generated/            # Código generado por Prisma
│   └── prisma/
├── swagger.ts            # Configuración de documentación
└── index.ts              # Punto de entrada de la aplicación
```

## 🗄️ Modelo de Base de Datos

### Entidades Principales
- **Usuarios** - Sistema de roles y autenticación
- **Clientes** - Información personal y de contacto
- **Préstamos** - Datos del préstamo y configuración
- **Cuotas** - Cronograma de pagos detallado
- **Pagos** - Registro de pagos realizados
- **Movimientos de Caja** - Flujo de efectivo
- **Direcciones** - Geolocalización de clientes
- **Log de Actividad** - Auditoría del sistema

### Características del Modelo
- **Relaciones bien definidas** con integridad referencial
- **Enums tipados** para estados y categorías
- **Campos calculados** automáticamente
- **Índices optimizados** para consultas frecuentes
- **Soft deletes** para mantener historial

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v18 o superior)
- PostgreSQL (v13 o superior)
- npm o yarn

### Variables de Entorno
```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/prestamos_db"
ACCESS_TOKEN_SECRET="tu_secret_key_aqui"
REFRESH_TOKEN_SECRET="tu_refresh_secret_aqui"
```

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/OmarUrena/Prestamos_API.git
cd Prestamos_API

# Instalar dependencias
npm install

# Configurar base de datos
npx prisma migrate dev
npx prisma generate

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
npm start
```

## 📚 Documentación de API

La documentación completa de la API está disponible en `/api-docs` cuando el servidor está ejecutándose. Incluye:

- **Endpoints completos** con ejemplos
- **Schemas de request/response**
- **Códigos de estado HTTP**
- **Ejemplos de autenticación**
- **Casos de uso comunes**

Accede a: `http://localhost:3000/api-docs`

## 🔧 Funcionalidades Técnicas Destacadas

### 1. **Autenticación JWT Avanzada**
- Implementación de refresh tokens para sesiones largas
- Middleware personalizado para protección de rutas
- Diferentes niveles de autorización por rol

### 2. **ORM Type-Safe con Prisma**
- Queries type-safe que previenen errores en tiempo de compilación
- Migraciones automáticas y versionado de schema
- Generación automática de tipos TypeScript

### 3. **Jobs Programados**
- Sistema de cron jobs para automatización de tareas
- Cálculo automático de intereses de mora
- Mantenimiento programado de estados

### 4. **Arquitectura Escalable**
- Separación clara de responsabilidades (Controller-Service-Repository)
- Middleware reutilizable
- Manejo centralizado de errores

### 5. **Seguridad Empresarial**
- Hash de contraseñas con salt automático
- Protección CORS configurada
- Validación de datos en múltiples capas

## 🎯 Casos de Uso Reales

- **Cooperativas de Crédito** - Gestión completa de préstamos
- **Instituciones Microfinancieras** - Control de carteras pequeñas
- **Prestamistas Individuales** - Seguimiento personal de préstamos
- **Financieras** - Automatización de procesos de cobranza

## 🔍 Conceptos Técnicos que Demuestro

### Backend Development
- ✅ **API REST** bien estructurada
- ✅ **TypeScript** para código mantenible
- ✅ **Autenticación JWT** robusta
- ✅ **ORM moderno** (Prisma)
- ✅ **Base de datos relacional** compleja

### Software Architecture
- ✅ **Clean Architecture** con separación de capas
- ✅ **Dependency Injection** implícita
- ✅ **Repository Pattern** a través de Prisma
- ✅ **Middleware Pattern** para funcionalidades transversales

### DevOps & Best Practices
- ✅ **Environment Configuration** segura
- ✅ **Database Migrations** versionadas
- ✅ **API Documentation** automática
- ✅ **Error Handling** centralizado
- ✅ **Code Organization** escalable

### Business Logic
- ✅ **Cálculos financieros** complejos
- ✅ **Automatización de procesos** de negocio
- ✅ **Gestión de estados** de entidades
- ✅ **Reporting** y auditoría

## � Licencia

Este proyecto está licenciado bajo la **GNU Affero General Public License v3.0** (AGPL-3.0) - ver el archivo [LICENSE](LICENSE) para más detalles.

### 💼 Licencia Comercial

¿Necesitas usar este código en un proyecto comercial sin las restricciones de AGPL? 

**Contacta al autor** para obtener una **licencia comercial propietaria**.



## �👨‍💻 Autor

**Omar Ureña**
- LinkedIn: [Omar Ureña](https://www.linkedin.com/in/omar-ure%C3%B1a-2a6001197/)
- Email: [1988informatica@gmail.com]
- GitHub: [@OmarUrena](https://github.com/OmarUrena)

---

*Este proyecto demuestra competencias avanzadas en desarrollo backend, arquitectura de software, manejo de bases de datos relacionales y implementación de sistemas financieros complejos.*
