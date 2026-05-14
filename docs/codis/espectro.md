---
layout: default
title: Treball de l'assignatura Química Quàntica i Espectroscòpia (part espectro)
parent: Codis
katex: true
usemathjax: true
---

# **Treball de Química Quàntica i Espectroscòpia: Simulació d’espectres de molècules diatòmiques**

---

## Objectiu del treball

En aquest treball simularem **espectres de rotació i rotació-vibració** de la molècula que heu estat treballant a la primera part de l'assignatura. A partir de les dades obtingudes (la superfície de potencial) posareu en pràctica la teoria treballada a classe. L'objectiu principal és que sigui una ajuda per tal de comprendre millor conceptes apresos a classe. També calculareu **l'energia de dissociació** a partir de les dades espectroscòpiques i les comparareu amb l'experimental així com la obtinguda al treball de quàntica.

> **No cal que tingueu coneixements previs de Python**. Us proporcionem una plantilla preparada i comentada que només caldrà completar i executar. Tot i això, us podeu baixar el fitxer i, amb poques nocions de Python, adaptar-lo a les vostres necessitats.

---

## Estructura del treball

El treball es divideix en 4 grans blocs que trobareu explicades a la plantilla proporcionada:

### A. Introducció teòrica

- Expressions per calcular l’energia dels nivells.
- Constants espectroscòpiques i regles de selecció.
- Càlcul de la intensitat de les línies (població i moment dipolar).

### B. Procediment computacional

- Completar i executar el codi en Python proporcionat.
- Simular i generar els espectres.

### C. Qüestions i anàlisi

- Completar les qüestions proposades en el guió.
- Comparació de resultats amb valors experimentals (base de dades NIST).

### D. Annex

- Informacions diverses que heu de tenir en compte per elaborar el treball.

---

## 📂 Fitxers 

Per tal de fer el treball, podeu descarregar el fitxer `.py` per fer-lo còrrer en local des de la vostra terminal o programes d'execució tipus VSCode, o bé podeu fer-lo còrrer al Google Colab i el tindreu al vostre Drive personal.

📄 **Plantilla per descarregar i còrrer en local:**  
[➤ Fitxer de treball (.py)](../../../treball_espectro_alumne.py) 

📄 **Execució directa a Google Colab:**  
[<img style='display:inline; line-height:0.8em; padding:0; margin:0 0.5em -0.4em 0;' src="https://colab.research.google.com/assets/colab-badge.svg">](https://colab.research.google.com/github/py-IQCC/py-IQCC.github.io/blob/main/Treball_ESPECTRO_alumne.ipynb)

A banda de proporcionar-vos la plantilla per fer el treball, us proporcionem tres fitxers amb explicacions sobre programació en Python que us seran de gran ajuda per enendre el codi i poder ajustar-lo a les vostres necessitats:
- [➤ Capítol 1: Python bàsic](https://colab.research.google.com/github/py-IQCC/py-IQCC.github.io/blob/main/basics.ipynb)
- [➤ Capítol 2: Representació gràfica amb Matplotlib](https://colab.research.google.com/github/py-IQCC/py-IQCC.github.io/blob/main/grafics.ipynb)
- [➤ Capítol 3: NumPy](https://colab.research.google.com/github/py-IQCC/py-IQCC.github.io/blob/main/numpy.ipynb)

---

## 📋 Instruccions per executar

1. **Feu una còpia del fitxer** de treball al vostre Google Drive.
   [Arxiu > Guardar una còpia a Drive]
3. Completeu les seccions indicades al fitxer (`...`) amb les dades de la vostra molècula i les fórmules necessaries.
4. Executeu els blocs de codi per generar les dades i gràfiques. [Al costat de cada cel·la de codi surt un triangle dins d'un cercle, l'heu de prèmer]
5. Responeu les preguntes teòriques al vostre document de treball.
6. **Cal entregar el codi font** a més a més de la part escrita (us el podeu baixar, per exemple, del Colab en **format .ipynb [NO .py]** i penjar-lo en aquest mateix format).
   [Arxiu > Descarregar > Descarregar com .ipynb]

---

## Lliurament

- **Format:** Format PDF

El format del treball és una mica lliure, no cal que poseu apartats ni que aneu comentant en el mateix ordre que teniu al fitxer. Ara, ha de contenir la discussió sobre els diferents aspectes. També us aconsello que penseu en el corrector, quant més ordenat i clar més fàcil de corregir.
  - Comenceu afegint la PES que heu obtingut al treball anterior, com a connexió entre les dues parts.
  - Nom dels membres del grup i molècula a treballar
  - Comentaris i explicacions dels resultats
  - Gràfiques amb peu de figura
  - Taules amb valors calculats, comparació amb valors del NIST i cap de taula

**Termini:** Dilluns 8 de Juny del 2026 a les 23:59 (Aniré corregint a mesura que aneu entregant. Penseu que no tindreu la nota final de QQE fins que no hagi corregit, per tant quant abans millor).

**Com enviar-ho:** a través de la tasca que trobareu al Moodle de l'assignatura

---

## Revisions importants

- No entregueu només les gràfiques: **cal comentar-les**.
- Les taules han de tenir **unitats** i estar ben presentades.
- Utilitzeu l’**error relatiu** per comparar amb valors experimentals.
- Expressar nombres en **notació científica correcta**: $3.00\cdot10^{-10}$ i no $3.00E-10$.

---

## Dubtes

Si teniu cap dubte sobre com completar el fitxer o sobre el funcionament del codi, podeu:
- Assistir a l’horari de classe i ressoldre els dubtes després d'aquesta.
- Escriure’m un correu amb el dubte concret.

---


