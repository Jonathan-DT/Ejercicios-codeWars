function charConcat(test){
    let separar = test.split("");
    let mid;
    console.log(separar);
    if(test.length%2 != 0 ){
       mid = parseInt(test.length/2);
      //console.log("impar",mid);
      separar.splice(mid,1);
    }
    console.log(separar);
    let fin = separar.length-1;
    let salida="";
    //console.log(fin);
    
    for (let i=0; i < separar.length/2; i++){
      salida+= separar[i]+separar[fin]+(i+1).toString();
      fin -= 1;
    }
    
    //console.log("SAlida: "+salida);
    
    return salida;
  }