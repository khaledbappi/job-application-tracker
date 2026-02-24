let interviewList = [];
let rejectedList = [];

const mainContainer = document.querySelector("main");
let totalCount = document.getElementById("totalCount");
let allCardsCount = document.getElementById("all-cards");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let noJobs = document.getElementById("no-jobs");


function calculateCount() {
    totalCount.innerText = allCardsCount.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}



// button toggle

const allFilterBtn = document.getElementById("all-filter-btn");
const allInterviewBtn = document.getElementById("interview-filter-btn");
const allRejectedBtn = document.getElementById("rejected-filter-btn");
const filterSection = document.getElementById("filtered-section");

function togglestyle(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    allInterviewBtn.classList.remove('bg-blue-500', 'text-white');
    allRejectedBtn.classList.remove('bg-blue-500', 'text-white');


    allFilterBtn.classList.add('bg-white', 'text-gray-400');
    allInterviewBtn.classList.add('bg-white', 'text-gray-400');
    allRejectedBtn.classList.add('bg-white', 'text-gray-400');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-gray-400');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id == "interview-filter-btn") {
        allCardsCount.classList.add("hidden");
        filterSection.classList.remove("hidden");
        noJobs.classList.remove("hidden");
    }
    else if (id == "all-filter-btn") {
        allCardsCount.classList.remove("hidden");
        filterSection.classList.add("hidden");
        noJobs.classList.add("hidden");
    }
    else if(id == "rejected-filter-btn") {
        allCardsCount.classList.add("hidden");
        filterSection.classList.remove("hidden");
         noJobs.classList.add("hidden");
    }
}


mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        parentNode.querySelector('.not-applied').innerText = 'INTERVIEW'
        const cardInfo = { companyName };
        console.log(cardInfo);
        const matchinterviewArray = interviewList.find(item => item.companyName == cardInfo.companyName)
        if (!matchinterviewArray) {
            interviewList.push(cardInfo);
        }
        renderInterview()
        calculateCount();
    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        parentNode.querySelector('.not-applied').innerText = 'REJECTED'
        const cardInfo = { companyName };
        console.log(cardInfo);
        const matchRejecedArray = rejectedList.find(item => item.companyName == cardInfo.companyName)
        if (!matchRejecedArray) {
            rejectedList.push(cardInfo);
        }
        renderRejected()
        calculateCount();
    }

    function renderInterview() {
        filterSection.innerHTML = "";
        for (let interview of interviewList) {
            div = document.createElement('div');
            div.className = "flex justify-between bg-white rounded-md p-6";
            div.innerHTML = `<div class="card">
                    <h1 class="company-name">Mobile First Corp</h1>
                    <h4 class="text-gray-400">React Native Developer</h4>
                    <p class="text-gray-400 text-xs py-3">Remote &middot; Full Time &middot; $1,30,000 - &1,50,000 </p>
                    <button class="not-applied w-25 bg-[#EEF4FF] text-[#002C5C] text-[10px] p-2 rounded-sm">NOT
                        APPLIED</button>
                    <p class="py-3 text-[14px] text-[#323B49]">Build cross-platform mobile applications using React
                        Native.
                        Work on products used by millions of usersworldwide.</p>
                    <div class="flex gap-3">
                        <button
                            class="interview-btn w-16 border-[1px] cursor-pointer text-green-500 rounded-sm text-[7px] p-1">INTERVIEW</button>
                        <button
                            class="rejected-btn w-16 border-[1px] cursor-pointer text-red-500 rounded-sm text-[7px] p-1">REJECTED</button>
                    </div>`
            filterSection.appendChild(div)

        }
    }


     function renderRejected() {
        filterSection.innerHTML = "";
        for (let rejected of rejectedList) {
            div = document.createElement('div');
            div.className = "flex justify-between bg-white rounded-md p-6";
            div.innerHTML = `<div class="card">
                    <h1 class="company-name">Mobile First Corp</h1>
                    <h4 class="text-gray-400">React Native Developer</h4>
                    <p class="text-gray-400 text-xs py-3">Remote &middot; Full Time &middot; $1,30,000 - &1,50,000 </p>
                    <button class="not-applied w-25 bg-[#EEF4FF] text-[#002C5C] text-[10px] p-2 rounded-sm">NOT
                        APPLIED</button>
                    <p class="py-3 text-[14px] text-[#323B49]">Build cross-platform mobile applications using React
                        Native.
                        Work on products used by millions of usersworldwide.</p>
                    <div class="flex gap-3">
                        <button
                            class="interview-btn w-16 border-[1px] cursor-pointer text-green-500 rounded-sm text-[7px] p-1">INTERVIEW</button>
                        <button
                            class="rejected-btn w-16 border-[1px] cursor-pointer text-red-500 rounded-sm text-[7px] p-1">REJECTED</button>
                    </div>`
            filterSection.appendChild(div)

        }
    }
})

