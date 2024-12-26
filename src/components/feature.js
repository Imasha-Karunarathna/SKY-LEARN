import React from 'react';
import { useNavigate } from 'react-router-dom';
import './feature.css';

const Feature = () => {
    const navigate = useNavigate();

    const handleFeatureClick = (feature) => {
        if (feature === 'B') {
            navigate('/marks');
        } else if (feature === 'C') {
            navigate('/Activity');
        } else if (feature === 'D') {
            navigate('/FlashCard');
        } else if (feature === 'E') {
            navigate('/LessonModule');
        } else if (feature === 'F') {
            navigate('/NoteTaking');
        } else if (feature === 'G') {
            navigate('/StudyPlanner');
        } else if (feature === 'H') {
            navigate('/TimerPage');
        } else if (feature === 'I') {
            navigate('/AttendancePage');
        } else if (feature === 'J') {
            navigate('/TeachingToolsPage');
        } else if (feature === 'K') {
            navigate('/Feedback');
        } else if (feature === 'L') {
            navigate('/TextToSpeech');
        } else if (feature === 'M') {
            navigate('/TextAnalyzer');
        }
        else {
            alert(`Feature ${feature} clicked!`);
        }
    };

    return (
        <div className="feature-page-container">
            <header className="feature-page-header">
                <h1>Feature Management</h1>
                <p>Manage and explore all available features from here.</p>
            </header>
            <main className="feature-page-content">
                <div className="feature-button-group">

                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('B')}
                    >
                        Marks
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('C')}
                    >
                        Activity
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('D')}
                    >
                        FlashCard
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('E')}
                    >
                        Lesson
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('F')}
                    >
                        NoteTaking
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('G')}
                    >
                        Study Plan
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('H')}
                    >
                        Timer
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('I')}
                    >
                        Attendance
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('J')}
                    >
                        Teaching Tools
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('K')}
                    >
                        Feedback
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('L')}
                    >
                        Text-Speech
                    </button>
                    <button
                        className="feature-button"
                        onClick={() => handleFeatureClick('M')}
                    >
                        Text Analyze
                    </button>
                </div>
            </main>
            <footer className="feature-page-footer">
                <p>&copy; 2024 IH. All rights reserved.</p>
            </footer>
        </div>


    );

};

export default Feature;
