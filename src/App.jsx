import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';
import AuthForms from "./components/AuthForms";
import { cardData } from './data';
import './index.css'
const App = () => {
  return (
      <div
          style={{
              backgroundImage: `url('/backgroundimage.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              height: '300vh',
              width: '100vw'
          }}
      >
          {/* Authentication Forms Button at the top-right corner */}
          <AuthForms />

          {/* Main website content */}
          <Header />
          <Navbar />
          <Hero />
          {/* <div className="card-container">
              {cardData.map((item, index) => (
                  <Card key={index} data={item} />
              ))}
          </div> */}

          <div className="card-container">
        {cardData.map((item) => (
            <Card key={item.id} data={item} />
        ))}
    </div>
);

            <Footer />

          {/* Time Component */}
          <Time />
      </div>
  );
  

};

function Time() {
    
    const [time, updateTime] = useState(new Date().toLocaleTimeString());
    const [num, updateNum] = useState(100);
    function plus1() {
        updateNum(num + 1);
    }

    function minus1() {
        updateNum(num - 1);
    }

    function refreshTime() {
        const currentTime = new Date().toLocaleTimeString();
        updateTime(currentTime);
    }

    // Automatically update time every second
    setInterval(refreshTime, 1000);

    return (
        <div>
            <div>
                <h1>{num}</h1>
                <button onClick={plus1}>+</button>
                <button onClick={minus1}>-</button>
            </div>
            <p>{time}</p>
            <button onClick={refreshTime}>Check current time</button>
        </div>
    );
}

export default App;
