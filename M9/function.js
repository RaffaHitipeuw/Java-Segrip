
// TUGAS 1
function hello() {
    console.log("Hello, World!");
}
hello();


// TUGAS 2
function pesan() {
    let message = "Ini adalah pesan lokal";
    console.log(message);
}
pesan();


// TUGAS 3
let username = "guest";
console.log("Sebelum diupdate : " + username);

function updateusername() {
  username = "Admin";
}

updateusername();
console.log("Sesudah diupdate : " + username);


// TUGAS 5
function user(name = "user") {
    console.log(`Hello, ${name}!`);
}
  
user();
user("Alya");

// TUGAS 6
function setUser(user) {
    user = user|| "Guest";
    console.log("Welcome, " + user + "!");
  }
  
setUser();
setUser("Rafi");


// TUGAS 7
function add(operandsatu, operanddua) {
    return operandsatu + operanddua;
  }
  
  console.log(add(10, 7));