---
layout: page
title: Scores
permalink: /scores/
---

{% assign greenWins = 0 %}
{% assign orangeWins = 0 %}
{% assign purpleWins = 0 %}
{% assign redWins = 0 %}

{% assign greenDraws = 0 %}
{% assign orangeDraws = 0 %}
{% assign purpleDraws = 0 %}
{% assign redDraws = 0 %}

{% assign greenLosses = 0 %}
{% assign orangeLosses = 0 %}
{% assign purpleLosses = 0 %}
{% assign redLosses = 0 %}

{% assign greenFor = 0 %}
{% assign orangeFor = 0 %}
{% assign purpleFor = 0 %}
{% assign redFor = 0 %}

{% assign greenAgainst = 0 %}
{% assign orangeAgainst = 0 %}
{% assign purpleAgainst = 0 %}
{% assign redAgainst = 0 %}

{% for row in site.data.schedule %}
    {% if row.Date == nil %}
        {% break %}
    {% endif %}
    
    {% assign hSize = row.HomeScore | size %}
    {% assign aSize = row.AwayScore | size %}
    {% if hSize >= 1 and aSize >= 1 %}
        {% assign hScore = row.HomeScore | plus: 0 %}
        {% assign aScore = row.AwayScore | plus: 0 %}

        {% if hScore > aScore %}
            {% case row.Home %}
                {% when "Green" %}
                    {% assign greenWins = greenWins | plus: 1 %}
                {% when "Orange" %}
                    {% assign orangeWins = orangeWins | plus: 1 %}
                {% when "Purple" %}
                    {% assign purpleWins = purpleWins | plus: 1 %}
                {% when "Red" %}
                    {% assign redWins = redWins | plus: 1 %}
            {% endcase %}
            {% case row.Away %}
                {% when "Green" %}
                    {% assign greenLosses = greenLosses | plus: 1 %}
                {% when "Orange" %}
                    {% assign orangeLosses = orangeLosses | plus: 1 %}
                {% when "Purple" %}
                    {% assign purpleLosses = purpleLosses | plus: 1 %}
                {% when "Red" %}
                    {% assign redLosses = redLosses | plus: 1 %}
            {% endcase %}
        {% elsif hScore < aScore %}
            {% case row.Home %}
                {% when "Green" %}
                    {% assign greenLosses = greenLosses | plus: 1 %}
                {% when "Orange" %}
                    {% assign orangeLosses = orangeLosses | plus: 1 %}
                {% when "Purple" %}
                    {% assign purpleLosses = purpleLosses | plus: 1 %}
                {% when "Red" %}
                    {% assign redLosses = redLosses | plus: 1 %}
            {% endcase %}
            {% case row.Away %}
                {% when "Green" %}
                    {% assign greenWins = greenWins | plus: 1 %}
                {% when "Orange" %}
                    {% assign orangeWins = orangeWins | plus: 1 %}
                {% when "Purple" %}
                    {% assign purpleWins = purpleWins | plus: 1 %}
                {% when "Red" %}
                    {% assign redWins = redWins | plus: 1 %}
            {% endcase %}
        {% else %}
            {% case row.Home %}
                {% when "Green" %}
                    {% assign greenDraws = greenDraws | plus: 1 %}
                {% when "Orange" %}
                    {% assign orangeDraws = orangeDraws | plus: 1 %}
                {% when "Purple" %}
                    {% assign purpleDraws = purpleDraws | plus: 1 %}
                {% when "Red" %}
                    {% assign redDraws = redDraws | plus: 1 %}
            {% endcase %}
            {% case row.Away %}
                {% when "Green" %}
                    {% assign greenDraws = greenDraws | plus: 1 %}
                {% when "Orange" %}
                    {% assign orangeDraws = orangeDraws | plus: 1 %}
                {% when "Purple" %}
                    {% assign purpleDraws = purpleDraws | plus: 1 %}
                {% when "Red" %}
                    {% assign redDraws = redDraws | plus: 1 %}
            {% endcase %}
        {% endif %}

        {% case row.Home %}
            {% when "Green" %}
                {% assign greenFor = greenFor | plus: hScore %}
                {% assign greenAgainst = greenAgainst | plus: aScore %}
            {% when "Orange" %}
                {% assign orangeFor = orangeFor | plus: hScore %}
                {% assign orangeAgainst = orangeAgainst | plus: aScore %}
            {% when "Purple" %}
                {% assign purpleFor = purpleFor | plus: hScore %}
                {% assign purpleAgainst = purpleAgainst | plus: aScore %}
            {% when "Red" %}
                {% assign redFor = redFor | plus: hScore %}
                {% assign redAgainst = redAgainst | plus: aScore %}
        {% endcase %}
        {% case row.Away %}
            {% when "Green" %}
                {% assign greenFor = greenFor| plus: aScore %}
                {% assign greenAgainst = greenAgainst | plus: hScore %}
            {% when "Orange" %}
                {% assign orangeFor = orangeFor | plus: aScore %}
                {% assign orangeAgainst = orangeAgainst | plus: hScore %}
            {% when "Purple" %}
                {% assign purpleFor = purpleFor | plus: aScore %}
                {% assign purpleAgainst = purpleAgainst | plus: hScore %}
            {% when "Red" %}
                {% assign redFor = redFor | plus: aScore %}
                {% assign redAgainst = redAgainst | plus: hScore %}
        {% endcase %}
    {% endif %}
{% endfor %}

{% assign greenWinScore = greenWins | times: 3 %}
{% assign orangeWinScore = orangeWins | times: 3 %}
{% assign purpleWinScore = purpleWins | times: 3 %}
{% assign redWinScore = redWins | times: 3 %}

{% assign greenPoints = greenDraws | plus: greenWinScore %}
{% assign orangePoints = orangeDraws | plus: orangeWinScore %}
{% assign purplePoints = purpleDraws | plus: purpleWinScore %}
{% assign redPoints = redDraws | plus: redWinScore %}

{% assign greenDiffer = greenFor | minus: greenAgainst %}
{% assign orangeDiffer = orangeFor | minus: orangeAgainst %}
{% assign purpleDiffer = purpleFor | minus: purpleAgainst %}
{% assign redDiffer = redFor | minus: redAgainst %}

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

