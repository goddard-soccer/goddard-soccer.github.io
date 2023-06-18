---
layout: page
title: Standings
permalink: /standings/
---

<div class="card text-center my-3">
<div class="card-header">{{ page.title }}</div>
<div class="card-body overflow-auto">

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
        <td>{{ orangeWins }}</td>
        <td>{{ orangeDraws }}</td>
        <td>{{ orangeLosses }}</td>
        <td>{{ orangePoints }}</td>
        <td>{{ orangeFor }}</td>
        <td>{{ orangeAgainst }}</td>
        <td>{{ orangeDiffer }}</td>
    </tr>
    <tr>
        <td class="bg-green text-white">Green</td>
        <td>{{ greenWins }}</td>
        <td>{{ greenDraws }}</td>
        <td>{{ greenLosses }}</td>
        <td>{{ greenPoints }}</td>
        <td>{{ greenFor }}</td>
        <td>{{ greenAgainst }}</td>
        <td>{{ greenDiffer }}</td>
    </tr>
    <tr>
        <td class="bg-purple text-white">Purple</td>
        <td>{{ purpleWins }}</td>
        <td>{{ purpleDraws }}</td>
        <td>{{ purpleLosses }}</td>
        <td>{{ purplePoints }}</td>
        <td>{{ purpleFor }}</td>
        <td>{{ purpleAgainst }}</td>
        <td>{{ purpleDiffer }}</td>
    </tr>
    <tr>
        <td class="bg-red text-white">Red</td>
        <td>{{ redWins }}</td>
        <td>{{ redDraws }}</td>
        <td>{{ redLosses }}</td>
        <td>{{ redPoints }}</td>
        <td>{{ redFor }}</td>
        <td>{{ redAgainst }}</td>
        <td>{{ redDiffer }}</td>
    </tr>
</table>

</div>
</div>
