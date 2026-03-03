# 🅰️ PEC 6 - Frameworks: Servicios en Angular

Esta entrega contiene la resolución de la **PEC 6** de la asignatura **Desarrollo Front-end con Frameworks Javascript** de la UOC. El objetivo de esta práctica es dominar la inyección de dependencias, la creación de Servicios, el manejo de peticiones asíncronas con el `HttpClient` de Angular y la manipulación de flujos de datos mediante la librería reactiva **RxJS**.

## 📂 Estructura del repositorio

El proyecto mantiene la división entre la carga teórica y el desarrollo práctico de la aplicación *e-commerce*:

```text
PEC6/
├── README.md
├── PEC6_Ej_Teor/
│   ├── PEC6_Ej1_respuestas_teoria.md
│   ├── PEC6_Ej2_respuestas_teoria.md
│   └── PEC6_Ej3_respuestas_teoria.md
└── PEC6_Ej_Prac/
    └── ecommerce/
```

## 📝 Descripción de los ejercicios

### 📚 Bloque Teórico (```PEC6_Ej_Teor```)

Resolución estructurada de los conceptos subyacentes de la arquitectura de Angular y RxJS:

* **```Ej1```:** Diferenciación arquitectónica entre Componentes (UI) y Servicios (Lógica de negocio). Análisis profundo de los bloques de construcción de RxJS (```Observable```, ```Subscription```, ```Operators```, ```Subject```, ```Schedulers```) y la ventaja de los Observables sobre las Promesas por su naturaleza perezosa y cancelable.

* **```Ej2```:** Estudio del decorador ```@Injectable``` y las implicaciones de rendimiento y accesibilidad al configurar la propiedad ```providedIn``` (```root```, ```platform```, ```any```).

* **```Ej3```:** Fundamentos de los Interceptores HTTP (middleware) y desglose técnico de una tubería RxJS compleja, analizando cómo el uso combinado de ```debounceTime```, ```distinctUntilChanged``` y ```switchMap``` optimiza las peticiones de búsqueda al backend.

### 💻 Bloque Práctico (```PEC6_Ej_Prac/ecommerce```)

Evolución de la aplicación e-commerce integrando lógica asíncrona y conexión a una API REST externa (```http://localhost:3000/api/articles```).

* **Servicios (```article-service```):** Refactorización para extraer la lógica de datos de los componentes. El servicio utiliza HttpClient para realizar peticiones GET, POST y PATCH al servidor de Node.js provisto.

* **Programación Reactiva:** Los componentes han sido migrados para consumir las APIs de forma reactiva, suscribiéndose a los datos directamente desde el HTML mediante el uso generalizado de la tubería async, evitando fugas de memoria.

* **Buscador en tiempo real:** Implementación de una barra de búsqueda en el ```article-list``` vinculada a un ```FormControl```. Hace uso de operadores RxJS (```debounceTime```, ```distinctUntilChanged```, ```switchMap```) para no saturar la API, realizando peticiones eficientes conforme el usuario teclea.

* **Tuberías personalizadas (Pipes):**

  * **```PricePipe```:** Formatea de forma unificada el precio de los artículos añadiendo el símbolo ```€``` y forzando dos decimales.

  * **```ImagePipe```:** Tubería lógica que evalúa si la URL de la imagen que llega del servidor está vacía, inyectando una imagen por defecto (```/assets/images/article2.jp```g) de forma silenciosa.

## 🚀 Instalación y ejecución

Es necesario arrancar primero el servidor Mock de Node.js (API REST) y posteriormente el cliente Angular.

1. Arrancar el servidor Backend:
   ```bash
   cd server-articles
   npm i
   npm start
   ```
   *(El servidor quedará expuesto en el puerto 3000).*

2. Arrancar la aplicación Angular:
   ```bash
   cd PEC6_Ej_Prac/ecommerce
   npm i
   ng serve
   ```

   La aplicación se abrirá automáticamente en tu navegador por defecto (```http://localhost:4200/```).