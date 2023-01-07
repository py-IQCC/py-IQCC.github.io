---
layout: default
title: Partícula en una caixa
parent: Codis
katex: True
usemathjax: true
---

# **Partícula en una caixa**
{: .no_toc }

## Continguts
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## ***Caixa unidimensional***

El que es pot fer amb Python és graficar la forma més bàsica de la funció d'ona d'una partícula en una caixa unidimensonal:

$$ \psi_n(x)=\sqrt{\frac{2}{L}}\sin{\left(\frac{n\pi}{L}x\right)} $$

Primer necessitem importal les següents llibreries (per a aquesta part en concret):

```js
import matplotlib as plt
import matplotlib.pyplot as pyplt
%matplotlib inline
import numpy as np
```

Un cop tenim importades les llibreries, ja posem començar a escriure el codi que ens permeterà observar aquesta funció en funció de *n*, és a dir, del nombre quàntic principal.

Primer caldrà determinal la llargada de la caixa unidimensional (***L***).

```js
L = 1         # Llargada de la caixa
x_list = np.linspace(0,L,100)       # Aquest són els valors que necessitem per a poder fer les gràfiques
```

Ara caldrà definir les funcions que volem graficar. Com volem veure la pròpia funció i el seu quadrat (funció probabilitat), caldrà definir-les per separat.

```js
def psi(n,L,x):
    return np.sqrt(2/L)*np.sin(n*np.pi*x/L)
def psi_2(n,L,x):
    return np.square(psi(n,L,x))
```

I ara ja si, fem les gràfiques.

{: .note }
No entrarem en detall en el codi de les gràfiques perquè ja està tot explicat en el document de gràfiques.

```js
pyplt.figure(figsize=(15,10))

pyplt.suptitle("Funcions d'ona", fontsize=18)

for n in range(1,4):

    psi_2_list = []
    psi_list = []
    
    for x in x_list:
        psi_2_list.append(psi_2(n,L,x))
        psi_list.append(psi(n,L,x))
    pyplt.subplot(3,2,2*n-1)
    pyplt.plot(x_list, psi_list)
    pyplt.xlabel("L", fontsize=13)
    pyplt.ylabel("$\psi$", fontsize=13)
    pyplt.xticks(np.arange(0, L, step=0.5))
    pyplt.title("n="+str(n), fontsize=16)
    pyplt.grid()
    pyplt.subplot(3,2,2*n)
    pyplt.plot(x_list, psi_2_list)
    pyplt.xlabel("L", fontsize=13)
    pyplt.ylabel("$\psi^2$", fontsize=13)
    pyplt.xticks(np.arange(0, L, step=0.5))
    pyplt.title("n="+str(n), fontsize=16)
    pyplt.grid()

pyplt.tight_layout(rect=[0, 0.03, 1, 0.95])
pyplt.show()
```
![01](../assets/images/part_caixa/01.png)


D'aquesta manera, podem observar on trobarem un node d'aquesta funció i on està la major probabilitat de trobar la partícula en aquesta caixa unidimensional.

## ***Caixa bidimensional***
També es pot fer el mateix per una caixa bidimensional.

Evidentment, l'equació a utilitzar canviarà:

$$ \psi_n(x,y)=\sqrt{\frac{2}{L_x}}\sqrt{\frac{2}{L_y}}\sin{\left(\frac{n\pi}{L_x}x\right)\sin{\left(\frac{n\pi}{L_y}y\right)}} $$

Igual que amb l'exemple anterior, primer definirem algunes de les variables com \\(n\\), \\(L_x\\) i \\(L_y\\).

```js
n = 1

Lx = 1**-10
Ly = 1**-10

x,y = np.linspace(0, Lx, 200), np.linspace(0, Ly, 200)
```

Ara definim la funció:

```js
def psi_3d(a,b):
  return np.sqrt(2/Lx)*np.sqrt(2/Ly)*np.sin(n*np.pi*a/Lx)*np.sin(n*np.pi*b/Ly)
def psi2_3d(a,b):
  return np.square(psi_3d(a,b))
```

I tornem a fer les gràfiques. Aquestes les podem fer per separat:

