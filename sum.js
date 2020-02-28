// The Summetion of all numbers in a Array

var numbers = [32, 43, 33, 53, 65, 75, 100];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    sum = sum + number;
}

console.log(sum);