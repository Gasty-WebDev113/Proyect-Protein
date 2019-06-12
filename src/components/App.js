//Packages
import React from 'react'

//Components
import Title from './Title'
import QuienesSomos from './Quienes_Somos'
import Layout from './Layout'


//Styles and Images
import '../styles/App.css'


function App(){

    return(
        
        <div>
            
            <Layout />
            <Title />
            <QuienesSomos />
          
         </div>

    );


}

export default App