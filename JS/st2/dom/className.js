const liElements = document.getElementsByClassName('a');
console.log(liElements);
  
for(const liElement of liElements) {
  console.log(liElement.textContent);
}

for(let i = 0; i < liElements.length; i ++) {
  console.log(liElements[i].textContent);
}