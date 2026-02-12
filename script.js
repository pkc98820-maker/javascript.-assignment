const form =document.getElementById("form");

form.addEventListener("submit",(event) =>{
    console.log(event.target.id);
// it prevents autorefresh
  event.preventDefault();    
})