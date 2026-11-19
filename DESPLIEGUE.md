# Despliegue gratis de Mikhuy

Orden: 1) Base de datos (TiDB)  2) Backend (Render)  3) Frontend (Vercel)  4) CORS

## 1) Base de datos MySQL gratis: TiDB Cloud Starter
1. Cuenta en https://tidbcloud.com -> crear cluster "Starter" (gratis).
2. Boton Connect -> generar contrasena -> anotar host, puerto (4000) y usuario (lleva prefijo, ej. abc123.root).
3. En el editor SQL: CREATE DATABASE saboriq_db;

## 2) Backend en Render
New -> Web Service -> repo de GitHub.
- Root Directory: backend
- Runtime: Docker
- Variables de entorno:
  SPRING_DATASOURCE_URL      = jdbc:mysql://<host-tidb>:4000/saboriq_db?sslMode=VERIFY_IDENTITY
  SPRING_DATASOURCE_USERNAME = <usuario con prefijo>
  SPRING_DATASOURCE_PASSWORD = <contrasena>
  APP_JWT_SECRET             = (genera uno: openssl rand -base64 32)
  APP_BOOTSTRAP_ADMIN_PASSWORD = (una contrasena nueva)
  APP_CORS_ORIGINS           = http://localhost:4200   (luego agregas la URL de Vercel)
Prueba: https://TU-APP.onrender.com/api/health

## 3) Frontend en Vercel
1. Edita front/src/app/api.ts y pon tu URL de Render en URL_PRODUCCION. Haz commit y push.
2. Vercel -> Add New Project -> repo.
   - Root Directory: front
   - Build Command: npm run build
   - Output Directory: dist/saboriq-frontend/browser

## 4) CORS
Copia la URL de Vercel y en Render pon:
  APP_CORS_ORIGINS = https://TU-APP.vercel.app
(si son varias, separadas por coma, sin barra final)

Nota: el plan gratis de Render se duerme tras 15 min sin uso; la primera peticion tarda ~1 min.
