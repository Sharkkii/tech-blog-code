#### Principle Component Analysis (PCA) ####

import numpy as np
from .eigen_value_decomposition import eigen_value_decomposition


def principle_component_analysis(X):

    n, m = X.shape
    X_mu = np.mean(X, axis=0, keepdims=True)
    X_dev = X - X_mu
    Sigma = np.dot(X_dev.T, X_dev) / n
    
    eigen_vals, eigen_vecs = eigen_value_decomposition(Sigma)
    return eigen_vecs
