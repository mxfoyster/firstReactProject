import './Page4.css';
import PopUp from '../PopUp.js';

function Page4(){
    return(
        <div id="middle" className="middle">
            <h2>Pop Up Container</h2>
            <p>This is a simple <i>"Proof of concept"</i> React version of a Pop Up window similar to the one in my component library. I wanted one that would be simple to implement in multiple instances. The size is configured using props and the contents of the popup can be placed directly within the component tags as jsx. You can test out what I have so far by pressing the buttons below:</p>
            <div className="buttonsContainer">
                <button id="testPopUp">Small Pop Up</button>
                <button id="testPopUp2">Medium Pop Up</button>
                <button id="testPopUp3">Large Pop Up</button>
            </div>
            
            <PopUp buttonID="testPopUp" size="small" key="1">
                <h2>This is a Small Pop Up test</h2>
                <p>This is some test content just added between the component tags and retrieved by the component via <b><i>props.children</i></b>.</p>
            </PopUp>
            <PopUp buttonID="testPopUp2" size="med" key="2">
                <h2>This is a Medium Pop Up test</h2>
                <p>This is some test content just added between the component tags and retrieved by the component via <b><i>props.children</i></b>.</p>
            </PopUp>
            <PopUp buttonID="testPopUp3" size="large" key="3">
                <h2>This is a Large Pop Up test</h2>
                <p>This is some test content just added between the component tags and retrieved by the component via <b><i>props.children</i></b>.</p>
            </PopUp>
        </div>
    )

} //end of Page4 component




export default Page4;