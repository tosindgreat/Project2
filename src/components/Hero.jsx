import React from 'react';
import backgroundImage from '/images/background.jpg'; // Import your image 
const Hero = () => {
    return (
        <header>
           <h1>
                <iframe
                    width="400"
                    height="315"
                    src="https://www.youtube.com/embed/h8Q-jlHBcXM"
                    title=" Animal World (Amazing Animals Sounds)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </h1>
        </header> 
    );
    
         const heroStyle = {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div style={heroStyle}>
            <h1>Welcome to My React App</h1>
            <p>This is a hero section with a background image.</p>
        </div>
    );
};



export default Hero;
