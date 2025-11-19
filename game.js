var note;
var noteYPosition = 200;

function startGame(){
    gameCanvas.start();
    note = new createNote(30, 30, 10);
}

function createNote(width, height, x) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = NoteYPosition;

    ctx = gameCanvas.context;
    ctx.fillStyle = "pink";
    ctx.fillRect(this.x, this.y, this.width, this.height);
}