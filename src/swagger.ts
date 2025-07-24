import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Préstamos",
      version: "1.0.0",
      description: "Documentación de la API de Préstamos",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://prestamos-api.up.railway.app"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/**/*.ts"], // Ajusta según tu estructura
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };
