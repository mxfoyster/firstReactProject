import './page2.css';

function Page2(){
    return(
        <div id="middle" className="middle">
            <h2>A review of this project</h2>
            <p>As my first React project, there has been a fairly steep learning curve. To be fair, that was the point! I find I learnm ore by <i>'Jumping in'</i> and writing some code. Here, I am going to discuss some of the lessons I have learnt along the way, a <i>'Code Review'</i> of sorts. I will include not only the timer but the code for this website too.</p>

            <hr/>
            <h2>Functional vs Class components</h2>
            <p>I use both within this project. I really had no clue regarding the advantages and disadvantages of each when I started, my understanding is improving now. There is detailed information within the official documentation and several other articles online including <a href='https://medium.com/star-gazers/react-class-vs-functional-components-a49383f65f0e'>this article</a> on Medium.com.</p>
            <p>I'll try and summarise what I have learnt below:</p>
            
            <div className="reportBox">
                <span className="reportBlock">
                    <h3 className="reportSubtitle">Class Components</h3>
                    <ul>
                        <li>Inherits many React methods as default</li>
                        <li>'Stateful' (Implement Logic & state)</li>
                        <li>Has explicit <i>Render()</i> method</li>
                        <li>Easy access to component lifecycle</li>
                    </ul>
                </span>
                <span className="reportBlock">
                    <h3 className="reportSubtitle">Functional Components</h3>
                    <ul>
                        <li>Simple, clean declaration & very efficient</li>
                        <li>'Stateless' (Accept & display data)</li>
                        <li>No <i>Render()</i> method</li>
                        <li>Needs <i>'HOOKS'</i> to access state & lifecycle</li>
                    </ul>
                </span>
            </div>

            <p>OK, so, what does that mean? Well, for simple components that just display data or information, functional components are a reliable and easy to code choice. Because we have no need to know about the lifecycle or implement complicated logic, the component (by default) is completely abstract from any components containing them.</p>

            <p>Classes however have full access to state and component lifecycle by standard. We have methods to utilise that will automatically be invoked at various stages. For example:</p>
            
            <div className="reportBox">
            <span className="reportBlock">
                <b><i>componentDidMount()</i></b>
                <p>Called as the first rendering is due to start.</p>    
            </span>
            
            <span className="reportBlock">
                <b><i>componentDidUpdate()</i></b>
                <p>Called each time the component will be re-rendered.</p> 
            </span>
            </div>

            <p>There are more methods for different lifecycle stages. They make a highly convenient place to put code that will initialise, update, clean up etc, exactly when we want to!</p>
            <h3>So, each for their purpose?</h3>
            <p>At first glance, this seems very simple to decide what we want to do. We can use Classes for more complex components with lots of logic involved and where we have state changes. When we have simple components, we can just use a function for simple components, the code will be short and easy to understand.</p>

            <p>Unfortunately, as I now have learnt, things are a little more complicated! Classes are fast being considered the <b><i>OLD</i></b> way of doing things. In the early days of React, there was no way to access state and lifecycle within functions. This is no longer the case. Through <i>'HOOKS'</i>, we now have a way to to that. Functional components are simpler and easier to read, their default 'stateless' characteristics promote better coding practices and there is a (controversial) thought that they are faster.</p>

            <h3>How that relates to me / this project</h3>
            <p>I have a mixture of component types within the project. The timer component is class based. The 'Code Boxes' I display my code in are functional as is this page. As my understanding of React grows and I become more used to hooks, inevitably, I feel I will move towards mostly functional components. It's not down to a personal preference, I think I prefer the class structure, it has a more OOP feel to it and the lifecycle methods are convenient for me. It's simply that I feel Hooks have been created because React wishes to move away from classes.</p>
            <p>I intend to continue to advance my understanding of classes, if nothing else, I am sure I will need to work with legacy code in the future but I will put more effort towards understanding how to achieve what I need to without them!</p> 

            <br/>

            <h2>Other observations</h2>

            <h3>Component based thinking</h3>
            <p>This is something I am rapidly falling in love with, I think it may be my favourite feature of React. As we move into a world where UX/UI is becoming more of a focus and many of us move more towards the Agile and CI/CD methodologies, breaking features down into individual components makes this easier. Components naturally remain quite abstract from their surrounding environment. We can tweak them as much as we like with minimal chances of breaking code elsewhere.</p>

            <p>This does not mean I have adapted completely to this way of thinking yet, just look at the source of this project. Some of the components are too big. I need to break things down into smaller chunks and there is still much left to do before I can consider myself to have embraced the concept completely.</p>

            <h3>JSX and Babel</h3>
            <p>To start with, this scared me a little. Mixing JavaScript and HTML in the same document sounded complicated. I am very happy to say I was wrong. I have found that it's like having inline script but exactly where you need it to make the code easier to understand. I have used PHP quite a bit over the years and more recently played with PUG (JADE) for another project. I see similarities in this system, I look forwards to learning it more thoroughly</p>

            <p>There are other 'little things' about JSX that I find appealing too. For example, in modern HTML5, there are some inconsistencies between developers in using self-closing tags etc. Do you self close YOUR &lt;img&gt; tags? I try to but sometimes my autocomplete doesn't (I must fix that!). There's no getting away with that when you use JSX!</p>

            <br/>
            <h2>What's next?</h2>
            <p>There's more tweaking to be had in this project. As my knowledge of React increases, it's likely I will make alterations and improvements. I might even add some additional components similar to the timer. However, I need to move to something a little more 'full stack'. The only interaction I have done so far is to use the <i>fetch(api)</i> to load a simple text file off the server containing my code. As I progress to interacting with databases etc, a fresh project will be required!</p>
            
        </div>
        );
   
} //end of function

export default Page2;