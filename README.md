# Aplicación de Consulta de Tipo de Cambio Banxico

Una aplicación web  que permite consultar información histórica del tipo de cambio del peso mexicano utilizando la API oficial de Banxico (Banco de México).

## Características

- **Consulta histórica**: Obtén tipos de cambio por rango de fechas personalizable
- **Interfaz intuitiva**: Selectores de fecha fáciles de usar
- **Datos oficiales**: Información directa de la API oficial de Banxico
- **Tiempo real**: Actualización automática de datos al cambiar fechas
- **Responsive**: Diseño adaptable a diferentes dispositivos
- **Arquitectura**: Frontend React + Backend Node.js/Express

## Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de interfaz de usuario
- **Axios** - Cliente HTTP para peticiones API
- **date-fns** - Manipulación de fechas
- **CSS3** - Estilos personalizados

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web para Node.js
- **Axios** - Cliente HTTP para conectar con API de Banxico
- **CORS** - Manejo de políticas de origen cruzado

## Prerrequisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- Conexión a internet para acceder a la API de Banxico

## Instalación

1. **Instala las dependencias del backend**
   ```bash
   cd backend
   npm install
   ```

2. **Instala las dependencias del frontend**
   ```bash
   cd ..
   npm install
   ```

## Ejecución

### Opción 1: Ejecutar ambos servicios manualmente

1. **Inicia el servidor backend** (Terminal 1)
   ```bash
   cd backend
   node server.js
   ```
   El servidor estará disponible en `http://localhost:5000`

2. **Inicia la aplicación React** (Terminal 2)
   ```bash
   npm start
   ```
   La aplicación se abrirá automáticamente en `http://localhost:3000`

### Opción 2: Usar scripts de desarrollo 

```bash
# Terminal 1 - Backend
cd backend && node server.js

# Terminal 2 - Frontend  
npm start
```


## Configuración de API

El proyecto utiliza la API oficial de Banxico con las siguientes configuraciones:

- **Serie**: SF43718 (Tipo de cambio peso-dólar)
- **Token**: Configurado en el código (requiere token válido de Banxico)
- **Base URL**: `https://www.banxico.org.mx/SieAPIRest/service/v1/series/`

