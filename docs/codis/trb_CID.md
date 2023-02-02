---
layout: default
title: Modelling of a chemical reaction using Python
parent: Codis
---

# **Modelling of a chemical reaction using Python**
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

We have to create the system of differential equations to solve the kinetic equations.

First we need to call various packages.

```py
from scipy.integrate import solve_ivp
from numpy import inf
```

Now we create the system and define de velocity constants.

```py
def Kinetics(t, Concentrations):
	k1 = 4.7e-7
	k_1 = 4.2e-11
	k2 = 9.3e-7

	O3, O2, O = Concentrations
	
	dO3_dt = -k1*O3 + k_1*O2*O - k2*O*O3
	dO2_dt = k1*O3 - k_1*O2*O + 2*k2*O*O3
	dO_dt = k1*O3 - k_1*O2*O - k2*O*O3

	return dO3_dt, dO2_dt, dO_dt
```

The next step is to indicate the time of the simulation (`SimulationTime`), the initial concentrations (`InitialConcentrations`) and the substances.

{: .note }
We have to set the initial concentrations the same order as we set the substances!

```py
SimulationTime = 63115200.0 # 2*365.25*24*60*60
InitialConcentrations = 1.4, 0.3, 0.0
Substances = "O3, O2, O"
```

To example how to do this project, we will use the next example:

{: .highlight }
>The mechanism of ozone decomposition \\(2O_3\rightarrow 3O_2\\) can be represented as follows:
>
>$$\begin{align}&O_3\leftrightarrow O_2+O\quad (k_1,k_{-1})\\&O+O_3\rightarrow2O_2\quad (k_2)\end{align}$$
>
>with the following rate constants:
>
>$$\begin{align}&k_1 = 4.7\cdot10^{–7} s^{–1}\\&k_{–1} = 4.2\cdot10^{–11} molecules^{–1}\cdot cm^3\cdot s^{–1}\\&k_2 = 9.3\cdot10^{–7} molecules^{–1}\cdot cm^3\cdot s^{–1}\end{align}$$
>
>Assuming \\([O_2]_0 = 1.5·10^{17} molecules\cdot cm^{–3}\\); \\([O_3]_0 = 7.4\cdot10^{12} molecules\cdot cm^{–3}\\), simulate theprocess during 2 years.
>Analyze the resulting \\([O_3]_t\\) in the suitable coordinates to show that the reaction is second order with respect to \\([O_3]\\).


The following part of the code will print the concentrations of the substances along the time of simulation.

```py
Solution = solve_ivp(Kinetics, (0.0, SimulationTime), InitialConcentrations, method='Radau', max_step=inf)
if not Solution.success: print("Error message:",Solution.message)
printline = "Time"
Substa = Substances.replace(" ","").split(",")
for r in Substa: printline += "\t     %10s"%r
print("   "+printline.strip())
for i in range(len(Solution.t)):
	printline = "%12.5e"%Solution.t[i]
	for r in Solution.y: printline += "\t%12.5e"%r[i]
	print(printline)
```

To plot the results we will use the next code:

```py
import matplotlib.pyplot as plt
%matplotlib inline
for i in range(Solution.y.shape[0]):
	plt.plot(Solution.t, Solution.y[i])
plt.legend(['O3','O2','O'])
plt.xlabel('Temps')
plt.ylabel('Y')
plt.show()
```
