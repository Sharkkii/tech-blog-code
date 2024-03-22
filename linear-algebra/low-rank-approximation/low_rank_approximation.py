#### Low Rank Approximation ####

import numpy as np
from .singular_value_decomposition import singular_value_decomposition


# low rank approximation
def low_rank_approximation(A, r):
    
    m, n = A.shape
    r = min(m, n, r)
    assert(r >= 0)

    U, Sigma, V = singular_value_decomposition(A)
    A_approx = U[:, :r].dot(Sigma[:r, :r]).dot(V[:, :r].T)

    return A_approx