// variables
var note;
var noteXPosition = 200;
var fallSpeed = 0;
var interval = setInterval(updateCanvas,20);

// creates a note with the createNote function
function startGame(){
    gameCanvas.start();
    note = new createNote(30, 30, 10);
}

// creates the createNote function
function createNote(width, height, y) {
    this.width = width;
    this.height = height;
    this.y = y;
    this.x = NoteXPosition;

    //draw function
    this.draw = function() {
    ctx = gameCanvas.context;
    ctx.fillStyle = "pink";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    //fall function
    this.makeFall = function() {
        this.x += fallSpeed;
        fallSpeed += 0.1;
    }

    //creates a function that updates the canvas, making the note fall
    function updateCanvas(){
        ctx = gameCanvas.context;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
        note.makeFall();
        note.draw();
    }

    //creates a drum function
    function drum(width,height, y) {
        this.width = width;
        this.height = height;
        this.y = y;
    }

    //creates a stopNote function. Stops the note and resets the canvas when the note hits the drum
    this.stopNote = function() {
        var noteEnd = canvasWidth - this.Height;
        if (this.x > noteEnd) {
            this.x = noteEnd;
        }

        if (noteEnd = drum){
            updateCanvas();
        }
    }

}
