
# NEST JS   

- *Framework*
- *Scalable applications, monolithic or microservices*
- *Modular structure*
- *TypeScript support*

## NestJS  vs Express.js
**Structure and organization**: NestJS offers a modular architecture, which facilitates the organization and management of complex applications. Express.js is minimalist and can become messy in larger projects.

**TypeScript support**: NestJS is built with TypeScript, allowing for static type checking and better support for development. While TypeScript can be used with Express.js, it is not natively supported.

**Inversion of control**: NestJS uses dependency injection, which simplifies testing and dependency management.

**Ecosystem and tools**: NestJS comes with integrations for various libraries and tools, such as GraphQL and WebSockets, while Express.js requires more manual setup for the same functionalities.

**Higher productivity**: NestJS can accelerate development due to its structure and built-in features, whereas Express.js may require more manual configuration.
## Decorators
According to the [design pattern](https://refactoring.guru/design-patterns/decorator), decorators are patterns that allow the addition of new functionalities or behaviors to existing objects without modifying their original code.

## Modules
**@Module()**
![Modules](https://docs.nestjs.com/assets/Modules_1.png)
**Modules** in NestJS are used to organize code into logical units, facilitating the structure of the application.

## Controllers
**@Controller()**
![Controller](https://docs.nestjs.com/assets/Controllers_1.png)

**Controller** is used for request handling, input validation, response processing, and route definition.

## Providers
![Providers](https://docs.nestjs.com/assets/Components_1.png)

**Dependency injection**
![Dependency](https://ucarecdn.com/2b7dd4bc-641b-4e9a-b6d6-ffbf8e454869/)

## Pipes
![Pipes](https://docs.nestjs.com/assets/Pipe_1.png)
Pipes have two typical use cases:

-  **transformation**: transform input data to the desired form (e.g., from string to integer)
-  **validation**: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception

## Guards
![Guards](https://docs.nestjs.com/assets/Guards_1.png)

**Guards** are activated when a request reaches the route and determine access, while **middleware** processes the request before it reaches the route.

## Interceptors
![Interceptors](https://docs.nestjs.com/assets/Interceptors_1.png)

**Interceptors** are used for request manipulation, response processing, logging, adding shared logic, and performance optimization.
