// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header() {

const DIV = document.createElement('div');
const hONE = document.createElement('h1');
hONE.textContent = "Lambda Times";
const firstSpan = document.createElement('span');
firstSpan.textContent = "SMARCH 28, 2019";
const secondSpan = document.createElement('span');

DIV.classList.add('header');
firstSpan.classList.add('date');
secondSpan.classList.add('temp');

DIV.appendChild(firstSpan);
DIV.appendChild(hONE);
DIV.appendChild(secondSpan);

return DIV;
};

const updatedHeader = document.querySelector('.header-container');
updatedHeader.appendChild(Header());