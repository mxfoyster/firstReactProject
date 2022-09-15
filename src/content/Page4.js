import './Page4.css';
import PopUp from '../modules/PopUp.js';
import Codebox from '../modules/Codebox.js';

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

            <h3>Usage</h3>
            <p>Observe the code which is used for the three pop up's invoked by the buttons above:</p>
            <Codebox number="b1"/>
            <p>The content to display within the pop up is simply placed between the opening <b>&lt;CodeBox&gt;</b> and closing <b>&lt;/CodeBox&gt;</b> tags. The remaining configuration is provided with props, we pass the component  the following parameters:</p> 
            <ul className="attribList">
                <li><b><i>title=""</i></b> attribute sets the Pop Up Title</li>
                <li><b><i>size=""</i></b> attribute controls Pop Up size (<i>"small"</i>, <i>"med" / "medium"</i> or <i>"large"</i>)</li>
                <li><b><i>buttonID=""</i></b> attribute needs the <b>ID</b> of element / button to invoke Pop Up when clicked.</li>
            </ul>
            
            <p>In our case we use buttons to invoke the pop ups above. We simply place them where we want them within the <b>JSX</b>. Here's the code for ours:</p>
            <Codebox number="b2"/>
            <p>The parent div is just used with <i>flexbox</i> css to nicely display the button group and is not relevant to the function of the code.</p>

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
            <p>The code for these nested pop ups looks like this:</p>
            <Codebox number="b3"/>
            <h3>To Review</h3>
            <p>I'm very happy with this mini project. It helped me to get a much better grasp on how the <b><i>useEffect()</i></b> hook works and how I can utilise it to run code at specific points within the component lifecycle.</p> 
            
            <p>Additionally, it made me think about how to control events when there are multiple instances of the same component. Unlike <i>class components</i>, I cannot rely on the <b><i>this</i></b> keyword to differentiate between instances.</p>
            
            <p> Initially, I had thought about using <i>UUID</i> to give me individual names for internal element ID's. Because I wanted the user to be able to choose whatever element they wanted for the instantiation of the pop up (provided a <i>click</i> event is used), it made more sense for THEM to provide the unique ID for the button. I add to the supplied ID string and use it to identify the different elements within the component. Much simpler!</p>
            
            <p>It should be noted that for the nested example, I have not yet implemented anything to ensure a child pop up is closed with the parent. Therefore, if you close the parent first, the child will stay open until it's closed separately. That might be a feature for another day!</p>
            <br/><br/>
        </div>
    )

} //end of Page4 component




export default Page4;