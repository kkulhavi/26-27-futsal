// Get the modal
var modal = document.getElementById("myModal");
const message = document.querySelector('#message');



// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function sendId(id){
  modal.style.display = "block";

  if (id==1||id==8||id==9||id==13||id==16) {
    message.innerHTML='nema para 🤑 $ 💲 ＄ 💰'
  }
  else if(id==100)
  {
    message.innerHTML='nadolazeća utakmica'
  }
  else if(id==32)
  {
    message.innerHTML='Penali: <br><b>Prof</b> 1<br><b>4.EL</b> 2'
  }
  else if(id==99)
  {
    message.innerHTML='Dubravac MVP 💲💲💲💲💲'
  }
   else 
  {
    postData("/info", { id: id }).then((data) => {
      console.log(data); 
      //message.innerHTML=data[0].goals[0].name+'<br>'+data[0].goals[0].surname
      message.innerHTML=''
      data[0].goals.forEach(player => {
        message.innerHTML+=`${player.name} ${player.surname}, ${player.cl}: ${player.goal}⚽<br>`
      });
    });
  }
  
}


/*
// When the user clicks the button, open the modal 
btn.onclick = ()=> {
  
    modal.style.display = "block";
  postData("/info", { id: 6 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
    message.innerHTML=data[0].goals[0].name+'<br>'+data[0].goals[0].surname
  });

  
}
*/





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


async function postData(url = "/info", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function getBestPlayers(value){
    
  }
  
  
