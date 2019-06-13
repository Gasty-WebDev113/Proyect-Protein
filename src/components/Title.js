import React from 'react'
import '../styles/Title.css'
import arrow from '../images/arrow.svg'


class Title extends React.Component {

    ScrollDown = e => {
    console.log('Haz Pasado de pagina');
    return  window.scroll({
        top: 750, 
        left: 0, 
        behavior: 'smooth'

     
      })
    };
    
    render(){
        return(
            <div className="Title">
                
                <div>
                <div className="video-background-color"><img className="video-background" width='100%' src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="esperar"/></div>
                    <h1 className="Title_h1">The React - Kaizen
                    <p className="Title_p">This is my first proyect with React Framework, using all of his functions, telling you in my personal blogs my way in this awsome framework.
                    <br/><br/>Let's Start :D
                    </p>
                    </h1>

                    <div className="button-see-my-blogs"><span className="button-see-my-blogs-text">See my blogs</span></div>
                    <div className="button-follow-me"><a href="https://www.linkedin.com/in/gaston-morales-09673b15a/" target="_blank" rel="noopener noreferrer" className="button-follow-me-text">Follow Me</a></div>
                    
                    
                    <h2 className="Title_h2">See More</h2>
                    <div className="Circle_button" onClick={this.ScrollDown}>
                        <img className='arrow' src={arrow} alt=""/>
                    </div>
                    
                </div>
                
            </div>
    
        );
    }


}

export default Title;