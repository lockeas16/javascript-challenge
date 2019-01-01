// grid definition
var movementGrid = {
// grid starts at 0 
  limitX: 9,
  limitY: 9
};

// rover definition
var rover = {
  // default direction: North
  direction: "N",
  positionX: 0,
  positionY: 0
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
    };
    console.log(msg);
    return rover.direction;
}

function moveForward(rover, movementGrid){
  var msg="moveForward was called";
  switch (rover.direction) {
//  Decrement Y position (it moves one square up)
    case "N":
      if (rover.positionY > 0){
        rover.positionY--;
      }else{
        msg="movement not possible, off-limits!";
      };
      break;
  
//  Increment X position (it moves one square right)
    case "E":
      if (rover.positionX < movementGrid.limitX){
        rover.positionX++;
      }else{
        msg="movement not possible, off-limits!";
      };
      break;
  
//  Increment Y position (it moves one square down)
    case "S":
      if (rover.positionY < movementGrid.limitY){
        rover.positionY++;
      }else{
        msg="movement not possible, off-limits!";
      };
      break;
  
//  Decrement X position (it moves one square left)
    case "W":
      if (rover.positionX > 0){
        rover.positionX--;
      }else{
        msg="movement not possible, off-limits!";
      };
      break;
  
    default:
      msg="Invalid direction!";
  };

  console.log(msg);
  return "Current position: [" + rover.positionX + "," + rover.positionY + "]";
}
