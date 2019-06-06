//Packages
import React from 'react'

//Components
import Title from './Title'
import Quienes_Somos from './Quienes_Somos'


//Styles and Images
import '../styles/App.css'
import Logo from '../images/logo.svg'

function App(){

    return(

        <body>
     
            <nav className="Navigation">
                <div className="container">

                        <ul>
                            <a href="#" className="Logo"> 
                                <img className="Logo" src={Logo} alt=""/>
                            </a>
                            <li className="Menu">
                                <a href="#" className="Menu_Name">Home</a>
                            </li>
                            <li className="Menu">
                                <a href="#" className="Menu_Name">Tips</a>
                            </li>
                            <li className="Menu">
                                <a href="#" className="Menu_Name">About Us</a>
                            </li>
                            <li className="Menu">
                            <a href="#" className="Menu_Name">Contact</a> 
                            </li>
                        </ul>
                </div>
            </nav>

            <Title />
            <Quienes_Somos />
          
         </body>

    );


}

export default App