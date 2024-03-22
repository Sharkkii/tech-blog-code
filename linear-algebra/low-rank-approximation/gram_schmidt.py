#### Gram-Schmidt ####

import numpy as np
from .utils import is_zero, is_zero_vector


# Gram-Schmidt
def gram_schmidt(A):

    m, n = A.shape
    assert(m >= n)  
    B = np.empty((m, m))
    col = 0
    
    for j in range(m):
        
        if (j < n):

            a = A[:, j]
            b = a
            for i in range(j):
                b -= np.dot(a, B[:, i]) * B[:, i]
            B[:, j] = b / np.linalg.norm(b)
        
        else:

            while (True):

                a = np.eye(m)[:, col]
                b = a
                for i in range(n):
                    b -= np.dot(a, B[:, i]) * B[:, i]
                
                if (not(is_zero_vector(b))):
                    B[:, j] = b / np.linalg.norm(b)
                    col += 1
                    break
                else:
                    col += 1
    
    return B
