import React from 'react';
import Clock from './Timer.js';
import Codebox from './Codebox.js';

class Page1 extends React.Component {
    constructor(props) {
      super(props);
    }
render(){
    return(
        <div id="middle" className="middle">
            <h2>Simple React Timer</h2>
            <p>Just a simple timer component made using React. I have found one big benefit of react is that by using <i>STATE</i> variables, I can make a component that can be instantiated as many times as I like without having to think about variables clashing. Each instantiation of the component is abstract from the other. Below, I have 3 instances of the component. See how they work independently of each other.</p>
            <div id="timerRoot">
                <div className="timers">
                <Clock />
                <Clock />
                <Clock />
                </div>
            </div>
            <h3>The Code</h3>
            <p>The description of how this code works is quile long winded. I've broken it down the best I can below. If you want to follow along, you can find the code on my <a href='https://first-react.markfoyster.co.uk/'>GitHub</a> account.</p>

            <hr/>
            <h2>Set Up</h2>
            <p>To start with, following the <a href='https://www.w3schools.com/REACT/DEFAULT.ASP'>W3SCHOOLS</a> tutorial, I used <i>create-react-app</i> to get a basic setup running that I could alter for my purposes. I then proceeded to use another demo from one of the <a href='https://reactjs.org/docs/rendering-elements.html'>REACT</a> tutorials on their website.</p>

            <p>The demo is just a simple clock that automatically updates the time each second. The code looked something like this:</p>
            <Codebox number="1"/>
            <hr/>
            <h2>Adapting the code</h2>

            <p>I studied the above code and decided that with a little adaptation, I could turn this into a timer. This would mostly mean starting from scratch but it was an opportunity to learn on the way. I started afresh, creating a React class to contain my timer component:</p>

            <Codebox number="2"/>

            <p>To start with, I import <i>React</i> to derive the class from. Next I import my <i>CSS</i> file with the component styling in.  This is followed by the <i>Constructor</i>. Here I can do my initialisation, declare my state variables, etc. There are a number of state variables used, we will discuss these as we go through the rest of the code within this class.</p> 

            <p>You will note how some of my methods are bound to the class. This allows me to use the state variables within them. This seems to only be necessary on my control classes (For example, my <i>tick()</i> method doesn't need to be bound!). I am guessing it's because they are called from an event which is therefore outside the class? There may be better ways to do this but I'm still learning!</p>

            <h3>React Lifecycle Methods</h3>

            <p>These methods are part of the React structure. they are automatically called at various stages of the component lifecycle and we can leverage them to affect our component's behaviour.</p>

            <p>The <b><i>componentDidMount()</i></b> method is called as soon as the component is launched (mounted in React lingo), it's where I set my callback interval to update the timer display every 10 milliseconds (roughly, there is some lag). This is more than fast enough for the display. Here it is:</p>

            <Codebox number="3"/>

            <p>Note how the interval points to the external function <i>tick()</i>, we will see that later.</p>

            <p>Next we have the <i><b>componentDidUpdate()</b></i> method which is only called when the display is re-rendered. This came in handy for me as I could use it to scroll the "LAP" &lt;DIV&gt; at the bottom of the timer to the last entry whenever a new lap is recorded. I only wanted this to happen once, so I needed to set a "flag" (state variable <i>lapAdded</i>) that could be turned off afterwards. This was an ideal place to do it, like this:</p>

            <Codebox number="4"/>

            <p>The last lifecycle method we will use, <i><b>componentWillUnmount()</b></i> only gets called if the component gets destroyed. this is unlikely to happen in this use case. However, we may as well kill our callback interval here, it's good practice and futureproof's things a little:</p>

            <Codebox number="5"/>

            <h3>My own methods</h3>

            <p>Now, here's the <i>tick()</i> method I called earlier from within the <i>componentDidMount()</i> method:</p>

            <Codebox number="6"/>

            <p>Once again, the workings are extracted into another method. This one is called <i>updateTime()</i>. We'll show that one next:</p>

            <Codebox number="7"/>

            <p>The comment nicely explains how the maths works. We get the current time and compare it to a time we recorded when we started the timer and calculate the difference. An "Offset" value is recoded, this is to subtract the amount of time the timer was paused for. We will see the code where the controls (start, pause, lap) are handled next, things will make more sense then.</p>

            <h3>Some Control Methods</h3>

            <p> The next few methods are called when the user presses on of the controls on the timer. They are set up in the <i>Render()</i> method later.</p>

            <p>We can start with the method that triggers the timer to start. When I first started development, I had it fire at startup so I called this <i>pauseClicked()</i>. On reflection, that was a poor name as I made the button handle "Start" AND "Pause" in the long run! Here it is: </p>

            <Codebox number="8"/>

            <p>This one requires a little explanation. As you can see, the code is broken into two main blocks via the evaluation of the <i>running</i> state variable (my flag for when the timer is running). This allows the function to handle both start / resume AND pause / stop functionality.</p>

            <p>If the timer is running, the first thing we do is change the state variable (our flag) to 'False' so we will be able to ascertain on the next 'click' we intend to restart. Now we retrieve and then store the time we paused at for use later (Arguably, I should have THIS first for better accuracy).</p>

            <p>If the timer is not running when the button is clicked, as before, we change our state variable, this time to 'running: true'. Now with the 'stopped' time we stored earlier, the current time and the current time, we can calculate and update offset time which as we discussed earlier is a cumulative total time the timer has been in 'paused' state since it was first activated. We have everything we need to keep the timer value correct.</p>

            <p>Now for our Reset button code:</p>

            <Codebox number="9"/>

            <p>This one is VERY straightforwards, it just sets all our state variables back to zero. you can see it also sets the start time to current time. This to be honest is legacy code from when I had the timer start automatically on load, I could remove this and set that state to zero, but it's not important, it will be reset when the timer is started using the previous function.</p>

            <p>Now let's look at the <i>lapClicked()</i> method that is triggered when the user clicks the "LAP" button:</p>

            <Codebox number="10"/>

            <p>First I use the spread operator to make a copy of the lap times from the <i>laps</i> state variable (this was decalred as an empty array to start with earlier) into a new array. I get the current time I have stored in the <i>time</i> state variable and using the <i>formatMsToTime()</i> function (we'll explain this later), I push it into the end of the array. This new and updated array can now replace the original array in the <i>laps</i> state variable. At the same time, I set a flag to use later in determining a lap will be added to the lap box. This will be to scroll the box down to this last entry.</p>

            <p>The code to handle the controls is done now. Next, we have the remainder of the supporting code.</p>

            <h3>More of my methods (not controls)</h3>

            <p>Our simple <i>updateTime()</i> function is next:</p>

            <Codebox number="11"/>

            <p>This one is pretty simple, we call it extensively when we need to access the current time on the timer elsewhere in this project. First we get a new Date so we can establish the current time. Next we compare that to the time we started the timer and subtract any delays  from pauses that we calculated earlier in the <i>pauseClicked()</i> control method. We now simply return the value to the calling function.</p>

            <p>Apart from where we the Render the JSX component itself, the last internal class function we have to deal with is the <i>formatMsToTime()</i> we discussed earlier. Here it is: </p>

            <Codebox number="12"/>

            <p>I've made these calculations before to do this code. I didn't fancy working out from scratch and I couldn't find the last example quickly, so I did cheat a little. I used this bit of code <a href='https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript'>HERE</a> from stack overflow to save me some time. You will notice I tweaked it to include Milliseconds on the display. This function is VERY handy for me, allowing me to have a consistent firmat for time on both the timer display itself AND on the lap times. You will see how it adds a zero when there is only one number in the value to preserve the whole <i>HH:MM:SS:MS</i> format.</p>

            <p>So, with regards to within the component class, the last method is where the timer itself is rendered. Here's the code:</p>

            <Codebox number="12b"/>

            <p>This is where the real magic of JSX comes into play. The bulk of it is just like HTML asides from <i>class</i> being replaced with <i>className</i>. Inside any curly braces is where the magic happens. Here I can run my JavaScript. In most cases, you will see it's just state variables. There's a <i>array.map</i> style array method on our <i>laps</i> state variable. It simply iterates through the array and sends the values through to our <i>Lap</i> component which is called the appropriate number of times within the embedded arrow function.</p>

            <p>The beauty of React is that everytime the contents of this code changes, for example, when one of the state variables I have displayed in it is altered, that part of the display is re-rendered and if I understand correctly, ONLY that part of the code. That makes for an efficient way to update the browser just as much as is necessary.</p>
            <h3>External functions, components and other code</h3>

            <p>Now let's discuss the <i>Lap</i> component which resides outside the <i>Clock</i> class:</p>

            <Codebox number="14"/>

            <p>So, our <i>Lap</i> component that we nest into the <i>Clock</i> component is very simple. It's called from the array map arrow function for each iteration and simply formats the appropriate lap number and time for that iteration as is passed to it with the parameters. </p>

            <p>There is one final function that I have left as external. It's our <i>scrollToBottom()</i> function that we use to keep the Lap box of our timer scrolled to the current value. We discussed it's implementation earlier when we descriped the React special <i>componentDidUpdate()</i> function. Here it is:</p>

            <Codebox number="15"/>

            <p>If the lap button was pressed (and only if which we checked earlier), we need to scroll the lap box down to the bottom. To do this, we simply set the scroll position from the top to the height of the box. The way I handled this might seem a little strange. My first thought was to add it directly to the <i>lapClicked()</i> code. This would not work because at that point, the new data has not been rendered yet, the container &lt;DIV&gt; is not at it's new height yet. That's why i set a flag there instead. When we get to the <i>componentDidUpdate()</i> part of the code, I can monitor the flag (lapAdded state variable), call this function (if necessary) and then reset the flag.</p>

            <p>The last piece of code for this module is simply the export declaration:</p>

            <Codebox number="16"/>

            <hr/>
            <h2>Using the component</h2>

            <p>Now, to use the component within some JSX of another component, we can simply import it at the top like this:</p>

            <Codebox number="17"/>

            <p>Note, the <i>Timer.js</i> is just the name I chose for my source file, it can be whatever name I like as log as it has a capital letter to start with and either <i>.js</i> or <i>.jsx</i> as the extension. When I am ready to include it, just as I did with the &lt;Lap/&gt; component, I use &lt;Clock/&gt; within my source along with my <i>timer-style.css</i> file. In my application, the source file is placed within the <i>/src</i> subdirectory of my file structure.</p>
        </div>
        );
    } //end of render method


} //end of class

export default Page1;