let n = 6;
let star = "";

for (let i = n; i >= 1; i--) {
  for (let j = 0; j < i; j++) {
    if (i === n || i === 1 || j === 0 || j === i - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  star += "\n";
}
console.log(star);
