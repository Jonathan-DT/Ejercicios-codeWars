function to24hourtime(hour, minute, period) {
    if(period == "am"){
      if(hour == 12 && minute.toString().length == 1){
        return "000"+minute;
      }else if(hour == 12 && minute.toString().length == 2){
        return "00"+minute;
      }
      
      if(hour.toString().length == 1 ){
        salida = (hour * 100)+ minute;
        return "0"+salida;
      }else if(hour.toString().length == 2){
        salida = (hour * 100)+ minute;
        return salida.toString();
      }    
    }
    if(period == "pm"){
      if(hour == 12){
        salida = (hour*100)+minute;
        return salida.toString();
      }
      salida = ((hour + 12)*100) + minute
        return salida.toString();
    }
  }