---
layout: page
title: Home
---

<!-- begin row 1 -->
<div class="card bg-light text-center my-3">
<div class="card-header text-center">
    Welcome to the GSL Website
</div>
<div class="card-body">
    <script>
        randInt = Math.floor(Math.random() * 2) + 1;
        document.write('<img src="/images/2023-' + randInt + '.jpg" class="img-fluid w-100 rounded"/>');
    </script>
</div>
</div>

<!-- begin row 2 -->
<div class="card bg-light text-center my-3">
<div class="card-header text-center">
    2023 Leading Goal Scorer
</div>
<div class="card-body" markdown=1>

<div class="col-12 d-flex justify-content-center">
<div class="overflow-auto">

<table>
    <tr>
        <th class="bg-purple px-4">Brandon "🫏" Burdenloader</th>
        <th class="bg-rainbow px-4" onclick="playSound('firework')">30 Goals!<br>⭐ You're a superstar!!! ⭐</th>
    </tr>
</table>

</div>
</div>
</div>
</div>

<!-- begin row 3 -->
<div class="card bg-light text-center my-3">
<div class="card-header text-center">
    Teams
</div>
<div class="card-body">
<div class="row">
    <div class="col-3 my-auto">
        <a href="/green">
            <img src="/images/teams/green.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/orange">
            <img src="/images/teams/orange.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/purple">
            <img src="/images/teams/purple.jpg" class="img-fluid rounded"/>
        </a>
    </div>
        <div class="col-3 my-auto">
        <a href="/red">
            <img src="/images/teams/red.jpg" class="img-fluid rounded"/>
        </a>
    </div>
</div>
</div>
</div>

<!-- begin row 4 -->
<div class="card bg-light text-center mt-3">
<div class="card-header text-center">
    Summer 2023 Sign Up
</div>
<div class="card-body">
<div class="row" markdown=1>
The Goddard Soccer League returns for the summer of 2023! We are running a **four team, 10 game league starting in mid June** - with a championship game. The **cost is $50** which goes toward maintaining the field, and the games will be self-refereed. Games are played **Tuesdays and Wednesdays on-site at the field near Building 11**, with rainout make up games on Thursdays. Click the **button below to go the sign up form**, we hope you join and look forward to seeing you on the pitch!
</div>
<div class="row mt-3 mx-3">
<a type="button" class="btn btn-primary" href="https://forms.gle/iggf2sibER2xtd7z8">Sign Up Form</a>
</div>
</div>
</div>

<script>
    const sound = new Audio();
    function playSound(filename) {
        console.log("Playing song: " + filename);
        sound.src = "/assets/audio/" + filename + ".mp3";
        sound.play();
    }
</script>
