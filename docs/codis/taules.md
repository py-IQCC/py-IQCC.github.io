---
layout: default
title: Generació de taules
parent: Codis
---

# **Generació de taules**
{: .no_toc }

## Continguts
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## ** Crear un *Dataframe* **

La majoria de les dades amb les quals us trobareu treballant es col·locaran millor en un objecte pandas bidimensional anomenat *DataFrame* que sempre s'escriu amb dues lletres majúscules. El DataFrame és similar a una sèrie, excepte que ara també hi ha columnes amb noms. Es pot accedir a les columnes mitjançant noms de columnes i a les files es pot accedir mitjançant índexs.
El que primer haurem defer, com tots els codis, és importar els paquets i llibreries necessàries per a poder treballar. En aquest cas, nomésnecessitarem la llibreria *Pandas*.

```js
import pandas as pd
```

A continuació, es construeix un DataFrame per contenir els noms, nombres atòmics, masses i energies d'ionització dels cinc primers elements de la taula periòdica.

```js
nom = ['hidrogen', 'heli', 'liti', 'beril·li','bor']
NA = [1,2,3,4,5]
massa = [1.01,4.00,6.94,9.01,10.81]
EI = [13.6, 24.6, 5.4, 9.3, 8.3]
```

Com es pot veure, en que fem és crear les diferents files (`nom`, `NA`, `massa` i `EI`) amb les dades que volem que es mostrin.
Ara creeem els noms que volem que tinguin les files i columnes. Aquí les columnes seran els símbols dels elements i les files seran les propietats que definim d'aquests elements.

```js
columnes = ['H', 'He', 'Li', 'Be','B'] 
files = ['nom', 'NA', 'massa', 'EI']
elements = pd.DataFrame([nom, NA, massa, EI], 
                        columns=columnes, index=files)
elements
```

Per crear el Dataframe, el que fem és utilitzar la comanda `pd.DataFrame()` i dins el parèntesi li donem la informació que hem definit al principi.

Per accedir a les dades d'un DataFrame, col·loqueu el nom de la columna entre claudàtors.

```js
elements['Li']
```

Bàsicament, el que obtenim d'una columna és una sèrie amb els índexs que es mostren a la part esquerra.

Per indicar una fila, s'utilitza el mètode `loc[]`. Tornem a obtenir una sèrie amb índexs derivats dels noms de les columnes del DataFrame.

```js
elements.loc['IE']
```

O també el que podem fer és crear una nova comanda per a que ens dongui directament el nombre atòmic.
```js
nombre_atòmic = elements.loc['AN']

nombre_atòmic['B']
```

Alternativament, podem utilitzar el DataFrame directament i indexar-lo amb el mètode `loc[]` com a `[fila, columna]`.

```js
elements.loc['IE', 'Li']
```

## ** Modificar un *Dataframe* **

Ara que podeu generar DataFrames, és útil poder modificar-los mentre netegeu les vostres dades o feu càlculs. Això es pot fer mitjançant mètodes com l'assignació, eliminant files i columnes o combinar DataFrames.

### ** Inserció de columnes mitjançant l'assignació **

Possiblement, el mètode més senzill per afegir una columna nova és mitjançant l'assignació. Si es crida una columna inexistent i se li assignen valors, en lloc de retornar un error, pandas crea una nova columna amb el nom donat i l'omple amb les dades. Per exemple, el Dataframe _elements_ no conté una columna de carboni, de manera que la columna s'afegeix quan s'assigna a una sèrie amb les dades.

```js
elements['C'] = ['carboni', 6, 12.01, 11.3]

elements
```

### ** Assignament automàtic **

Una altra característica important dels pandas és la capacitat d'alinear automàticament les dades en funció de les etiquetes. A l'exemple anterior, el carboni s'afegeix al DataFrame amb el nom, el nombre atòmic, la massa atòmica i l'energia d'ionització en el mateix ordre que al DataFrame. Què passa si les dades noves no estan en l'ordre correcte? Si cada valor està etiquetat, pandas s'encarregaran de col·locar-los a la ubicació correcta.

```js
nitrogen = pd.Series([7, 14.01, 'nitrogen', 14.5], 
                     index=['NA', 'massa', 'nom', 'EI'])
```

Observeu que els valors estan fora d'ordre respecte a les dades dels elements. Hi ha etiquetes d'índex (és a dir, etiquetes de fila) que indiquen a pandas quina és cada dada, les utilitzarà per determinar on col·locar la nova informació.

```js
elements['N'] = nitrogen

elements
```

La nova columna de dades de nitrogen s'ha afegit als elements amb totes les dades que resideixen a la fila correcta.

### ** Eliminar columnes **

En netejar les dades, potser voldreu eliminar una columna o una fila. Pandas proporciona el mètode _drop()_ per a aquest propòsit. Requereix que s'elimini el nom de la columna o fila i, per defecte, suposa que s'ha d'eliminar una fila, `axis=0`. Si voleu eliminar una columna, canvieu l'eix utilitzant l'argument `axis=1`.
A l'exemple següent, primer s'elimina la columna d'hidrogen del DataFrame.

```js
elements.drop('H', axis=1)
```

```js
elements.drop('EI', axis=0)
```

En el segon exemple anterior, l'hidrogen ha tornat tot i haver-se eliminat prèviament. Això es deu al fet que el mètode _drop()_ no modifica per defecte el DataFrame original. Per fer que els canvis siguin permanents, assigneu el nou DataFrame a una variable nova o afegiu l'argument de paraula clau `inplace=True` a la funció _drop()_ anterior.

Hi ha una funció similar `pd.dropna()` que elimina columnes o files d'un DataFrame que contenen valors _NaN_. Això s'utilitza habitualment per eliminar dades incompletes d'un conjunt de dades. La funció _pd.dropna()_ es comporta de manera molt semblant a la funció _pd.drop()_ incloent els arguments `inplace=` i `axis=`.

