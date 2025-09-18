let buttton = document.querySelector("button")
let head = document.querySelector("h2")

let count = 0


// console.log(head.innerText);
localStorage.setItem("count", count )


buttton.addEventListener("click", counter)

function counter(){
    // console.log("HELLO");
    count++;
    console.log(count);
    head.innerText = count

    
}
