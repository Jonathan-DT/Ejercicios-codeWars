function findShort(s){
    return s.split(' ').sort((a, b) => b.length - a.length).pop().length;
  }