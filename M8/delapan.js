
// Tugas 1
let nilaiAndii = 81;

if (nilaiAndii >= 91) {
  console.log("Grade A");
} else if (nilaiAndii >= 81) {
  console.log("Grade B");
} else if (nilaiAndii >= 71) {
  console.log("Grade C");
} else {
  console.log("Grade C");
}


let nilaiAndi = 81;
let grade = nilaiAndi >= 91 ? "A" : nilaiAndi >= 81 ? "B" : "C";
console.log(grade);


// Tugas 2
let buahYangDibawa = "Nangka";

switch (buahYangDibawa) {
  case "Chery":
    console.log("Buah yang didapatkannya adalah Chery");
    break;
  case "Nangka":
    console.log("Buah yang didapatkannya adalah Nangka");
    break;
  case "Salak":
    console.log("Buah yang didapatkannya adalah Salak");
    break;
  case "Salak dan Nangka":
    console.log("Buah yang didapatkannya adalah Salak dan Nangka");
    break;
  default:
    console.log("Nurudin tidak membeli buah apapun");
}

// Tugas 3

let saklar = undefined;

if (saklar) {
  console.log("Saklarnya hidup");
} else {
  console.log("Saklarnya mati");
}