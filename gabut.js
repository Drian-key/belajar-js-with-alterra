//drian pratama

let Hukum = "Saya tidak akan mengulangi kesalahan saya lagi yang ke";

for (let i = 1; i <= 1000; i++){
  setTimeout(function(){
    console.log(Hukum + i);
  }, i+100);
}