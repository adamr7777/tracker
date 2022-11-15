

      //testing function

//document.getElementById('text-el').textContent + ' ' +
//HTML: <p id='text-el'>TEXT: </p>
function print(x) {
  document.getElementById('text-el').textContent = x
}
      //testing function




          //code


let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn')
let leadsFromLocal = JSON.parse(localStorage.getItem('myLeads'));
const tabEl = document.getElementById('tab-el')


if (leadsFromLocal) {
  myLeads = leadsFromLocal;
  render(myLeads);
}


function render(leads) {
  let listItems = '';
  for (i = 0; i < leads.length; i++ ) {
     //listItems += '<li><a target="_blank" href="'+ myLeads[i] + '" >' + myLeads[i] + '</a></li>';
     listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
     `
  }



  ulEl.innerHTML =  listItems;
}




deleteBtn.addEventListener('click', function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})



tabEl.addEventListener('click', function() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url);
    render(myLeads);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
  })






})


inputBtn.addEventListener('click', function() {

  myLeads.push(inputEl.value);
  inputEl.value = '';
  render(myLeads);
  localStorage.setItem('myLeads', JSON.stringify(myLeads));




})









































//space marker
