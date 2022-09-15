import { useEffect, useState } from 'react'; 
import logo from './React-icon.svg';
import './style.css';
//import './highlight.min.js'; 
import Page1 from './content/Page1.js';
import Page2 from './content/Page2.js';
import Page3 from './content/Page3.js';
import Page4 from './content/Page4.js';
import Footer from './modules/Footer.js';


function App() { 
  const [page,setPage] = useState(0); //page number state variable
  //setPage(1);
  useEffect(()=>{setPage(1);},[])

  function changePage(e,thisPage){
    e.preventDefault();
    setPage(thisPage);
  }

  function Page(){
    
    switch (page) {
      case 1:
        return <Page1/>
      case 2:
          return <Page2/>
      case 3:
          return <Page3/>
      default:
          return <Page4/>
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <header>
            <img src={logo} width="250" height="250" className="logo" alt="React Logo"/>
            <div>
                <h1 className="heading">My First React Project</h1>
                <h2 className='subHeading'>By Mark Foyster</h2>
                <nav className='mainNav'>
                  <button onClick={(e)=>changePage(e,1)}>Timer App</button>
                  <button onClick={(e)=>changePage(e,4)}>Pop Up</button>  
                  <button onClick={(e)=>changePage(e,2)}>Code Review</button>
                  <button onClick={(e)=>changePage(e,3)}>Other Stuff</button>
                </nav>
            </div>
            
        </header>
          
       {/* Call our Page() function which will return the appropriate page component */}
        <Page/>
        
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
