document.getElementById("checkBtn").addEventListener("click", function() {
    const correctSentence = "words can build or words can destroy";
    
    const userInput = document.getElementById("sentenceInput").value;
    
    const message = document.getElementById("message");
    
    if (userInput === correctSentence) {
        message.innerHTML = "Correct! The password is: <strong>1234</strong>";
        message.style.color = "green";
    } else {
        message.textContent = "Incorrect sentence. Please try again.";
        message.style.color = "red";
    }
});
