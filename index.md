---
layout: page
title: Home
---

<!-- begin row sign up -->
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>League Status</h5>
</div>
<div class="card-body">
<div class="row" markdown=1>
<div class="mb-2" style="text-align: center; height: 20vh">
{% include logo.svg %}
</div>
<h4><strong class="text-rainbow">LEAF IT ALL ON THE FIELD</strong></h4>
Fall sign ups are half off, $15 for the remaining games and possible end of season tourney!
</div>
<div class="row px-3 ">
<div class="col-md-12 mt-3">
    <a type="button" class="btn bg-button col-6" href="https://forms.gle/nuXHqbBGspMXCWq59">Fall Sign Up Form</a>
</div>
</div>
</div>
</div>

<!-- begin row teams -->
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>Teams</h5>
</div>
<div class="card-body">
<div class="row">
    <div class="col-3 my-auto">
        <a href="/rosters#green">
            <img src="/images/teams/green.svg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters#orange">
            <img src="/images/teams/orange.svg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters#purple">
            <img src="/images/teams/purple.svg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters#red">
            <img src="/images/teams/red.svg" class="img-fluid rounded"/>
        </a>
    </div>
</div>
</div>
</div>

<!-- begin row chart -->
{% include calculations.html %}
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>Chart Party</h5>
</div>
<div class="card-body" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<div id="chartPoints" style="width: 100%; height: 400px"></div>
<div id="chartGoalsFor" style="width: 100%; height: 400px"></div>
<div id="chartGoalsDiffer" style="width: 100%; height: 400px"></div>

<script type="text/javascript">

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
        data: ['Green', 'Orange', 'Purple', 'Red'],
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
        data: [
            { value: {{ greenPoints }}, itemStyle: { color: "green", } },
            { value: {{ orangePoints }}, itemStyle: { color: "#ff6600", } },
            { value: {{ purplePoints }}, itemStyle: { color: "purple", } },
            { value: {{ redPoints }}, itemStyle: { color: "red", } },
        ],
        itemStyle: { barBorderRadius: 5, },
        }
    ]
};

var goalsForOption = {
    title: {
        text: 'Goals',
    },
    series: [
    {
    name: 'Goals',
    data: [
        { value: {{ greenFor }}, itemStyle: { color: "green", } },
        { value: {{ orangeFor }}, itemStyle: { color: "#ff6600", } },
        { value: {{ purpleFor }}, itemStyle: { color: "purple", } },
        { value: {{ redFor }}, itemStyle: { color: "red", } },
    ],
    }
]
}

var goalsDifferOption = {
    title: {
        text: 'Differential',
    },
    series: [
    {
    name: 'Differential',
    data: [
        { value: {{ greenDiffer }}, itemStyle: { color: "green", } },
        { value: {{ orangeDiffer }}, itemStyle: { color: "#ff6600", } },
        { value: {{ purpleDiffer }}, itemStyle: { color: "purple", } },
        { value: {{ redDiffer }}, itemStyle: { color: "red", } },
    ],
    }
]
}

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

<!-- begin row tyler -->
<div class="card text-center mt-3 bg-brick">
<div class="card-header text-center bg-light" onclick="playSound('bad-day')">
    <h5>Did Tyler absolutely shank a wide open goal this week?</h5>
</div>
<div class="card-body" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>Yes!</h2>
<h5>What an absolute muffin!</h5>
<h5>I mean honestly, how do you miss that? Off the cross bar when the whole left side of the goal is open? You have to wonder if he is going blind, there are roadkill earth worms with better vision, let alone finishing. No doubt Tyler needs to be thrown into the dryer, he's completely washed.</h5>

</div>
</div>
</div>
</div>

<!-- begin row mowing -->
<!--<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>Mow Schedule</h5>
</div>
<div class="card-body" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100" markdown=1>

| Week | Team | Mower |
| ---- | ---- | ----- |
| 1 | Orange | TLee |
| 2 | Green | Keegan |
| 3 | Orange | Dayne/Trevor |
| 4 | Purple | Carlos |
| 5 | Red |  |
| 6 | Green |  |
| 7 | Orange |  |
| 8 | Purple |  |
| 9 | Red |  |

</div>
</div>
</div>
</div>-->

<!-- begin row brandon -->
<div class="card text-center mt-3 bg-rainbow">
<div class="card-header text-center bg-light" onclick="playSound('scrub')">
    <h5>Brandon Ego Tracker</h5>
</div>
<div class="card-body" onclick="bfactGen()" style="user-select: none; -moz-user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>Probably a lot of Goals!</h2>
<h4 id="bfact">Fact #1: Brandon draws circles at a below-average first grader level.</h4>

<script>
    bfactGen();
</script>

</div>
</div>
</div>
</div>

<!-- begin row trevor -->
<!--
<div class="card text-center mt-3 bg-sunset">
<div class="card-header text-center bg-light">
    <h5>Trevor's Cumulative Hat Tricks / 3</h5>
</div>
<div class="card-body" onclick="playSound('scotland-the-brave');" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>0 Goals!</h2>

</div>
</div>
</div>
</div>
-->

<!-- begin row champ video -->
<!-- <div class="card bg-light text-center my-3">
<div class="card-header text-center">
    2023 Championship Game
</div>
<div class="card-body">
    <!-- <script>
        randInt = Math.floor(Math.random() * 2) + 1;
        document.write('<img src="/images/2023-' + randInt + '.jpg" class="img-fluid w-100 rounded"/>');
    </script>
    <video width="100%" poster="/assets/img/2023/GSL-Championship-2023.png" controls>
        <source src="/assets/img/2023/GSL-Championship-2023.webm" type="video/webm">
        <source src="/assets/img/2023/GSL-Championship-2023.mp4" type="video/mp4">
    </video>

</div>
</div> -->
