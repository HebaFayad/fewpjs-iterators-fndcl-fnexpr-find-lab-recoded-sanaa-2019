const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2016", result: "N/A"}
  
]
superbowlWin(record);

function superbowlWin(winer ){
  let wins;
  wins = winer.find( function(r) { return r.result === "W" });
  if(typeof res ==="undefined"){return res;}
  else{
    return res.year;
  }
  
}



