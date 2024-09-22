const questions = [
    {
        question: "Reggel azonnal felkelsz az ébresztőóra első csörgésére?",
        options: ["Igen", "Nem"],
        points: [500, -500]
    },
    {
        question: "Mosolyogsz idegenekre az utcán?",
        options: ["Mindig", "Néha", "Sosem"],
        points: [1000, 500, -300]
    },
    {
        question: "Szoktál segíteni másoknak önként?",
        options: ["Gyakran", "Ritkán", "Sosem"],
        points: [1500, 500, -500]
    },
    {
        question: "Rendszeresen sportolsz?",
        options: ["Igen", "Nem"],
        points: [1200, -400]
    },
    {
        question: "Megdicséred mások teljesítményét?",
        options: ["Igen", "Nem"],
        points: [800, -200]
    },
    {
        question: "Szoktál új dolgokat kipróbálni?",
        options: ["Gyakran", "Néha", "Ritkán"],
        points: [1000, 500, -300]
    },
    {
        question: "Hogyan kezeled a kritikát?",
        options: ["Pozitívan", "Semlegesen", "Negatívan"],
        points: [800, 0, -800]
    },
    {
        question: "Pontos vagy a találkozókon?",
        options: ["Mindig", "Néha kések", "Gyakran kések"],
        points: [700, -200, -700]
    },
    {
        question: "Szoktál olvasni könyveket?",
        options: ["Gyakran", "Ritkán", "Sosem"],
        points: [900, 300, -300]
    },
    {
        question: "Figyelsz az egészséges táplálkozásra?",
        options: ["Igen", "Néha", "Nem"],
        points: [800, 200, -500]
    },
    {
        question: "Szoktál új emberekkel ismerkedni?",
        options: ["Gyakran", "Ritkán", "Sosem"],
        points: [1000, 400, -400]
    },
    {
        question: "Hogyan reagálsz a stresszre?",
        options: ["Nyugodt maradok", "Kicsit ideges leszek", "Nagyon stresszelek"],
        points: [800, 0, -800]
    },
    {
        question: "Szoktál önkénteskedni?",
        options: ["Igen", "Nem"],
        points: [1200, -400]
    },
    {
        question: "Megosztod a sikereidet másokkal?",
        options: ["Igen", "Nem"],
        points: [600, -200]
    },
    {
        question: "Szoktál új helyeket felfedezni?",
        options: ["Gyakran", "Néha", "Sosem"],
        points: [1000, 500, -300]
    },
    {
        question: "Hogyan kezeled a konfliktusokat?",
        options: ["Megoldom", "Elkerülöm", "Ignorálom"],
        points: [800, -200, -600]
    },
    {
        question: "Segítesz a barátaidnak a problémáikban?",
        options: ["Mindig", "Néha", "Sosem"],
        points: [900, 300, -300]
    },
    {
        question: "Hogyan viszonyulsz a változásokhoz?",
        options: ["Pozitívan", "Semlegesen", "Negatívan"],
        points: [800, 0, -800]
    },
    {
        question: "Szoktál célokat kitűzni magad elé?",
        options: ["Igen", "Néha", "Nem"],
        points: [1000, 500, -500]
    },
    {
        question: "Optimista vagy?",
        options: ["Igen", "Nem"],
        points: [800, -800]
    }
];const quotes = [
    "„Ha nem tudsz kezelni engem a legrosszabb pillanataimban, nem érdemelsz meg a legjobbjaimban sem.”",
    "„Skibidi toilet”",
    "„Gyere kislány, igyunk valamit”",
    "''Orm, what a sigma?!”",
    "„Csak egyszer élsz”"
];

let currentQuestionIndex = 0;
let totalPoints = 0;

function showIntro() {
    const card = document.getElementById('card');
    card.innerHTML = '';

    const title = document.createElement('h1');
    title.id = 'intro-title';
    title.textContent = 'Üdvözöllek az Aura Kalkulátorban!';

    const introText = document.createElement('p');
    introText.id = 'intro-text';
    introText.textContent = 'Tudd meg, mennyi aurapontod van, és hol helyezkedsz el a társadalmi skálán! Készen állsz?';

    const startButton = document.createElement('button');
    startButton.id = 'start-button';
    startButton.textContent = 'Teszt indítása';

    startButton.addEventListener('click', () => {
        loadQuestion();
    });

    card.appendChild(title);
    card.appendChild(introText);
    card.appendChild(startButton);
}

