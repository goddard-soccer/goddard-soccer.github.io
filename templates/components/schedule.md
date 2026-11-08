{% component schedule() %}
{% set data = load_data(path="data/schedule.csv", format="csv") %}
<div class="card mt-3 text-center bg-theme">
<div class="card-header bg-light"><h5>Schedule</h5></div>
<div class="card-body mx-auto">
<div class="row">
{% for row in data.records %}
    {% if row[0] == "Break" %}
<div class="col-sm-12">
<div class="card my-2">
<div class="card-header">Break</div>
<div class="card-body p-0 overflow">
<div class="row mx-auto">
<div class="col-12 p-2" style="border-radius: 0 0 5px 5px">{{ row[1] }}</div>
</div>
</div>
</div>
</div>
        {% continue %}
    {% endif %}
    {% set_global h = 0 %}
    {% set_global a = 0 %}
    {% if row[3] != "" and row[4] != "" %}
        {% set hp = row[3] | split(pat="(") %}
        {% set ap = row[4] | split(pat="(") %}
        {% set_global h = hp[0] | trim | int %}
        {% set_global a = ap[0] | trim | int %}
    {% endif %}
<div class="col-sm-6">
<div class="card my-2">
<div class="card-header">
<div class="row">
<div class="col-3">Home</div>
<div class="col-6">{{ row[0] | date(format="%a, %b %e") }}</div>
<div class="col-3">Away</div>
</div>
</div>
<div class="card-body p-0 overflow">
<div class="row mx-auto">
<div class="col-4 p-2 text-white bg-{{ row[1] | lower }}" style="border-radius: 0 0 0 5px">{{ row[1] }}</div>
<div class="col-2 p-2">{% if h > a %}<strong>{{ row[3] }}</strong>{% else %}{{ row[3] }}{% endif %}</div>
<div class="col-2 p-2">{% if a > h %}<strong>{{ row[4] }}</strong>{% else %}{{ row[4] }}{% endif %}</div>
<div class="col-4 p-2 text-white bg-{{ row[2] | lower }}" style="border-radius: 0 0 5px 0">{{ row[2] }}</div>
</div>
</div>
</div>
</div>
{% endfor %}
</div>
</div>
</div>
{% endcomponent %}