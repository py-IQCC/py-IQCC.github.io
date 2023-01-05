---
layout: page
title: Continguts
nav_exclude: true
description: Continguts de tot el que tinguem.
---

# **Continguts**

Aquí separarem tot el quetinguem per no posar dues coses iguals.

{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}
