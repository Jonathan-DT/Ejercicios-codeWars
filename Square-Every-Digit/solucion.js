function squareDigits(num){
  let cad= String(num).split("");
  let res ="";
  let salida = cad.map(function (x) {
    
    let a=parseInt(x);
    a*=a;
    res+=a;
    return res;
  });
  return parseInt(salida[salida.length-1]);
}