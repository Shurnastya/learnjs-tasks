// 1 Задача
function unique(arr) {
    return Array.from(new Set(arr));
}

// 2 Задача
function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
}