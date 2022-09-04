import logo from './React-icon.svg';
import './style.css';
//import './highlight.min.js'; 
import TimeApp from './Timer.js';


function App() { 
  return (
    <div className="App">
      <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"/>
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
      <div className="main-container">
        <header>
            <img src={logo} width="250" height="250" className="logo" alt="React Logo"/>
            <div>
                <h1 className="heading">My First React Project</h1>
                <h2 className='subHeading'>By Mark Foyster</h2>
            </div>
        </header>
        
        <div className="middle">
            <h2>Simple React Timer</h2>
            <p>Just a simple timer component made using React. I have found one big benefit of react is that by using <i>STATE</i> variables, I can make a component that can be instantiated as many times as I like without having to think about variables clashing. Each instantiation of the component is abstract from the other. Below, I have 3 instances of the component. See how they work independently of each other.</p>
            <div id="timerRoot"><TimeApp/></div>
        </div>
          <h2>Set Up</h2>
          <p>To start with, following the <a href='https://www.w3schools.com/REACT/DEFAULT.ASP'>W3SCHOOLS</a> tutorial, I used <i>create-react-app</i> to get a basic setup running that I could alter for my purposes. I then proceeded to use another demo from one of the <a href='https://reactjs.org/docs/rendering-elements.html'>REACT</a> tutorials on their website.</p>

          <p>The demo is just a simple clock that automatically updates the time each second. The code looked something like this:</p>
          <pre>
            <code id="codeBox1">
              {displayCode("codeSnippet1.txt", "codeBox1")}
            </code>
          </pre>
          <hr/>
          <h2>Adapting the code</h2>

          <p>I studied the above code and decided that with a little adaptation, I could turn this into a timer. This would mostly mean starting from scratch but it was a nopportunity to learn on the way. I started afresh, creating a React class to contain my timer component:</p>

          <pre>
            <code id="codeBox2">
              {displayCode("codeSnippet2.txt", "codeBox2")}
            </code>
          </pre>

          <p>Note how there are a number of state variables used, we will discuss these as we go on and I list the functions / methods within this class. Furthermore, you will note how some functions are binded to the class. This allows me to use the state variables within these functions. There may be better ways to do this but I'm still learning!</p>

          <p>The next function is a React function that is called as soon as the coponent is launched (mounted in React lingo), it's where I set my callback interval to update the timer display every 10 milliseconds (roughly, there is some lag). This is more than fast enough for the display. Here it is:</p>

          <pre>
            <code id="codeBox3">
              {displayCode("codeSnippet3.txt", "codeBox3")}
            </code>
          </pre>

          <p>Note how the interval points to the external function <i>tick()</i>, we will see that later.</p>

          <p>Next we have another React soecial function that is only called when the display is re-rendered. This came in handy for me as I could use it to scroll the "LAP" &lt;DIV&gt; at the bottom of the timer to the last entry whenever a new lap is recorded. I only wanted this to happen once, so I needed to set a "flag" (state variable <i>lapAdded</i>) that could be turned off afterwards. This was an ideal place to do it, like this:</p>

          <pre>
            <code id="codeBox4">
              {displayCode("codeSnippet4.txt", "codeBox4")}
            </code>
          </pre>

          <p>The last of our special functions, this only gets called if the component gets destroyed. this is unlikely to happen but we may as well kill our callback interval here, it's good practice and futureproofs things a little:</p>

          <pre>
            <code id="codeBox5">
              {displayCode("codeSnippet5.txt", "codeBox5")}
            </code>
          </pre>

          <p>Now, here's the <i>tick()</i> function we called earlier:</p>

          <pre>
            <code id="codeBox6">
              {displayCode("codeSnippet6.txt", "codeBox6")}
            </code>
          </pre>

          <p>Once again, the workings are extracted into another function. This one is called <i>updateTime()</i>. We'll show that one next:</p>
          
          <pre>
            <code id="codeBox7">
              {displayCode("codeSnippet7.txt", "codeBox7")}
            </code>
          </pre>

          <p>The comment nicely explains how the maths works. We get the current time and compare it to a time we recorded when we started the timer and calculate the difference. An "Offset" value is recoded, this is to subtract the amount of time the timer was paused for. We will see the code where the controls (start, pause, lap) are handled next, things will make more sense then.</p>

          <p>We can start with the function that triggers the timer to start. When I first started development, I had it fire at startup so I called this <i>pauseClicked()</i>. On reflection, that was a poor name as I made the button handle "Start" AND "Pause" in the long run! Here it is: </p>

          <pre>
            <code id="codeBox8">
              {displayCode("codeSnippet8.txt", "codeBox8")}
            </code>
          </pre>

        <footer>
            <hr/>
            <small>Mark Foyster &copy; September 2022.</small>
        </footer>
    </div>


    </div>
    
  );
}

function displayCode(fileName, id){
  fetch(fileName) 
			.then(response => response.text()) 
			.then(textString => {
        console.log(textString);
        document.getElementById(id).innerHTML = textString;
			});
	
}
export default App;
