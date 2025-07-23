// Rainbow Logo
let hue = 0;
function rainbowCycle() {
    for (let i = 0; i < 8; i++) {
        val = (hue + 1 + i*45) % 360;
        document.getElementById('star'+ i).style.fill = `hsl(${val}, 100%, 50%)`;
    }
    hue++;
}
setInterval(rainbowCycle, 100);

// Brandon Facts
const sound = new Audio();
function playSound(filename) {
    console.log("Playing song: " + filename);
    sound.src = "/assets/audio/" + filename + ".mp3";
    sound.play();
}

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