function initials(n){
    let spl = n.split(" ");
    let salida="";
    for(i = 0 ; i<spl.length; i++){
        if(i != spl.length-1){
          salida += (Array.from(spl[i])[0]).toUpperCase()+".";        
        }else{        
          salida +=(Array.from(spl[i])[0]).toUpperCase()+spl[i].substring(1);
          return salida;
        }
    }
    
  }