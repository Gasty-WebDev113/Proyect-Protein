//Packages
import React from 'react'

//Components
import Title from './Title'
import QuienesSomos from './Quienes_Somos'
import Layout from './Layout'
import LitleIntro from './LittleIntro'

//Styles and Images
import '../styles/App.css'


function App(){

    return(
        
        <div>
            <Layout />
            <Title />
            <LitleIntro />
            <QuienesSomos />
  
          
         </div>

    );


}

//  <QuienesSomos /> 

export default App