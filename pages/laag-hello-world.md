# Hello, World!

Hello, World!

Before you start writing any complicated programs, you'll need to get a simple program to work first. Let's take a look at this first program: *Hello, World!* and see a few examples in popular languages.

A “Hello, world” program is any simple program that you can use to test if your programming environment is working properly. It can be anything you like, a … or even a …, but the convention is to just print something like “Hello, World!” to the screen.

*Hello, World!* programs are simple enough, yet robust enough to show whether everything is in working order by giving you some output to inspect.

In addition to testing your environment, *Hello, World!* programs are a great first program for people new to a particular language—or programming in general.

But why *Hello, World!*?
…

Let's take a look at some examples in popular languages.

## JavaScript

In JavaScript, we call the `log` method attached to the `console` object with the argument `“Hello, World!”`.

```jsx
console.log("Hello, World!");
```

## Python

With Python, it is as simple as a call to `print`  with your desired text.

```python
print("Hello, World!")
```

## C++

As you’ll find with most programs, C++ will tend to have a bit more code to complete a similar task. A detailed explanation is given below.

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, World!" << std::endl;

    return 0;
}
```

We first need to tell the preprocessor to paste in the contents of the file `iostream` , which contains the ~~references~~ to function for input and output—i.e. printing to the console.

We then create a function for the entry point of our program—where it is that our program starts executing when we run it—called `main` . This function declaration for `main()`  takes no argument but has a return value of type integer that signifies a status code for our program to send back to the operating system after it has finished running. 

Next is the definition of `main()` —denoted by the opening and closing braces (`{ }` ). Within this block we pass the `cout`  object (that is within the `std`  namespace) the arguments `“Hello, World!”` and `endl` (so that proceeding text will be on a newline) via the `<<` input redirection operator. 

Lastly, we `return 0`  from the `main()` function, letting the operating system know the program has finish with no errors.

## Rust

Similarly with C++, Rust has a little more, albeit less than C++, ado with your first program.

```rust
fn main() {
    println!("Hello, World!");
}
```

We create our program entry point and main function, `main()` , using the `fn` keyword. 

The next line is calls to `println`—for “print line”—with the desired parameter, here we use `Hello, World!`. 

It should be noted that, in Rust, the exclamation mark (`!`) embedded in the `println` tells us _.

## Bash?

```
#! /usr/bin/bash

echo "Hello, World!"
```

Next, we’ll take a look at how you can begin running or executing your programs.

[NEXT GUIDE--dead]()
