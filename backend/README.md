# EVALUACION 01 - PROGRAMACION WEB II

**Estudiantes:**
- Samira Nitza Barrientos Morales
- Carmen Rosario Chavez Hurtado

**Materia:** Programación Web II

## Descripción del Proyecto
Desarrollo de una API REST para la gestión completa (CRUD) de productos.

---

## Tecnologías Utilizadas
* Node.js y Express
* Sequelize (ORM)
* SQL Server
* Postman

## Instrucciones de Ejecución
1. **Instalar dependencias:** Ejecutar `npm install` en la terminal.
2. **Configuración:** Crear un archivo `.env` basado en `.env.example` con las credenciales de SQL Server.
3. **Ejecutar API:** Iniciar el servidor con `node app.js`.

---

## Evidencias del Funcionamiento

### Listar Productos Vacios
**Consulta exitosa (200 OK):**
![Listar Vacio](../capturas/get-productos-vacio.png)

### Registrar Producto (POST)
**Registro exitoso (201 Created):**
![Registro Postman](../capturas/post-agregar-producto.png)

**Prueba de datos inválidos (400 Bad Request):**
![Error 400](../capturas/post-error400.png)

**Vista de la insersion en SQL Server:**
![Persistencia SQL](../capturas/sql-01.png)

### Listar Productos
**Consulta exitosa (200 OK):**
![Listar Postman](../capturas/get-productos.png)

### Obtener Producto por ID (GET :id)
**Consulta exitosa (200 OK):**
![Obtener Postman](../capturas/get-id1.png)

**Producto inexistente (404 Not Found):**
![Error 404](../capturas/get-id5.png)

### Búsqueda de Productos (GET buscar)
**Búsqueda con coincidencias parciales (200 OK):**
![Buscar Postman](../capturas/get-buscar-ok.png)

**Búsqueda sin coincidencias (200 OK):**
![Buscar Postman](../capturas/get-buscar-notfound.png)

### Actualizar Producto (PUT)
**Actualización exitosa en Postman:**
![Update Postman](../capturas/put-actualizar-precio.png)

**Vista de actualizacion en SQL Server:**
![Update SQL](../capturas/sql-02.png)

### Eliminar Producto (DELETE)
**Eliminación exitosa en Postman:**
![Delete Postman](../capturas/delete-producto.png)

**Vista de borrado en SQL Server:**
![Delete SQL](../capturas/sql-03.png)