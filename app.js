

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







// Promises 1



// function getquote() {
//   let authorscontainer = document.getElementById('authorscontainer');
//   authorscontainer.innerHTML = '';

//     fetch("https://type.fit/api/quotes")
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {  
            
//         let totalquotes = data.length;
//         let randomquote = Math.floor(Math.random()*totalquotes)
//         document.getElementById('quote').innerHTML = data[randomquote].text
//         document.getElementById('authorspace').innerHTML = 'Written By: ' + data[randomquote].author

        
//         let authors = [];
        
//         for (let i = randomquote; i <= randomquote + 5; i++) {
//           let author = data[i].author;
//           if (author != null) {
//             authors.push(author)
            
            
//           }
          
         
//         }
        

//         authors.map((author)=>{
//           let authorscontainer = document.getElementById('authorscontainer');
//           let authorsdiv = document.createElement('div');
//           authorsdiv.classList.add('authorschip');
//           authorscontainer.appendChild(authorsdiv);
//           authorsdiv.innerHTML = author;
//           // authorsdiv.addEventListener('click', showquotes);
          

//         })  
        
    
//       })}
















// Promises 2 (we want to make the authors clickable)



function fetchrandomauthors() {
  

  // author list
  
  let authorscontainer = document.getElementById('authorscontainer');
  authorscontainer.innerHTML = '';
  let requestedauthornamediv = document.getElementById('requestedauthornamediv');
  requestedauthornamediv.innerHTML = '';
  let qcard = document.getElementById('qcard');
  qcard.innerHTML = '';
  // document.getElementById('newquote').style.display = 'display:inline-block';
  // document.getElementById('newquotebtn').style.display = 'none';

  console.log('author listing ...');

  // fetching the quotes
      
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
  return response.json();
  })
  .then(function(data) {  
  let totalquotes = data.length;
  let randomquote = Math.floor(Math.random()*totalquotes);
  console.log('fetchng authors...');


  // generating new authors and quotes     
  for (let i = randomquote; i < randomquote + 25; i++) {
      let author = data[i].author;
      if (author != null) {
      let quote = data[i].text;
      let qcard = document.getElementById('qcard');
      let quotecontainer = document.getElementById('quotecontainer');
      let authorsdiv = document.createElement('div');
      authorsdiv.classList.add('authorschip');      
      authorsdiv.innerHTML = author;
      let india = ' Author: ' + data[i].author;
      qcard.innerHTML = india,
      quotecontainer.innerHTML = quote;
      authorsdiv.addEventListener('click', showquotes);
      authorscontainer.appendChild(authorsdiv);
      let quotescontainer = document.getElementById('quotescontainer');
    quotescontainer.innerHTML = '';
      
      }
    } 


      
    console.log('filter started...');
    function showquotes () {

    let quotescontainer = document.getElementById('quotescontainer');
    quotescontainer.innerHTML = '';
    let requestedauthor = event.target.innerHTML;
    let requestedauthornamediv = document.getElementById('requestedauthornamediv');
    // requestedauthornamediv.classList.add('requestedauthornamediv');
    // requestedauthornamediv.innerHTML = numberofquotes + ' ' + 'Quotes by' + ' ' + requestedauthor


    let requestedquotes = data.filter ( (data) => {
      
        return data.author === requestedauthor
        
      }).map ( (data) => {

        return data.text
      })
      console.log(requestedquotes)
      
      
   
  

      console.log('filter ended')
    
  // empty the quotes container

  // let quotescontainer = document.getElementById('quotescontainer');

  for (let i= 0; i < requestedquotes.length; i++) {
    let quote = requestedquotes[i];
    let quotesdiv = document.createElement('div');
    quotesdiv.classList.add('quotesdivbtn');
    quotesdiv.innerHTML = quote;
    quotescontainer.appendChild(quotesdiv);
    
  }
  let numberofquotes = requestedquotes.length
  requestedauthornamediv.classList.add('requestedauthornamediv');
  requestedauthornamediv.innerHTML = numberofquotes + ' ' + 'quote(s) by' + ' ' + requestedauthor


}})}