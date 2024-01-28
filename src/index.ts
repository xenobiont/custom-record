type CustomRecord<K extends string | number | symbol, T> = {
  [P in K]: T;
};

type Foo = "foo" | "bar" | "baz";

type Result = CustomRecord<Foo, boolean>;
