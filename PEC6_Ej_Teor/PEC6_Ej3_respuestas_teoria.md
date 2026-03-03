# Ejercicio 3

## En la carpeta ```PEC6_Ej_Teor```, crea un fichero Markdown que tenga como nombre ```PEC6_Ej3_respuestas_teoria.md``` y responde a cada uno de los siguientes puntos:

### ¿Qué son los interceptores?

Un **interceptor** es un servicio o función que implementa ```HttpInterceptor``` para interceptar, manipular o gestionar solicitudes y respuestas HTTP de manera centralizada. Actúa como middleware, permitiendo modificar cabeceras, gestionar errores, añadir tokens de autenticación o medir tiempos de carga globalmente.

### Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:
```typescript
this.wines$ = this.searchSubject  // Accede al Subject searchSubject
 .startWith(this.searchTerm)  // Operador de RxJS que emite un valor inicial específico al suscribirse
  .debounceTime(300)  // Operador de RxJS que retrasa la emisión de valores de un Observable
  .distinctUntilChanged() // Operador de RxJS que filtra un Observable para emitir solo valores distintos al anterior
  .merge(this.reloadProductsList) // Operador de RxJS que une múltiples flujos de datos en uno solo
  .switchMap((query) => // Operador de RxJS que mapea cada emisión de un observable fuente a un nuevo observable, cancelando automáticamente el anterior si llega uno nuevo
   this.wineService.getWine(this.searchTerm)); // Recupera el objeto que coincide con el término de búsqueda
```

El código lo usaría para poder recuperar los vinos que coincidan con el término de búsqueda en un periodo de tiempo concreto, siempre y cuando el término de búsqueda se modifique.