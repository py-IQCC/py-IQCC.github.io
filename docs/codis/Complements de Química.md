---
layout: default
title: COQ
parent: Codis
---

# Complements de química
{: .no_toc }

## ***Caixa unidimensional***

El que es pot fer amb Python és graficar la forma més bàsica de la funció d'ona d'una partícula en una caixa unidimensonal:

$$ \psi_n(x)=\sqrt{\frac{2}{L}}\sin{\left(\frac{n\pi}{L}x\right)} $$

Primer necessitem importal les següents llibreries (per a aquesta part en concret):

```yaml
import matplotlib as plt
import matplotlib.pyplot as pyplt
%matplotlib inline
import numpy as np
```

Un cop tenim importades les llibreries, ja posem començar a escriure el codi que ens permeterà observar aquesta funció en funció de *n*, és a dir, del nombre quàntic principal.

Primer caldrà determinal la llargada de la caixa unidimensional (***L***).

```yaml
L = 1         # Llargada de la caixa
x_list = np.linspace(0,L,100)       # Aquest són els valors que necessitem per a poder fer les gràfiques
```

Ara caldrà definir les funcions que volem graficar. Com volem veure la pròpia funció i el seu quadrat (funció probabilitat), caldrà definir-les per separat.

```yaml
def psi(n,L,x):
    return np.sqrt(2/L)*np.sin(n*np.pi*x/L)
def psi_2(n,L,x):
    return np.square(psi(n,L,x))
```

I ara ja si, fem les gràfiques.

>****Nota:*** No entrarem en detall en el codi de les gràfiques perquè ja està tot explicat en el document de gràfiques.
