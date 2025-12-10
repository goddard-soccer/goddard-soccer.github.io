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
    ["Brandon draws circles at a below-average first grader level.", 4],
    ["Brandon spits out the sunflower seeds and eats the shells.", 1],
    ["Brandon swapped the water pipes out for lead ones because he likes the taste.", 2],
    ["Brandon doesn't think Shania Twain is the greatest country singer of all time.", 3],
    ["Brandon puts one chopstick in each hand and uses the wide end.", 3],
    ["Brandon doesn't like dogs because they \"want to hang out too much\".", 3],
    ["Brandon thinks Allie should have stayed with Lon instead choosing Noah.", 4],
    ["Brandon tapes every Dane Cook stand up routine on his VCR.", 2],
    ["Brandon can't pronounce basic words like \"water\" and \"Florida\".", 3],
    ["Brandon totaled a car in a driveway.", 5],
    ["Brandon thinks we should move the nation's capitol to Des Moines.", 3],
    ["Brandon was glad Jeopardy moved on from Alex Trebek.", 4],
    ["Brandon celebrates on Harambe rememberance day.", 3],
    ["Brandon shuffles playing cards face up.", 4],
    ["Brandon holds computer mice with two hands.", 2],
    ["Brandon complains that Sesame Street \"isn't political enough\".", 4],
    ["Brandon brings his own sand to the beach because \"beach sand is too coarse\".", 2],
    ["Brandon thinks the fuchsia crayons have a more refined taste than the sea green crayons.", 5],
    ["Brandon doesn't sing happy birthday to children under 10.", 4],
    ["Brandon orders juice boxes at beer gardens.", 1],
    ["Brandon doesn't think Hakuna Matata is a wonderful phrase.", 2],
    ["Brandon maintains that Pokemon should be pay-to-win.", 1],
    ["Brandon uses hydroponics to grow mosquito larvae.", 2],
    ["Brandon protested the release of Harry Potter and the Deathly Hallows.", 2],
    ["Brandon didn't think McCarthyism involved any unlawful persecution or fear mongering.", 3],
    ["Brandon wishes Halloween was always held on a school night.", 3],
    ["Brandon is happy the polar ice caps are melting so that \"Santa has no home\".", 4],
    ["Brandon advocates against the installation of wheelchair accessibility ramps.", 3],
    ["Brandon licks his fingers after every cheeseball, but only when sharing.", 4],
    ["Brandon was caught trying to sabatoge a Super Soaker manufacturing plant.", 2],
    ["Brandon taxidermies deer legs to \"trample his neighbor's flower garden without arousing suspicion\".", 5],
    ["Brandon once brought a ladle to a knife fight.", 2],
    ["Brandon thinks the Golgi apparatus is the powerhouse of the cell.", 2],
    ["Brandon loves Dreamworks Madagascar but doesn't even know the name of the zebra.", 4],
    ["Brandon hallucinated a new chess piece, like a queen that can only move one square.", 3],
    ["Brandon claims to have a black belt, but its from the boy's department at Kohls.", 4],
    ["Brandon only knows the dry cereal guy living on Drury Lane.", 4],
    ["Brandon has invented 17 forms of metastatic cancer to date.", 1],
    ["Brandon believes Napoleon's Russian campaign was a strategic masterclass.", 2],
    ["Brandon has gotten mostly A's and a few B's on breathalyzer tests.", 4],
    ["Brandon beat a koala in a head to head duel the koala didn't know about.", 4],
    ["Brandon turns around and goes back upon encountering two roads diverging in a wood.", 3],
    ["Brandon always gives a standing ovation when the plane takes off.", 3],
    ["Brandon pretends to know McLovin's last name.", 3],
    ["Brandon buys two gallons of 2% milk and mixes them because he only drinks 4%.", 4],
    ["Brandon is an avid cubic-Neptuner.", 2],
    ["Brandon considers Nickleback's 2nd album, The State, to be more \"sensual \" than Curb, their 1st.", 2],
    ["Brandon thinks the prime meridian is latitudinal.", 3],
    ["Brandon wanted to be a debt collector specifically for \"impoverished single mothers\".", 4],
    ["Brandon once said the Shrek soundtrack is \"like no cap pretty mid skibidi rizzler\".", 1],
    ["Brandon brings wire cutters to karoke night because he doesn't like how excited people get.", 1],
    ["Brandon lives in a reality based in object impermanence.", 4],
    ["Brandon once received a speeding ticket for driving in an elementary school hallway.", 4],
    ["Brandon files complaints if the flight attendant isn't there within 20 seconds.", 4],
    ["Brandon thinks he is impervious to the Dunning-Kruger effect.", 4],
    ["Brandon has multiple bans from the Twilight subreddit for being a Team Edward ultra.", 3],
    ["Brandon says Gilgamesh from Virgil's The Odyssey is the most Kafkaesque Shakesperean character.", 1],
    ["Brandon wants bird watching to require a commercial license.", 3],
    ["Brandon refers to his coworkers as \"chat\" during online meetings.", 2],
    ["Brandon only puts cream cheese in the hole of his bagels.", 1],
    ["Brandon watches Attack of the Clones for the \"heart-wrenching romantic dialogue\".", 2],
    ["Brandon has never found Waldo and no longer believes in his existence.", 3],
    ["Brandon wrote a sing-along musical sequel to Bambi where Thumper dies in a bear trap.", 5],
    ["Brandon haggles at the dollar store.", 3],
    ["Brandon bought an over the air high definition TV antenna for his Teletubbies onesie.", 4],
    ["Brandon thinks the second cut is deeper.", 3],
    ["Brandon brags about having a genetic predisposition to homochromia.", 4],
    ["Brandon tried to re-invigorate the Sneetch belly star market.", 3],
    ["Brandon installed a horizontal fireman's pole between his kitchen and foyer so he can get to the door faster.", 2],
    ["Brandon tried to go surfing with Charlie.", 5],
    ["Brandon had an imaginary pet rock but it ran away.", 4],
    ["Brandon has seen the Barbie movie 873 times, but he still feels he is not Kenough.", 2],
    ["Brandon wears bucket hats backward so \"people will think he's cool\".", 1],
    ["Brandon was rejected from Blue Man Group tryouts for not following the color guidelines.", 4],
    ["Brandon doesn't understand why every number system is technically base 10.", 3],
    ["Brandon can't figure out what Scotty doesn't know.", 3],
    ["Brandon wouldn't give a Honda Civic to know the meaning of Stonehenge.", 3],
    ["Brandon struggles with lyrical analysis of Darude Sandstorm.", 3],
    ["Brandon is saving his V-Bucks for a Miss Piggy leopard print skin.", 1],
    ["Brandon holds the Guinness World Record for manliest tears.", 2]
];

function bfactGen() {
    bfactsInt = Math.floor(Math.random() * bfacts.length);
    document.getElementById("bfact").innerHTML = 'Fact #' + (bfactsInt+1) + '<br>' + bfacts[bfactsInt][0] + '<br><h2>' + '★'.repeat(bfacts[bfactsInt][1]) + '</h2>';
}