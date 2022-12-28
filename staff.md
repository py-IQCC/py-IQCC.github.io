---
layout: page
title: Equip
description: Membres del projecte PY-IQCC.
---

# Equip

En aquesta secció podeu trobar informació dels components del projecte PY-IQCC.

## Professors

{% assign instructors = site.staffers | where: 'role', 'Professor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Assistents

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}
