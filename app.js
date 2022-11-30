// task 1

let arrFilter = [-1, 2, 3, -3, 16, -32, 41];

let filtered = arrFilter.filter((number)=> number > 0);

console.log(filtered)

let sumNum = filtered.reduce((acc, curr)=>{
    return acc+=curr
},0)

console.log(sumNum)


// task 2

let names = ["Nick","Leo","Thomas","Leo","Nick","Leo", "Valeri"];

let reduceNames = names.reduce((acc,curr)=>{
    if(acc[curr]) {
        acc[curr] +=1
    } else {
        acc[curr] = 1
    } 
    return acc
},{})
console.log(reduceNames)


// task 3

class Car {
    constructor(brand, model, speed=0) {
        this.brand=brand;
        this.model=model;
        this.speed=speed;
        this.motion="Car is not moving"
    }
    checkMotion(){
        if(this.speed){
            return this.motion = "Car is moving"
        } else {
            return this.motion 
        }
    }
    accelerate(carSpeed){
       return this.speed+=carSpeed
    }
    brake(brakeSpeed){
       if((this.speed-brakeSpeed)>=0){
            return this.speed=this.speed-brakeSpeed
       } else{
        return this.speed=0
       }
    }
    emergency_brake(){
        return this.speed=0
    }
    status(){
        return console.log(`მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია ${this.checkMotion()}`)
    }

}

const firstCar = new Car("Ford","Mustang", 120)
console.log("Actual Speed", firstCar.speed)
console.log("brake", firstCar.brake(70))
console.log("emergencyBreak", firstCar.emergency_brake())
console.log("accelerate", firstCar.accelerate(80))
console.log("status", firstCar.status())


// task 4
// ამის გაკეთება გამიჭირდა, promise არ ვიცი კარგად.