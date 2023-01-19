---
layout: default
title: Valoracions àcid-base
parent: Codis
---

# **Valoracions àcid-base**
{: .no_toc }

## Continguts
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Primer de tot, com en tots els codis, hem d'importar les llibreries i els paquests necessaris.

```js
!pip install git+https://github.com/rnelsonchem/pHcalc.git
from pHcalc.pHcalc import Acid, Neutral, System
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
```

Per poder fer aquests càlculs de pH i dibuixar les corbes de valoració, utilitzem el paquet _pHcalc_.
El paquet _pHcalc_ és una biblioteca de Python per calcular sistemàticament el pH de la solució, dibuixar diagrames de distribució i les corbes de valoració.
*pHcalc* defineix tres classes - Acid, Neutral i System - que s'utilitzen calculant el pH del sistema. |H3O| i |OH-| mai són explícitament definits.
El |H3O| la concentració s'ajusta internament, i |OH-| és calculat utilitzant K\ :sub:`W`\ .

Ara podem començar a fer els diferents càlculs de pH.

### **pH d'un àcid fort**

Com a exemple utilitzem el $HCl$.

En primer lloc, l'$HCl$ es dissocia completament a l'aigua per donar quantitats iguals de $H_3O^+$ i $Cl^−$. Com que el $H_3O^+$ s'ajusta internament, tot el que cal definir és el $Cl^−$.
Això implica un únic equivalent de $H_3O^+$ per tal d'equilibrar la càrrega del sistema.

```js
cl = Neutral(charge=-1, conc=0.01)
system = System(cl)
system.pHsolve()
print("pH (àcid fort) =",system.pH)
```

















<script type="text/javascript" src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
    // Make responsive
    MathJax.Hub.Config({
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
    });
</script>
