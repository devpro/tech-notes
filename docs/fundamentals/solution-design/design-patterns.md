# Design Patterns

This document summarizes key software design patterns, architectural principles, and related concepts for building robust applications.

## Creational Patterns

### Inversion of Control & Dependency Injection

Inversion of Control (IoC) is a design principle where the control flow of a program is inverted, and Dependency Injection (DI) is a technique to implement IoC by passing dependencies to objects rather than creating them internally.

💡 This promotes loose coupling and testability.

📝 [Martin Fowler - Inversion of Control Containers and the Dependency Injection pattern](https://www.martinfowler.com/articles/injection.html) (2004)

## Architectural Patterns

### Hexagonal Architecture

Also known as Ports and Adapters, this architecture isolates business logic from external systems (e.g., UI, databases) through well-defined interfaces (ports) and implementations (adapters).
It enhances modularity and testability.

💡 Ideal for microservices and systems requiring flexibility in swapping out external dependencies.

📝 Read more:

- [Fideloper - Hexagonal Architecture](https://fideloper.com/hexagonal-architecture)
- FR [Octo - Architecture Hexagonale](https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation/)

## Data Access Patterns

### Active Record

An object that wraps a row in a database table, encapsulating both data and behavior (e.g., CRUD operations).
Common in ORMs like Ruby on Rails.

💡 Simple for small applications but may couple business logic too tightly to the database.

📝 [Martin Fowler - Active Record](https://martinfowler.com/eaaCatalog/activeRecord.html) (2003)

### Table Data Gateway

An object that acts as a gateway to a database table, providing a simple interface for all SQL operations on that table.

💡 Useful for encapsulating database access logic, especially in systems with complex queries.

📝 [Martin Fowler - Table Data Gateway](https://martinfowler.com/eaaCatalog/tableDataGateway.html) (2003)

### Row Data Gateway

An object that represents a single row in a database table, acting as a data holder without business logic.

💡 Works well with Table Data Gateway for separating data access and manipulation.

📝 [Martin Fowler - Row Data Gateway](https://martinfowler.com/eaaCatalog/rowDataGateway.html)

## Feature Flags

Feature flags enable continuous deployment by allowing new functionality to be deployed but toggled on/off without redeployment.
They support progressive exposure but come with management overhead.

💡 Useful for A/B testing, canary releases, and managing feature rollouts in production.

[Willy-Peter Schaub - What's the cost of feature flags?](https://opensource.com/article/18/7/does-progressive-exposure-really-come-cost) (2018)

## Communication Protocols

### REST

Representational State Transfer (REST) is a widely-used architectural style for designing networked applications, relying on stateless, client-server communication via HTTP.

💡 As of 2025, REST remains the dominant choice for APIs due to its simplicity and compatibility.

### gRPC

A high-performance, open-source framework for remote procedure calls, using HTTP/2 and Protocol Buffers.
It's optimized for microservices and low-latency communication.

💡 gRPC is gaining traction for new microservices due to its performance benefits over REST.

📝 Read more:

- [Gigi Sayfan - REST vs. gRPC: Battle of the APIs](https://code.tutsplus.com/tutorials/rest-vs-grpc-battle-of-the-apis--cms-30711) (2023)
- [Microsoft - Compare gRPC services with HTTP APIs](https://learn.microsoft.com/en-us/aspnet/core/grpc/comparison) (2024)

## Authentication

Mechanisms to verify user or system identity, often involving tokens for secure access.

### Refresh Tokens

Tokens used to obtain new access tokens without re-authenticating, improving security and user experience.

💡 Essential for secure API access, especially in distributed systems.

📝 [Auth0 - Understanding Refresh Tokens](https://auth0.com/learn/refresh-tokens/)

## Additional Resources

- [Gang of Four Design Patterns](https://springframework.guru/gang-of-four-design-patterns/): Comprehensive guide to 23 classic design patterns
