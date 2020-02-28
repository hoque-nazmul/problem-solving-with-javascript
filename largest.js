// Find the largest Number from an Array

var marks = [44, 56, 75, 86, 23, 90];

var max = marks[0];

for (var i = 0; i < marks.length; i++) {
    var mark = marks[i];

    if(mark > max) {
        max = mark;
    }
}

console.log(max);