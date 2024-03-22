#### Linear Equation Solver ####

import numpy as np
from .lu_decomposition import lu_decomposition


# forward substitution; solve L y = b
def forward_substitution(L, b):

    m, n = L.shape
    l, _ = b.shape
    assert(m == l)

    y = np.zeros((n,1))

    for i in range(n):
        y[i] = b[i]
        for j in range(i):
            y[i] -= L[i,j] * y[j]
        y[i] /= L[i,i]

    return y


# backward substitution; solve U x = y
def backward_substitution(U, y):

    m, n = U.shape
    l, _ = y.shape
    assert(m == l)

    x = np.zeros((n,1))

    for i in reversed(range(n)):
        x[i] = y[i]
        for j in range(i+1,n):
            x[i] -= U[i,j] * x[j]
        x[i] /= U[i,i]

    return x


# solve linear equation A x = b
def solve_linear_equation_by_lu_decomposition(A, b):

    m, n = A.shape
    l, _ = b.shape
    assert(m == l)

    L, U = lu_decomposition(A)
    y = forward_substitution(L, b)
    x = backward_substitution(U, y)

    return x


def solve_linear_equation(A, b):
    return solve_linear_equation_by_lu_decomposition(A, b)