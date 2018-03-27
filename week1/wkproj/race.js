// display game with two color racing blocks with a start line and finish line with checker flag. black background
//
// have start button for user to start game or let buttons start game.
//
// two keyboard buttons will make players color blocks move.
//
// have aleart show winner 1 or 2

//  allows me to set the name to a value.
let redPos  = 0;
let bluePos = 0;
let redbox = document.getElementById('redbox');
let bluebox = document.getElementById('bluebox');

//
const mvP = (event) => {
  if (event.keyCode == 37) {
    redPos += 40;
    redbox.style.left = redPos + "px";
    checkWinner();
  }
}
    if (event.keyCode == 68) {
      bluePos += 40;
      bluebox.style.left = bluePos + "px";
      checkWinner();
    }

const checkWinner  = ()  => {
   if (redPos <= 500) {
     alert("Winner Winner Chicken Dinner!");
   }

   const checkWinner  = ()  => {
      if (bluePos <= 500) {
        alert("Winner Winner Chicken Dinner!");

        }
    }
}
document.onkeyup = mvP;
