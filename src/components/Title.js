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
            <div>
                <div>
                    <h1 className="Title_h1">The First React Proyect
                    <p className="Title_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum eu augue rhoncus fermentum. Pellentesque dictum efficitur nisi id molestie. Suspendisse malesuada, nibh id egestas pulvinar, lectus tellus ornare velit, ac aliquam ipsum urna vel ligula. Nulla luctus porta ligula vel laoreet. Suspendisse potenti
                    </p>
                    </h1>
                    
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