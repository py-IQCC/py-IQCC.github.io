---
layout: page
title: Actualitzacions
description: Listing of course modules and topics.
---

# Actualitzacions

Aquí es mostren les actualitzacions del projecte i la seva data de implementació.

{% for module in site.modules %}
{{ module }}
{% endfor %}
