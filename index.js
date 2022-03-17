function scuberGreetingForFeet(ride){
  let result;
  if ( ride <= 400){
    result = 'This one is on me!'
  }
  else if ( ride > 2500){
    result = 'No can do.'
  }
  else if ( ride > 2000){
    result = 'I will gladly take your thirty bucks.'
  }
  return result;
}
console.log (scuberGreetingForFeet(2001))

function ternaryCheckCity(city){
const canIGo = city === 'NYC' ? 'Ok, sounds good.': 'No go.'
return canIGo;} 
console.log (ternaryCheckCity('NYC'))

function switchOnCharmFromTip(tip){
  let charm;
  switch (tip){
case 'generous' : charm = "Thank you so much."
  break;
case 'not as generous' : charm = "Thank you."
  break;
default : charm = "Bye."} return charm;}