{% component standings() %}
{% set data = load_data(path="data/schedule.csv", format="csv") %}
{% set_global table = [] %}
{% for team in ["Orange", "Green", "Red", "Purple"] %}
    {% set_global w = 0 %}
    {% set_global d = 0 %}
    {% set_global l = 0 %}
    {% set_global gf = 0 %}
    {% set_global ga = 0 %}
    {% for row in data.records %}
        {% if row[0] == "Break" or row[3] == "" or row[4] == "" %}{% continue %}{% endif %}
        {% set hp = row[3] | split(pat="(") %}
        {% set ap = row[4] | split(pat="(") %}
        {% set hs = hp[0] | trim | int %}
        {% set as_ = ap[0] | trim | int %}
        {% if row[1] == team %}
            {% set pf = hs %}
            {% set pa = as_ %}
        {% elif row[2] == team %}
            {% set pf = as_ %}
            {% set pa = hs %}
        {% else %}
            {% continue %}
        {% endif %}
        {% set_global gf = gf + pf %}
        {% set_global ga = ga + pa %}
        {% if pf > pa %}
            {% set_global w = w + 1 %}
        {% elif pf < pa %}
            {% set_global l = l + 1 %}
        {% else %}
            {% set_global d = d + 1 %}
        {% endif %}
    {% endfor %}
    {% set pts = w * 3 + d %}
    {% set key = 0 - (pts * 1000000 + (gf - ga + 1000) * 1000 + gf) %}
    {% set_global table = [...table, {"team": team, "w": w, "d": d, "l": l, "pts": pts, "gf": gf, "ga": ga, "gd": gf - ga, "key": key}] %}
{% endfor %}
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
{% for t in table | sort(attribute="key") %}
<tr>
<td class="bg-{{ t.team | lower }} text-white">{{ t.team }}</td>
<td class="bg-light">{{ t.w }}</td>
<td class="bg-light">{{ t.d }}</td>
<td class="bg-light">{{ t.l }}</td>
<td class="bg-light">{{ t.pts }}</td>
<td class="bg-light">{{ t.gf }}</td>
<td class="bg-light">{{ t.ga }}</td>
<td class="bg-light">{{ t.gd }}</td>
</tr>
{% endfor %}
</table>
</div>
</div>
</div>
</div>
{% endcomponent %}