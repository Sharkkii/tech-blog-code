#### utility ####

import numpy as np

# for scalar
def is_zero(x):
    return (np.abs(x) < 1e-8)


# for vector 
def is_zero_vector(x):
    return (np.linalg.norm(x) < 1e-8)
    

# padding for bias term
def padding_one(x):
    assert(x.ndim == 2)
    n, m = x.shape
    x = np.concatenate([x, np.ones((n,1))], axis=1)
    return x