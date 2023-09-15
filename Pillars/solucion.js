function pillars(numPill, dist, width) {
    if(numPill == 1)
      return 0;
  
    return ((numPill-1)*(dist*100)) + ((numPill-2)*width);
  }