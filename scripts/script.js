let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let allCardsCount = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");

function calculateCount(){
    totalCount.innerText = allCardsCount.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();




// button toggle

const allFilterBtn = document.getElementById("all-filter-btn");
const allInterviewBtn = document.getElementById("interview-filter-btn");
const allRejectedBtn = document.getElementById("rejected-filter-btn");

function togglestyle (id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    allInterviewBtn.classList.remove('bg-blue-500', 'text-white');
    allRejectedBtn.classList.remove('bg-blue-500', 'text-white');


    allFilterBtn.classList.add('bg-white', 'text-gray-400');
    allInterviewBtn.classList.add('bg-white', 'text-gray-400');
    allRejectedBtn.classList.add('bg-white', 'text-gray-400');
    
    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-gray-400');
    selected.classList.add('bg-blue-500', 'text-white');
} 


mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const interviewText = parentNode.querySelector('.interview-btn').innerText;
    const rejectText = parentNode.querySelector('.rejected-btn').innerText;
})