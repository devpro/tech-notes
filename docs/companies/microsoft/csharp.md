# C# language

* What is the difference between `const` and `readonly` in C#?

<details>
  <summary>Answer</summary>

  In C#, both the `const` and `readonly` keywords are used to declare constants, but they have some differences in terms of their behavior and usage.

  The `const` keyword is used to declare a compile-time constant.

    * Value: The value of a `const` variable is evaluated at compile-time and cannot be changed during runtime. It must be a constant expression, such as a literal value or a result of an expression composed of other constant values.
    * Modifier: `const` variables are implicitly static, which means they belong to the type itself rather than any instance of the type.
    Initialization: `const` variables must be assigned a value at the time of declaration.
    * Usage: `const` can be used with primitive types, enums, and user-defined types. They are typically used for values that are not expected to change over time, such as mathematical constants or configuration values.
    * Example:

      ```csharp
      public const int MaxValue = 100;
      ```

  The `readonly` keyword is used to declare a runtime constant, which means it can be assigned a value either at the time of declaration or within the constructor of the containing type.

    * Value: The value of a `readonly` variable can be assigned at runtime, but once assigned, it cannot be changed. It can be a result of a calculation or retrieved from a database, for example.
    * Modifier: `readonly` variables can be either instance-level or static. For instance-level variables, each instance of the type can have a different value, while static `readonly` variables have a single value shared across all instances.
    * Initialization: `readonly` variables can be assigned a value at the time of declaration or within the constructor(s) of the containing type. After that, their value cannot be modified.
    * Usage: `readonly` is often used when a value needs to be calculated or set at runtime but remains constant throughout the lifetime of the object or type.
    * Example:

      ```csharp
      public readonly DateTime CreatedAt = DateTime.Now;
      ```
  
  To summarize, `const` is evaluated at compile-time, has a fixed value, and is implicitly static, while `readonly` allows for runtime initialization and has a value that remains constant after initialization.
</details>
