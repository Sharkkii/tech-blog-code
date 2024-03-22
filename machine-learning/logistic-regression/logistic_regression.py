#### Logistic Regression ####

import numpy as np
from .utils import padding_one


def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def step(x, thr=0.0):
    return np.heaviside(x - thr, 0.0)


class LogisticRegression:
    
    def __init__(self, lam=0.0):

        self.weight = None
        self.bias = None
        self.lam = lam
    
    def fit(self, x, y, max_iter=100, alpha=1e-2):
        
        assert(x.ndim == 2 and y.ndim == 2)
        n, m = x.shape
        x = padding_one(x)

        assert(max_iter > 0)
        wb = np.zeros((m+1,1))
        for _ in range(max_iter):
            y_pred = sigmoid(np.dot(x, wb))
            wb = wb - alpha * (np.dot(x.T, y_pred - y) + self.lam * wb)
        self.weight = wb[:-1]
        self.bias = wb[[-1]]

    def predict_proba(self, x):
        
        assert(self.weight is not None and self.bias is not None)
        assert(x.ndim == 2)
        x = padding_one(x)
        wb = np.concatenate([self.weight, self.bias], axis=0)
        y_pred = sigmoid(np.dot(x, wb))
        return y_pred
    
    def predict(self, x, thr=0.50):
        
        assert(self.weight is not None and self.bias is not None)
        assert(x.ndim == 2)
        x = padding_one(x)
        wb = np.concatenate([self.weight, self.bias], axis=0)
        y_pred = step(np.dot(x, wb), thr)
        return y_pred
