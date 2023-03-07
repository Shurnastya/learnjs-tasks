// 1 Задача
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

// 2 Задача
Function.prototype.defer = function (ms) {
    return (...args) => setTimeout(this, ms, ...args);
};