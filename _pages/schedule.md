---
layout: page
title: Schedule
permalink: /schedule/
---

<div class="card mt-3 text-center">
<div class="card-header">{{ page.title }}</div>
<div class="card-body mx-auto">

<div class="row">
{% for row in site.data.schedule %}
    <div class="col-sm-6">
        <div class="card my-2">
            <div class="card-header">
                <div class="row">
                    <div class="col-3">
                        Home
                    </div>
                    <div class="col-6">
                        {{ row.Date | date: "%a, %b %e" }}
                    </div>
                    <div class="col-3">
                        Away
                    </div>
                </div>
            </div>
            <div class="card-body p-0 overflow">
                <div class="row mx-auto">
                    <div class="col-4 p-2 text-white bg-{{ row.Home | downcase }}" style="border-radius: 0 0 0 5px">
                        {{ row.Home }}
                    </div>
                    {% assign hScore = row.HomeScore | plus: 0 %}
                    {% assign aScore = row.AwayScore | plus: 0 %}
                    {% if hScore > aScore %}
                        <div class="col-2 p-2">
                            <strong>{{ row.HomeScore }}</strong>
                        </div>
                        <div class="col-2 p-2">
                            {{ row.AwayScore }}
                        </div>
                    {% elsif hScore < aScore %}
                        <div class="col-2 p-2">
                            {{ row.HomeScore }}
                        </div>
                        <div class="col-2 p-2">
                            <strong>{{ row.AwayScore }}</strong>
                        </div>
                    {% else %}
                        <div class="col-2 p-2">
                            {{ row.HomeScore }}
                        </div>
                        <div class="col-2 p-2">
                            {{ row.AwayScore }}
                        </div>
                    {% endif %}
                    <div class="col-4 p-2 text-white bg-{{ row.Away | downcase }}" style="border-radius: 0 0 5px 0">
                        {{ row.Away }}
                    </div>
                </div>
            </div>
        </div>
    </div>
{% endfor %}
</div>

</div>
</div>

