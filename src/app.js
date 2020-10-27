const players = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
detailedPlayers = players.map(gg);
    function gg(players){
    var g={
        name:players[idx],
        strength:getRandomStrength,
        image: "images/super-"+(idx+1)+".png",
        type:(i%2)?"hero":"villian"
    };
return g;
}



// getting random strength
    function getRandomStrength() {
        return Math.ceil(Math.random() * 100);
    }

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment = detailedPlayers.map(gg1);
    function gg1(){
        let player=
        `<div class="player">
        <img src="${detailedPlayers.image}" alt="">
        <div class="name">${detailedPlayers.name}</div>
        <div class="strength">${detailedPlayers.strength}</div>
    </div>`
    
    if(detailedPlayers[idx].type==type){
        fragment=fragment+player;
    }
    return fragment;
}
     

    
    



// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(players));
}
