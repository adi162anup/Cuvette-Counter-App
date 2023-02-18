const counter = document.getElementById("counter");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resBtn = document.getElementById("res");

var count = 0;

function counterUpdate() {
    counter.innerText = count;
}

incBtn.addEventListener("click", () => {
    count++;
    counterUpdate();
});

decBtn.addEventListener("click", () => {
    if(count<=0){
        0;
    }
    else{
        count--;
    }
    counterUpdate();
});

resBtn.addEventListener("click", () => {
    count=0;
    counterUpdate();
});

counterUpdate();