// function loadFile() {
//   return fetch('data/data.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.items[0]);
//   })
//   .catch(error => console.error('Error fetching JSON', error));
// }

// loadFile();

function loadFile() {
  return fetch('data/data.json')
  .then(response => response.json())
  .then((json) => {
    data = json.items;

    let html = '';
    data.forEach(element => {
      console.log(element);

    html+= `<li>
            type: ${element.type} <br>
            gender: ${element.gender}
            <li>`

    })
    $('.item').html(html)
  })
  .catch(error => console.error('Error fetching JSON', error));
}

loadFile();