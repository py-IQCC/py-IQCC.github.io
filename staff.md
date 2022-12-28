---
layout: page
title: Staff
description: A listing of all the course staff members.
---

# Equip

Staff information is stored in the `_staffers` directory and rendered according to the layout file, `_layouts/staffer.html`.

## Professors

{% assign instructors = site.staffers | where: 'role', 'Professor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Assistents' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Assistents

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}
