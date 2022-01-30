const button = document.querySelector("button");
let odd = 1;
let addElement = function () {
    console.log('eki');
    let li = document.createElement("li");
    li.textContent = odd;
    if (odd%3 ==0 ){
        li.classList.add("big")
    }


    document.body.appendChild(li);
    odd = odd +2;
}


button.addEventListener("click", addElement);