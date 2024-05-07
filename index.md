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

<!-- begin row sign up -->
<div class="card bg-light text-center mt-3">
<div class="card-header text-center">
    2024 Spring Season Sign Up
</div>
<div class="card-body">
<div class="row" markdown=1>
The Goddard Soccer League 2024 will be starting soon! We are currently planning a 9 game spring season consisting of 4 teams, starting in late April with a championship game. League schedule and the number of teams are subject to change depending on the number of sign-ups.
<br><br>
The **cost is $50** which goes toward maintaining the field, and the games will be self-refereed. Games are played on **Tuesdays, Wednesdays, and Thursdays on-site at the field near Building 11**, with rainout make up games on Thursdays. Click the **button below to go the sign up form**, we hope you join and look forward to seeing you on the pitch!
</div>
<div class="row mt-3 mx-3">
<a type="button" class="btn btn-primary" href="https://forms.gle/iggf2sibER2xtd7z8">Sign Up Form</a>
</div>
</div>
</div>

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

<!-- begin row news updates -->
<!-- <div class="card bg-light text-center my-3">
<div class="card-header text-center">
    Latest Updates
</div>
<div class="card-body" markdown=1>
The 2023 league season was a huge success! Thanks to everyone for reinvigorating this storied league post COVID and **a special shoutout to all the behind scenes work done!**

We are currently planning the 2024 season! The goal will be 6 teams with Blue and White making a return! Details such as team balancing are being finalized and the sign up will be available soon. We will have free scrimmages before the season begins, so get excited!!!
</div>
</div> -->

<!-- begin row teams -->
<div class="card bg-light text-center mt-3">
<div class="card-header text-center">
    Teams
</div>
<div class="card-body bg-white">
<div class="row">
    <!-- <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/blue.jpg" class="img-fluid rounded"/>
        </a>
    </div> -->
    <div class="col-3 my-auto">
        <a href="/rosters">
            <img src="/images/teams/green.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters">
            <img src="/images/teams/orange.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters">
            <img src="/images/teams/purple.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters">
            <img src="/images/teams/red.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <!-- <div class="col-2 my-auto">
        <a href="/rosters">
            <img src="/images/teams/white.jpg" class="img-fluid rounded"/>
        </a>
    </div> -->
</div>
</div>
</div>

<!-- begin row leading goal scorer -->
<script>
    const bfacts = [
        "Brandon draws circles at a below-average first grader level.",
        "Brandon spits out the sunflower seeds and eats the shells.",
        "Brandon swapped the water pipes out for lead ones because he likes the taste.",
        "Brandon doesn't think Shania Twain is the greatest country singer of all time.",
        "Brandon puts one chopstick in each hand and uses the wide end.",
        "Brandon doesn't like dogs because they \"want to hang out too much\".",
        "Brandon thinks Allie should have stayed with Lon instead choosing Noah.",
        "Brandon tapes every Dane Cook stand up routine on his VCR.",
        "Brandon can't pronounce basic words like \"water\" and \"Florida\".",
        "Brandon has totaled a car in a driveway.",
        "Brandon thinks we should move the nation's capitol to Des Moines.",
        "Brandon was glad Jeopardy moved on from Alex Trebek.",
        "Brandon celebrates on Harambe rememberance day.",
        "Brandon shuffles playing cards face up.",
        "Brandon has missed penalty kicks for throw ins.",
        "Brandon holds computer mice with two hands.",
        "Brandon complains that Sesame Street \"isn't political enough\".",
        "Brandon brings his own sand to the beach because \"beach sand is too coarse\".",
        "Brandon thinks the fuchsia crayons have a more refined taste than the sea green crayons.",
        "Brandon doesn't sing happy birthday to children under 10.",
        "Brandon orders sparkling water at beer gardens.",
        "Brandon doesn't think Hakuna Matata is a wonderful phrase.",
        "Brandon maintains that Pokemon should be pay-to-win.",
        "Brandon uses hydroponics to grow mosquito larvae.",
        "Brandon protested the release of Harry Potter and the Deathly Hallows.",
        "Brandon didn't think McCarthyism involved any unlawful persecution or fear mongering.",
        "Brandon wishes Halloween was always held on a school night.",
        "Brandon is happy the polar ice caps are melting so that \"Santa has no home\".",
        "Brandon advocates against the installation of wheelchair accessibility ramps.",
        "Brandon licks his fingers after every cheeseball, even when sharing.",
        "Brandon tried to sabatoge the Super Soaker factory.",
        "Brandon secretly tramples on his neighbor's flower garden.",
        "Brandon once brought a ladle to a knife fight.",
        "Brandon thinks the Golgi apparatus is the powerhouse of the cell.",
    ];

    function bfactGen() {
        bfactsInt = Math.floor(Math.random() * bfacts.length);
        document.getElementById("bfact").innerHTML = 'Fact #' + (bfactsInt+1) + ': ' + bfacts[bfactsInt];
    }
</script>

<div class="card bg-light text-center mt-3">
<div class="card-header text-center">
    How many goals has Brandon scored?
</div>
<div class="card-body bg-rainbow" onclick="playSound('hero'); bfactGen();" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>6 Goals!</h2>
<h4 id="bfact">Fact #1: Brandon draws circles at a below-average first grader level.</h4>

<script>
    bfactGen();
</script>

</div>
</div>
</div>
</div>