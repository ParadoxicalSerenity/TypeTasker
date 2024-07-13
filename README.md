# TypeTasker

![NPM Version](https://img.shields.io/npm/v/typetasker)
![NPM Downloads](https://img.shields.io/npm/dw/typeTasker)
![NPM Type Definitions](https://img.shields.io/npm/types/typetasker)
![NPM License](https://img.shields.io/npm/l/typetasker)

Typescript first task runner.

## Installation

Install typetasker as a development dependency with npm

```bash
  npm i typetasker -D
```

## Documentation

[Documentation](https://github.com/ParadoxicalSerenity/TypeTasker/wiki)

## Example
```typescript
import { TypeTasker, EmptyRunner } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "verbose" },
});

const test_one = typeTasker.createTask({
  name: "test_one",
  runner: new EmptyRunner(),
  dependsOn: [],
});
const test_two = typeTasker.createTask({
  name: "test_two",
  runner: new EmptyRunner(),
  dependsOn: [test_one],
});
const test_three = typeTasker.createTask({
  name: "test_three",
  runner: new EmptyRunner(),
  dependsOn: [test_two, test_one],
});
const test_four = typeTasker.createTask({
  name: "test_four",
  runner: new EmptyRunner(),
  dependsOn: [test_two, test_one, test_three],
});

typeTasker.run("test_four");
```

## Why another Task Runner?

I started working on TypeTasker simply because I simply don't like any other existing options that I've come across for one reason or another.

## Is the API stable?

Not really, I'm still in the early stages of figuring out how I want this to work long term so anything before version 1.0.0 is expected to have breaking changes almost every release.

## License

License under under the [MIT](https://choosealicense.com/licenses/mit/) license.
