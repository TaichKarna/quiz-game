const questions = [
    {
        question: "How do you prefer to start your day?",
        answers: [
            { text: "By making a to-do list and planning everything", device: "Arduino Micontroller", image: "https://th.bing.com/th/id/OIP.bf_Um5shxy9Snj8HbRR0ZAHaHa?rs=1&pid=ImgDetMain" },
            { text: "By checking the weather and deciding what to wear", device: "Fitbit", image: "https://th.bing.com/th/id/OIP.i4Ojd9jIIxZ11MLbJ806vAHaIT?rs=1&pid=ImgDetMain" },
            { text: "By turning on your favorite playlist", device: "Tesla Model 3", image: "https://img.freepik.com/free-photo/happy-woman-with-headphones_186202-635.jpg" },
            { text: "By preparing a delicious breakfast", device: "Amazon Echo", image: "https://static.wixstatic.com/media/7cd50b_72f23b0749374a5b8125c0ada5bd9d2c~mv2.jpg/v1/fit/w_960,h_960,al_c,q_80/file.jpg" }
        ]
    },
    {
        question: "What’s your dream home feature?",
        answers: [
            { text: "A personal assistant that manages your schedule and controls your home", device: "Arduino Microcontroller", image: "https://purepng.com/public/uploads/large/purepng.com-robotrobotprogrammableautomatonelectronicscyborg-1701528371874ax93z.png" },
            { text: "A comprehensive security system with cameras and motion sensors", device: "Fitbit", image: "https://th.bing.com/th/id/OIP.L8E9aP0DSx0dm3YVJFjKZwHaHa?rs=1&pid=ImgDetMain" },
            { text: "An immersive home theater with voice-activated controls", device: "Tesla Model 3", image: "https://th.bing.com/th/id/OIP.Vd37NEHli-LuP3vyETyZ1wHaE8?rs=1&pid=ImgDetMain" },
            { text: "A fully automated kitchen with smart appliances that help you cook", device: "Amazon Echo", image: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3LmdlYXJicmFpbi5jb20vbWVkaWEtbGlicmFyeS9leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGJXRm5aU0k2SW1oMGRIQnpPaTh2WVhOelpYUnpMbkppYkM1dGN5OHhOelUzTURnMk5DOXZjbWxuYVc0dWFuQm5JaXdpWlhod2FYSmxjMTloZENJNk1UWXdNak0wTXpZNE4zMC4yZHpORkpuR2xMWlFtYUNEWGh0bUZzTmM2YVdQbGF2ZXpfSE9jZ2oxYmZvL2ltYWdlLmpwZz93aWR0aD05ODAiLCJleHBpcmVzX2F0IjoxNjQ5Nzg0NzY5fQ.EG3jzbDSliMnC4wuA_vGMpuZiCBKmiaocJNnkmYcJ7g/img.jpg?width=2000&height=2000" }
        ]
    },
    {
        question: "What is your preferred method of communication?",
        answers: [
            { text: "Wireless", device: "Arduino Microcontroller", image: "https://th.bing.com/th/id/OIP.ycjGVzsUaTe4NZHiTANg5QAAAA?rs=1&pid=ImgDetMain" },
            { text: "Wired", device: "Fitbit", image: "https://th.bing.com/th/id/OIP.nC--bNKOd8G-bCSwa08e5gAAAA?w=474&h=474&rs=1&pid=ImgDetMain" },
            { text: "Bluetooth", device: "Tesla Model 3", image: "https://th.bing.com/th/id/OIP.Tg3RLHR-ypHlhBVudffsCAHaHa?rs=1&pid=ImgDetMain" },
            { text: "Infrared", device: "Amazon Echo", image: "https://th.bing.com/th/id/OIP.ag2uTq_7-ny-dFVhzmhcWwHaHa?w=800&h=800&rs=1&pid=ImgDetMain" }
        ]
    },
    {
        question: "Lastly! How do you handle problems?",
        answers: [
            { text: "By analyzing and finding a systematic solution", device: "Arduino Microcontroller", image: "https://th.bing.com/th/id/OIP.A8FI6lM0Pc1_wzOHpskA-QAAAA?rs=1&pid=ImgDetMain" },
            { text: "By stepping back and getting a new perspective", device: "Fitbit", image: "https://th.bing.com/th/id/OIP.G3zpW9fy89HkR_lAESuQQwHaHa?rs=1&pid=ImgDetMain" },
            { text: "By researching and using the latest tools", device: "Tesla Model 3", image: "https://www.eschoolnews.com/files/2018/02/18.jpg?is-pending-load=1" },
            { text: "By talking it out over a meal or coffee.", device: "Amazon Echo", image: "https://static.toiimg.com/thumb/msid-55616339,width-550,height-433/55616339.jpg" }
        ]
    }
];

const results = {
    "Arduino Microcontroller": {
        text: "You're an inventor at heart, Arduino is your perfect match! Keep tinkering and creating!",
        image: "https://www.cnx-software.com/wp-content/uploads/2014/05/Arduino_Zero_Large.jpg"
    },
    "Amazon Echo": {
        text: "Your voice is your power, just like Amazon Echo! Command your day with style and ease",
        image: "https://th.bing.com/th/id/OIP.PeeSTjPojUNxnPBSthE-AgHaHa?rs=1&pid=ImgDetMain"
    },
    "Tesla Model 3": {
        text: "Like Tesla, you’re all about pushing boundaries and driving change. Keep accelerating!",
        image: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-AWD-Hero-Desktop-LHD"
    },
    "Fitbit": {
        text: "You’re on the move! Fitbit keeps up with your active lifestyle, counting steps and dreams",
        image: "https://i02.hsncdn.com/is/image/HomeShoppingNetwork/rocs1200/fitbit-sense-2-advanced-health-and-fitness-smartwatch-d-2022081009263544~815285.jpg"
    }
};

let currentQuestionIndex = 0;
let selectedDevice = "";

const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');

function startQuiz() {
    currentQuestionIndex = 0;
    selectedDevice = "";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerText = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    const optionsElement = document.createElement('ul');
    optionsElement.className = 'options';
    currentQuestion.answers.forEach(answer => {
        const optionElement = document.createElement('li');
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectAnswer(answer.device));

        const imageElement = document.createElement('img');
        imageElement.src = answer.image;
        imageElement.alt = answer.device;
        imageElement.classList.add('option-image');

        const textElement = document.createElement('span');
        textElement.innerText = answer.text;

        optionElement.appendChild(imageElement);
        optionElement.appendChild(textElement);
        optionsElement.appendChild(optionElement);
    });

    questionContainer.appendChild(optionsElement);
    questionContainer.style.display = 'block';
}

function resetState() {
    questionContainer.innerHTML = '';
    resultContainer.style.display = 'none';
    resultContainer.innerHTML = '';
}

function selectAnswer(device) {
    selectedDevice = device;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resetState();
    questionContainer.style.display = 'none';

    const resultText = document.createElement('div');
    resultText.innerText = results[selectedDevice].text;
    resultContainer.appendChild(resultText);

    const resultImage = document.createElement('img');
    resultImage.src = results[selectedDevice].image;
    resultImage.alt = selectedDevice;
    resultImage.classList.add('result-image');
    resultContainer.appendChild(resultImage);

    resultContainer.style.display = 'block';
}

startQuiz();