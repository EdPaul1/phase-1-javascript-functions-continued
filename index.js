// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("go hiking"));
const mondayWork = function(place = "go to the office"){
    return `This Monday, I will ${place}.`;

}
console.log(mondayWork("work from home"));

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  