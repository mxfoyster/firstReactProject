'use strict';

// ************************************ TIMER CODE **********************************
class Clock extends React.Component {
  constructor(props) {
    super(props);
    let thisDate = new Date()
    let thisTime = thisDate.getTime()
    this.state = {startTime: thisTime, time: 0, stoppedTime: 0 , offsetTime: 0,  running: false};
    
    //so we can access the state in our from within our pauseClicked() and resetClicked() functions
    this.pauseClicked = this.pauseClicked.bind(this); 
    this.resetClicked = this.resetClicked.bind(this);
  }

  //runs at launch (Like Unity Start?)
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10
    );
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
    this.setState ({startTime: thisTime, time: 0, stoppedTime: 0 , offsetTime: 0,  running: false});
    this.updateTime();
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
          <button onClick={this.resetClicked} className="timerControl">RESET</button>
        </span>
        
      </span>
      
    );
  }
}

function TimeApp() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

//handle to the actual DOM
const timerRoot = ReactDOM.createRoot(document.getElementById('timerRoot'));
//render the class
timerRoot.render(<TimeApp />);
