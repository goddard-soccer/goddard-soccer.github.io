---
layout: page
title: About
permalink: /about/
---

<!-- begin row 1 -->
<div class="card mt-3 bg-theme">
<div class="card-header text-center bg-light"><h5>{{ page.title }}</h5></div>
<div class="card-body">
<div class="row">
<div class="col-md-4">
<img src="/images/sign.jpg" class="img-fluid w-100 rounded"/>
</div>
<div class="col-md-8 text-light">
The Goddard Soccer League was founded with the sole purpose of providing soccer players of all skill levels with a fun and inviting environment. The league is open to all Goddard employees and their family members as well as the occasional guest players. Each team is rich with history, some dating back to the 1970’s. While the Gold and Blue teams enjoyed early success, the Grey and Green teams have made a name for themselves the past decade. Join a team and become a part of the Goddard League experience!
</div>
</div>
</div>
</div>

<!-- begin row 2 -->
<div class="row">
<div class="col-md-6 mt-3 align-items-stretch">
<div class="card bg-theme">
<div class="card-header text-center bg-light"><h5>Officers</h5></div>
<div class="card-body mx-auto">

<table>
    <tr>
        <th>President</th>
        <th>Marcello Rodriguez</th>
    </tr>
    <tr>
        <td class="bg-light">Vice President</td>
        <td class="bg-light">Tyler Lee</td>
    </tr>
    <tr>
        <td class="bg-light">Secretary</td>
        <td class="bg-light">Dayne Ford</td>
    </tr>
    <tr>
        <td class="bg-light">Field Chairman</td>
        <td class="bg-light">Brandon Barkksmoker</td>
    </tr>
    <tr>
        <td class="bg-light">Scheduler</td>
        <td class="bg-light">Dorukhan Ardag</td>
    </tr>
</table>

</div>
</div>
</div>

<div class="col-md-6 mt-3 d-flex align-items-stretch">
<div class="card bg-theme">
<div class="card-header text-center bg-light"><h5>Join the League</h5></div>
<div class="card-body text-center">
    <div class="row">
        <div class="col-md-6 text-light">
            Interested in joining the league? Send us an email. We would love to hear from you!
        </div>
        <div class="col-md-6 text-light">
            Ready to Join? See you on the pitch!
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mt-3">
            <a type="button" class="btn bg-button" href="mailto:nasagoddardsoccer@gmail.com">Send an Email</a>
        </div>
        <div class="col-md-6 mt-3">
            <a type="button" class="btn bg-button" href="https://forms.gle/iggf2sibER2xtd7z8">Sign Up Form</a>
        </div>
    </div>
</div>
</div>
</div>
</div>

<!-- begin row 3 -->
<div class="row">

<div class="col-md-3 mt-3">
<div class="card bg-theme">
<div class="card-header text-center bg-light"><h5>Goddard Cup</h5></div>
<div class="card-body">
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<table>
    <tr>
        <th>Year</th>
        <th>Winner</th>
        <th>Runner Up</th>
    </tr>

{% for row in site.data.titles reversed %}
    <tr>
        <td class="text-dark">{{ row.Year }}</td>
        <td class="text-white bg-{{ row.Winner | downcase }}">{{ row.Winner }}</td>
        <td class="text-white bg-{{ row.RunnerUp | downcase }}">{{ row.RunnerUp }}</td>
    </tr>
{% endfor %}

</table>

</div>
</div>
</div>
</div>
</div>

<div class="col-md-9 mt-3">

<div class="card bg-theme">
<div class="card-header text-center bg-light"><h5>League History</h5></div>

<div class="row mt-3 g-0 text-light">
<div class="col-md-4 p-2">
<img src="/images/history-1.jpg" class="img-fluid w-100 rounded" />
</div>
<div class="col-md-8 p-2">
My belief is that the origins of the Goddard Soccer League can be traced to a show of interest by my American colleague and office-mate, Ken Frost, in about 1968. I had started work at Goddard the year before as an NRC Resident Research Associate with Ken. Naturally, being originally from England, Ken knew that I had played soccer in school and he asked me to show him the basics of the game. I think he went out and bought a soccer ball and one afternoon we got a few guys together and went out on the grass across Aerobe Road from Building 1 and started kicking it around. This attracted other people including Jim Underwood, another Englishman, and Haiki Ogelman from Turkey. We had to restrain some of the Americans (Ed Rothe) who joined us as they wanted to play tackle football so it got a bit dangerous.
</div>
</div>

<div class="row g-0 p-2 text-light">
Eventually the group got too big and we moved across Greenbelt Road to the playing field behind Duvall High School. At first we didn't have any referees but after the first fight between Jim Underwood and the president of the OAO Corporation, we decided that more control was needed. It became obvious that we had to get professional referees. People began to take the games way too seriously and the early use of players from other teams proved inadequate. We had some rather nasty injuries, broken legs and noses, so we hired referees at ~$50 a game from the local branch of the Soccer Referees Association. This was better although the standards were not uniformly high.
</div>

<div class="row p-2 text-light">
<div class="text-center">
<img src="/images/history-2.jpg" class="img-fluid w-100 rounded" />
</div>
</div>

<div class="row g-0 p-2 text-light">
About this time, we applied for, and got GEWA support. This led to the use of the playing field behind Building 11 that is used to this day. The field had already been leveled by the time we got to use it but it required a lot of volunteer work to get grass to grow, to provide adequate drainage, and to lay out the field for first one and then two pitches.
</div>

<div class="row p-2 mb-3 text-light">
<div class="col-md-8">
When the league started and was sanctioned by GEWA, there were four teams - the Astros (Red), Green, Gold, and White. I was captain of the Astros for several years. Other people on the team in the early years were Ken Frost (goal keeper), Pete Kenney until he broke his leg, Stuart Jordon until he broke his nose, Larry Orwig (right wing), Ed Rothe the football tackler, Norm Ness (defense), Mario Acuna with no left foot on defense, Peter and Art Serlemitsos from Greece, Haiki Ogelman from Turkey. Mercifully, I played for over 20 years without sustaining any serious injury eventually quitting after reaching 50 when my youngest son lost interest in playing with me on the team.
</div>
<div class="col-md-4">
<img src="/images/history-3.jpg" class="img-fluid w-100 rounded" />
</div>
</div>

<div class="card-footer text-center bg-light">Written by Brian Dennis</div>
</div>

</div>

<!-- begin row 4 -->

