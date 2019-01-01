// rover definition
var rover = {
  // default direction: North
  direction: "N"
};


function turnLeft(rover){
  var msg="turnLeft was called!";
// directions evaluation  
  switch (rover.direction) {
    case "N":
//    now it faces west 
      rover.direction = "W";
      break;

    case "W":
//    now it faces south 
      rover.direction = "S";
      break;

    case "S":
//    now it faces east 
      rover.direction = "E";
      break;
  
    case "E":
//    now it faces north 
      rover.direction = "N";
      break;
  
    default:
      msg="Invalid direction!";
    }
    console.log(msg);
    return rover.direction;
}

function turnRight(rover){
  var msg="turnRight was called!";
  // directions evaluation  
  switch (rover.direction) {
    case "N":
//    now it faces east 
      rover.direction = "E";
      break;

    case "E":
//    now it faces south 
      rover.direction = "S";
      break;

    case "S":
//    now it faces west
      rover.direction = "W";
      break;
  
    case "W":
//    now it faces north 
      rover.direction = "N";
      break;
  
    default:
      msg="Invalid direction!";
    }
    console.log(msg);
    return rover.direction;
}

function moveForward(rover){
  console.log("moveForward was called");
}
