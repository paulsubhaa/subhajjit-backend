// console.log("ig");
// // (async()=>
// // {
// //     try{
// //    await fetch("https://api.github.com/users/pauulsbha")
// //    .then((res)=>
// //    {
// //     return res.json()
// //    }).then((res)=>
// //    {
// //     console.log(res)
// //    })
// // }
// // catch(error)
// // {
// //     console.log(error)
// //     throw error

// // }
// // })


// console.log("hey")

//cal back
// function ss(a,b)
// {
//     console.log(a+b)

// }
// function calculator(a,b,sumcallback)
// {
//   sumcallback=(a,b)=>
//   {
//     console.log(a+b)

//   }
 
//     sumcallback(a,b);

// }

// calculator(1,2,(a,b)=>
// {
//     console.log(a+b)

// })

// const hello=()=>
// {
//     console.log("hello")
// }
// setTimeout(hello,3000);
// console.log("dwddw")


(async()=>
{
    await fetch("https://api.github.com/users/pauulsubha").then((res)=>
    {
        return res.json()

    }).then((res)=>
    {
        console.log(res)
    })

})()


console.log("jeu")