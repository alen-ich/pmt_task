// 1 задание
// объявление класса Auto с основными свойствами свойствами и методами
class Auto {
  constructor(brand, model, year, horsePow, gearType, color, fuelVol) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.horsePow = horsePow;
    this.gearType = gearType;
    this.color = color;
    this.fuelVol = fuelVol;
  }

  //метод для старта или остановки авто
  autoState(keyState) {
    if (keyState == "in") {
      console.log("The auto is started and ready to move.");
    } else if (keyState == "out") {
      console.log("The auto is stopped and can't move.");
    } else {
      console.log("Do you have a key?");
    }
  }

  autoMove(gearSet) {
    if (gearSet == "D") {
      console.log("The auto is ready to move forward.");
    } else if (gearSet == "B") {
      console.log("The auto is ready to move backwards.");
    } else if (gearSet == "P") {
      console.log("The auto is ready to be parked.");
    } else {
      console.log("You need to change gear set.");
    }
  }

  //метод для вычисления кол-ва топлива
  autoFuel(maxDist) {
    let fuelRes = (this.fuelVol / maxDist) * 100;
    return fuelRes;
  }

  // метод для вычисления возраста авто
  autoAge() {
    let date = new Date();
    let ageRes = date.getFullYear() - this.year;
    return ageRes;
  }
}

// тест класса Auto
let testAuto = new Auto("Toyota", "Camry", 2018, 200, "Automatic", "Black Onyx", 70);
testAuto.autoState("in");
testAuto.autoState("out");
testAuto.autoState(12);
testAuto.autoMove("P");
console.log("My " + testAuto.brand + " " + testAuto.model + " consumes " + testAuto.autoFuel(256) + " liters per 100 km.");
console.log("My " + testAuto.brand + " " + testAuto.model + " is " + testAuto.autoAge() + " years old.");



// 2 задание
/* функция принимает две строки в качестве аргументов
и проверяет наличие символа из первой строки во второй */
function containChar(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) == -1) { // метод indexOf возвращает -1 если символ не появляется 
      return false; // если хотя бы один символ не был найден, функция прекращает работу и возвращает false
    }
  }
  return true; // если все символы были найдены, функция возвращает true
}

//тест функции containChar
let str1 = "abcd";
let str2 = "cbab";
console.log(containChar(str1, str2));

let str3 = "abc";
let str4 = "cba";
console.log(containChar(str3, str4));

let str5 = "abcd";
let str6 = "cbadda";
console.log(containChar(str5, str6));
