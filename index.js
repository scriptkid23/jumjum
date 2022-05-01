const height = window.innerHeight
let app, player;
let playerSheet = {};
window.onload = function(){
    app = new PIXI.Application({
        width:400,
        height:height,
        backgroundColor: 0x000
    });
    let game = document.getElementById("game")
    game.appendChild(app.view)
    
    app.loader.add("ju",'/assets/idle.png')
    app.loader.load(doneLoading)
}

function doneLoading(e){
    console.log("done")
    createPlayerSheet();
    createPlayer();
    // app.ticker.add(gameLoop)
}
function createPlayerSheet(){
    console.log(app.loader.resources['ju'].url)
    let ssheet = new PIXI.BaseTexture.from(app.loader.resources['ju'].url);
    let w = 58;
    let h = 58;
    // 26 files of idle
    playerSheet['idle'] = []
    for(let i = 1; i <= 20; i++){
        playerSheet['idle'].push(new PIXI.Texture(ssheet, new PIXI.Rectangle(i*w, 0,w,h)))
    }
   
    console.log(playerSheet)
}
function createPlayer() {
    player = new PIXI.AnimatedSprite(playerSheet.idle)
    player.animationSpeed = 0.25;
    // player.loop = true;
    app.stage.addChild(player)
    player.play()
}
function gameLoop(){

}