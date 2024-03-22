#### Linear Regression ####

import numpy as np
from .utils import padding_one
from .linear_equation import solve_linear_equation


# Linear Regression
class LinearRegression:
    
    def __init__(self, lam=0.0):
        
        self.weight = None
        self.bias = None
        self.lam = lam
        
    def fit(self, x, y, max_iter=0, alpha=1e-2):

        assert(x.ndim == 2 and y.ndim == 2)
        n, m = x.shape
        x = padding_one(x)
        
        assert(max_iter >= 0)

        # analytically solve the normal equation
        if (max_iter == 0):
            A = np.dot(x.T, x) + self.lam * np.eye(m+1)
            b = np.dot(x.T, y)
            wb = solve_linear_equation(A, b)
            self.weight = wb[:-1]
            self.bias = wb[[-1]]

        # use SGD
        else:
            wb = np.zeros((m+1,1))
            for _ in range(max_iter):
                gradient = np.dot(np.dot(x.T, x) + self.lam * np.eye(m+1), wb) - np.dot(x.T, y)
                wb -= alpha * gradient
            self.weight = wb[:-1]
            self.bias = wb[[-1]]
    
    def predict(self, x):
        
        assert(self.weight is not None and self.bias is not None)
        assert(x.ndim == 2)
        x = padding_one(x)
        wb = np.concatenate([self.weight, self.bias], axis=0)
        y_pred = np.dot(x, wb)
        return y_pred


# Ridge Regression (L2 reguralization)
Ridge = LinearRegression
