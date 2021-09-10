//program prima atau tidak
//bilangan prima itu pasti hanya punya dua faktor 
// 5 -> 1 5 -> faktor 2
// 8 -> 1 2 4 8 -> faktor 4
// 5 itu bilangan prima dan 8 bukan

let N = 22;

let totalFaktor = 0;

for (let i = 1; i <= N; i++){
  if(N%i == 0) {
    totalFaktor = totalFaktor + 1;
  }
}
//output
if (totalFaktor == 2){
  console.log("Bilangan Prima");
}else{
  console.log("Bukan Bilangan Prima");
}