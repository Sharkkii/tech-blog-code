#### QR decomposition ####

import numpy as np
from .utils import is_zero, is_zero_vector


# Householder matrix
def H(v):
    assert(v.ndim == 1 or v.ndim == 2)
    assert(not(is_zero_vector(v)))
    if (v.ndim == 1): v = v.reshape(-1, 1)
        
    H = np.eye(v.shape[0]) - 2 * np.dot(v, v.T) / np.dot(v.T, v)
    return H


# Householder transformation (k-th iteration) 
def householder(A, k):

    m, n = A.shape    
    x = A[k:, k]
    y = np.zeros_like(x); y[0] = np.linalg.norm(x)
    v = x - y
    
    H_k = np.eye(n)
    H_k[k:, k:] = H(v) if (not(is_zero_vector(v))) else np.eye(n-k)

    return H_k


# QR decomposition; Householder
def qr_decomposition_householder(A):

    m, n = A.shape
    assert(m >= n)  
    Q = np.eye(m)
    R = A.copy()
    
    for k in range(n):
        H_k = householder(R, k)
        Q = np.dot(Q, H_k.T)
        R = np.dot(H_k, R)
    
    return Q, R


# QR decomposition; Gram-Schmidt
def qr_decomposition_gram_schmidt(A):
    m, n = A.shape
    assert(m >= n)
    
    Q = np.empty((m, m))
    R = np.zeros((m, n))
    col = 0
    
    for j in range(m):
        
        if (j < n):

            a = A[:, j]
            q_j = a
            for i in range(j):
                r_ij = np.dot(a, Q[:, i])
                q_j -= r_ij * Q[:, i]
                R[i, j] = r_ij
            r_jj = np.linalg.norm(q_j)
            q_j /= r_jj

            Q[:, j] = q_j
            R[j, j] = r_jj
        
        else:

            while (True):

                a = np.eye(m)[:, col]
                q = a
                for i in range(n):
                    q -= np.dot(a, Q[:, i]) * Q[:, i]
                
                if (not(is_zero_vector(q))):
                    q /= np.linalg.norm(q)
                    Q[:, j] = q
                    col += 1
                    break
                else:
                    col += 1
    
    return Q, R


# wrapper
def qr_decomposition(A):
    return qr_decomposition_householder(A)
