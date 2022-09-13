import { useEffect, useState } from 'react';
import './page3.css';
function Page3(){
    const [data,setData] = useState(0); 
    //call to the server side of Bootstrap Mysql API
    function getData() {
        var formData = new FormData();
        formData.append('queryType', "all"); //for the API 
        fetch('https://bootstrap.markfoyster.co.uk/includes/modelcarsall.php', {
        method: 'post',
        body: formData
        }).then(function(response) {
            return response.json();
        }).then(function(response) {
           setData(response);
        }).catch (function (error){
            console.log("Uhoh, something went wrong..");
        });
    }
    const Toy = ({name, price})=>{
        return(<tr><td>{name}</td><td>£{price}</td></tr>)
}

    useEffect (()=>{(getData())},[]);
    return(
        <div id="middle" className="middle">
            <h2>Other Stuff</h2>
            <p>I'm reserving this area for some more simple react projects. If you have any ideas, feel free to email me at <a href='mailto:mxfoyster@yahoo.co.uk'>mxfoyster@yahoo.co.uk.</a></p>
            <h2>Accessing MySQL</h2>
            <p>Just as proof of concept, I am going to fetch some data from another project (Bootstrap & MySQL) and display it using React. The backend is on a different site using PHP. This is a less likely usage case, later on I will do a proper 'full stack 'React project hosted with Node.js.</p>
            
            <p>Using data from a PHP backend will still work because the API just returns a JSON. PHP doesn't care where the data is going (CORS aside..) and React doesn't care where it comes from. It's just data! This abstraction is precisely the reason why RESTful API's and the like are so popular. I use a VERY cut down version of the JavaScript side of the API utilised in the Bootstrap project to make the request.</p>
            
            <p>Below, I access the data using <i>fetch()</i>. The data is stored in a state variable using the <i><b>useState()</b></i> hook. This is encapsulated in a <i><b>useEffect()</b></i> hook to ensure re-rendering behaves as it should. No infinite loops, etc. Our equivalent to the class method <i><b>componentDidUpdate()</b></i> in this case.</p>
            <br/>
            {/* We have to be sure the data is available before we try to map (can't map null) OR render it (tbody text as child warning) it hence additional logic */}
            <div className="tableContainer">
                <table className="dataTable">
                <thead className="dataTableHeading"><tr><td>Toy Name</td><td>Toy Price</td></tr></thead>
                    {data.length>0&&
                    <tbody className="dataTableBody">{
                        data.map((toy, index)=><Toy key={index} name={toy.productName} price={toy.buyPrice}/>)
                        }
                    </tbody>
                    }
                </table>
            </div>
            <br/>
            <br/>
        </div>
    )

} //end of Page3 component




export default Page3;