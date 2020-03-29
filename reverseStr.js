const text = "Hello world! I am here";

let reverseStr = '';

for (let i = 0; i < text.length; i++) {
    const char = text[i];
    reverseStr = char + reverseStr;
}
console.log(reverseStr);