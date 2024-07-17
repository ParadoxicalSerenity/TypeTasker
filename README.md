# TypeTasker

![NPM Version](https://img.shields.io/npm/v/typetasker)
![NPM Downloads](https://img.shields.io/npm/dw/typeTasker)
![NPM Type Definitions](https://img.shields.io/npm/types/typetasker)
![NPM License](https://img.shields.io/npm/l/typetasker)

TypeTasker is a Typescript first task runner.

## Installation

Install typetasker as a development dependency with npm

```bash
  npm i typetasker -D
```

## Documentation

[Documentation](https://github.com/ParadoxicalSerenity/TypeTasker/wiki) - Will not really be up to date or correct till V1 as I don't plan on maintaining docs in this stage of development.

## Features

- Simple API.
- Built with Typescript for Typescript.
- Still works great with Javascript.
- Simple Task Running.

### Planned features

See [issues](https://github.com/ParadoxicalSerenity/TypeTasker/issues).

## Example

```typescript
import { TypeTasker, TypeTaskerCallback } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "debug" },
});

const test_one = new TypeTaskerCallback({
  name: "test_one",
  dependsOn: [],
  callback: () => {},
});
const test_two = new TypeTaskerCallback({
  name: "test_two",
  dependsOn: [test_one],
  callback: () => {},
});
const test_three = new TypeTaskerCallback({
  name: "test_three",
  dependsOn: [test_one],
  callback: () => {},
});
const defaultTask = new TypeTaskerCallback({
  name: "def",
  dependsOn: [test_one, test_three, test_two],
  callback: () => {},
});

typeTasker.run(defaultTask);
```

## Why another Task Runner?

I started working on TypeTasker simply because I simply don't like any other existing options that I've come across for one reason or another. It's not perfect but it works great for what I need.

## Is the API stable?

Not really, I'm still in the early stages of figuring out how I want this to work long term so anything before version 1.0.0 is expected to have breaking changes almost every release.

Update: Since version 0.5.0 there should be far less breaking changes but what I said above still applies.

## License

License under under the [MIT](https://choosealicense.com/licenses/mit/) license.
