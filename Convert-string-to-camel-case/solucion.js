function toCamelCase(str){
    return str.replace(/[-_]\w/g,(c) => c.charAt(1).toUpperCase());
  }