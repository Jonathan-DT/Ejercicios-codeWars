function wordPattern(w) {
    w= w.toLowerCase()
    const set = [...new Set(w)];
    console.log(set);
    return w.split('').map(e=>set.indexOf(e)).join('.');
}