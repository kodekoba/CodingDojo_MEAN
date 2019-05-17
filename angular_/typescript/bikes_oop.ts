class Bike {
    price: number;
    max_speed: number;
    miles: number;
  
    constructor(price: number, max_speed: number) {
      this.price = price;
      this.max_speed = max_speed;
      this.miles = 0;
    }
    displayInfo() {
      return ("Price: " + this.price + ", Max speed: " + this.max_speed + ", Miles: " + this.miles);
    }
    ride() {
      this.miles += 10;
      console.log("Riding..");
      return this;
    }
    reverse() {
      // to prevent negative miles you could just have an if check here
      this.miles -= 5;
      console.log("Reversing..");
      return this;
    }
  }
  
  
  let schwinn = new Bike(200, 30);
  let pinarello = new Bike(500, 40);
  let trek = new Bike(180, 22);
  
  console.log(schwinn.ride().ride().ride().reverse().displayInfo());
  console.log(pinarello.ride().ride().reverse().reverse().displayInfo());
  console.log(trek.reverse().reverse().reverse().displayInfo());