import React, { useEffect, useRef}from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);


    const handleGetStarted = () => {
        navigate('/feature');
    };


    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            // Attempt to autoplay video with sound
            video.muted = false; // Try to play with sound
            video.play().catch((error) => {
                // If autoplay with sound is blocked, mute the video and retry
                console.warn("Autoplay with sound failed, muting and retrying...", error);
                video.muted = true; // Fallback: mute the video
                video.play();
            });
        }
    }, []);

    return (
        <div className="home-container">
            {/* Background Video */}
            <video ref={videoRef} autoPlay loop playsInline id="background-video">
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Content */}
            <div className="content">
                <h1 className="animated-text">Welcome to the Sky Learn</h1>
                <p>Your one-stop solution for managing school processes efficiently.</p>
                <button className="get-started-btn" onClick={handleGetStarted}>
                    Let's go!
                </button>
            </div>
            
        </div>
    );
};

export default Home;
