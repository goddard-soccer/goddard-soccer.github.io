{% component standings() %}
{# CSV columns: Date,Home,Away,HomeScore,AwayScore #}
{% set data = load_data(path="data/schedule.csv", format="csv") %}
<div class="card text-center mt-3 bg-theme">
<div class="card-header bg-light"><h5>Standings</h5></div>
<div class="card-body">
<div class="col-12 d-flex justify-content-center">
<div class="overflow-auto">
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
{% for team in ["Orange", "Green", "Red", "Purple"] %}
{% set_global w = 0 %}
{% set_global d = 0 %}
{% set_global l = 0 %}
{% set_global gf = 0 %}
{% set_global ga = 0 %}
{% for row in data.records %}
{% if row[0] == "" %}{% break %}{% endif %}
{% if row[3] == "" or row[4] == "" %}{% continue %}{% endif %}
{% if row[1] == team %}
{% set f = row[3] | int %}
{% set a = row[4] | int %}
{% elif row[2] == team %}
{% set f = row[4] | int %}
{% set a = row[3] | int %}
{% else %}
{% continue %}
{% endif %}
{% set_global gf = gf + f %}
{% set_global ga = ga + a %}
{% if f > a %}
{% set_global w = w + 1 %}
{% elif f < a %}
{% set_global l = l + 1 %}
{% else %}
{% set_global d = d + 1 %}
{% endif %}
{% endfor %}
<tr>
<td class="bg-{{ team | lower }} text-white">{{ team }}</td>
<td class="bg-light">{{ w }}</td>
<td class="bg-light">{{ d }}</td>
<td class="bg-light">{{ l }}</td>
<td class="bg-light">{{ w * 3 + d }}</td>
<td class="bg-light">{{ gf }}</td>
<td class="bg-light">{{ ga }}</td>
<td class="bg-light">{{ gf - ga }}</td>
</tr>
{% endfor %}
</table>
</div>
</div>
</div>
</div>
{% endcomponent %}