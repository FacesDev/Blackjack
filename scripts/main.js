/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

var faceCards = ["Q", "J", "K"];

function handValue(hand) {
  var total =0;
  var ace = 0;

  for (var i = 0; i < hand.length; i++) {
    if (faceCards.indexOf(hand[i]) != -1)  {
      total += 10;
    }
    else if (hand[i] === 'A') {
      total += 11
      ace+=1
    }
    else {
      total = parseInt(hand[i]) + total;
    }
  }
  while (total >= 21) {
  if (ace >= 1){
    total -=10;
    ace -=1;
  }


}

  console.log(total);
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
