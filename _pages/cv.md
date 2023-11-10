---
layout: home
title: "Alexander O. Smith - Curriculum Vitae"
description: "Information Scientist"
permalink: /cv.html
---

<div class="print-content">  

{% capture pageContent %}  
{% assign cv = site.data.cv %}  
# {{ cv.details.name }}  
{% if cv.details.blurb %}  
### {{ cv.details.blurb }}
{% endif %}

{% if cv.details.email %}Email: **<a href="mailto:{{ cv.details.email }}">{{ cv.details.email }}</a>** <br />
{% endif %}
{% if cv.details.phone %}Phone: **{{ cv.details.phone }}** <br />{% endif %}
{% if cv.details.location %}Location: **{{ cv.details.location }}** <br />{% endif %}

{% for section in cv.sections %}  
## {{ section.title }}  
{% if section.request %}  
### {{section.title}} available on request  
{% else %}  
{% for item in section.content %}  
{% if item.title %}  
### {{ item.title }}  
{% endif %}  
{% if item.date and item.blurb %}  
#### ({{ item.date }}) {{ item.blurb }}  
{% elsif item.date %}  
#### {{ item.date }}  
{% elsif item.blurb %}  
#### {{ item.blurb }}  
{% endif %}  
{% for content in item.content %}  
{{ content }}  
{% endfor %}  
{% endfor %}  
{% endif %}  
{% unless forloop.last %}  
---
{% endunless %}  
{% endfor %}  
{% endcapture %}  

{{ pageContent | markdownify }}

[view CV](https://www.alexanderosmith.com/assets/pdfs/AOS_CurriculumVitae.pdf?fbclid=IwAR3msTy92Jt_Rv4mrJT0az9WL3Iq_fstQcKeztLEnsx-qI36KzesGafNAQg)


</div>
<object
    type="application/pdf"
    data="https://www.alexanderosmith.com/assets/pdfs/AOS_CurriculumVitae.pdf?fbclid=IwAR3msTy92Jt_Rv4mrJT0az9WL3Iq_fstQcKeztLEnsx-qI36KzesGafNAQg"
    width="600"
    height="700"
>
</object>