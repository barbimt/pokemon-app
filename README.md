# ![pokemonIcon](https://user-images.githubusercontent.com/82407633/212893061-6b17680a-dfb9-40c7-a6b7-1ba756e33d2d.png) Pokemon App

[![Deploy in Vercel](https://img.shields.io/badge/-DEPLOY-363b81)](https://pokemon-app-peach.vercel.app//) ![cursor](https://user-images.githubusercontent.com/82407633/181073703-2ee381cc-2a8c-4504-ba0f-51d0027cb4bf.png)

-------------

Desktop | Mobile
---------|---------
<image src="https://user-images.githubusercontent.com/82407633/212900111-f2d2e58d-bf54-4d5a-ac1e-a5a305af4b7c.gif" /> | <image src="https://user-images.githubusercontent.com/82407633/212924991-06aec6e5-aea5-4eea-aa63-a75dd3e9b183.gif" />


-------------

## ✨Proceso del desarrollo de la App✨

- Comencé investigando la documentación de la [Poke API](https://pokeapi.co/docs/v2) y luego creé las interfaces con TypeScript para utlizar la información obtenida desde los endpoints. 
- Utilicé TypeScript en el proyecto ya que es una buena práctica para asegurar que la variable siempre tenga el mismo propósito, además tiene un potencial de detección de errores durante el desarrollo del proyecto y esto me ayudó a un desarrollo más ágil y seguro.
- Decidí separar la lógida de las vistas, es decir, los componentes de sus funcionalidades, aplicando el principio SOLID de responsabilidad única en la mayoría de ellos. 
- Utilicé Axios para realizar las solicitudes al servidor y recibir las respuestas, me pareció una alternativa de fácil implementación. 
- Además utilicé LocalStorage para persistir los pokemons favoritos y así poder mantener la información al recargar la página.
- Usé CSS para estilar los componentes y creé variables CSS para la paleta de colores.
- Añadí la posibilidad de cambiar la aplicación a modo oscuro, utilizando un Context, en el que se encuentra su estado y la lógica para cambiarlo. Con esto pude crear un componente "ToggleTheme" en el al hacer switch podemos llamar a la función y cambiar toda la página a modo oscuro o al revés. 
- Creé un componente para paginar los resultados de la API con un Context en el que se encuentra la lógica de este. 
- También creé un componente para poder cambiar el modo de visualización de la página, en Lista o Grid. La lógica de este componente está abstraida dentro de un Context.
- Realicé Responsive Design para Mobile, Tablet y Desktop, utilizando media queries y creé un customHook para validar las dimensiones de la página a los componentes que deberían ajustar su tamaño.
- Utilicé React Context para crear estados y poder compartirlos en toda la aplicación.
- Realicé tests unitarios en algunos componentes para validar la funcionalidad de ellos, creando mocks, que son imitaciones que simulan el comportamiento de los componentes reales. Utilicé JEST y React Testing Library ya que al crear la aplicación utilizando CRA(create-react-app) ya tenía por defecto todo configurado y listo para usarlos. 
