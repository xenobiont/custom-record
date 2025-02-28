# Task

Built-in `Record` type in Typescript takes 2 type arguments (union type and other type) and constructs an object type, which keys are union type members, and value type is taken from second argument.

Record<'foo' | 'bar' | 'baz', boolean>;

  <!--
  {
    foo: boolean,
    bar: boolean,
    baz: boolean
  }
   -->

Create a custom implementation of Record type
