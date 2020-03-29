const text = "Hello world! I am here";
let count = 0;
for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if(char == " " && text[i - 1] != " "){
        count++;
    }
}
count++;

console.log(count);

