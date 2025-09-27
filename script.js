let api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD-zGg0TV5A2QMip5kChktwwCSemed-4fY";
let main = document.getElementById("main");
let input = document.getElementById("comman");

const getData = async () => {
  let res = await fetch(`${api}&q=${input.value}`);
  let data = await res.json();
  console.log(data);

  display(data.items);
};

function delay() {
  setTimeout(getData, 2000);
}

const display = (abc) => {
  main.innerHTML = "";
  abc.map((el) => {
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`;
    iframe.width = "300";
    iframe.height = "200";

    let title = document.createElement("h3");
    title.innerText = el.snippet.title;

    let div = document.createElement("div");
    div.append(iframe, title);

    main.append(div);
  });
};
