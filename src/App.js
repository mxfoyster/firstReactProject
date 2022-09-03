import logo from './React-icon.svg';
import './style.css';
import TimeApp from './Timer.js';

function App() { 
  return (
    <div className="App">
      <div className="main-container">
        <header>
            <img src={logo} width="250" height="250" className="logo" alt="React Logo"/>
            <div>
                <h1 className="heading">My First React Project</h1>
                <h2>by Mark Foyster</h2>
            </div>
        </header>
        
        <div className="middle">
            <h2>Simple React Timer</h2>
            <p>Just a simple timer component made using React. I have found one big benefit of react is that by using <i>STATE</i> variables, I can make a component that can be instantiated as many times as I like without having to think about variables clashing. Each instantiation of the component is abstract from the other. Below, I have 3 instances of the component. See how they work independently of each other.</p>
            <div id="timerRoot"><TimeApp/></div>
        </div>

        <footer>
            <hr/>
            <small>Mark Foyster &copy; September 2022.</small>
        </footer>
    </div>


    </div>
    
  );
}


export default App;
