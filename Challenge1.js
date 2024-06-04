const carDetails = {
  S: { seats: 5, cost: 5000 },
  M: { seats: 10, cost: 8000 },
  L: { seats: 15, cost: 12000 },
};

function getOptimizedRental(numSeats) {
  // initialize variables
  let Car = null;
  let Cost = Infinity;
  let Quantity = 0;

  for (const carType in carDetails) {
    const car = carDetails[carType];
    const quantity = Math.ceil(numSeats / car.seats);


    const totalCost = car.cost * quantity;
    if (totalCost < Cost || (totalCost === Cost && quantity < Quantity)) {
      Car = carType;
      Cost = totalCost;
      Quantity = quantity;
    }
  }

  return ` ${Car} x ${Quantity} \nTotal = PHP ${Cost}`;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Please input number (seat): ', (numSeats) => {
  const result = getOptimizedRental(parseInt(numSeats));
  console.log(result);
  readline.close();
});

