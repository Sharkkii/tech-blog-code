#### Eigen Value Decomposition ####

import numpy as np
from .utils import is_zero, is_zero_vector


# rotation matrix
def rotation_matrix(A, theta, i, j):
    
    m, n = A.shape
    assert(m == n)
    
    Q = np.eye(n)
    Q[i, i] = np.cos(theta)
    Q[i, j] = - np.sin(theta)
    Q[j, i] = np.sin(theta)
    Q[j, j] = np.cos(theta)
    
    return Q


# Jacobi method
def jacobi_method(A):
  
    m, n = A.shape
    assert(m == n)
    P = np.eye(n)
    
    while (True):

        B = np.abs(A) * (1 - np.eye(n))
        i, j = np.unravel_index(np.argmax(B), B.shape)
        if (is_zero(A[i,j])): break
            
        theta = np.arctan(2 * A[i,j] / (A[i,i] - A[j,j])) / 2
        Q = rotation_matrix(A, theta, i, j)
        A = np.dot(np.dot(Q.T, A), Q)
        P = np.dot(P, Q)
        
    eigen_vals = np.diagonal(A)
    eigen_vecs = P

    idx = np.argsort(eigen_vals)[::-1]
    eigen_vals = eigen_vals[idx]
    eigen_vecs = eigen_vecs[:, idx]
    
    return eigen_vals, eigen_vecs


# wrapper
def eigen_value_decomposition(A):
    return jacobi_method(A)
