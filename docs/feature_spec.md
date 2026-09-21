# Feature specification: Task Management API

## Resumen

Esta API permitirá a los usuarios gestionar sus tareas diarias mediante operaciones CRUD (Crear, Leer, Actualizar, Borrar).

## Requisitos (Notación EARS)

1. **Creación:** WHEN a user submits a POST request with a valid task title, THE SYSTEM SHALL create a new task and return a 201 status code.
2. **Validación:** WHEN a user submits a POST request missing the 'title' field, THE SYSTEM SHALL return a 400 Bad Request with validation errors.
3. **Actualización:** WHEN a user sends a PUT request to update a task's status to 'completed', THE SYSTEM SHALL update the database and return the modified task.
4. **Protección:** WHEN an unauthenticated user attempts to access any endpoint, THE SYSTEM SHALL return a 401 Unauthorized error.
