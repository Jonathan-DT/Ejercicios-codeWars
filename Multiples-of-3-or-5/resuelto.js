function solution(number){
    let a = (number-1)/3 ;
    let b = (number-1)/5;
    let suma=0;
    let listaA=[];
    for(i=1;i<=a;i++){
      listaA.push (i*3); 
    }
    
    for(i = 1;i<=b;i++){
      listaA.push(i*5);
    }  
    let listaUnica = Array.from(new Set(listaA));
      //console.log(listaUnica);
    let total=0;
    listaUnica.forEach((a)=>total+=a)
    return total;
  }