var userTemp = prompt("Please enter a temperature.");
console.log(userTemp)
var userTempUnit = prompt("Please enter a unit of temperature (Fahrenheit, Celsius, or Kelvin).");
console.log(userTempUnit)

converted_temp_1 = ((userTemp - 32)*(5/9));
console.log(converted_temp_1)

converted_temp_2 = ((userTemp + 459.67)*(5/9));
console.log(converted_temp_2)

var fahrenheitTemps = [userTemp, converted_temp_1, converted_temp_2];


if (userTempUnit === 'fahrenheit') {

} else null
