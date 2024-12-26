import React, { useState } from 'react';
import './FlashCard.css';

const flashcardsData = {
    '1-3': [
        { question: "What color is the sky?", answer: "Blue" },
        { question: "What is 1 + 1?", answer: "2" },
        { question: "Name a farm animal.", answer: "Cow" },
        { question: "What is the color of grass?", answer: "Green" },
        { question: "What is the shape of the Earth?", answer: "Round" },
        { question: "How many legs does a spider have?", answer: "Eight" },
        { question: "What is the opposite of hot?", answer: "Cold" },
        { question: "What is the largest mammal?", answer: "Blue Whale" },
        { question: "What do bees make?", answer: "Honey" },
        { question: "How many days are there in a week?", answer: "Seven" },
        { question: "What is the first letter of the alphabet?", answer: "A" },
        { question: "What animal is known as man's best friend?", answer: "Dog" },
        { question: "What do you use to write on a blackboard?", answer: "Chalk" },
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "Which month comes after June?", answer: "July" },
        { question: "What is the name of a baby cat?", answer: "Kitten" },
        { question: "How many wheels does a car have?", answer: "Four" },
        { question: "What is the name of a female lion?", answer: "Lioness" },
        { question: "How many continents are there?", answer: "Seven" },
        { question: "Which fruit is known for its seeds on the outside?", answer: "Strawberry" },
    ],
    '3-5': [
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "What is 5 + 7?", answer: "12" },
        { question: "Who is the current president of the USA?", answer: "Joe Biden" },
        { question: "Which ocean is the largest?", answer: "Pacific Ocean" },
        { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
        { question: "What is the capital of Italy?", answer: "Rome" },
        { question: "How many sides does a triangle have?", answer: "Three" },
        { question: "What do you call a person who studies rocks?", answer: "Geologist" },
        { question: "Which planet is closest to the Sun?", answer: "Mercury" },
        { question: "What do plants need to make food?", answer: "Sunlight" },
        { question: "What is the freezing point of water?", answer: "0°C or 32°F" },
        { question: "What is the smallest continent?", answer: "Australia" },
        { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
        { question: "What do you call a group of fish?", answer: "School" },
        { question: "Which state is known as the 'Sunshine State'?", answer: "Florida" },
        { question: "Who was the first man to walk on the moon?", answer: "Neil Armstrong" },
        { question: "Which gas do we breathe out?", answer: "Carbon Dioxide" },
        { question: "What is the boiling point of water?", answer: "100°C or 212°F" },
        { question: "What is the name of the process by which plants make food?", answer: "Photosynthesis" },
        { question: "Which animal is known for its black and white stripes?", answer: "Zebra" },
    ],
    '5-8': [
        { question: "What is the capital of England?", answer: "London" },
        { question: "Solve for x: 2x + 3 = 7", answer: "x = 2" },
        { question: "What gas do plants absorb?", answer: "Carbon Dioxide" },
        { question: "What is the largest organ in the human body?", answer: "Skin" },
        { question: "What is the square root of 64?", answer: "8" },
        { question: "Who wrote 'The Odyssey'?", answer: "Homer" },
        { question: "What is the process of water turning into vapor called?", answer: "Evaporation" },
        { question: "Which planet is known as the Red Planet?", answer: "Mars" },
        { question: "What is the main ingredient in chocolate?", answer: "Cocoa" },
        { question: "Who invented the telephone?", answer: "Alexander Graham Bell" },
        { question: "What is the chemical symbol for gold?", answer: "Au" },
        { question: "What is the formula for calculating the area of a rectangle?", answer: "Length × Width" },
        { question: "What is the speed of light?", answer: "299,792,458 meters per second" },
        { question: "Which element has the atomic number 1?", answer: "Hydrogen" },
        { question: "What is the largest desert in the world?", answer: "Sahara Desert" },
        { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
        { question: "What is the longest river in the world?", answer: "Nile River" },
        { question: "What is the chemical formula for salt?", answer: "NaCl" },
        { question: "Who was the first President of the United States?", answer: "George Washington" },
        { question: "What is the capital of Japan?", answer: "Tokyo" },
    ],
    '8-11': [
        { question: "What is the Pythagorean Theorem?", answer: "a² + b² = c²" },
        { question: "What is the formula for water?", answer: "H2O" },
        { question: "Who wrote 'Macbeth'?", answer: "William Shakespeare" },
        { question: "What is the chemical formula for carbon dioxide?", answer: "CO2" },
        { question: "What is the capital of Germany?", answer: "Berlin" },
        { question: "What is the process of cell division called?", answer: "Mitosis" },
        { question: "Who proposed the theory of relativity?", answer: "Albert Einstein" },
        { question: "What is the speed of sound?", answer: "343 meters per second" },
        { question: "What is the largest bone in the human body?", answer: "Femur" },
        { question: "What is the currency of the United Kingdom?", answer: "Pound Sterling" },
        { question: "What is the chemical symbol for iron?", answer: "Fe" },
        { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
        { question: "Who was the first woman to win a Nobel Prize?", answer: "Marie Curie" },
        { question: "What is the term for a group of stars forming a pattern?", answer: "Constellation" },
        { question: "What is the largest country by area?", answer: "Russia" },
        { question: "What is the boiling point of water at sea level?", answer: "100°C or 212°F" },
        { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
        { question: "What is the process by which plants lose water?", answer: "Transpiration" },
        { question: "What is the capital of Canada?", answer: "Ottawa" },
        { question: "What is the most abundant gas in Earth's atmosphere?", answer: "Nitrogen" },
    ],
    '12-13': [
        { question: "What is the derivative of x²?", answer: "2x" },
        { question: "Who discovered gravity?", answer: "Isaac Newton" },
        { question: "What is DNA?", answer: "Deoxyribonucleic Acid" },
        { question: "What is the integral of 1/x?", answer: "ln|x| + C" },
        { question: "What is the chemical symbol for lead?", answer: "Pb" },
        { question: "Who developed the theory of evolution?", answer: "Charles Darwin" },
        { question: "What is the capital of Australia?", answer: "Canberra" },
        { question: "What is the process by which cells generate energy in the absence of oxygen?", answer: "Anaerobic Respiration" },
        { question: "What is the value of Pi?", answer: "Approximately 3.14159" },
        { question: "What is the chemical formula for methane?", answer: "CH4" },
        { question: "What is the law of inertia?", answer: "An object in motion stays in motion, and an object at rest stays at rest unless acted on by an external force." },
        { question: "Who wrote 'Pride and Prejudice'?", answer: "Jane Austen" },
        { question: "What is the chemical symbol for sodium?", answer: "Na" },
        { question: "What is the atomic number of carbon?", answer: "6" },
    ]
}


const Flashcards = () => {
    const [selectedGrade, setSelectedGrade] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const handleGradeChange = (e) => {
        setSelectedGrade(e.target.value);
        setCurrentIndex(0);
        setFlipped(false);
    };

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleNext = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData[selectedGrade].length);
    };

    return (
        <div className="flashcards-container">
            <h1 className="flashcards-title">Flashcards</h1>
            <p className="flashcards-description">Select your grade and start learning with flashcards!</p>
            <div className="grade-selector">
                <label htmlFor="grade">Select Grade :</label>
                <select id="grade" value={selectedGrade} onChange={handleGradeChange}>
                    <option value="">-- Select Grade --</option>
                    <option value="1-3">Grades 1-3</option>
                    <option value="3-5">Grades 3-5</option>
                    <option value="5-8">Grades 5-8</option>
                    <option value="8-11">Grades 8-11</option>
                    <option value="12-13">Grades 12-13</option>
                </select>
            </div>
            {selectedGrade && flashcardsData[selectedGrade].length > 0 && (
                <>
                    <div className="flashcard" onClick={handleFlip}>
                        <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
                            <div className="flashcard-front">
                                <p>{flashcardsData[selectedGrade][currentIndex].question}</p>
                            </div>
                            <div className="flashcard-back">
                                <p>{flashcardsData[selectedGrade][currentIndex].answer}</p>
                            </div>
                        </div>
                    </div>
                    <button className="next-btn" onClick={handleNext}>Next</button>
                </>
            )}
        </div>
    );
};

export default Flashcards;
