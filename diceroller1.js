function rollDice() {
    const diceCount = document.getElementById('diceCount').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 

    const resultText = document.createElement('p');
    resultText.classList.add('result-text');
    
    let rolledNumbers = []; 

    for (let i = 0; i < diceCount; i++) {
        const rolledNumber = Math.floor(Math.random() * 6) + 1; 
        rolledNumbers.push(rolledNumber); 

        const img = document.createElement('img'); 
        img.src = `dice${rolledNumber}.svg`; 
        img.alt = `Dice showing ${rolledNumber}`;
        resultDiv.appendChild(img); 

    resultText.innerText = `Veeretatud täringu number: ${rolledNumbers.join(', ')}`;
    resultDiv.appendChild(resultText); 
}
}