### ** Unir dos Dataframes **

Per combinar diversos DataFrames, pandas proporciona un mètode _merge()_. De manera similar a l'anterior, la funció _merge()_ alinearà les dades correctament, però com que els DataFrames tenen diverses columnes i valors d'índex per triar, la funció _merge()_ pot alinear les dades en funció de qualsevol d'aquests valors. El comportament predeterminat de _merge()_ és comprovar si hi ha columnes comunes entre els dos DataFrames i alinear les dades en funció d'aquestes columnes.
Com a exemple, a continuació hi ha dos DataFrames que contenen dades de diversos compostos químics.

```js
chemdata1 = [['PM', 58.08, 32.04], ['dipole', 2.91, 1.69], 
             ['formula', 'C3H6O', 'CH3OH']] 
columnes=['propietat','acetona', 'metanol']
chmdf1 = pd.DataFrame(chemdata1, columns=columnes)
```
```js
chmdf1
```

```js
chmdata2 = [['formula', 'C6H6', 'H2O'], ['dipole', 0.00, 1.85], 
            ['PM', 78.11, 18.02]]
chmdf2 = pd.DataFrame(chmdata2 , columns=['propietat', 'benzè', 'aigua'])
```
```js
chmdf2
```

Els dos DataFrames anteriors tenen una columna de propietats, de manera que la funció _merge()_ utilitza aquesta columna comuna per alinear totes les dades en un nou DataFrame.

```js
chmdf1.merge(chmdf2)
```

Si hi ha diverses columnes amb el mateix nom, pots especificar quina ha d'utilitzar amb l'argument de paraula clau on (p. ex., on='propietat'). Alternativament, si els dos DataFrames contenen columnes amb noms diferents que volem utilitzar per a l'alineació, es pot especificar quines columnes utilitzem amb els arguments de la paraula clau _left_on_ i _right_on_.

```js
comps1 = pd.DataFrame({'element':['Co', 'Fe', 'Cr','Ni'], 
                       'protons': [27, 26, 24, 28]})
comps2 = pd.DataFrame({'metall':['Fe', 'Co', 'Cr', 'Ni'], 
                       'EI': [7.90, 7.88, 6.79, 7.64]})
```

En els dos DataFrames generats anteriorment, cadascun conté dades sobre cobalt, ferro, crom i níquel; però el primer DataFrame etiqueta els metalls com a _element_ mentre que el segon etiqueta els metalls com a _metall_. El següent fusiona els dos DataFrames en funció dels valors d'aquestes dues columnes.

```js
comps1.merge(comps2, left_on='element',right_on='metall')
```

Observeu que els valors de les columnes _element_ i _metall_ es van alinear al DataFrame resultant. Per desfer-se d'una de les columnes redundants, només cal que utilitzeu el mètode _drop()_ descrit anteriorment.

```js
comps3 = comps1.merge(comps2, left_on='element', 
                      right_on='metall')
comps3.drop('metall', axis=1, inplace=True)

comps3
```

### ** Concatenació **

La concatenació és el procés d'unir dos DataFrames al llarg d'un eix determinat. Això és diferent del mètode _merge()_ anterior, ja que _merge()_ fusiona i alinea les dades comunes entre els dos DataFrames mentre que _pd.concat()_ afegeix cegament un DataFrame a un altre.
Com a exemple, imagineu que dos grups de laboratori mesuren les densitats de magnesi, alumini, titani i ferro i carreguen els seus resultats a DataFrames a continuació.

```js
grup1 = pd.DataFrame({'metall':['Mg', 'Al', 'Ti', 'Fe'], 
                       'densitat': [1.77, 2.73, 4.55, 7.88]})
grup2 = pd.DataFrame({'metall':['Al', 'Mg', 'Ti', 'Fe'], 
                       'densitat': [2.90, 1.54, 4.12, 8.10]})
```
```js
group1
```

Vegeu què passa quan aquests dos DataFrames es concatenen.

```js
pd.concat((grup1, grup2))
```

Observeu com s'afegeixen els dos DataFrames sense tenir en compte els valors comuns a la columna _metall_. El comportament predeterminat és concatenar al llarg del primer eix (_axis=0_), però aquest comportament es pot modificar amb l'argument de paraula clau _axis=_. De nou, els metalls no estan tots alineats a continuació perquè no estaven en el mateix ordre als DataFrames originals.

```js
pd.concat((grup1, grup2), axis=1)
```

Per comparar, si els dos DataFrames es fusionen en lloc de concatenar-los, pandas alinearà les dades en funció del metall tal com es mostra a continuació. Com que la densitat apareix dues vegades com a capçalera de columna, pandas s'hi ocupa afegint un sufix per diferenciar els dos conjunts de dades.

```js
pd.merge(group1, group2, on='metall')
```

## Per aprofundir

Per obtenir més recursos sobre la biblioteca pandas, consulteu el següent. No es pot subratllar prou el valor del lloc web de pandas, ja que conté una gran quantitat de documentació d'alta qualitat i exemples il·lustratius sobre l'ús de pandas per a l'anàlisi i el processament de dades.

1. Pandas Website. (http://pandas.pydata.org/) (free resource)
2. VanderPlas, J. Python data Science Handbook: Essential Tools for Working with Data, 1st ed.; O’Reilly: Sebastopol, CA, 2017, chapter 3. A free, online version is available by the author at (https://github.com/jakevdp/PythonDataScienceHandbook) (free resource)
3. McKinney, W. Python for Data Analysis: Data Wrangling with Pandas, NumPy, and Ipython, 2nd ed.; O’Reilly: Sebastopol, CA, 2018.
