# Computer Science

# Preface

# Table of Contents

[[TOC]]

# Introduction

## What This Book Is About

## What This Book Is NOT About

## Motivation

## Who Is This Book For?

## How To Read This Book

## Chapter Overview

## End Content

Following every section, you will find some combination of sub-sections titled Exercises, Projects and/or Research. These sections are to test yourself and interact with the material more deeply. They can be used as follows:

### Supplementary Matrial

### Exercises

Exercises: Like any textbook these are your traditional exercises or problem sets. They are labeled with varying difficulty and will generally have a well-defined answer or at least one that can be found by reading this book. Some exercises will take longer than others to complete, but an advanced student shouldn't find themselves spending too much time to come up with an adequate answer at least. Solutions* to exercises are listed on the book's website. (Not all solutions are definite, or the only possible answers.)

### Research

Research: Questions in this section follow a similar pattern to "Exercises" except they are completely open-ended, and you are almost guaranteed not to be able to find an answer in this book (at least at that point in reading). This is your opportunity to practice a Computer Scientist's greatest skill: research. 

### Projects

Projects: Longer and more in-depth than the exercises, Projects will generally take a reader a considerable amount of time to complete. They are generally left open-ended to let your imagination turn them into whatever you like, but some are labeled either solved or verifiable. Projects labeled solved have source code listed on the book's website, while verifiable projects mean you can upload your solution on the book's website to be tested for completeness.

## Notation

`C-x` means `CONTROL+x`
`M-x` means `ALT+x`

With commands and other _, things wrapped in:
- square brackets, `[...]`, are optional.
- chevrons, `<...>`, are required, but variable.

All other text is meant to be verbatim, unless otherwise obvious (such as personalized strings).

# Introduction to Computer Science

## Introduction

## Getting Started

## A Brief History of Computer Science

## The Field of Computer Science

# Basics of Computing

## Introduction

## Number Systems

### Introduction

To differentiate numbers of different system, we will often prefix them as you will encounter in the next few guides.

### Decimal

Decimal - base 10 - rarely comes with a prefix.

### Binary

`0b`

### Hexadecimal

`0x`

### Base Conversions

### Exercises

1. Express the decimal number 245 in Binary, and Hexadecimal.
2. Another common number system is Octal -- base 8. Convert the following decimal numbers to Octal. Use the prefix `0o`:
    - 4
    - 9
    - 256
    - 2027

### Research

1. Find another number system apart from the ones mentioned in this section and try to answer the following questions: 
    - What characters are used to represent its values? 
    - What are the use cases for it? 
2. As explained, most of the common number systems have indicators to distinguish them from numbers of other systems, how is Octal represented in this manner?

# Introduction to Computer Programming

## Introduction

## Programming Basics

### Introduction

languages used
- introduce a wide variety of languages and syntax, but most embedded examples will rely on C/C++ (which is taught fully in the next guide) for consistency and, because of how explicit their code is, they provide a deeper understanding than many other languages such as Python or JavaScript might. That is not to say it is a better language because of that -- in some ways this can be a hinderance, for example when speed and quick readability of code is paramount.

notation
faq

#### What is Programming?

#### Why Learn Programming?

### Hello, World!

Hello, World!

Before you start writing any complicated programs, you'll need to get a simple program to work first. Let's take a look at this first program: _Hello, World!_ and see a few examples in popular languages.

A “Hello, world” program is any simple program that you can use to test uf your programming environment is working properly. It can be anything you like, but the convention is to just print something like “Hello, World!” to the screen.

_Hello, World!_ programs are simple enough, yet robust enough to show whether everything is in working order by giving you some output to inspect.

In addition to testing your environment, _Hello, World!_ programs are a great first program for people new to a particular language—or programming in general.

But why _Hello, World!_?

