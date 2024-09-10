document.getElementById('analyzeButton').addEventListener('click', async () => {
    const textInput = document.getElementById('textInput').value;
    const url = 'https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText/';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'a182d80801msh61848f774793515p14c9b3jsn87519cbaa5b0',
            'x-rapidapi-host': 'ai-content-detector-ai-gpt.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('fakePercentage').innerText = `Fake Percentage: ${result.fakePercentage}%`;
        document.getElementById('isHuman').innerText = `Is Human: ${result.isHuman ? 'Yes' : 'No'}`;
        document.getElementById('textWords').innerText = `Text Words: ${result.textWords}`;
    } catch (error) {
        console.error(error);
    }
});
