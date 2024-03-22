#### LU decomposition ####

import numpy as np


# elementary matrix; swap
def elementary_matrix1(A, i, j):
    m, n = A.shape
    P = np.eye(m)
    P[i], P[j] = P[j].copy(), P[i].copy()
    return P


# elementary matrix; scalar times
def elementary_matrix2(A, c, i):
    m, n = A.shape
    P = np.eye(m)
    P[i, i] = c
    return P


# elementary matrix; add scalar times
def elementary_matrix3(A, c, i, j):
    m, n = A.shape
    P = np.eye(m)
    P[i, j] = c
    return P

    
# LU decomposition; outer product (w/o pivoting)
def lu_decomposition_outer_product(A):
    
    m, n = A.shape
    assert(m == n)
    L = np.eye(n)
    U = A.copy()
    
    for i in range(m-1):
        for j in range(i+1, m):
            c = - U[j, i] / U[i, i]
            Q3 = elementary_matrix3(A, c, j, i)
            Q3_inv = elementary_matrix3(A, -c, j, i)
            L = np.dot(L, Q3_inv)
            U = np.dot(Q3, U)
            
    return L, U


# PLU decomposition; outer product w/ pivoting
def lu_decomposition_outer_product_with_pivoting(A):
    
    m, n = A.shape
    assert(m == n)
    P = np.eye(n)
    L = np.eye(n)
    U = A.copy()
    
    for i in range(m-1):

        i_star = np.argmax(np.abs(U[i:, i])) + i
        Q1 = elementary_matrix1(A, i, i_star)
        Q1_inv = Q1.T
        P = np.dot(P, Q1_inv)
        L[i,:i], L[i_star,:i] = L[i_star,:i].copy(), L[i,:i].copy()
        U = np.dot(Q1, U)
        
        for j in range(i+1, m):

            c = - U[j, i] / U[i, i]
            Q3 = elementary_matrix3(A, c, j, i)
            Q3_inv = elementary_matrix3(A, -c, j, i)
            L = np.dot(L, Q3_inv)
            U = np.dot(Q3, U)
            
    return P, L, U

  
# LU decomposition; inner product
def lu_decomposition_inner_product(A):
    
    m, n = A.shape
    assert(m == n)
    L = np.zeros((n, n), dtype=float)
    U = np.zeros((n, n), dtype=float)
    
    for i in range(n):
        
        for j in range(i, n):
            U[i, j] = A[i, j]
            for k in range(i):
                U[i, j] -= L[i, k] * U[k, j]
                
        for j in range(i, n):
            L[j, i] = A[j, i]
            for k in range(i):
                L[j, i] -= L[j, k] * U[k, i]
            L[j, i] /= U[i, i]
            
    return L, U


# LU decomposition; Clout
def lu_decomposition_clout(A):
    
    m, n = A.shape
    assert(m == n)
    L = np.zeros((n, n), dtype=float)
    U = np.zeros((n, n), dtype=float)
    
    for i in range(n):
                
        for j in range(i, n):
            L[j, i] = A[j, i]
            for k in range(i):
                L[j, i] -= L[j, k] * U[k, i]
                
        for j in range(i, n):
            U[i, j] = A[i, j]
            for k in range(i):
                U[i, j] -= L[i, k] * U[k, j]
            U[i, j] /= L[i, i]
            
    return L, U


# wrapper
def lu_decomposition(A):
    return lu_decomposition_inner_product(A)


def plu_decomposition(A):
    return lu_decomposition_outer_product_with_pivoting(A)