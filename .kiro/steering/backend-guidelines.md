# Kiro steering document: Backend Guidelines

## Reglas de comportamiento para Kiro

Al generar o modificar código en este proyecto, obedece estrictamente estas directrices:

- **Lenguaje y Stack:** Usa exclusivamente TypeScript y Node.js.
- **Tipado:** Prohibido el uso de `any`. Define interfaces claras para todas las respuestas de la API.
- **Formato de Respuestas:** Todas las respuestas de error deben seguir este formato JSON: `{ "success": false, "error": "<Mensaje detallado>" }`.
- **Idioma del Código:** Los nombres de variables, funciones y comentarios deben estar en inglés.
- **Testing:** Al crear un nuevo controlador, genera automáticamente un archivo de test con Jest.
