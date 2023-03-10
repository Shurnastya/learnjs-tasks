// 1 Задача
function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
}

// 2 Задача
function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

// 3 Задача
function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}

// 4 Задача
function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;
  
    function wrapper() {
  
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
  
        func.apply(this, arguments);
  
        isThrottled = true;
  
        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
  
    return wrapper;
}