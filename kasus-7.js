let N = 20;

//proses
let FaktorBilangan = [];
for (let i = 1; i <= N; i++){
  if (N%i == 0){
    console.log(i);
    FaktorBilangan.push(i);
  }
}

//output
console.log(FaktorBilangan); //[ 1, 2, 4, 5, 10, 20 ]
FaktorBilangan[0] = 102102;
console.log(FaktorBilangan); //[ 102102, 2, 4, 5, 10, 20 ]