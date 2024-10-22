import React from 'react';
import './App.css'; 
import Navbar from './components/Navbar'; 
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Navbar />
            
          <div className='content-section'> <h1>Welcome to My Blog</h1>
            <p>I am so glad you're here! This blog is a space where I share my thoughts, experiences, and tips. Whether you're looking for inspiration or just a good read, I hope you find something you love.

Feel free to explore, and don't hesitate to reach out if you have any questions or just want to chat!</p>

<p id='hr'>Happy reading!</p>
          <About/>
          <Blog/>
          <Contact/>
        </div>
        </div> 
    );
}

export default App;