---
layout: page
title: Home
---

<script>
    const sound = new Audio();
    function playSound(filename) {
        console.log("Playing song: " + filename);
        sound.src = "/assets/audio/" + filename + ".mp3";
        sound.play();
    }
</script>

<!-- begin row 1 -->
<div class="card bg-light text-center mt-3">
<div class="card-header text-center">
    2024 Season Sign Up
</div>
<div class="card-body">
<div class="row" markdown=1>
The Goddard Soccer League 2024 will be starting soon! We are running a **six team, 10 game league starting in mid June** - with a championship game. 
<br><br>
The **cost is $50** which goes toward maintaining the field, and the games will be self-refereed. Games are played on **Tuesdays, Wednesdays, and Thursdays on-site at the field near Building 11**, with rainout make up games on Thursdays. Click the **button below to go the sign up form**, we hope you join and look forward to seeing you on the pitch!
</div>
<div class="row mt-3 mx-3">
<a type="button" class="btn btn-primary" href="https://forms.gle/iggf2sibER2xtd7z8">Sign Up Form</a>
</div>
</div>
</div>

<!-- begin row 2 -->
<!-- <div class="card bg-light text-center my-3">
<div class="card-header text-center">
    2023 Championship Game
</div>
<div class="card-body">
    <!-- <script>
        randInt = Math.floor(Math.random() * 2) + 1;
        document.write('<img src="/images/2023-' + randInt + '.jpg" class="img-fluid w-100 rounded"/>');
    </script> -->
    <video width="100%" poster="/assets/img/2023/GSL-Championship-2023.png" controls>
        <source src="/assets/img/2023/GSL-Championship-2023.webm" type="video/webm">
        <source src="/assets/img/2023/GSL-Championship-2023.mp4" type="video/mp4">
    </video>

</div>
</div> -->

<!-- begin row 3 -->
<!-- <div class="card bg-light text-center my-3">
<div class="card-header text-center">
    Latest Updates
</div>
<div class="card-body" markdown=1>
The 2023 league season was a huge success! Thanks to everyone for reinvigorating this storied league post COVID and **a special shoutout to all the behind scenes work done!**

We are currently planning the 2024 season! The goal will be 6 teams with Blue and White making a return! Details such as team balancing are being finalized and the sign up will be available soon. We will have free scrimmages before the season begins, so get excited!!!
</div>
</div> -->

<!-- begin row 3 -->
<!-- <div class="card bg-light text-center my-3">
<div class="card-header text-center">
    2023 Leading Goal Scorer
</div>
<div class="card-body" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<table>
    <tr>
        <th class="bg-purple px-4">Brandon "🫏" Burdenloader</th>
        <th class="bg-rainbow px-4" onclick="playSound('firework')">41 Goals!<br>⭐ You're a superstar!!! ⭐</th>
    </tr>
</table>

</div>
</div>
</div>
</div> -->

<!-- begin row 4 -->
<div class="card bg-light text-center mt-3">
<div class="card-header text-center">
    Teams
</div>
<div class="card-body bg-white">
<div class="row">
    <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/blue.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/green.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/orange.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/purple.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/red.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/white.jpg" class="img-fluid rounded"/>
        </a>
    </div>
</div>
</div>
</div>


