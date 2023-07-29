console.log(`..................Assignment -1..........................`);
function  monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`${month}- January`);
      break;
    case 2:
      console.log(`${month}- Feb`);
      break;
    case 3:
      console.log(`${month}- March`);
      break;
    case 4:
      console.log(`${month}- April;`);
      break;
    case 5:
      console.log(`${month}- May`);
      break;
    case 6:
      console.log(`${month}- Jun`);
      break;
    case 7:
      console.log(`${month}- July`);
      break;
    case 8:
      console.log(`${month}- Augest`);
      break;
    case 9:
      console.log(`${month}- Sept`);
      break;
    case 10:
      console.log(`${month}- October`);
      break;
    case 11:
      console.log(`${month}- November`);
      break;
    case 12:
      console.log(`${month}- December`);
      break;
    default:
      console.log(`${month} -Entre valid input Between 1-12`);
      break;
      console.log(`End of Switch Case`);
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
