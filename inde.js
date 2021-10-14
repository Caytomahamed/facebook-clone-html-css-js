
const display = e => {
    e.map(image => {
       const card = `<div>
            <img src=${image.src.tiny}/>
        </div>`
         document.querySelector('.main').innerHTML += card;
    })
}
fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: "563492ad6f9170000100000155f50ee1695c4fce96748e6d976cc2b4"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     display(data.photos)
     console.log(data.photos);
   })

   