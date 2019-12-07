const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2016", result: "N/A"}
  
]
superbowlWin(record);

function superbowlWin(arg){
  let win=arg.find(function(item){
    let winer=item.result==="W";
    return winer
  })
console.log(win.year)
  if(typeof win ==="undefined"){return win;}
  else{
    return win.year;
  }
}
  // if() {return item.year }
  // else{return console.log("undefined") }
    
 