Its use dates back to the mid 70's (perhaps earlier) with the advent of the C programming language. “Hello, world” was used as an example in Brian Kernighan's [Programming in C: A Tutorial](https://www.bell-labs.com/usr/dmr/www/ctut.pdf), and the popularity of his and Dennis Ritchie's The C Programming Language made it so Hello, World! seen as standard by millions of programmers.

#### Examples

Let's take a look at some examples in popular languages. Read through the explanations, but don't expect to understand everything. As you progress through these courses all of this will reveal itself to you.

##### C++

As you'll find with most programs, C++ will tend to have a bit more code to complete a similar task. A detailed explanation is given below.

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

We first need to tell the preprocessor to paste in the contents of the file `iostream`, which contains declarations for input and output functionality—i.e. printing to the console.

We then create a function for the entry point of our program—where it is that our program starts executing when we run it—called `main`. This function declaration for `main()` takes no argument but has a return value of type integer that signifies a status code for our program to send back to the operating system after it has finished running.

Next is the definition of `main()` —denoted by the opening and closing braces (`{ }`). Within this block we pass the `cout` object (that is within the `std` namespace) the arguments `“Hello, World!”` and `endl` (so that proceeding text will be on a newline) via the `<<` input redirection operator.

Lastly, we `return 0` from the `main()` function, letting the operating system know the program has finish with no errors.

##### JavaScript

In JavaScript, we call the `log` method attached to the `console` object with the argument `“Hello, World!”`.

```jsx
console.log("Hello, World!");
```

##### Python

With Python, it is as simple as a call to `print` with your desired text.

```python
print("Hello, World!")
```

#### More Examples

In this section, just take a glance at each individual code. Don't worry about the specifics, as its far too much to think about so early in your journey as a programmer. Just note some differences you see, and remember the goal: Print/output `Hello, World!`.

##### Racket
##### Prolog
##### Bash
##### Java

```java
public class HelloWorld {
    public static void main(string[] args) { 
        System.out.println("Hello, World!");
    }
}
```

##### C

```c
#include <stdio.h>

int main()
{
    printf("Hello, World!\n");
}
```

##### Lua

```lua
print("Hello, World!")
```

##### Fortran

##### Go

```go
package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

#### Supplementary Material

#### Exercises

1. You've seen how to write a Hello, World! program in 3 programming languages, how about a 4th? Find another language, and research and type the code for that language.
2. Pick one of the languages above and rewrite **from memory** the program for Hello, World. This might not be easy; do your best to have something before referencing the given code.
3. Get at least one of these programs up and running. See the previous section on [Running Programs](#writing-and-running-programs) if you are having troubles.
4. In your desired language, change the phrase “Hello, World!” to something else. For example, “Greetings, Earth!” or “This program works!”
5. Explain, in your own words—to the best of your ability—the intent of each line, each word and each character of one of the Hello, World! programs look at. Be thourough!

#### Resources

### Writing and Running Programs

### Types of Languages

imperative
functional
logical

compiled
interpreted
vm

weak vs strong typed
...

### Variables and Data Types

Variables

Literals

Data Types

Integers
```c++
int myAge = 72;
```

Floating Point Values
```c++
double pi = 3.14159;
```

Boolean
```c++
bool learning = true;
```

Characters
```c++
char letter = 'N';
```

Strings
```c++
std::string sentence = "A star-ing of characters.";
```

Arrays
```c++
int numbers[] = { 4, 8, 15, 16, 23, 42 };
```

User-Defined Types

User-defined types let you build types of your own, mixing and matching logic involving exisiting types (such as above), to simplify details or bundle data together.

The usage of a User-Defined type might look something like this, where MyType is a type you would have to create yourself.

```cpp
MyType something;
```

User defined types are explained in detail in [Classes and Objects](#classes-and-objects).

literals
default initialization
constants: const / final
inferred types vs explicit types
different widths

### Operators

#### Exercises

1. You've just now learned about data types and operators, and in [Hello, World!](#hello-world) were introduced to how to print something to the screen. Combine these skills to print the result of some arithmetic operations.

### Blocks, Statements and Expressions

Scope

### Conditional Logic

if
if else
else

switch

### Loops

while 
do while

for
for each

### Functions

### Classes and Objects

class
struct / record

### Coding Style

c style? lisp style? pythonic?

A Word On Jump Statements (break, continue, goto, return, jump, ...)

Conventions
- whitespace
- nesting
- character case

Case of variables and types
- camel case
- pascal case
- snake case
- kebab case
- const case
- c case

Paradigms

### Section Review

#### Research

1. Find a new language and create the equivalent of a "Hello, World" program in that language. Then, answer some of the following questions:
    - What style does this language use?
    - What are the benefits of using this language over the ones learned previously?
    - For what purpose was this language developed?

    A few unconventional languages to consider:
    - common lisp
    - vimscript
    - prolog

## Foundational C++

### Introduction

At this point you should have a general understanding of basic programming concepts and be exposed to some syntax. This guide will serves as a quick review of these concepts by demonstrating how C++ specifically does things, and aims to give students a strong programming foundation for them to move on to other languages or excel further in C/C++.

As introduced in programming basics we will be - temporarily - using Microsoft's _Visual Studio Code_ and its embedded terminal to write and run our programs.

### Deconstructed "Hello, World!"

If You went through the [introductory series on programming], this ~Hello, World!~ program might look familiar to you. But though it's familiar, it still might not make much sense beyond what the output should be. Let's spend a few minutes deconstructing what we see.

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, World!" << '\n';

    return 0;
}
```

```cpp
#include <iostream>
```

We open the first line with a =#include= (read as "hash-include") of the =iostream= header file.

The hash denotes a preprocessor directive. That is, these lines are run before the compiler compiles your code. The =include= literally means ~paste the contents of file x into this file~. So, on this line we are pasting the all contents of the =iostream= file into this file when we compile our code.

The angle brackets say where the file is located for the preprocessor to look first for your file. For now, just think of =<...>= as for system libraries, when defining your own use ="..."=.

```cpp
#include "MyFile.h"
```

Header files are just normal files but they contain all bits of code to say "this code exists in another file that I've defined somewhere else". This will be explained in detail soon, but essentially this is done so that C++ knows our functions or classes (etc.) exist, but we can define them somewhere else so that we aren't pasting all of their contents here, just their /names/.

The =iostream= header file is a /standard library/ header file that contains all the useful declarations for working with input and output streams (hence the =io= and =stream=).

Moving on to line 3 we have our =main= function.

```cpp
int main()
```

This is the standard starting point of your program; when you run your program, it will begin executing line-by-line starting here. =int= denotes the return type where =return 0= on line 7 means executed successfully - without error.

This next couple of lines do all the fun stuff.

```cpp
std::cout << "Hello, World!" << '\n';
```

We open up our function block on line 4 with ={ ... }= and pass the desired output text to the =cout= object defined in the =std=, standard library, namespace.

(Namespace are essentially tools to define named scopes so you can differentiate between multiple resources that might have the same name, and are discussed in detail later on)

=cout= allows you to put text to the console. It, and its counterpart =cin= will be used extensively in your early programs.

Lastly, =<<= is defined as the /stream insertion operator/ which is really just a fancy function call to pass text to =cout=.

Notice how strings of characters are defined in double quotes (="= ) and single characters are wrapped in single quotes (='=), like the escaped newline character, =\n=.

Lastly, always remember to end your statements in C++ with a semicolon (=;=), and you now understand everything you need to begin writing effective programs.

Try playing around with this starter file to get it to print various string of text, on multiple lines.

### Overview of Syntax

### Compiling with gcc

### Multi-File Programs

### Working with Libraries

# The Developer Environment

## Introduction

We now transition to learning a set of fundamental tools for developers and computer scientists.

Many of the utilities learned here may seem overly complex or outdated. In some cases this may be true. Still, they are utilitized heavily in the real world, and because of their complexity, it will make learning simpler tools all the more simple for you in the future, with the added benefit of gaining an understanding of how you might accomplish more intensive tasks if you need to.

Our first two sections, gcc and the command line, we've already encountered in our foundational guide to C/C++. In those sections we will expand on this learning, providing you with the skills to do anything beyond just running memorized commands.

## The Command Line

## Development Tools

### Introduction

### Logging and Debugging

- Print-Line Debugging
- Debuggin with gdb
- Logging

### Formatting and Analyzing Code

### Version Control with Git

#### Introduction

#### What is Git?

#### Why Use Git?

#### Installing Git

#### Core Concepts

- Git vs GitHub
- working directory
- staging area
- remote

#### Common Workflows

##### Starting a New Project

##### Working With Existing Code

##### Cloning Someone Else's Project

#### Working With Remotes

- Cloning
- Access and SSH
- Fetching Changes
- Pulling Changes
- Pushing Changes

#### Branches

#### Supplementary Material

- Pro Git

### Documenting with Markdown

### Building Projects with Make and CMake

## Editors and IDEs

### Introduction

### Overview of Options

#### VS Code

Beloved by Web Developers and hobbyist alike, VSCode is a top 3 editor of mine. It is very simple and light to download but is infinitely extensible with Extensions from 3rd party creators. However, this is both a blessing and a curse; because of this you can configure it to do just about anything but with many languages you might have trouble with the initial configuration since it is essentially not far off from a fancy Notepad or TextEdit without extensions.

#### Visual Studio

#### Jetbrains IDE Suite

You'll see their products listed frequently below; JetBrains makes a lot of really great products that work as they should out of the box. However, each tool is very narrow to a particular language and seasoned programmers often say they prefer alternatives. But with that being said, they are excellent for beginners (really the only IDEs I would comfortably recommend to people just starting out), have a ton of functionality you don't get with a plain editor, and if and when you decide to try another language, they have a large suite of editors that work well with other languages.

#### Vim

It's not an easy feat, but if you dare, Vim is one of the most incredible tools you will ever utilize as a programmer. It is not just a text editor but a productivity tool and _. Even when I'm not using Vim itself, I have configured all of my editors to emulate its command mode. Interestingly enough, if you're on MacOS or Linux, theres a good chance the command line version is installed on your system already. For more info about Vim see the [official Vim website] or my [complete guide to Vim for beginners].

#### Emacs

Another excellent choice but, again, another difficult one to start with. Like Vim, Emacs is an exceptional editor and much like VSCode it is infinitely extensible; but even more so. These guides themselves were, for the most part, all written in Emacs. A more gentle introduction might be a distribution such as [Doom Emacs] or [Spacemacs], but even then you'll be spending more time figuring out your editor instead of learning to program.

#### Others

- Apple XCode
- IDLE for Python

### Visual Studio Code

### Visual Studio

### Jetbrains IDE Suite

### Vim

#### Introduction

##### What Is Vim?

Vim is a powerful text editor and key binding set for working with text files. It has been around since the 1970s and is widely used by developers and hobbyist to date.

##### Why Use Vim?

- Speed and Efficiency
- Reduced RSI
- Powerful Tool-set
- Vim can be emulated in just about every editor, whether via a plugin or built-in feature, so you can take your skills wherever they lead you.

Essentially, if there is some task you wish to do within a file: Vim can do it, and likely more efficiently than other editors or tools available.

##### How to Get Vim

- Vim
- In Your Favorite editor (VS Code, Jetbrains)
- NeoVim
- In Emacs

##### How to Learn Vim

- There is never one way to do a thing.
- Memorize with your muscles, not your brain. That is: practice. When writing this guide, it was hard to think of commands to talk about because I didn't consciously remember which they were: I just use them automatically. When you learn a new skill use it, don't memorize it, and soon Vim commands will be as natural as using the keyboard.

#### Fundamental Concepts

##### Touch Typing

Touch typing isn't a requirement to learn Vim, but it will certainly make things easier.

##### Modes

- NORMAL
- INSERT
- VISUAL
- EX (Command Mode)
- More

##### Commands

##### Combining Commands

#### Getting Started

From the command line run: `vim [filename]`, or open the app on your desktop, if it exists.

After making changes, you can save and quit by typing `:wq` followed by the ENTER key. To save without quitting use just `:w`, or to quit without saving type `:q`. If you are unable to quit because you have unsaved changes that you don't want to save, use `:q!` to quit and discard those changes.

#### Buffers, Windows, and Screens

#### Moving Around

##### By Characters

Move your cursor with `h`, `j`, `k`, `l`. They correspond with movement to the LEFT, DOWN, UP, and RIGHT, respectively. This is the hardest but most crucial command-set to learning Vim. Spend a good amount of time here before moving on.

Notice how when you cross vertically over a shorter line (between two longer lines) that Vim remembers the horizontal position you were at before moving.

##### By Words

Move around by words (groups of characters) with `w`, `b`, `e`. 

- `w` moves the cursor forward by the beginning of words, 
- `b` moves the cursor backwards by the beginning of words, and 
- `e` moves forward by the end of words. 

Each of these commands have a capital-case counter-part (`W`, `B`, `E`) that essentially do the same command except they are strictly whitespace delimited.

##### Within a Line

Within a line, you can jump to the beginning or end of it with `0` and `$`, respectively. Alternatively, if you want to go to the first non-whitespace character in the line, use `^` instead of `0`.

##### Within the File

You can quickly jump to the top or the bottom of a file:

- `gg` to go to the top, and
- `G` to jump to the bottom.

`C-f` and `C-b` allow you to move forward and backward in the file by a full screen height. Also, `C-d` and `C-u` are useful, moving up or down by a half screen height.

#### Editing Text

So we can move around, but what use is an editor without editing. To begin typing text we have to enter `INSERT` mode.

##### Entering Insert Mode

`i` and `a`, and their counterparts `I` and `A`, put your cursor into `INSERT`.
- `i` before the cursor,
- `a` after the cursor,
- `I` at the beginning of the line (ie. `^i`), and 
- `A` at the end of the line.

Also, `o` and `O` are useful for entering `INSERT` mode by opening a new line below or above the current line.

##### Changing and Deleting

Commands like `dd` delete the complete current line; `C` deletes the current line AFTER the cursor and enters insert mode.

#### Selecting Text

#### Other Common Tasks

##### Yank and Paste

##### Undo-Redo and Repeat

#### Searching, Find, and Replace

- `/query` `n` `N`
- `f` `t` `;` `,` and uppercase version
- `%s/old/new/`
- `%s/old/new/g`
- `'<,'>/old/new/` replace in a selected range

escape `/`s with `\`.

#### Honerable Mentions

- More Movements and Edits
- Multiple Files
- Multiple Windows
- Macros
- Folds
- Plugins

#### Wrapping Up

See the cheatsheet in [More Resources](#supplementary-material-1) for a full list of available commands. But note: what you can do with Vim far extends the commands listed in the list below, it is the way in which you combine them, extend them, and introduce plug-ins that truly make Vim an every-thing tool.

If still have a taste for what Vim can offer, follow up with some of the supplementary material and look forward to a complete guide to vim coming soon.

#### Supplementary Material

- Cheatsheet
- vimtutor
- Vi iMproved by Steve Oualine
- Mastering Vim Quickly by Jovica Ilic

#### Exercises

### Emacs

# Programming Paradigms

## Introduction

We've learned a great deal of programming thus far. Most of our time, however, has been spent in a very narrow (albeit most common) subset of programming called Imperative Programming. This series aims to educate readers in the various other forms of programming that exist. At the very least, you will come away with new - sometimes better - ways to think about computational problems. At most you will discover a style of programming that you prefer, and can further your journey more directed down that pathway.

... which unfortunetly might mean un-learning some of what we just did momentarily. So make sure you're confident with the core concepts explained earlier to ensure that it isn't lost away.

What this courses does not cover, as many paradigms courses do, is a discussion of language implementation, syntax, design, etc. These concepts will be left to a more complete instruction, on Language and Compiler Design.

## Imperative Programming

### Introduction to Imperative Programming

### Procedural Programming in ALGOL

### Object Oriented Programming in Java

### Structured Programming in C

### Unstructured Programming in Assembly

### Scientific Programming in Fortran

## Declarative Programming

### Introduction to Declarative Programming

### Functional Programming in Racket

#### Exercies

Write a procedure `rotate-right` that emulates the behavior of the built-in `rotate` function.

### Logical Programming in Prolog

### Markup Programming in HTML+CSS

### Database Programming in SQL

## Other Styles

  - Python
  - Web Scripting in JavaScript
  - Shell Scripting in Bash
  - Configuration in Lua
  - Metaprogramming
  - Component-Based Development in React
  - Integrated-UI Development in Swift
  - Metaprogramming

## Section Review

# Data Structures and Algorithms

# Software Engineering

- Design Patterns

Clean Code?
Design Patterns

While Software Engineering deals quite a bit with Project Mananagement, a fuller discussion of this is delegated to the gude on Projects and Employment.

# Systems Programming in C

- Shell Scripting in Bash
- Processes and Threads

# Language and Compiler Design

# Projects and Employment

Project Management
- Starting a Project
- Managing a Project
- Maintaining a Project
- Packaging a Project
- Releasing a Project

Open Source
- Finding a Project
- Contributing to a Project

Work
- Finding a Job
- Building a Resume
- Building a Portfolio
- Marketing Yourself
- On-the-Job Skills
- Professional Communication

Startups

# Appendix

## Appendix A - Symbols

### Greek Alphabet

### Mathematical Symbols

## Appendix B - A Big List of Projects

## Appendix C - A Bigger List of Resources

** General
*** Marketplaces
- Udemy
- EdX
- MIT OCW
- Khan Academy
- Coursera
- Udacity
- Brilliant
** Study Tools
- Anki
** Typing
- [[https://monkeytype.com/][MonkeyType]]
- [[https://speedcoder.net/][SpeedCoder]]
- [[https://keybr.com/][KeyBr]]
- [[https://ratatype.com/][RataType]]
** Design
*** Colors
- [[https://coolors.co/generate][Coolors]]
- [[https://colorhunt.co/][Color Hunt]]
- [[https://paletton.com/][Paletton]]
- [[https://www.degraeve.com/color-palette/][Degrave Palatte Generator]]
- [[http://colormind.io/][Color Mind]]
- [[https://uigradients.com/][UI Gradients]]
- [[https://color.adobe.com/create/color-wheel][Adobe Color]]
- [[https://flatuicolors.com/][Flat UI Colors]]
*** Mockup
- [[https://www.sketch.com/][Sketch]]
- [[https://www.adobe.com/products/xd.html][AdobeXD]]
- [[https://whimsical.com/][Whimsical]]
- [[https://www.figma.com/][Figma]]
** Computer Science
- [[http://viso.to/2Tr8a3lvE][Code: The Hidden Language of Computer Hardware and Software]]
- [[http://viso.to/5E510Tefq][The Elements of Computing Systems, aka "Nand2Tetris"]]
- [[https://cs50.harvard.edu/x][Harvard's CS50x]]
** Programming
*** Languages
**** C/C++
- [[https://fluentcpp.com/][Fluent C++]]
- [[https://goalkicker.com/CPlusPlusBook/][C++ Notes for Professionals]]
- The C++ Programming Language, aka "The Mountains Book"
- Cherno: C++ Series
- The Cherno YT
- Syntax Cheatsheet
- [[https://cppreference.com/][Cpp Reference]]
- [[https://cplusplus.com/][C Plus Plus Reference]]
- [[https://learncpp.com/][Learn C++]]
- Configure VSCode for C++

*** Web Development
- [[https://freecodecamp.org/][freeCodeCamp]]
- Eloquent JavaScript
- HTML and CSS
*** Coding Practice
- [[https://rosettacode.org/][Rosetta Code]]
- [[https://projecteuler.net/][Project Euler]]
- [[https://hackerrank.com/][Hacker Rank]]
- [[https://leetcode.com/][Leet Code]]
- [[https://hackthebox.com/][HackTheBox]]
- Code Wars
** Developer Stuff
*** Editors and IDEs
**** VSCode
- Configure VSCode for C++
**** Vim
**** Emacs
*** Dev Tools
**** Git
- [[https://git-scm.com/book/][Pro Git]]
- Sacha Chua's Emacs Blog
**** Unix Command Line
- Learn Enough Command Line To Be Dangerous
*** Hosting Platforms
- Heroku
- Digital Ocean
- Linode
*** Databases
- MongoDB
- MySQL
** UNORG
- SnapDrop
- Pocket
- DevHints.io
- [[https://regexr.com/][RegExr: Interactive regular expression generator]]
- Wolfram|Alpha


# Unorg

- Intermediate C++ Programming
- Scientific Computing with Python
- Full-Stack Web Development
- Game Development
- Operating Systems
- Databases
- IT
- The Internet
- Computer Networking
- Web Security

- Front-End Web Development

- Introduction to the Web

- Introduction to HTML
- Tags and Elements
- Attributes
- Boilerplate and Comments
- Containers
- Text
- Images
- Links
- Structure

- Introduction to CSS

- Introduction to CSS
- Color
- Introduction to Flexbox

- JavaScript For Programmers

- ES6

- ReactJS
