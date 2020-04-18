// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>




axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
  console.log(response.data.topics)
    const responses = response.data.topics;
    responses.forEach(item => {
        const newT = createTab(item)
        text.appendChild(newT)
    });
})
    .catch(err => {
        console.log(`There is an error: ${err} ` )
    })

const text = document.querySelector('.topics');

function createTab(topic){
    const divTAB = document.createElement('div');
    divTAB.textContent = topic;
    divTAB.classList.add('tab')
    return divTAB;
}