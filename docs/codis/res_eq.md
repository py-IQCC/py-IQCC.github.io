---
layout: default
title: Resolució d'equacions
parent: Codis
---

# **Resolució d'equacions**
{: .no_toc }

## Continguts
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Per a poder tractar equacions de manera algebràica per tal de solucionar-les, podem utilitzar una llibreria anomenada SymPy.

SymPy és capaç d'operar algebraicament i coneix identitats comunes com ara \\(sin(x)^2+cos(x)^2=1\\), però abans de continuar fent àlgebra a SymPy,
hem de cobrir alguns mètodes algebraics bàsics. Aquests es proporcionen a la següent taula que inclou l'expansió i factorització polinòmica,
la simplificació d'expressions i la resolució d'equacions. Els apartats següents mostren cadascun d'ells.

| Mètode | Descripció |
|:------:|:----------  |
|`sympy.expand()` | Amplia polinomis |
|`sympy.factor()` | Factoritza polinomis |
|`sympy.simplify()` | Simplifica expressions |
|`sympy.solve()` | Iguala l'expressió a zero i resol la variable sol·licitada |

## Expansió polinomial i factorització

Primer, per a poder treballar en funció de \\(x\\), primer cal cridar el paquet SymPy i definir \\(x\\).

```py
import sympy

x = sympy.symbols('x')
```

Quan es tracta de polinomis, l'expansió i la factorització són operacions habituals que poden ser tediosos i que requereixen temps a mà.
SymPy fa que siguin ràpids i fàcils. Per exemple, podem ampliar l'expressió \\((x-1)(3x+2)\\) com es demostra a continuació.

```py
expr = (x - 1)*(3*x + 2)

sympy.expand(expr)
```

El procés es pot invertir factoritzant el polinomi.

```py
sympy.factor(3*x**2 - x - 2)
```

## Simplificació

És possible que SymPy no retorni sempre una expressió matemàtica en la forma més simple.
A continuació es mostra una expressió amb una forma més senzilla, i si la introduïm a SymPy, no es simplifica automàticament.

```py
3*x**2 - 4*x - 15 / (x - 3)
```

Tanmateix, si li indiquem a SymPy que simplifiqui l'expressió mitjançant el mètode `simplify()`, farà un millor intent de trobar una forma més senzilla.

```py
sympy.simplify((3*x**2 - 4*x - 15) / (x - 3))
```

## Ressolució d'equacions

SymPy també pot resoldre equacions d'una variable desconeguda mitjançant la funció `solve()`.
La funció requereix una única expressió igual a zero. Per exemple, el següent resol per \\(x\\) en \\(x^2+1.4x-5.76=0\\).

```py
sympy.solve(x**2 + 1.4*x - 5.76)
```

### Exemple (taula d'equilibri)

Una aplicació química comuna de les operacions algebraiques anteriors és resoldre problemes d'equilibri mitjançant el mètode
ICE (Initial, Change, and Equilibrium). Com a penúltim pas, les expressions matemàtiques s'insereixen a l'expressió d'equilibri
i sovint donen lloc a una equació polinòmica. A continuació es mostra un exemple de problema amb la taula ICE completada i l'expressió d'equilibri.

|     | 2 NH\\(_3\\) | \\(\rightleftharpoons\\) | 3 H\\(_2\\) (g) | + | N\\(_2\\) (g) |
|:--: | :--:  |:-:|:-------: |:--:|:-----|
|Inicial| 0.60 M |  | 0.60 M |  | 0.80 M |
|Variació, \\(\Delta\\)| -2x |  |  +3x   |  |  +x    |
|Equilibri| 0.60 - 2x | | 0.60 + 3x |  | 0.80 + x |

$$K_c = 3.44 = \frac{[N_2][H_2]^3}{[NH_3]^2} = \frac{(0.80 + x)(0.60 + 3x)^3}{(0.60 - 2x)^2}$$

Per ampliar la part dreta de l'equació, podem utilitzar el mètode `expand()`.

```py
expr = (0.80 + x) * (0.60 + 3*x)**3 / (0.60 - 2*x)**2

sympy.expand(expr)
```

Això probablement no és el que esperavem. El polinomi s'ha ampliat per al numerador i el denominador, però el resultat encara és una fracció.
Podem indicar a SymPy que simplifiqui els resultats.

```py
sympy.simplify(sympy.expand(expr))
```

Això és molt millor. En definitiva, volem resoldre per \\(x\\), però la funció `solve()` requereix una expressió que sigui igual a zero.
Ho podem aconseguir restant \\(3.44\\).

```py
sympy.solve(expr - 3.44)
```

El polinomi de quart ordre retorna quatre solucions, però només una tindrà sentit físic per a la nostra aplicació.
El segon valor, \\(0.09166\\), és l'únic valor no imaginari que no genera concentracions negatives, de manera que aquesta és la solució per a \\(x\\).
