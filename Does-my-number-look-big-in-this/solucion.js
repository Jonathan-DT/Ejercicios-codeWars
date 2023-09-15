function narcissistic(value) {
    let spl = (value.toString()).split("");
    let total = 0;
    for(let i=0;i<spl.length;i++){
        total+= parseInt(spl[i])**spl.length
    }
    return total == value 
  }