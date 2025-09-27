 
//  let api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBKghEpKn5GtcQEbVS2sex03w2imtXFT7s";

//   let container = document.getElementById("container")
//   let input = document.querySelector("input")

//    const getData = async()=>{
    
//       let res = await fetch(`${api}&q=${input.value}`);
//       let data = await res.json();
//       let item = data.items
//      console.log(item);
//       display(item);
//   }
 


//  getData()
//   const display = (data)=>{
//    container.innerHTML=""
//   data.map(({id:{videoId},snippet:{title}})=>{
//       let name = document.createElement("h2");
//        name.innerText = title
//      let video = document.createElement("iframe")
//      video.src = `https://www.youtube.com/embed/${videoId}`;
     
//     let div =  document.createElement("div")
//     div.append(video,name)
//      container.append(div)

 
    
//  })
//   }


let api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD-zGg0TV5A2QMip5kChktwwCSemed-4fY";
let main = document.getElementById("main");
let input = document.getElementById("comman");
const getData = async () => {
  let res = await fetch(`${api}&q=${input.value}`);
  // console.log(res.json());
  let data = await res.json();
  // console.log(data.items);
  console.log(data);

  dispaly(data.items);
};

// getData()

function deley() {
  setTimeout(getData, 2000);
}

const dispaly = (abc) => {
  main.innerHTML = "";
  // console.log(abc);
  abc.map((el) => {
    //   console.log(el.id.videoId);
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`;
    let title = document.createElement("h3");
    title.innerText = title.value;
    let div = document.createElement("div");

    main.append(iframe);
    main.append(div);
  });
};