import './Footer.css';

function Footer(){
    return(
        <footer className='footer'>
            <div className='linkBox'>
                <span className='link'>Visit my <a href='https://github.com/mxfoyster'>GitHub account</a></span>
                <span className='link'>See my <a href='https://markfoyster.co.uk'>Profile Website</a></span>
                <span className='link'>Visit my <a href='https://www.linkedin.com/in/mark-foyster/'>LinkedIn Profile</a></span>
                <span className='link'>Read my <a href='https://blog.markfoyster.co.uk'>Wordpress Blog</a></span>
            </div>
            <small>Mark Foyster &copy; September 2022.</small>
        </footer>
    )

} //end of Page3 component

export default Footer;