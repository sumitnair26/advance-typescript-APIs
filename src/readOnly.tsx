/*
    The Readonly utility type in TypeScript is used to make all properties of a given type read-only. This means that once an object of this type is created, its properties cannot be reassigned. It's particularly useful for defining configuration objects, constants, or any other data structure that should not be modified after initialization.
*/

interface Config {
    endpoint: string;
    apiKey: string;
  }

  const config: Readonly<Config> = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
  };