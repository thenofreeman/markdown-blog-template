# Mathematics
[[TOC]]

# Primary Mathematics

Algebra
Trigonometry
Geometry

Number Sets
- Real Numbers
- Rational Numbers
- Irrational Numbers
- Integers Numbers
- Whole Numbers
- Natrual Numbers
- Imaginary Numbers
- Complex Numbers

Exercises

Number

Rational
- Addition
- Subtraction
- Mutliplication
- Division
- Negation
- Reduce
- Evaluate

Integer

Complex

# Differential Calculus

# Integral Calculus

# Multivariable Calculus

# Linear Algebra

## Vectors

- Properties of Vectors
- Vector Operations

### Tasks

- Vector Class Implementation
- Scalar Product
- Dot Product
- Magnitude
- Direction

#### Vector Class Implementation

Implement a `Vector` class to handle [vector] object based on the following public class interface.

```c++
using Number = double;
using Radians = double;

class Vector
{
public:
    Vector(const size_t& n); // zero initializes values

    Number& at(const size_t& index);
    size_t getSize() const;

};
```

#### Vector Scalar Product

Given the implementation of a `Vector` object, compute the [scalar product] of of a [number] and a [vector].

```c++
Vector scalar_product(const Number& c, const Vector& v);
```

#### Vector Dot Product

Given the implementation of a `Vector` object, compute the [dot product] of two [vectors].

```c++
Number dot_product(const Vector& u, const Vector& v);
```

#### Magnitude of a Vector

Given the implementation of a `Vector` object, compute the [magnitude] (often called _length_) of a [vector].

```c++
Number magnitude(const Vector& v);
```

#### Direction of a Vector

Given the implementation of a `Vector` object, compute the [magnitude] of a [vector].

```c++
Radians direction(const Vector& v);
```

## Matrices

- Properties of Matrices
- Matrix Operations

### Operations

Scalar Product
Dot Product

Inverse
Transpose
Determinant
Trace

### Exercises

Matrix
- Matrix Class Implementation
- Scalar Product
- Dot Product
- Trace
- 2x2 Determinant
- mxn Determinant

#### Matrix Class Implementation

Implement a class `Matrix` to handle [matrix] objects based on the following public class interface.

```c++
using Number = double;
struct Order { size_t m, n };

class Matrix
{
public:
    Matrix(const size_t& m, const size_t& n); // zero initializes values

    Number& at(const size_t& i, const size_t& j);
    Order getOrder() const;

};
```

Hint: You might choose to store your matrix's data as an array of [mathematical vector] objects, or by computing the row/column offset if storing the data in a single array.

#### Matrix Scalar Product

Given the implementation of a `Matrix`, compute the [scalar product] of a [number] and a [matrix].

```c++
Matrix scalar_product(const Number& c, const Matrix& A);
```

#### Matrix Dot Product

Given the implementation of a `Matrix`, compute the [dot product] of two [matrices].

```c++
Matrix dot_product(const Matrix& A, const Matrix& B);
```

#### Trace of a Matrix

Given the implementation of a `Matrix`, compute its [trace].

```c++
Number trace(const Matrix& A);
```

#### Determinant of a 2x2 Matrix

Given the implementation of a `Matrix`, compute its [determinant], where the matrix, A, is restricted to an [order] of 2x2.

```c++
Number determinant_2x2(const Matrix& A);
```

#### Determinant of a mxn Matrix

Given the implementation of a `Matrix`, compute its [determinant].

```c++
Number determinant(const Matrix& A);
```

## Row Operations

## Elimination

Guass-Jordan

## Permutations

What happens when elimination fails?

## Vector Spaces

To be a vector space:
- All linear combinations $cv + dw$ must stay in the vector space.
- The space must include the zero vector.
- $cv$ must be in the vector space, for any $c \in \R$

The word "space" means all linear combinations (of vectors, matrices or functions) stay inside the space.

### Span, Rank, Basis and Dimension

A basis is a set of vectors that perfectly describe a space.

Every linear combination of vectors in a basis give different results.

Dimension is the number elements within a basis -- the number of independent columns of a space.

Full rank matrices have rank $r = m = n$

### Subspaces

A subspace of a vector space is a set of vectors that satisfy:
- $v + w$ is in the subspace.
- $cv$ is in the subspace.
- ie. it is closed under addition and multiplication.

Every subspace includes the zero vector. Because $cv = 0$ when $c = 0$.

Any space is a subspace of itself: eg. all of $\R^3$ is a subspace in $\R^3$.

Examples of spaces in $\R^3$:
- $Z$, the single vector $(0, 0, 0)$
- $L$, any line through $(0, 0, 0)$
- $P$, any line through $(0, 0, 0)$
- $\R^3$, all of $\R^3$

A plane in 3 dimensional space is not $\R^2$. It is a plane inside $\R^3$

Examples of subspaces:
- $\bf{Z}$, the space containing only the zero vector.
- The line of functions $y = ce^x$, which contains all solutions to the D.E. $\frac{dy}{dx} = y$

When we move into function space, linear differential equations replace linear algebraic equations.

### 4 Fundamental Subspaces

#### Column Space

The column space, $C(A)$, is all linear combinations of the columns of $A$ -- all possible vectors $AX$.

$Ax = b$ is solvable if and only if $b$ is in the column space of $A$.
- To solve $Ax = b$, we express $b$ as a combination of the columns of $A$ with $x$. 
- If $b$ cannot be expressed in this way, $Ax = b$ has no solutions.

The $r$ independent columns of $A$ are a basis for $C(A)$.

#### Row Space

The rows of $A$ are the columns of $A^T$.

Therefore, the Row Space of $A$, $R(A)$ is the column space of $A^T$, $C(A^T)$. 

#### Null Space

The Null Space of $A$, $N(A)$, is found by the solutions to $Ax = 0$.

There are non-zero solution to $Ax = 0$ if $n > m$

The $n - r$ special solutions to $Ax = 0$ are a basis for $N(A)$.

#### Left-Null Space

The Left-Null Space is the null space of $A^T$. 

The Null Space of $A^T$ is found by the solutions to $yA^T = 0$.

# Factorization and Decomposition

CR
QR
LU
LDU

## Eigenvalues and Eigenvectors

- Eigenvalues
- Eigenvectors

### Exercises

- Eigenvalues
- Eigenvector

#### Eigenvalues of a Matrix

Given a [matrix], compute its [eigenvalues].

```c++
std::vector<Number> eigenvalues(const Matrix& A);
```

#### Eigenvector of a Matrix

Given a [matrix] and an [eigenvalue], compute its corresponding [eigenvector].

```c++
Vector eigenvector(const Matrix& A, const Number& lambda);
```

# Differential Equations

# Theoretical Calculus

# Logic

# Discrete Mathematics

# Introduction to Probability and Statistics

# Appendix

# Solutions

## Eigenvalues and Eigenvectors

### Eigenvalues of a Matrix

```c++
std::vector<Number> eigenvalues(const Matrix& A)
{
        Matrix I = identity_matrix(A.getOrder());
        Variable lambda = 'l';

        Expression expression = determinant(A - lambda*I);

        return roots(expression, lambda);
}
```

### Eigenvalue of a Matrix

```c++
Vector eigenvector(const Matrix& A, const Number& lambda)
{
        Matrix I = identity_matrix(A.getOrder());

        Matrix eigen_matrix = determinant(A - lambda*I);

        return nullspace(eigen_matrix);
}
```
# Unorg
