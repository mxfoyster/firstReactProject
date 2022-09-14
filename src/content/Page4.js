import './Page4.css';
import PopUp from '../PopUp.js';

function Page4(){
    return(
        <div id="middle" className="middle">
            <h2>Pop Up Container</h2>
            <p>This will be a React version of a Pop Up window similar to the one in my component library. Having it as a React component should make it easy to implement in multiple instances, even nested. I should be able to use props for configuration options to make it flexible.</p>

            <button id="testPopUp">Pop Up</button>
            <PopUp buttonID="testPopUp"/>
        </div>
    )

} //end of Page4 component




export default Page4;