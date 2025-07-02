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
<div class="mb-2" style="text-align: center; height: 20vh">
{% include logo.svg %}
</div>
<h4><strong class="text-rainbow">TIS THE SEASON FOR SOCCER</strong></h4>
Fall sign ups are live, and there will be free pick up games during the summer break, which we will announce on the <strong class="text-rainbow">[soccer Teams channel](https://teams.microsoft.com/l/team/19%3ag6UYrqOstWyW6S9Q-_jaSfmMqjkvoZauibWuiVI-HcY1%40thread.tacv2/conversations?groupId=5a25d439-e73f-44bf-9232-5bc6fd755435&tenantId=7005d458-45be-48ae-8140-d43da96dd17b)</strong>. The Fall season will start after July 4th and end in September!
</div>
<div class="row px-3 ">
<div class="col-md-12 mt-3">
    <a type="button" class="btn bg-button col-6" href="https://forms.gle/a3VAYTwmPiTKNZ4L9">Fall Sign Up Form</a>
</div>
</div>
</div>
</div>

<!-- begin goal of the week -->
<!-- <div class="card text-center mt-3 bg-theme">
<div class="card-header text-center bg-light">
    <h5>Goal of the Week</h5>
</div>
<div class="card-body">
<div class="row text-white">
    <h5 class="m-0">Text</h5>
</div>
</div>
</div> -->

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
        <a href="/rosters#green">
            <img src="/images/teams/green.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters#orange">
            <img src="/images/teams/orange.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters#purple">
            <img src="/images/teams/purple.jpg" class="img-fluid rounded"/>
        </a>
    </div>
    <div class="col-3 my-auto">
        <a href="/rosters#red">
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
        "Brandon pretends to know McLovin's last name.",
        "Brandon buys two gallons of 2% milk and mixes them because he only drinks 4%.",
        "Brandon is an avid cubic-Neptuner.",
        "Brandon considers Nickleback's 2nd album, The State, to be more \"sensual \" than Curb, their 1st.",
        "Brandon thinks the prime meridian is latitudinal.",
        "Brandon wanted to be a debt collector specifically for \"impoverished single mothers\" growing up.",
        "Brandon once said the Shrek soundtrack is \"like no cap pretty mid skibidi rizzler\".",
        "Brandon brings wire cutters to karoke night because he doesn't like how excited people get.",
        "Brandon lives in a reality based in object impermanence.",
        "Brandon once received a speeding ticket for driving in an elementary school hallway.",
        "Brandon files complaints if the flight attendant isn't there within 45 seconds.",
        "Brandon thinks he is impervious to the Dunning-Kruger effect.",
        "Brandon has multiple bans from the Twilight subreddit for being a Team Edward ultra.",
        "Brandon says Gilgamesh from Virgil's The Odyssey is the most Kafkaesque Shakesperean character.",
        "Brandon wants bird watching to require a commercial license.",
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
        "Brandon had an imaginary pet rock but it ran away.",
        "Brandon has seen the Barbie movie 873 times, but he still feels he is not Kenough.",
        "Brandon wears bucket hats backward so \"people will think he's cool\".",
        "Brandon was rejected from Blue Man Group tryouts for not following the color guidelines.",
        "Brandon doesn't understand why every number system is technically base 10.",
        "Brandon can't figure out what Scotty doesn't know.",
        "Brandon wouldn't give a Honda Civic to know the meaning of Stonehenge.",
        "Brandon struggles with lyrical analysis of Darude Sandstorm.",
        "Brandon is saving his V-Bucks for a Miss Piggy leopard print skin.",
        "Brandon holds the Guinness World Record for manliest tears.",
    ];

    function bfactGen() {
        bfactsInt = Math.floor(Math.random() * bfacts.length);
        document.getElementById("bfact").innerHTML = 'Fact #' + (bfactsInt+1) + ': ' + bfacts[bfactsInt];
    }

    let hue = 0;
    function rainbowCycle() {
        for (let i = 0; i < 8; i++) {
            val = (hue + 1 + i*45) % 360;
            document.getElementById('star'+ i).style.fill = `hsl(${val}, 100%, 50%)`;
        }
        hue++;
    }
    setInterval(rainbowCycle, 100);
</script>

<div class="card text-center mt-3 bg-rainbow">
<div class="card-header text-center bg-light" onclick="playSound('hero')">
    <h5>Brandon Ego Tracker</h5>
</div>
<div class="card-body" onclick="bfactGen()" style="user-select: none; -moz-user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;" markdown=1>
<div class="d-flex justify-content-center">
<div class="overflow-auto w-100">

<h2>20 Goals!</h2>
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

<h2>3 Point Blank Misses!</h2>
<p>P.S. 4, 5, 6, 3, R1, 1, 7, S, 2, 9, 8</p>

</div>
</div>
</div>
</div>

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
