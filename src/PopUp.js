import {useRef, useEffect} from 'react';
import './PopUp.css';

function PopUp(props){
    useEffect(() => {
        //CODE HERE SHOULD ONLY RUN AFTER FIRST MOUNT
        const popUpButton = document.getElementById(props.buttonID)
        const popUpWindow = document.getElementById("popUpContainer");
        const closeBtn = document.getElementById("closeBtn");
        popUpWindow.classList.add("popUpFadeOut");//hide as default
        popUpButton.addEventListener('click', ()=>{openPopUp(popUpWindow)});
        closeBtn.addEventListener('click', ()=>{closePopUp(popUpWindow)});
        // return () => //clean up code can go here
      }, [])  // <-- Empty array triggers this ONCE ONLY behaviour
    
    return(
        <div id="popUpContainer">
             <img id="closeBtn" src="./images/closebtn.png" alt="Close Pop Up Window"/>
            <p>This is a test</p>
        </div>
    )

}

function openPopUp(puWindow){
    puWindow.classList.remove("popUpFadeOut");
    puWindow.classList.add("popUpFadeIn");
}

function closePopUp(puWindow){
    puWindow.classList.add("popUpFadeOut");
    puWindow.classList.remove("popUpFadeIn");
}

export default PopUp;