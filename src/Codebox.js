import React, { useEffect, useState } from 'react';


function Codebox(props){
    const [data,setData] = useState(0);
    let fileName = "codeSnippet" + props.number + ".txt";
    let thisID = "codeBox" + props.number; 

    //the fetch function
    const getCode = (fileName)=>{
        fetch(fileName,{
            headers : { 
              'Content-Type': 'text/html'
             }
          }
          ) 
        .then(response => response.text()) 
        .then(textString => {
            setData(textString);
            }); 
    }

    //using the effect hook to run the fetch function
    useEffect(()=>{
        getCode(fileName);
        },[])
    
    
    //returning the component WITH the data for rendering
    return(
    <pre>
        <code id={thisID} dangerouslySetInnerHTML={{__html: data}}>
        </code>
        {/* {console.log(data)}    */}
    </pre>
    )
}

export default Codebox;