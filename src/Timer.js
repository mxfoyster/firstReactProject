import React from 'react';
//import ReactDOM from 'react-dom/client';

// ************************************ TIMER CODE **********************************
class Clock extends React.Component {
  constructor(props) {
    super(props);
    let thisDate = new Date()
    let thisTime = thisDate.getTime()
    this.state = {startTime: thisTime, time: 0, stoppedTime: 0 , offsetTime: 0,  running: false, laps: [], lapAdded: false};
    
    //so we can access the state in our from within our ***Clicked() functions
    this.pauseClicked = this.pauseClicked.bind(this); 
    this.resetClicked = this.resetClicked.bind(this);
    this.lapClicked = this.lapClicked.bind(this);
  }

  //runs at launch (Like Unity Start?)
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10
    );
  }

  componentDidUpdate() {
    //if we added a lap, we want to scroll to the bottom but only ONCE hence a flag we reset
    if (this.state.lapAdded){
      scrollToBottom();
      this.setState({lapAdded: false});
    };
  }

  //runs when we're done (Component removed?)
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //our own function within the class
  tick() {
    if (this.state.running){
      this.setState({
        time: this.updateTime()
      });
    }
  }

  //where we will sort our start/stop logic
  pauseClicked(){
    if(this.state.running){
      
      this.setState({running: false});
      let pauseBeginTime = this.updateTime();
      this.setState({stoppedTime: pauseBeginTime}); //store time we paused
    } 
    else {
      this.setState({running: true});
      //offset time = current offset time + (Current time - time we stopped)
      let thisOffsetTime = this.state.offsetTime + (this.updateTime() - this.state.stoppedTime);
      this.setState({offsetTime: thisOffsetTime}); //start our offset
    }
  }

  resetClicked(){
    let thisDate = new Date()
    let thisTime = thisDate.getTime()
    this.setState ({startTime: thisTime, time: 0, stoppedTime: 0 , offsetTime: 0,  running: false, laps: []});
    this.updateTime();
  }

  lapClicked(){
    let lapArray = [...this.state.laps];
    lapArray.push(this.formatMsToTime(this.state.time));
    this.setState({laps: lapArray, lapAdded: true}); //we also set our flag so we can scroll box down later
  }

  updateTime(){
    let dateNow = new Date()
    // time now = (date now - date we started timer) - total duration of pauses
    let timeNow = (dateNow - this.state.startTime) - this.state.offsetTime;
    return timeNow;
  }

  //returns milliseconds converted into the HH:MM:SS:MsMs format (human readability)
  formatMsToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 10),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds  : milliseconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  render() {
    return (
      <span className="timer">
        <span className="timeBox">
          <span className="time">{this.formatMsToTime(this.state.time)}</span>
        </span>
        <br />
        <span className="buttons">
          <button onClick={this.pauseClicked} className="timerControl">{(this.state.running) ? "PAUSE" : (this.state.time === 0) ? "START" :"RESUME"}</button>
          <button onClick={this.lapClicked} className="timerControl">LAP</button>
          <button onClick={this.resetClicked} className="timerControl">RESET</button>
        </span>
        <div className="lapTime" id='lapBox'>{this.state.laps.map((value, index) => (
          <Lap key={index} lapNumber={index} lapTime={value} /> //we need the key to have a unique 
          ))} 
        </div>
      {/* {if (this.state.lapAdded){console.log("lap Added");}}   */}
      </span>
      
    );
  }
}

//gives us three instances of Clock
function TimeApp() {
  return (
    <div className="timers">
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

//component for lap time (used in Clock component)
const Lap = ({ lapNumber, lapTime}) => (
  <div>
    <b>LAP {lapNumber +1}:</b> {lapTime}
  </div>
  
);

function scrollToBottom(){
  let lapDiv = document.getElementById("lapBox");
  lapDiv.scrollTop = lapDiv.scrollHeight;
}

export default TimeApp;