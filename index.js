const ele = document.querySelector("input");

function outcome() {
    console.log("data received from server");
}

// without debounce function
// ele.addEventListener("keyup", outcome);

// with debounce function
function hofDebounce(func, timeout) {
    let timer;
    return function(){
        if(timer)
            clearTimeout(timer);

        timer = setTimeout(() => func(), timeout);
    }
}
const result = hofDebounce(outcome, 1000);

ele.addEventListener("keyup", result);