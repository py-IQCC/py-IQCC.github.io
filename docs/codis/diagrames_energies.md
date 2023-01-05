---
layout: default
title: Graficar diagrames d'energia
parent: Codis
katex: True
usemathjax: true
---

# **Graficar diagrames d'energia**
{: .no_toc }

## Continguts
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Exiteix un llibreria per a poder fer gràfiques d'orbitals moleculars.
Per importar-lo, caldrà primer instal·lar-lo.

```js
!pip install git+https://github.com/giacomomarchioro/PyEnergyDiagrams
```
## **Diagrames energètics**

Ara que ja està instal·lat, podrem començar a crear els primers diagrames energètics. Necessitarem les següents llibreries:

```js
import matplotlib.pyplot as plt
%matplotlib inline
from energydiagram import ED
```

Ara ja sí, podem donar les intruccions per a que ens grafiqui el que nosaltres volem. Primer i abans de res, li donarem la comanda `diagram = ED()` per fer les coses més fàcils. Seguidament escriurem les següents comandes:

```js
diagram.add_level(0,'Separated\nReactants')
diagram.add_level(-5.4,'mlC1')
diagram.add_level(-15.6,'mlC2','l',)
diagram.add_level(28.5,'mTS1',color='g')
diagram.add_level(-9.7,'mCARB1')
diagram.add_level(-19.8,'mCARB2','l')
diagram.add_level(20,'mCARBX','l')

diagram.plot(show_IDs=True)
```

Aquest tall de codi el que fa és generar-nos un diagrama d'energia molt senzill on només es mostres els nivells energètics que li hem especificat. La comanda `diagram.add_level()` és el que genera el nivell energètic. Dins les parèntesi és on especifiquem com volem que sigui auqest nivell segons `diagram.add_level(energia, nom, 'last/l' si va al mateix lloc que l'anterior, color = 'green/blue/black/red...')`. Per exemple, quan nosaltres especifiquem la comanda `diagram.add_level(28.5,'mTS1',color='g')` vol dir que afegim un nivell d'energia 28.5 amb l'etiqueta "mTS1" i de color verd (green) o si diem `diagram.add_level(-15.6,'mlC2','l',)` el nivell té una energia de -15.6 amb l'etiqueta "mlC2" i està a la mateixa posició que el nivell anterior (l).
La comanda `diagram.plot(show_IDs=True)` serveix pergraficar allò que hem dit. El `show_IDs=True` és per veure quin número de nivell és cadascú, però si no ho volem veure, podem canviar el `True` per un`False` i ja està, o simplement es pot esborrar. Per les unitats, en el diagrama per defecte apareixerà `kcal/mol^-1`. En la següent explicació veurem com canviar això.

Aquest diagrama que acabem de dibuixar està bé, però li faltes les línies que junten els diferents nivells energètics.

Per fer-ho, podem afegir al codi anterior, les següents instruccions:

```js
diagram.add_link(0,1)
diagram.add_link(0,2)
diagram.add_link(2,3)
diagram.add_link(1,3)
diagram.add_link(3,4)
diagram.add_link(3,5)
diagram.add_link(0,6, color = 'red')

diagram.plot()
```

La comanda `diagram.add_link()` afegeix aquestes línies i entre parèntesi és on especifiquem quins nivells energètics unim. Evidentment, també podem afegir colors dient `color = 'red/green/black...'` igual que abans amb els nivells energètics.

Abans s'ha dit que podem canviar les unitat d'energia. Doncs bé, això es pot fer modificant el `diagram.plot()` per

```js
diagram.plot(ylabel="Energy  ($kJ/mol$)")
```

Els canvis que fem, queden superposats a tot el que hem fet abans, per tant si tornem a dibuixar el grafic, es veuran els canvis.

## **Diagrames amb caixes d'electrons**

Una altra manera de graficar aquests diagrames d'energia és utilitzant caixes d'electrons. Es poden crear diagrames d'orbitals moleculars (MO) i orbitals atòmics (AO).

```js
diagram = ED()
# Generem els diferents nivells d'energia
diagram.add_level(0,'2pxy',top_text='')
diagram.add_level(10,'$\sigma*$',top_text='')
diagram.add_level(5,'$\pi*$','last',top_text='')
diagram.add_level(-5,'$\pi$','last',color='g',top_text='')
diagram.add_level(-10,'$\sigma$',top_text='',position='l')
diagram.add_level(0,'2pxy',top_text='')

# Dibueixem les línies que uneixes el AOs amb el MOs
for i in range(1,5):
    diagram.add_link(0,i,color='g')
    diagram.add_link(i,5,color='b')

# Generem les caixes amb els electrons
diagram.add_electronbox(level_id=0, boxes=1, electrons=2, side=1.5, spacing_f=2.5)
diagram.add_electronbox(1,2,0,1.5,3)
diagram.add_electronbox(2,5,10,1.5,3)
diagram.add_electronbox(3,3,4,1.5,3)
diagram.add_electronbox(4,3,2,1.5,3)
diagram.add_electronbox(5,3,5,1.5,3)
diagram.offset *= 1.5
diagram.plot(show_IDs=True)
plt.show()
```

Els canvis que podem modificar en aquest tipus de diagrames són els mateixos que en el gràfic energètic anterior.

També, quan constuim aquest tipus de diagrames, els electrons ja es situen de manera automàtica segons el principi de construcció d'Aufbau.


## Per aprofundir
Aquest és un paquet que se li pot treure molt bon profit. No només us podeu quedar aquí, sinó que també podeu afegir fletxes de diferència d'energia, canviar l'estil del nivells energètic, afegir un eix de coordenada de reacció i moltes coses més que aquí no comentem. Si esteu interessats en apendre una mica més sobre aquesta llibreria, podeu consultar el [repositori](https://github.com/giacomomarchioro/PyEnergyDiagrams) dels seus creadors: Giacomo Marchioro, Samuel Young, Alon Budker i Raz-Hemo.
