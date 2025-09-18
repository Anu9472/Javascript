// let promise = new promise(function(res,rej){
//         if(5==5){
//             res()
//         }
// });

// console.log(promise)

//   let data = false

//   let promise = new Promise(function(res,rej){
//             // data = true;
//             if(data){
//                 res("abcd")
//             }else{
//                 rej("bye")
//             }
//   })


// //   console.log(promise);
// //   then catch

// promise.then(function(res){
//     console.log("result is", res);
    
// })

// promise.catch(function(err){
//     console.log(err);
    
// })

let input = document.querySelector("input")
let img = document.querySelector("img")
let password = 123456;


function Checkfun(){
    let x = input.value;

let promise = new Promise(function(res,rej){
    if(password==x){
        res("Password Match")
       }else{
        rej("wrong ppassword")
       }
})

promise.then(function(res){
      console.log(res);
    img.src = "https://media.tenor.com/CFhoSD3vWGQAAAAM/ufc.gif"
    
})
  
.catch(function(err){
     console.log(err);
     img.src = "https://media.tenor.com/vLK4Mq3jiKIAAAAM/cat-no.gif"
    
})

}


function Delayfun(){
 setTimeout(Checkfun,2000);   

}











// /  let promise = new Promise(function(res,rej){
//                     if(5==4){
//                         res("Success")
//                     }else{
//                         rej("failed")
//                     }
//               });

// console
// .log(promise)