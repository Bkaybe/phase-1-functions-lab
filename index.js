// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  const destinationBlock = 42;

  if (pickup > destinationBlock) {
    return pickup - destinationBlock;
  } else {
    return destinationBlock - pickup;
  }
}

function distanceFromHqInFeet(pickup) {
  // constant for the length of a block in feet
  const distanceInFeet = distanceFromHqInBlocks(pickup);

  return distanceInFeet * 264;
}

function distanceTravelledInFeet(pickup, destinationBlock) {
  if (pickup > destinationBlock) {
    return (pickup - destinationBlock) * 264;
  } else {
    return (destinationBlock - pickup) * 264;
  }
}

function calculatesFarePrice(pickup, destinationBlock) {
  const totalFeetTravelled = distanceTravelledInFeet(pickup, destinationBlock);

  if (totalFeetTravelled <= 400) {
    return 0;
  } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
    const excessFeet = totalFeetTravelled - 400;
    return excessFeet * 0.02;
  } else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500) {
    return 25.0;
  } else {
    return "cannot travel that far";
  }
}
