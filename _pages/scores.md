---
layout: page
title: Scores
permalink: /scores/
---

{% include calculations.html %}

<div class="card text-center mt-3 bg-theme">
<div class="card-header bg-light">
    <h5>Standings</h5>
</div>
<div class="card-body">
<div class="col-12 d-flex justify-content-center">
<div class="overflow-auto ">

<table>
    <tr>
        <th>Team</th>
        <th>Wins</th>
        <th>Draws</th>
        <th>Losses</th>
        <th>Points</th>
        <th>For</th>
        <th>Against</th>
        <th>Differential</th>
    </tr>
    <tr>
        <td class="bg-purple text-white">Purple</td>
        <td class="bg-light">{{ purpleWins }}</td>
        <td class="bg-light">{{ purpleDraws }}</td>
        <td class="bg-light">{{ purpleLosses }}</td>
        <td class="bg-light">{{ purplePoints }}</td>
        <td class="bg-light">{{ purpleFor }}</td>
        <td class="bg-light">{{ purpleAgainst }}</td>
        <td class="bg-light">{{ purpleDiffer }}</td>
    </tr>
    <tr>
        <td class="bg-green text-white">Green</td>
        <td class="bg-light">{{ greenWins }}</td>
        <td class="bg-light">{{ greenDraws }}</td>
        <td class="bg-light">{{ greenLosses }}</td>
        <td class="bg-light">{{ greenPoints }}</td>
        <td class="bg-light">{{ greenFor }}</td>
        <td class="bg-light">{{ greenAgainst }}</td>
        <td class="bg-light">{{ greenDiffer }}</td>
    </tr>
    <tr>
        <td class="bg-orange text-white">Orange</td>
        <td class="bg-light">{{ orangeWins }}</td>
        <td class="bg-light">{{ orangeDraws }}</td>
        <td class="bg-light">{{ orangeLosses }}</td>
        <td class="bg-light">{{ orangePoints }}</td>
        <td class="bg-light">{{ orangeFor }}</td>
        <td class="bg-light">{{ orangeAgainst }}</td>
        <td class="bg-light">{{ orangeDiffer }}</td>
    </tr>
    <tr>
        <td class="bg-red text-white">Red</td>
        <td class="bg-light">{{ redWins }}</td>
        <td class="bg-light">{{ redDraws }}</td>
        <td class="bg-light">{{ redLosses }}</td>
        <td class="bg-light">{{ redPoints }}</td>
        <td class="bg-light">{{ redFor }}</td>
        <td class="bg-light">{{ redAgainst }}</td>
        <td class="bg-light">{{ redDiffer }}</td>
    </tr>
</table>

</div>
</div>
</div>
</div>

<div class="card mt-3 text-center bg-theme">
<div class="card-header bg-light">
    <h5>{{ page.title }}</h5>
</div>
<div class="card-body mx-auto">

<div class="row">
{% for row in site.data.schedule %}
    {% if row.Date == nil %}
        {% break %}
    {% elsif row.Date == "Break" %}
    <div class="col-sm-12">
        <div class="card my-2">
            <div class="card-header">
                Break
            </div>
            <div class="card-body p-0 overflow">
                <div class="row mx-auto">
                    <div class="col-12 p-2" style="border-radius: 0 0 5px 5px">
                        {{ row.Home }}
                    </div>
                </div>
            </div>
        </div>
    </div>
        {% continue %}
    {% endif %}
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

