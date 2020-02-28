// Solution - 1
var friend = "Anayet";
var anotherFriend = "Towhid";

console.log("Before Swap: the name of friend is ", friend , " & Another friend is ",anotherFriend);

var middleMan = friend;
var friend = anotherFriend;
var anotherFriend = middleMan;

console.log("After Swap: the name of friend is ", friend , " & Another friend is ",anotherFriend);

// Solution - 2
var std = "Jahid";
var anotherStd = "Fahad";

console.log("Before Swap: Student name is ", std , " & Another Student name is ",anotherStd);

[std, anotherStd] = [anotherStd, std];

console.log("After Swap: Student name is ", std , " & Another Student name is ",anotherStd);

// Solution - 3

var x = 3; 
var y = 5;

console.log("Before Swap: the value of x is ", x , " & the value of y is : ", y);

var z = x + y;
x = z - x;
y = z - y;

console.log("After Swap: the value of x is ", x , " & the value of y is : ", y);