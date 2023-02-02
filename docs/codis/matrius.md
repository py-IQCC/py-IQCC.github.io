---
layout: default 
title: Partícula en una caixa
parent: Codis
katex: True
usemathjax: true
---

<style>{% include css/testRunCode.css %}</style>


# Matrius
{: .no_toc }

{: .note }
En obres, ho de executar el codi és una prova.<br>Per poder utilitzar els notebooks amb el botó, el propietari del repositori els ha de penjar des de google drive.


Trobareu un notebook explicant-vos pas a pas fom fer servir la llibreria NumPy per a treballar amb matrius aquí -> [<img style='display:inline; line-height:0.8em; padding:0; margin:0 0.5em -0.5em 0;' src="https://colab.research.google.com/assets/colab-badge.svg">](https://colab.research.google.com/drive/1fAmDwsSlT3sOQJdJz46bglpCRuLiqCfZ?authuser=3#forceEdit=true&sandboxMode=true)

A continuació veurem alguns dels exemples més importants.


## Diagonalització, Eigenvalues/eigenfunctions

Podem diagonalitzar una matriu de manera senzilla fent servir les llibreries `NumPy` i `SciPy`:

<pre><code><textarea class='textareaCode' style='height:8em'>
import numpy as np
from scipy.linalg import eig, inv
A = np.matrix([[8,10,10],[0,3,0],[-5,-10,-7]])
eVals,eVecs = eig(A)    
print(eVals)
print(eVecs)
</textarea><form id="codeForm" autocomplete="off"><input type="hidden" name="code" id="code"/></form></code></pre>

En l'apartat on apreniem a representar la Superficie d'Energia Potencial treballaven amb funcions de moltes dimensions. Al'hora de caracteritzar un punt de l'espai d'una funció bidimensional en fem prou amb calcular les segones derivades del polinomi:

```py
# un mètode seria si hem elaborat un polinomi amb numpy:
import numpy as np
d = [] #distancies
E = [] #energies
grau = 4 #polinomi de 4rt grau
E_d = np.poly1d(np.polyfit(x,y, degree))
dE_r2 = E_r.deriv(m=2) #segona derivada

Caracterization = 'Mínim' if (dE_r2>0) else 'Màxim' if (dE_r2<0) else 'stationary point' if (dE_r2==0) else ''
print(Caracterization)
```

| Caracterització | Condició |
|:--|:--|
| Mínim | $\frac{d^2E}{dr^2} > 0$ |
| Màxim | $\frac{d^2E}{dr^2} < 0$ |
| Punt d'inflexió | $\frac{d^2E}{dr^2} = 0$ |

En canvi, en funcions de moltes dimensions amb aquest mètode no n'hi ha prou. Cal contruir la matriu Hessiana:

$$H =\begin{pmatrix} 
  \frac{\delta^2E}{\delta q_1^2} & \frac{\delta^2E}{\delta q_1 \delta q_2} & … & \frac{\delta^2E}{\delta q_1 \delta q_N} \\ 
  \frac{\delta^2E}{\delta q_2 \delta q_1} & \frac{\delta^2E}{\delta q_2^2} & … & \frac{\delta^2E}{\delta q_2 \delta q_N} \\ 
  … & … & … & … \\ 
  \frac{\delta^2E}{\delta q_N \delta q_1} & \frac{\delta^2E}{\delta q_N \delta q_2} & … & \frac{\delta^2E}{\delta q_N^2} \\ 
\end{pmatrix}$$


## Transposades









<script>{% include js/testRunCode.js %}</script>