function loadQuestion() {
    const card = document.getElementById('card');
    card.innerHTML = '';

    if (currentQuestionIndex > 0 && currentQuestionIndex % 5 === 0) {
        const quoteContainer = document.createElement('div');
        quoteContainer.id = 'quote-container';
        const quoteText = document.createElement('p');
        quoteText.id = 'quote';
        quoteText.textContent = quotes[(currentQuestionIndex / 5) - 1];
        quoteContainer.appendChild(quoteText);

        const nextButton = document.createElement('button');
        nextButton.id = 'next-button';
        nextButton.textContent = 'Tovább';

        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });

        card.appendChild(quoteContainer);
        card.appendChild(nextButton);
    } else if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];

        const questionElement = document.createElement('div');
        questionElement.id = 'question';
        questionElement.textContent = q.question;
        card.appendChild(questionElement);

        const optionsList = document.createElement('ul');
        optionsList.className = 'options';

        q.options.forEach((option, idx) => {
            const li = document.createElement('li');

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = `option${idx}`;
            radio.name = 'option';
            radio.value = q.points[idx];

            const label = document.createElement('label');
            label.htmlFor = `option${idx}`;
            label.textContent = option;

            li.appendChild(radio);
            li.appendChild(label);
            optionsList.appendChild(li);
        });

        card.appendChild(optionsList);

        const nextButton = document.createElement('button');
        nextButton.id = 'next-button';
        nextButton.textContent = 'Következő';

        nextButton.addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                totalPoints += parseInt(selectedOption.value);
                currentQuestionIndex++;
                loadQuestion();
            } else {
                alert('Kérlek, válassz egy opciót!');
            }
        });

        card.appendChild(nextButton);
    } else {
        displayResult();
    }
}

function displayResult() {
    const card = document.getElementById('card');
    card.innerHTML = '';

    const resultContainer = document.createElement('div');
    resultContainer.id = 'result-container';

    const resultText = document.createElement('p');
    resultText.id = 'result';
    resultText.textContent = `Az aurád: ${totalPoints} pont`;

    resultContainer.appendChild(resultText);

    const message = document.createElement('p');
    message.id = 'message';

    if (totalPoints >= 16000) {
        message.textContent = "Te vagy az aura királya! 🏆";
    } else if (totalPoints >= 12000) {
        message.textContent = "Nagyszerű aura! Folytasd így! ✨";
    } else if (totalPoints >= 8000) {
        message.textContent = "Jó úton haladsz az aura fejlesztésében. 😊";
    } else {
        message.textContent = "Lehet, hogy ideje dolgozni egy kicsit az aurádon. 🙃";
    }

    resultContainer.appendChild(message);

    const chartContainer = document.createElement('div');
    chartContainer.id = 'chart-container';
    const canvas = document.createElement('canvas');
    canvas.id = 'auraChart';
    chartContainer.appendChild(canvas);

    resultContainer.appendChild(chartContainer);

    const shareButton = document.createElement('button');
    shareButton.id = 'share-button';
    shareButton.textContent = 'Eredmény megosztása';

    shareButton.addEventListener('click', () => {
        shareResult();
    });

    const retryButton = document.createElement('button');
    retryButton.id = 'retry-button';
    retryButton.textContent = 'Újra kitöltöm a tesztet';

    retryButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        totalPoints = 0;
        showIntro();
    });

    resultContainer.appendChild(shareButton);
    resultContainer.appendChild(retryButton);

    card.appendChild(resultContainer);

    drawChart(totalPoints);
}

function drawChart(userScore) {
    const ctx = document.getElementById('auraChart').getContext('2d');

    const data = {
        labels: ['Minimum', 'Átlagos', 'Te', 'Maximum'],
        datasets: [{
            label: 'Aura Pontok',
            data: [0, 8000, userScore, 16000],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0']
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 18000
                }
            }
        }
    });
}

function shareResult() {
    const shareText = `Az aurám ${totalPoints} pont! Próbáld ki te is az Aura Kalkulátort!`;
    if (navigator.share) {
        navigator.share({
            title: 'Aura Kalkulátor',
            text: shareText,
            url: window.location.href
        }).then(() => {
            console.log('Megosztás sikeres');
        }).catch((error) => {
            console.log('Megosztás sikertelen', error);
        });
    } else {
        alert('A böngésződ nem támogatja a megosztás funkciót.');
    }
}

window.onload = function() {
    showIntro();
};
