import React from 'react';

const Hero = () => {
    
    const heroStyle = {
        width: '100%',
        height: '100vh',
        backgroundImage: `url('/images/background.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    };

    return (
        <div style={heroStyle}>
            <h1>
                The Amazing Animal Kingdom
                <br />
                <iframe
                    width="400px"
                    height="400px"
                    src="https://www.youtube.com/embed/h8Q-jlHBcXM"
                    title="Amazin Animal Kingdom (Amazing Animals Sounds)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </h1>
            <p>Your World of Possible Friendship</p>
        </div>
    );
};

export default Hero;

