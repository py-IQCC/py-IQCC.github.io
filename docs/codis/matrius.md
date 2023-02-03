---
layout: default 
title: Partícula en una caixa
parent: Codis
katex: True
usemathjax: true
---

<style>{% include css/testRunCode.css %}</style>


# Matrius

{: .note }
En obres, ho de executar el codi és una prova.<br>Per poder utilitzar els notebooks amb el botó, el propietari del repositori els ha de penjar des de google drive.




En química computacional, les matrius s'utilitzen per emmagatzemar i manipular grans conjunts de dades. Això inclou geometries moleculars, funcions d'ona mecàniques quàntiques i diversos tipus de propietats moleculars. Les matrius són especialment útils en mecànica quàntica, on es poden utilitzar per representar la funció d'ona d'una molècula i per realitzar càlculs mecànics quàntics com avaluacions d'energia, optimitzacions de geometria i prediccions de propietats. 

En Python es poden utilitzar biblioteques com NumPy per realitzar càlculs amb matrius. Aquesta biblioteca proporciona una sèrie d'operacions matricials molt útils, com ara multiplicació de matrius, inversió, diagonalització, i resolució de sistemes lineals. A més, hi ha moltes altres biblioteques disponibles en Python, com ara scikit-learn, PySCF i RDKit, que es poden utilitzar per a la predicció de propietats, l'optimització de geometria i la descripció de sistemes complexes.


## Operacions amb matrius

Trobareu un notebook explicant-vos pas a pas fom fer servir la llibreria NumPy per a treballar amb matrius aquí -> [<img style='display:inline; line-height:0.8em; padding:0; margin:0 0.5em -0.4em 0;' src="https://colab.research.google.com/assets/colab-badge.svg">](https://colab.research.google.com/drive/1fAmDwsSlT3sOQJdJz46bglpCRuLiqCfZ?authuser=1#scrollTo=yuoRclKllZK8&uniqifier=6&forceEdit=true&sandboxMode=true)

Els següents codis us seran útils per seguir aquest capítol:


**DETERMINANT D'UNA MATRIU**

<pre><code><textarea>
# Càlcul de determinants amb NumPy
import numpy as np

# Definim una matriu simètrica
M = np.array([[1,2,3,4],
              [2,9,5,6],
              [3,5,1,7],
              [4,6,7,8]])

# Calculem el determinant amb NumPy
det_M = np.linalg.det(M)
print("Determinant de la matriu M:", det_M)
</textarea><form id="codeForm" autocomplete="off"><input type="hidden" name="code" id="code"/></form></code></pre>


**RESOLUCIÓ DE SISTEMES D'EQUACIONS**

$$\left. \begin{array}{lcr}
    a*x + b*y + c*z = D \\
    e*x + f*y + g*z = H \\
    i*x + j*y + k*z = L
\end{array} \right \} \longrightarrow
\underbrace{ \left(\begin{matrix}
    a & b & c \\
    e & f & g \\
    i & j & k
\end{matrix}\right. }_{A}
\underbrace{ \left.\begin{matrix} D \\ H \\ L \end{matrix}\right) }_{b}$$

<pre><code><textarea>
import numpy as np
from scipy import linalg

# Matriu de coeficients
A = np.array([[1,1,1],[1,2,-3],[3,4,2]])

# Vector de "resultats"
b = np.array([0,0,-1])

# Resol l'equació lineal Ax = b amb scipy.linalg.solve
x = linalg.solve(A, b)
print("Solution:", x)
</textarea><form id="codeForm" autocomplete="off"><input type="hidden" name="code" id="code"/></form></code></pre>


---

A continuació veurem alguns dels exemples i aplicacions més importants de les matrius en Química Quàntica:


## Diagonalització, Eigenvalues/eigenfunctions

Podem diagonalitzar una matriu de manera senzilla fent servir les llibreries `NumPy` i `SciPy`:

<pre><code><textarea>
import numpy as np
from scipy.linalg import eig, inv
A = np.matrix([[8,10,10],[0,3,0],[-5,-10,-7]])
eVals,eVecs = eig(A)    
print(eVals)
print(eVecs)
</textarea><form id="codeForm" autocomplete="off"><input type="hidden" name="code" id="code"/></form></code></pre>

En l'apartat on apreniem a representar la Superficie d'Energia Potencial treballaven amb funcions de moltes dimensions. Al'hora de caracteritzar un punt de l'espai d'una funció bidimensional en fem prou amb calcular les segones derivades del polinomi:

```py
# elaborant un polinomi amb numpy:
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

En canvi, en funcions de moltes dimensions amb aquest mètode no n'hi ha prou. Cal construir la matriu Hessiana:

$$H =\begin{pmatrix} 
  \frac{\delta^2E}{\delta q_1^2} & \frac{\delta^2E}{\delta q_1 \delta q_2} & … & \frac{\delta^2E}{\delta q_1 \delta q_N} \\ 
  \frac{\delta^2E}{\delta q_2 \delta q_1} & \frac{\delta^2E}{\delta q_2^2} & … & \frac{\delta^2E}{\delta q_2 \delta q_N} \\ 
  … & … & … & … \\ 
  \frac{\delta^2E}{\delta q_N \delta q_1} & \frac{\delta^2E}{\delta q_N \delta q_2} & … & \frac{\delta^2E}{\delta q_N^2} \\ 
\end{pmatrix}$$

Es tracta d'una matriu simètrica formada per les segones derivades parcials. Tots els seus valors propis són reals, tot i que poden ser positius o negatius, i es calculen a partir dels determinants, per exemple:

$$\begin{array}{c}
    ~~~~~
    \begin{vmatrix}
    7-\lambda & 6 \\
    6 & 2-\lambda
    \end{vmatrix} = 0 \\
\\
(7-\lambda)(2-\lambda) -6*6 = 0 \\
\lambda^2 -9\lambda -22 = 0 \\
\lambda_1 = 11; ~~~ \lambda_2 = -2
\end{array}$$

Però quan es tracta de matrius més grans el càlcul es complica. Els programes de química quàntica (com ara Gaussian) calculen la matriu Hessiana (totes les segones derivades parcials), els seus valors propis $\lambda_k$, i després les freqüències harmòniques (nombres d'ona).


## Simetria

Les matrius es poden utilitzar per realitzar operacions de simetria sobre una estructura molecular, així com per determinar la simetria molecular i el seu grup puntual.

Gràcies a les llibreries de Python, podem determinar el grup puntual d'una molècula a partir d'una determinada geometria:

```py
import pyscf
from pyscf import gto, symm

# coordinates from molview.org
mol = pyscf.M(
    atom = '''O  0.0000    0.0000    0.0000;
              H  0.2774    0.8929    0.2544;
              H  0.6068   -0.2383   -0.7169''',
    symmetry = True)

print("Point group:", mol.topgroup)
```








<script>{% include js/testRunCode.js %}</script>
