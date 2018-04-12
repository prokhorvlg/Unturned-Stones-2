---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#layout: mainhome
title: "Unturned Stones"
excerpt: "Welcomemmm."
permalink: /
layout: default
---

{% include footer.html %}

<article class="home" role="article">
    <section class="landing" role="document">
      <h1 class="title" role="presentation">Welcome to the Unturned Stones. </h1>
      <a href="{{ site.baseurl }}{% link testhome.md %}">a</a>
      <a href="{{ site.baseurl }}{% link codex/test.md %}">a</a>

      {{ page.permalink }}
    </section>
</article>

{% include footer.html %}