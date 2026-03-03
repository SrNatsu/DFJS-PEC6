# Ejercicio 1

## Crea una carpeta ```PEC6_Ej_Teor```, dentro de esta carpeta crea un documento markdown que tenga como nombre ```PEC6_Ej1_respuestas_teoria.md``` y responde a cada una de las siguientes preguntas:

### ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)

Un **componente** es la unidad fundamental y reutilizable de la interfaz de usuario, compuesta por una clase TypeScript, una plantilla HTML y estilos CSS. Se define con el decorador ```@Component``` y permite crear aplicaciones modulares, integrando la interfaz en piezas independientes, como menús, formularios o tarjetas.

Un **servicio** es una clase con un propósito específico, utilizada para centralizar la lógica de negocio, gestionar datos y compartir funcionalidades reutilizables entre diferentes componentes.

### ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador ```@Injectable```?

La **inyección de dependencias** es un patrón de diseño fundamental que permite a componentes, directivas o servicios recibir automáticamente las dependencias que necesitan desde una fuente externa.

El decorador **```@Injectable```** es una función que marca una clase de TypeScript como un servicio disponible para ser inyectado como dependencia en componentes, directias o servicios.

### Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:

* **```Observable```:** Estructura de datos reactive, proveniente de la librería RxJS, que maneja flujos de datos asíncronos y eventos a lo largo del tiempo, permitiendo emitir cero, uno o múltiples valores.

* **```Subscription```:** Objeto devuelto al suscribirse a un Observable de RxJS. Representa la ejecución activa de ese observable, permitiendo gestionar el flujo de datos, cancelar la escucha para evitar fugas de memoria, y gestionar el estado del observador.

* **```Operators```:** Función pura que permite manipular, transformar, filtrar o combinar flujos de datos asíncronos de forma declarativa.

* **```Subject```:** Tipo especial de observablq ue actúa tanto de emisor (Observer) como de receptor (Observable), permitiendo la multidifusión de datos a múltiples suscriptores simultáneamente.

* **```Schedulers```:** Componente que controla cuándo se inicia una suscripción y cuándo se emiten las notifiaciones de un Observable.

### ¿Cuál es la diferencia entre promesas y observables?

Una promesa maneja un único evento asíncrono y devuelve un solo valor. Por otro lado, un observable maneja una secuencia de múltiples valores a lo largo del tiempo. Además, los observables son cancelables y perezosos, ejecutándose solo al suscribirse.

### ¿Cuál es la función de la tubería (pipe) ```async```?

Es una herramienta incorporada que se suscribe automáticamente a observables o promesas y devuelve el último valor emitido, actualizando la vista automáticamente.