```js
X,Y = np.meshgrid(x,y)
psi = np.array([psi_3d(x,y) for x,y in zip(np.ravel(X),np.ravel(Y))])
PSI = psi.reshape(X.shape)

fig = pyplt.figure(figsize=(8,6))
ax = fig.add_subplot(111, projection = '3d')

ax.plot_surface(X,Y,PSI, cmap = 'binary')

pyplt.xlabel('Coordenades X')
pyplt.ylabel('Coordenades Y')
ax.set_zlabel("Funció d'ona")
pyplt.title('$\psi$ per n=%s' %n)

pyplt.show()
```

```js
X,Y = np.meshgrid(x,y)
psi2 = np.array([psi2_3d(x,y) for x,y in zip(np.ravel(X),np.ravel(Y))])
PSI2 = psi2.reshape(X.shape)


fig = pyplt.figure(figsize=(8,6))
ax = fig.add_subplot(111, projection = '3d')

ax.plot_surface(X,Y,PSI2, cmap = 'binary')

pyplt.xlabel('Coordenades X')
pyplt.ylabel('Coordenades Y')
ax.set_zlabel("Funció d'ona")
pyplt.title('$\psi^2$ per n=%s' %n)

pyplt.show()
```

O bé o podem fer de manera conjunta:

```js
X,Y = np.meshgrid(x,y)

psi = np.array([psi_3d(x,y) for x,y in zip(np.ravel(X),np.ravel(Y))])
PSI = psi.reshape(X.shape)
psi2 = np.array([psi2_3d(x,y) for x,y in zip(np.ravel(X),np.ravel(Y))])
PSI2 = psi2.reshape(X.shape)

fig = pyplt.figure(figsize=(15,6))
ax1 = fig.add_subplot(121, projection = '3d')
ax2 = fig.add_subplot(122, projection = '3d')

ax1.plot_surface(X,Y,PSI, cmap = 'binary')
ax1.set_xlabel('Coordenades X')
ax1.set_ylabel('Coordenades Y')
ax1.set_zlabel("Funció d'ona")
ax1.set_title('$\psi$ per n=%s' %n)


ax2.plot_surface(X,Y,PSI2, cmap = 'binary')
ax2.set_xlabel('Coordenades X')
ax2.set_ylabel('Coordenades Y')
ax2.set_zlabel("Funció d'ona")
ax2.set_title('$\psi^2$ per n=%s' %n)

pyplt.show()
```

## ***Sel·lecció automàtica***

També es pot fer com una "mostra automàtica" de la funció d'ona i la seva funció de densitat de probabilitat.

Primer cal importar les llibreries necessàries i definir la funció de la partícula en una caixa vist anteriorment:

```js
import matplotlib.pyplot as plt
import numpy as np

def psi(x,n,L): return np.sqrt(2.0/L)*np.sin(float(n)*np.pi*x/L)
```

Ara cal saber per a quines característiques es vol graficar la funció. Això ho indicarà l'alumne:

```js
n = int(input("Digues el valor del nombre quàntic principal: n = "))
L = float(input("Digues la llargada de la caixa en Angstroms: L = "))
```

Amb les informacions que hem donat nosaltres de la funció i les caràcterístiques que volem que tingui aquesta funció, ja es poden fer les gràfiques.
Per aquest exemple, farem que `n=2` i `L=10`.

```js
print('Caracerísitiques de la funció: n=%s; L=%s' %(n,L))

# Funció de ona
plt.rcParams.update({'font.size': 18, 'font.family': 'STIXGeneral', 'mathtext.fontset': 'stix'})
x = np.linspace(0, L, 900)
fig, ax = plt.subplots()
ax.plot(x, psi(x,n,L), linestyle='--', color="orange", linewidth=2.8)
ax.hlines(0.0, 0.0, L, linewidth=1.8, linestyle='--', color="black")
ax.set_xlabel(r'$L$')
ax.set_ylabel(r'$\psi_n(x)$')
plt.title("Funció d'ona")

# Funció densitat de probabilitat
fig, ax = plt.subplots()
ax.axis([0.0,L,0.0,lim1*lim1*1.1])
ax.plot(x, psi(x,n,L)*psi(x,n,L), linewidth=2.8)
ax.set_xlabel(r'$L$')
ax.set_ylabel(r'$|\psi_n|^2(x)$')
plt.title("Funció densitat de probabilitat")

plt.show()
```

<script type="text/javascript" src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
    // Make responsive
    MathJax.Hub.Config({
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
    });
</script>
