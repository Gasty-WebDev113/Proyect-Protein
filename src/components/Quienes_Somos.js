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

        const text = '"Lorem Ipsum is simply dummy text of the printing and typesetting industry". Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

        const tip = "Tip"

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

                <TextBox Titulo={tip} Numero='1' Texto={ text } />

                <TextBox Titulo={tip}  Numero='2' Texto={ text }/>

                <TextBox Titulo={tip}  Numero='3' Texto={ text }/>

                <TextBox Titulo={tip}  Numero='4' Texto={ text }/>

                <TextBox Titulo={tip}  Numero='5' Texto={ text } />

                <TextBox Titulo={tip}  Numero='6' Texto={ text }/>
                
                <TextBox Titulo={tip}  Numero='7' Texto={ text }/>

                <TextBox Titulo={tip}  Numero='8' Texto={ text } />


             

            </div>
        </div>
        )
    }


}

export default Quienes_Somos