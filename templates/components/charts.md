{% component charts() %}
{% set data = load_data(path="data/schedule.csv", format="csv") %}
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light"><h5>Chart Party</h5></div>
<div class="card-body">
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">
<div id="chartPoints" style="width: 100%; height: 400px"></div>
<div id="chartGoalsFor" style="width: 100%; height: 400px"></div>
<div id="chartGoalsDiffer" style="width: 100%; height: 400px"></div>
<script type="text/javascript">
var teams = ["Green", "Orange", "Purple", "Red"];
var colors = ["green", "#ff6600", "purple", "red"];
var pointsData = [];
var goalsForData = [];
var goalsDiffData = [];
{% for team in ["Green", "Orange", "Purple", "Red"] %}
{% set_global w = 0 %}
{% set_global d = 0 %}
{% set_global gf = 0 %}
{% set_global ga = 0 %}
{% for row in data.records %}
{% if row[3] == "" or row[4] == "" %}{% continue %}{% endif %}
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
{% elif pf == pa %}
{% set_global d = d + 1 %}
{% endif %}
{% endfor %}
pointsData.push({{ w * 3 + d }});
goalsForData.push({{ gf }});
goalsDiffData.push({{ gf - ga }});
{% endfor %}

function bars(values) {
    return values.map(function (v, i) {
        return { value: v, itemStyle: { color: colors[i] } };
    });
}

var chartPoints = echarts.init(document.getElementById('chartPoints'));
var chartGoalsFor = echarts.init(document.getElementById('chartGoalsFor'));
var chartGoalsDiffer = echarts.init(document.getElementById('chartGoalsDiffer'));

var globalOption = {
    title: {
        text: 'Points',
        textStyle: {
            color: "white",
            fontSize: 24,
            fontFamily: "Lexend",
        },
        left: "center"
    },
    textStyle: { color: "white" },
    tooltip: {},
    xAxis: {
        data: teams,
        axisLine: {
            lineStyle: { color: "white" }
        },
        axisLabel: {
            textStyle: {
                fontSize: 16,
                color: "white",
                fontFamily: "Lexend",
            },
        }
    },
    yAxis: {
        axisLabel: {
            textStyle: {
                fontSize: 16,
                color: "white",
                fontFamily: "Lexend",
            },
        }
    },
    series: [
        {
            name: 'Points',
            type: 'bar',
            data: bars(pointsData),
            itemStyle: { barBorderRadius: 5 },
        }
    ]
};

var goalsForOption = {
    title: { text: 'Goals' },
    series: [ { name: 'Goals', data: bars(goalsForData) } ]
};

var goalsDifferOption = {
    title: { text: 'Differential' },
    series: [ { name: 'Differential', data: bars(goalsDiffData) } ]
};

chartPoints.setOption(globalOption);
chartGoalsFor.setOption(globalOption);
chartGoalsDiffer.setOption(globalOption);
chartGoalsFor.setOption(goalsForOption);
chartGoalsDiffer.setOption(goalsDifferOption);
</script>
</div>
</div>
</div>
</div>
{% endcomponent %}