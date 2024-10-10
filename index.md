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
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>League Status</h5>
</div>
<div class="card-body">
<div class="row" markdown=1>
Thank you everyone for a great year of soccer! The Fall season and thus this year's soccer has come to an end. I've had the time of my life and I've never felt like this before. Yes I swear its the truth, and I owe it all to you!
<br><br>
We will likely have some pick up games until day light savings (early November). Official Goddard soccer will resume next year around March or April, so be on the look out for messages then!
</div>
<div class="row px-3 ">
<!-- <div class="col-md-6 mt-3">
    <a type="button" class="btn btn-primary col-6" href="https://forms.gle/iggf2sibER2xtd7z8">Spring Sign Up Form</a>
</div> -->
<div class="col-md-12 mt-3">
    <a type="button" class="btn bg-button col-6" href="https://forms.gle/YN3VdfuhnKLRoKez9">Fall Sign Up Form</a>
</div>
</div>
</div>
</div>

<!-- begin goal of the week -->
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>Goal of the Week</h5>
</div>
<div class="card-body">
<div class="row text-white">
    <h5 class="m-0">20 pull-ups without dropping</h5>
</div>
</div>
</div>

<!-- begin logo contest -->
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>Logo Contest</h5>
</div>
<div class="card-body">
<div class="row" markdown=1>
The Goddard soccer league is excited to announce <strong class="text-rainbow">a logo contest!!!</strong> (THE CROWD GOES WILD) We are looking for something elegant that will encapsulate the GSL teams and our love for soccer. The logo will be decided during the fall season. Dive into your artistic side engineers, the winner will get their Fall season dues wavied!
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

<!-- begin row teams -->
<div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>Teams</h5>
</div>
<div class="card-body">
<div class="row">
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
        "Brandon totaled a car in a driveway.",
        "Brandon thinks we should move the nation's capitol to Des Moines.",
        "Brandon was glad Jeopardy moved on from Alex Trebek.",
        "Brandon celebrates on Harambe rememberance day.",
        "Brandon shuffles playing cards face up.",
        "Brandon holds computer mice with two hands.",
        "Brandon complains that Sesame Street \"isn't political enough\".",
        "Brandon brings his own sand to the beach because \"beach sand is too coarse\".",
        "Brandon thinks the fuchsia crayons have a more refined taste than the sea green crayons.",
        "Brandon doesn't sing happy birthday to children under 10.",
        "Brandon orders juice boxes at beer gardens.",
        "Brandon doesn't think Hakuna Matata is a wonderful phrase.",
        "Brandon maintains that Pokemon should be pay-to-win.",
        "Brandon uses hydroponics to grow mosquito larvae.",
        "Brandon protested the release of Harry Potter and the Deathly Hallows.",
        "Brandon didn't think McCarthyism involved any unlawful persecution or fear mongering.",
        "Brandon wishes Halloween was always held on a school night.",
        "Brandon is happy the polar ice caps are melting so that \"Santa has no home\".",
        "Brandon advocates against the installation of wheelchair accessibility ramps.",
        "Brandon licks his fingers after every cheeseball, even when sharing.",
        "Brandon was caught trying to sabatoge a Super Soaker manufacturing plant.",
        "Brandon buys taxidermied deer legs to \"trample his neighbor's flower garden without arousing suspicion\".",
        "Brandon once brought a ladle to a knife fight.",
        "Brandon thinks the Golgi apparatus is the powerhouse of the cell.",
        "Brandon loves Dreamworks Madagascar but doesn't even know the name of the zebra.",
        "Brandon hallucinated a new chess piece, like a queen that can only move one square.",
        "Brandon claims to have a black belt, but its from the boy's department at Kohls.",
        "Brandon only knows the dry cereal guy living on Drury Lane.",
        "Brandon has invented 17 forms of metastatic cancer to date.",
        "Brandon believes Napoleon's Russian campaign was a strategic masterclass.",
        "Brandon has gotten mostly A's and a few B's on breathalyzer tests.",
        "Brandon beat a koala in a head to head duel the koala didn't know about.",
        "Brandon turns around and goes back upon encountering two roads diverging in a wood.",
        "Brandon always gives a standing ovation when the plane takes off.",
        "Brandon is under the impression McLovin learned to drive in Pennsylvania.",
        "Brandon thinks horseradish sauce was concocted by \"hardcore left-wing media pundits\".",
        "Brandon doesn't understand why cheaters have to eat so much pumpkin, but \"it is delicious\".",
        "Brandon buys two gallons of 2% milk and mixes them because he only drinks 4%.",
        "Brandon is an avid cubic-Neptuner.",
        "Brandon considers Nickleback's 2nd album, The State, to be more \"sensual \" than Curb, their 1st.",
        "Brandon thinks the prime meridian is latitudinal.",
        "Brandon wanted to be a debt collector specifically for \"impovershied single mothers\" growing up.",
        "Brandon once said the Shrek soundtrack is \"like no cap pretty mid skibidi rizzler\".",
        "Brandon brings wire cutters to karoke night because he doesn't like how excited people get.",
        "Brandon lives in a reality based in object impermanence.",
        "Brandon once received a speeding ticket for driving down an elementary school hallway.",
        "Brandon files complaints if the flight attendant isn't there within 45 seconds.",
        "Brandon thinks he is impervious to the Dunning-Kruger effect.",
        "Brandon has been banned from the Twilight subreddit on several accounts for being a Team Edward ultra.",
        "Brandon says Gilgamesh from Virgil's The Odyssey is the most Kafkaesque Shakesperean character.",
        "Brandon wants bird watching to require a commericial license.",
        "Brandon refers to his coworkers as \"chat\" during online meetings.",
        "Brandon only puts cream cheese in the hole of his bagels.",
        "Brandon watches Attack of the Clones for the \"heart-wrenching romantic dialogue\".",
        "Brandon has never found Waldo and no longer believes in his existence.",
        "Brandon wrote a sing-along musical sequel to Bambi where Thumper dies in a bear trap.",
        "Brandon haggles at the dollar store.",
        "Brandon bought an over the air high definition TV antenna for his Teletubbies onesie.",
        "Brandon thinks the second cut is deeper.",
        "Brandon brags about having a genetic predisposition to homochromia.",
        "Brandon tried to re-invigorate the Sneetch belly star market.",
        "Brandon installed a horizontal fireman's pole between his kitchen and foyer so he can get to the door faster.",
        "Brandon tried to go surfing with Charlie.",
    ];

    function bfactGen() {
        bfactsInt = Math.floor(Math.random() * bfacts.length);
        document.getElementById("bfact").innerHTML = 'Fact #' + (bfactsInt+1) + ': ' + bfacts[bfactsInt];
    }
