import React, { useEffect, useState } from 'react';
import './code-style.css';

function Codebox(props){
    const [data,setData] = useState(0); //using a state variable makes sure we re-render
    let fileName = "codeSnippet" + props.number + ".txt";
    let thisID = "codeBox" + props.number; 

    //the fetch function
    const getCode = (fileName)=>{
        fetch(fileName) 
        .then(response => response.text()) 
        .then(textString => {
            setData(textString);
            }); 
    }

    //using the effect hook to run the fetch function (prevent infinite loop)
    useEffect(()=>{
        getCode(fileName);
        },[])
    
    //returning the component WITH the data for rendering
    return(
    <pre>
        {/* Using dangerouslySetInnerHTML stops react from escaping the tags in my text file. Probably not the best way to do this but fun :-D */}
        <code id={thisID} dangerouslySetInnerHTML={{__html: data}}>
        </code>
    </pre>
    )
}

export default Codebox;