function changeCase(identifier, targetCase){
    let patron=/([A-Z]|[_]|[-])/g;
    let found = identifier.match(patron);
    let tipo=-1;
    console.log("ENTRADA !! :"+identifier + " TARGET: " + targetCase);
    if(identifier == "" ){
      return "";
    }
    if(found == null){
      return identifier;
    }
    let camel=0,kebab=0,snake=0;
    for(i=0;i<found.length;i++){
        if(found[i]=="-"){
          kebab++;
        }else if(found[i]=="_"){
          snake++;
        }else{
          camel++;
        }
    }
    let busqueda;
    let pattern="";
    if(camel!=0 && snake ==0 && kebab==0){
      tipo = 0;
      pattern = /[A-Z]/g;
      busqueda = identifier.match(pattern);
    }else if(camel==0 && snake !=0 && kebab==0){
      tipo = 1;
      pattern = /[_]/g;
      busqueda = identifier.match(pattern);
    }else if(camel==0 && snake ==0 && kebab!=0){
      tipo=2;
      pattern = /[-]/g;
      busqueda = identifier.match(pattern);
    }else {
      return undefined;
    }
    console.log("datos de Busqueda: ",busqueda);
    console.log("tipo de entrada: ", tipo);
    
    switch(targetCase){
        case "snake":
        if(tipo == 1){
            return identifier;
          }
          let a = identifier.split(pattern);
        console.log(a);
        //console.log(a.length)
        let salida ="";
        for(i =0;i<a.length;i++){
          if(i == a.length-1){
            salida+=a[i];
          }else{
            if(tipo ==0 ){
              salida +=a[i]+"_"+found[i].toLowerCase();
            }else{
              salida +=a[i]+"_";
            }
             
          }     
        }      
        console.log("SALIDA SNAKE: "+salida);
        return salida;
        break;
        case "camel":
          if(tipo == 0){
            return identifier;
          }
           let b = identifier.split(pattern);
          console.log(b);
        let sal="";
         for(i =0;i<b.length;i++){
          if(i == 0){
            sal+=b[i];
          }else{
             sal +=(Array.from(b[i])[0]).toUpperCase() + b[i].substring(1);
          }     
        } 
         console.log("Salida CAMEL : "+sal)
        return sal;
        break;
        case "kebab":
        if(tipo == 2){
            return identifier;
          }
          let c = identifier.split(pattern);
          //console.log(c);
        let sa ="";
        for(i =0;i<c.length;i++){
          if(i == c.length-1){
            sa+=c[i];
          }else{
            if(tipo == 0){
             sa +=c[i]+"-"+busqueda[i].toLowerCase(); 
            }else
             sa +=c[i]+"-";
          }     
        }  
        console.log("Salida KEBAB : "+sa)
        return sa;
        break;
        default:
        return undefined;
    }
    
  }