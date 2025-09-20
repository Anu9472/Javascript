let api = " http://www.omdbapi.com/?i=tt3896198&apikey=60475967";
let input = document.querySelector("input")
let search_box = document.getElementById("search_box");

const getData = async()=>{
    let x = input.value;
    let res = await fetch(`${api}&s=${x}`)
    let data = await res.json()


    // console.log(data.Search);
    display(data.Search)    
}

function Delay(){
     setTimeout(getData,1000)
}

function display(data){
    search_box.innerHTML =""
data.map(({Title,Poster,Year})=>{
    // console.log(Title,Poster,Year);
   
//    search_box.innerHTML = `<div>
//                           <img src= ${Poster}/>
//                           <h4>${Title}</h4>
//                           <h5>${Year}</h5>
                          
                          
//                           </div>` 

let title = document.createElement("h4")
title.innerText = Title
let year = document.createElement("h5")
year.innerText = Year
let img = document.createElement("img")
img.src = Poster
let div = document.createElement("div")

div.append(img,title,year)

search_box.append(div)
})
}

// getData()