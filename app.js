

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




// MY PROJECT

// function getquote() {
// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {  

    
//     let totalquotes = data.length;
//     let randomquote = Math.floor(Math.random()*totalquotes)
//     document.getElementById('quote').innerHTML = data[randomquote].text
//     document.getElementById('authorspace').innerHTML = 'Written By: ' + data[randomquote].author


//   }) }




function getquote() {
  let authorscontainer = document.getElementById('authorscontainer');
  authorscontainer.innerHTML = '';

    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {  
            
        let totalquotes = data.length;
        let randomquote = Math.floor(Math.random()*totalquotes)
        document.getElementById('quote').innerHTML = data[randomquote].text
        document.getElementById('authorspace').innerHTML = 'Written By: ' + data[randomquote].author

        
        let authors = [];
        
        for (let i = randomquote; i <= randomquote + 5; i++) {
          let author = data[i].author;
          if (author != null) {
            authors.push(author)
            
            
          }
          
         
        }
        

        authors.map((author)=>{
          let authorscontainer = document.getElementById('authorscontainer');
          let authorsdiv = document.createElement('div');
          authorsdiv.classList.add('authorschip');
          authorscontainer.appendChild(authorsdiv);
          authorsdiv.innerHTML = author;
          


        })  
        
    
      })}

      

