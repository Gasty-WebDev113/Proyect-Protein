import React from 'react'
import '../styles/Quienes_Somos.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TextBox from './TextBox'


class Quienes_Somos extends React.Component {


    constructor(props){
        super(props);
      }
    
    
    componentDidMount(){
        AOS.init({
          duration :2000
        })
      }
    



    render(){

        return(
        <div>
           
            <div className='Fondo_consejos'>
                <div className='Caja-Titulo' data-aos='fade-down' 
                    data-aos-offset="500"
                    data-aos-duration="500"
                    >
                    <h1 className='Titulo' >
                     !!! Tips For New Developers !!!!</h1> 
                </div>

                <TextBox Titulo="Tip-2" Texto="Hola a todo mundo" Numero='1' />

                <TextBox Titulo="Tip-1" Texto="Hola a todo mundo" Numero='2'/>

                <TextBox Titulo="Tip-2" Texto="Hola a todo mundo" Numero='1'/>

                <TextBox Titulo="Tip-1" Texto="Hola a todo mundo" Numero='2'/>

                <TextBox Titulo="Tip-2" Texto="Hola a todo mundo" Numero='1'/>

            </div>
        </div>
        )
    }


}

export default Quienes_Somos