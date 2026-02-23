
let statusStore = [];


function countingMachine(buttonId, notAppliedId, status, counterId){
    document.getElementById(buttonId).addEventListener("click", function(){
        document.getElementById(buttonId).innerText = status;
        statusStore.push(status);
        
        let count = 0;
        for (let item of statusStore){
            if (item === status) count++;
        }
        document.getElementById(counterId).innerText = count;
        document.getElementById(notAppliedId).innerText = status;
    })
}

countingMachine("interview-btn", "not-applied1", "INTERVIEW", "total-interview");
countingMachine("rejected-btn", "not-applied1", "REJECTED", "total-reject");

countingMachine("interview-btn2", "not-applied2", "INTERVIEW", "total-interview");
countingMachine("rejected-btn2", "not-applied2", "REJECTED", "total-reject");

countingMachine("interview-btn3", "not-applied3", "INTERVIEW", "total-interview");
countingMachine("rejected-btn3", "not-applied3", "REJECTED", "total-reject");

countingMachine("interview-btn4", "not-applied4", "INTERVIEW", "total-interview");
countingMachine("rejected-btn4", "not-applied4", "REJECTED", "total-reject");

countingMachine("interview-btn5", "not-applied5", "INTERVIEW", "total-interview");
countingMachine("rejected-btn5", "not-applied5", "REJECTED", "total-reject");

countingMachine("interview-btn6", "not-applied6", "INTERVIEW", "total-interview");
countingMachine("rejected-btn6", "not-applied6", "REJECTED", "total-reject");

countingMachine("interview-btn7", "not-applied7", "INTERVIEW", "total-interview");
countingMachine("rejected-btn7", "not-applied7", "REJECTED", "total-reject");

countingMachine("interview-btn8", "not-applied8", "INTERVIEW", "total-interview");
countingMachine("rejected-btn8", "not-applied8", "REJECTED", "total-reject");

