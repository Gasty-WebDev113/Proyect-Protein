import React from 'react'
import '../styles/TextBox.css'
import AOS from 'aos'

class TextBox extends React.Component {

    state = {
        Titulo: '',
        Texto: '',
        Numero: ''
      };


    render(){

        if (this.props.Numero == 1) { //Si el numero del tip del componente es par, se ve desde la derecha, sino se ve desde la izquierda

        return(
        <div className='Consejo_1' id="Consejo-1" data-aos="fade-right">
           
    
                <h1 className="Consejo1_titulo"> {this.props.Titulo} </h1>
                <p> {this.props.Texto} </p>
            
        </div>
        )} else {
            return(
                <div className='Consejo_1' id="Consejo-2" data-aos="fade-left">
                   
            
                        <h1 className="Consejo1_titulo"> {this.props.Titulo} </h1>
                        <p> {this.props.Texto} </p>
                    
                </div>
                )
        }
    }

}

export default TextBox