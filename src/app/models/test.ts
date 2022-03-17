interface Car {
  name: string;
  model: number;
  brand: string;
}

let noOfCars = 0;

function buildCar(): Car {
  let car: Car = {
    name: 'Car1',
    model: 2002,
    brand: 'Renault',
  };

  noOfCars++;

  return car;
}

let car1 = buildCar();
let car2 = buildCar();
let car3 = buildCar();
let car4 = buildCar();

console.log(`${noOfCars} cars have been created`);
