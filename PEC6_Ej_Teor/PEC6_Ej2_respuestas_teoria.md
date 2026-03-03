# Registra el servicio correctamente usando el parámetro providedIn, en la carpeta ```PEC6_Ej_Teor``` crea ```PEC6_Ej2_respuestas_teoria.md``` y responde:

## ¿Cuál es la diferencia entre definir un servicio usando el decorador ```@Injectable``` o ```@NgModule```?

**```@Injectable```** se utiliza para marcar clases de servicio que pueden ser inyectadas, mientras que **```@NgModule```** se utiliza para agrupar y configurar bloques de código.

## ¿Qué otras opciones admiten el decorador ```@Injectable``` para la propiedad ```ProvidedIn```? ¿Para qué sirven las otras configuraciones?

* **```root```:** Configuración que registra un servicio en el inyector raíz de la aplicación, convirtiéndolo en un Singleton disponible globalmente.

* **```platform```:** Configuración que registra un servicio en el inyector de la plataforma, convirtiéndolo en un singleton único compartido entre mútliples aplicaciones Angular que corren en la misma página web.

* **```any```:** Configuración que crea una instancia única de un servicio para todos los módulos de carga inmediata, pero crea una instancia separada y nueva para cada módulo de carga diferida que importe el servicio.