</script>

<div class="card text-center mt-3 bg-rainbow">
<div class="card-header text-center bg-light">
    <h5>Brandon Ego Tracker</h5>
</div>
<div class="card-body" onclick="playSound('hero'); bfactGen();" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>25 Goals!</h2>
<h4 id="bfact">Fact #1: Brandon draws circles at a below-average first grader level.</h4>

<script>
    bfactGen();
</script>

</div>
</div>
</div>
</div>

<div class="card text-center mt-3 bg-mono">
<div class="card-header text-center bg-light">
    <h5>Tyler's Stormtrooper Impression</h5>
</div>
<div class="card-body" onclick="playSound('bad-day');" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>4 Point Blank Misses!</h2>
<p>P.S. 4, 5, 6, 3, R1, 1, 7, S, 2, 9, 8</p>

</div>
</div>
</div>
</div>


<div class="card text-center mt-3 bg-sunset">
<div class="card-header text-center bg-light">
    <h5>Trevor's Cumulative Hat Tricks / 3</h5>
</div>
<div class="card-body" onclick="playSound('scotland-the-brave');" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>22 Goals!</h2>

In the fields of orange,<br>
A knight with heart so bold,<br>
Trevor leads his team,<br>
With a story to be told.<br><br>

With a backward cap perched,<br>
And a sexy beard that gleams,<br>
He dances through defenders,<br>
Crushing all their dreams.<br><br>

Twenty-two goals this season,<br>
Each strike a fiery spark,<br>
The crowd erupts in cheers,<br>
As he ignites the dark.<br><br>

His spirit lifts the team,<br>
They find their strength anew,<br>
In every pass and tackle,<br>
Together they break through.<br><br>

The championship awaits,<br>
Their quest within their grasp,<br>
With unity and courage,<br>
They hold their fate, steadfast.<br><br>

In the final match they shine,<br>
Trevor leads them true,<br>
With skill and heart combined,<br>
They shall claim the title due.

</div>
</div>
</div>
</div>
