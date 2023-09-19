function spinWords(str){
    //TODO Have fun :)
    let palabras = str.split(" ")
    for(i=0; i<palabras.length;i++){
      if(palabras[i].length>4){
        palabras[i] = palabras[i].split("").reverse().join("");
      }
    }
     return palabras.join(" ");
  }