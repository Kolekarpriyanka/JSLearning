var dayOfweeek = function (day) {
  switch (day) {
    case 1:
      console.log(`${day}-Monday`);
      console.log(` Monday is the starting day of Week`);
      break;
    case 2:
      console.log(`${day}-tuesday`);
      break;
    case 3:
      console.log(`${day}-wed`);
      break;
    case 4:
      console.log(`${day}-thursday`);
      break;
    case 5:
      console.log(`${day}-friday`);
      break;
    case 6:
      console.log(`${day}-sat`);
      break;
    case 7:
      console.log(`${day}-sunday`);
      break;
    default:
        console.log( ` ${day} -invalid input`);
      break;
  }
  console.log(`End of switch case`);
};
dayOfweeek(2);
dayOfweeek(7);
dayOfweeek(14);
dayOfweeek(9);
dayOfweeek(100);
dayOfweeek(null);
dayOfweeek(undefined);
