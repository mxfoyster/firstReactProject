import { useEffect} from 'react';
import './PopUp.css';

function PopUp(props){
    //we must have a unique id for each instance, we can base it on the Button ID
    const containerID = props.buttonID + "_container";
    const closeBtnID = props.buttonID + "_closeBtn";

    useEffect(() => {
        //CODE HERE SHOULD ONLY RUN AFTER FIRST MOUNT
        const popUpButton = document.getElementById(props.buttonID)
        const popUpWindow = document.getElementById(containerID);
        const closeBtn = document.getElementById(closeBtnID);
        popUpWindow.classList.add("popUpFirstLoad");//hide minus animation to start off
        popUpButton.addEventListener('click', ()=>{openPopUp(popUpWindow)});
        closeBtn.addEventListener('click', ()=>{closePopUp(popUpWindow)});
        sizePopUp(popUpWindow, props.size);
        // return () => //clean up code can go here
      }, [containerID, closeBtnID, props])  // <-- The effect will only run more than once if something in this array changes (It won't!)
    
    return(
        <div id={containerID} className='popUpContainer'>
            <div className="popUpTopBar"><span className='popUpTitle'>{props.title}</span><img id={closeBtnID} className='closeBtn' src="./images/closebtn.png" alt="Close Pop Up Window"/></div>
            
            {props.children}
        </div>
    )

}

function sizePopUp(puWindow, size){
    switch(size){
        case "small":
            puWindow.classList.add("popUpIsSmall");
            break;
        case "med":
        case "medium":
            puWindow.classList.add("popUpIsMedium");
            break;
        default:
            puWindow.classList.add("popUpIsLarge");
    }
}

function openPopUp(puWindow){
    puWindow.classList.remove("popUpFirstLoad");
    puWindow.classList.remove("popUpFadeOut");
    puWindow.classList.add("popUpFadeIn");
}

function closePopUp(puWindow){
    puWindow.classList.add("popUpFadeOut");
    puWindow.classList.remove("popUpFadeIn");
}

export default PopUp;