function solve(s){
    let a = s.split("")
    let cont=0, hi=0;
    
    for(i=0;i<a.length;i++){
      
      if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
        cont++;
        
        if(cont>hi){
          hi=cont;  
        }
        
      }else{
        cont =0;
      }
      
    }
   
   return hi;
  }