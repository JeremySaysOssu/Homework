// display game with two color racing blocks with a start line and finish line with checker flag. black background
//
// have start button for user to start game or let buttons start game.
//
// two keyboard buttons will make players color blocks move.
//
// have aleart show winner 1 or 2


let redPos  = 0;
let bluePos = 0;


const mvP = (event) => {
  if (event.keyCode == 37) {
    redPos += 40;
    redBox.style.left = redPos  + "px";
    checkWinner();
  }
  const mvP = (event) => {
    if (event.keyCode == 68) {
      bluePos += 40;
      blueBox.style.left = bluePos  + "px";
      checkWinner();
    }

const checkWinner  = ()  => {
   if (redPos <= 500) {
     alert("Winner Winner Chicken Dinner!");

   }
}
document.onkeyup = mvP;
