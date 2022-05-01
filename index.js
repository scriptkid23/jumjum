const height = window.innerHeight
let app, player, turtleShell;
let playerSheet = {};
let turtleSheet = {};

window.onload = function () {
    app = new PIXI.Application({
        width: 400,
        height: height,
        backgroundColor: 0x82b6ff
    });
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    let game = document.getElementById("game")
    game.appendChild(app.view)

    app.loader.add("ju", '/assets/idle.png')
    app.loader.add("shell", '/assets/shell.png')
    app.loader.load(doneLoading)
}

function doneLoading(e) {
    console.log("done")
    // createPlayerSheet();
    // createPlayer();
    createTurtleShellSheet();
    // createTurtleShell(200,200);
    createTurtleShell(100,300);
    // app.ticker.add(gameLoop)
}

function createTurtleShellSheet() {
    let ssheet = new PIXI.BaseTexture.from(app.loader.resources['shell'].url);
    let w = 40;
    let h = 40;

    turtleSheet['active'] = []
    for (let i = 1; i <= 3; i++) {
        turtleSheet['active'].push(new PIXI.Texture(ssheet, new PIXI.Rectangle(i * w, 0, w, h)))
    }
}

function createPlayerSheet() {
    let ssheet = new PIXI.BaseTexture.from(app.loader.resources['ju'].url);
    let w = 58;
    let h = 58;
    // 26 files of idle
    playerSheet['idle'] = []
    for (let i = 1; i <= 25; i++) {
        playerSheet['idle'].push(new PIXI.Texture(ssheet, new PIXI.Rectangle(i * w, 0, w, h)))
    }

}

function createTurtleShell(x, y) {
    turtleShell = new PIXI.AnimatedSprite(turtleSheet.active)
    turtleShell.scale.set(1.5)
    turtleShell.animationSpeed = 0.15;
    turtleShell.loop = true;
    turtleShell.x = x;
    turtleShell.y = y;
    app.stage.addChild(turtleShell)
    turtleShell.play()
}

function createPlayer() {
    player = new PIXI.AnimatedSprite(playerSheet.idle)
    player.anchor.set(0)
    player.animationSpeed = 0.15;
    app.stage.addChild(player)
    player.play()
}
let speed = 2.5
function gameLoop(data) {
    turtleShell.x = turtleShell.x + speed;
    console.log(turtleShell.x)
    if((turtleShell.x > app.view.width - 300) || turtleShell.x < 0){
        speed = -speed;
    }
    console.log("speed:", speed);
   
}