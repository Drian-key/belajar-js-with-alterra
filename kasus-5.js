function cekBilanganPrima(N) {
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
}

cekBilanganPrima(7);
cekBilanganPrima(7);
cekBilanganPrima(11);
cekBilanganPrima(100);