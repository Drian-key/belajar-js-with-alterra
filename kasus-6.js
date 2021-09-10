function cekBilanganPrima(N) {
      let totalFaktor = 0;

      for (let i = 1; i <= N; i++){
        if(N%i == 0) {
          totalFaktor = totalFaktor + 1;
        }
      }
      //output
      if (totalFaktor == 2){
        return "Bilangan Prima" ;
      }else{
        return "Bukan Bilangan Prima";
      }
}

console.log(cekBilanganPrima(7));
console.log(cekBilanganPrima(7));
console.log(cekBilanganPrima(11));
console.log(cekBilanganPrima(700));