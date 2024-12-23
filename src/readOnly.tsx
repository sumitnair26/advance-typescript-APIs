/*
    The Readonly utility type in TypeScript is used to make all properties of a given type read-only. This means that once an object of this type is created, its properties cannot be reassigned. It's particularly useful for defining configuration objects, constants, or any other data structure that should not be modified after initialization.

    ### Important Note

    It's crucial to remember that the `Readonly` utility type enforces immutability at the TypeScript level, which means it's a compile-time feature. JavaScript, which is the output of TypeScript compilation, does not have built-in immutability, so the `Readonly` constraint does not exist at runtime. This distinction is important for understanding the limitations of `Readonly` and recognizing that it's a tool for improving code quality and safety during development.
*/

interface Config {
    endpoint: string;
    apiKey: string;
  }

  const config: Readonly<Config> = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
  };