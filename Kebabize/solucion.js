function kebabize(str) {
    let num = str.replace(/[0-9]/g,'')
    str = num;
    let found = str.match(/[A-Z]/g);
    let spl = str.split(/[A-Z]/g);
  
    let salida ="";
    for(i=0; i<spl.length; i++){
      if(i == spl.length-1){
        salida+=spl[i];
      }else{
        if(spl[i] == ""){
          if(i == 0){
            salida+=found[i].toLowerCase();
          }else{
            salida+=spl[i]+"-"+found[i].toLowerCase();
          }         
        }else{
           salida+=spl[i]+"-"+found[i].toLowerCase();
        }     
      }    
    }
    return salida;
  }