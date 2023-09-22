function generateHashtag (str) {
    let spl = str.split(" ");
    spl = spl.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});;
    
    if( spl[0] == String.empty){
      return false;
    }
    let salida ="";
    for(i=0;i<spl.length;i++){
       salida += spl[i].charAt(0).toUpperCase()+ spl[i].substring(1);
    }
    if(salida.length >=140){
      return false;
    }
    return '#'+salida;  
  }