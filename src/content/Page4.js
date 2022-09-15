import './Page4.css';
import PopUp from '../modules/PopUp.js';

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
            
            <PopUp buttonID="testPopUp" size="small" title="Pop Up Test">
                <h2>This is a Small Pop Up test</h2>
                <p>This is some test content just added between the component tags and retrieved by the component via <b><i>props.children</i></b>.</p>
            </PopUp>
            <PopUp buttonID="testPopUp2" size="med" title="Pop Up Test">
                <h2>This is a Medium Pop Up test</h2>
                <p>This is some test content just added between the component tags and retrieved by the component via <b><i>props.children</i></b>.</p>
            </PopUp>
            <PopUp buttonID="testPopUp3" size="large" title="Pop Up Test">
                <h2>This is a Large Pop Up test</h2>
                <p>This is some test content just added between the component tags and retrieved by the component via <b><i>props.children</i></b>.</p>
            </PopUp>
            <h3>Nested Pop Up's</h3>
            <p>We can place a pop up within a pop up and it will still work as intended. We simply nest the code. This has the additional benefit of containing the child dimensions to stay within the parent pop up. Try the one below:</p>
            <button id="testPopUp4">Nested Pop Up</button>
            <PopUp buttonID="testPopUp4" size="large" title="Pop Up Parent">
                <h2>This is a nested Pop Up test</h2>
                <p>Press the button below to open the next pop up.</p>
                <button id="testPopUp5">Child Pop Up</button>
                <PopUp buttonID="testPopUp5" size="small" title="Pop Up Child">
                    <h2>Child Pop Up</h2>
                    <p>Here is our child pop up</p>
                </PopUp>
            </PopUp>
            <br/><br/>
        </div>
    )

} //end of Page4 component




export default Page4;