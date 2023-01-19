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
*pHcalc* defineix tres classes - Acid, Neutral i System - que s'utilitzen calculant el pH del sistema. \\(H_3O^+\\) i \\(OH^-\\) mai són explícitament definits.
El \\(H_3O^+\\) la concentració s'ajusta internament, i \\(OH^-\\) és calculat utilitzant \\(K_W\\).

Ara podem començar a fer els diferents càlculs de pH.

### **pH d'àcids forts o bases fortes**

Com a exemple d'àcid utilitzem el \\(HCl\\).

En primer lloc, l'\\(HCl\\) es dissocia completament a l'aigua per donar quantitats iguals de \\(H_3O^+\\) i \\(Cl^−\\). Com que el \\(H_3O^+\\) s'ajusta internament, tot el que cal definir és el \\(Cl^−\\).
Això implica un únic equivalent de \\(H_3O^+\\) per tal d'equilibrar la càrrega del sistema.

```js
cl = Neutral(charge=-1, conc=0.01)
system = System(cl)
system.pHsolve()
print("pH (àcid) =",system.pH)
```

De cada espècie hem de definir la càrrega i la seva concentració, crear el sistema (`System()`) i dir que calculi el pH (`System.pHsolve()`).

Quan tenim un àcid fort a concentracions molt baixes (\\(<10^{-7}\\)), el codi també té en compte que el pH no segueix la tendència per a concentracions molt petites.

Com a exemple de base utilitzarem el \\(NaOH\\).

Aquest exemple és molt similar a l'exemple anterior de \\(HCl\\), excepte que la nostra espècie neutra ha de tenir una càrrega positiva. L'equilibri de càrrega s'aconsegueix internament pel sistema utilitzant una quantitat equivalent de \\(OH^-\\).

```js
na = Neutral(charge=1, conc=0.01)
system = System(na)
system.pHsolve()
print("pH (base) =", system.pH)
```

### **pH d'àcids o bases febles**

Aquí utilitzarem la comanda `Acid` per definir l'àcid feble \\(HF\\), que té un Ka de \\(6,76e-4\\) i un pKa de \\(3,17\\). Quan definim una espècie àcida, cal indicar el pKa o bé el Ka. La càrrega d'auqests compostos sempre serà de 0.

```js
hf = Acid(Ka=6.76e-4, charge=0, conc=0.01)
system = System(hf)
system.pHsolve()
print("pH (àcid feble) =", system.pH)
```

### **pH de sals**

Existeixen espècies mixtes: les sals. Aquestes poden venir d'àcid/bases forts o bé d'àcids/bases febles. Igual que amb els exemples anteriors, només haurem de definir aquelles espècies que vinguin d'espècies febles.

Com a exemple de sal utilitzarem el \\(NaF\\). Aquest sistema consisteix en una barreja 1:1 de l'espècie \\(HF\\) (`Acid`) i l'espècie \\(Na^+\\) (`Neutral`). En l'objecte `System` es pot unir les dues espècies a la vegada. De nou, hi ha un equivalent implícit de \\(OH^-\\) necessari per equilibrar la càrrega del sistema però que ja ve equilibrat per la mateixa llibreria i no cal afegir res més.

```js
hf = Acid(Ka=6.76e-4, charge=0, conc=0.01)
na = Neutral(charge=1, conc=0.01)
system = System(hf, na)
system.pHsolve()
print("pH (sal) =", system.pH)
```

En cas que la relació no sigui 1:1, com per exemple amb el \\((NH_4)_3PO_4\\) que té una relació 1:3. El que canvia és que la concentració de la propoció 3, cal multiplicar-la per 3.

```js
phos = Acid(pKa=[2.148, 7.198, 12.319], charge=0, conc=0.01)
nh4 = Acid(pKa=9.25, charge=1, conc=0.01*3)
system = System(phos, nh4)
system.pHsolve()
print("pH (sal) =", system.pH)
```

### **pH d'àcids polipròtics**

No cal variar res dels codis anteriors, només cal afegir tots els pKa's o Ka's de l'àcid.

```js
carbonic = Acid(pKa=[3.6, 10.32], charge=0, conc=0.01)
system = System(carbonic)
system.pHsolve()
print("pH (àcid polipròtic) =", system.pH)
```

### **Corba de valoració**

Utilitzant un bucle senzill, podem construir corbes de valoració arbitràries. En aquest exemple, valorarem el \\(H_3PO_4\\) amb \\(NaOH\\). Utilitzant la comanda `guess_est` per al mètode `System.pHsolve`, el que fa és que força el càlcul de la millor estimació per iniciar l'algorisme d'optimització del pH.

```js
na_moles = np.linspace(1e-8, 5.e-3, 500)
sol_volume = 1. # Liter
phos = Acid(pKa=[2.148, 7.198, 12.375], charge=0, conc=1.e-3)
phs = []
for mol in na_moles:
    na = Neutral(charge=1, conc=mol/sol_volume)
    system = System(phos, na)
    system.pHsolve(guess_est=True)
    phs.append(system.pH)
plt.plot(na_moles, phs)
plt.show()
```

![01](../images/corba_valoració.png)

El gràfic es pot modificar de la manera que vulguem amb tot el que s'explica a l'apartat de [generació de gràfiques](grafiques.md).

### Per aprofundir

Podeu visitar el [repositori del paquet](https://github.com/rnelsonchem/pHcalc) si voleu saber més coses que es poden fer amb `pHcalc`.

<script type="text/javascript" src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
    // Make responsive
    MathJax.Hub.Config({
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
    });
</script>
