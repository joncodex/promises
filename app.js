

// function downloadAsset() {
//     console.log('downloading...')

//     setTimeout(function () {
//         console.log('done downloading');
//         console.log('send an email')
// }, 3000)
// }


// promises basically tells the next task to wait till after a task is done. it is like setTimeout but it waits till after a task is performed.


// let hasfiledownloaded = false;
// let downloadasset = new Promise (function (resolve, reject) {

//     if (hasfiledownloaded == true) 
//     resolve ('File Downloaded Successfully');
//     else
//     reject ('File was not Downloaded Successfully')

// })


// console.log('please wait...')

// setTimeout(function () {
             
//     downloadasset.then (function (message) {
//     console.log (message, 'please check your email')
    
//     })
//     .catch (function (error) {
//     console.log (error, 'email was not sent')   

//     })

//     }, 3000)



// fetch("https://type.fit/api/quotes")
//     .then(function(response) {
    
//     console.log( response.json())
//     })


// the Json() function will help to convert the link fetched to array of objects, then the second function will help to generate the codes you needed.


function getquote() {
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {  

    
    let totalquotes = data.length;
    let randomquote = Math.floor(Math.random()*totalquotes)
    document.getElementById('quote').innerHTML = data[randomquote].text
    document.getElementById('authorspace').innerHTML = 'Written By: ' + data[randomquote].author


    

    
    



    
  }) }


