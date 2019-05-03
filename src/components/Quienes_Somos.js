import React from 'react'
import '../styles/Quienes_Somos.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


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

                <div className='Consejo_1' id="Consejo-1" data-aos="fade-right">

                    <h1 className="Consejo1_titulo">Tip #1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla augue id magna suscipit, ac mattis lacus blandit. Cras at lorem lobortis, varius enim a, pulvinar ligula. Vivamus id arcu nibh. Proin justo risus, consequat ac venenatis vitae, auctor a nisl. Fusce facilisis neque ut rhoncus condimentum. Donec non accumsan tortor. Nam id imperdiet velit. Suspendisse aliquet diam ac dictum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut lectus egestas, tristique enim in, porttitor nisl. In in leo consequat, sodales ipsum non, bibendum est. Maecenas sed rutrum magna.</p>
                
                </div>

                <div className='Consejo_1' id="Consejo-2" data-aos="fade-left">

                    <h1 className="Consejo1_titulo" >Tip #2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla augue id magna suscipit, ac mattis lacus blandit. Cras at lorem lobortis, varius enim a, pulvinar ligula. Vivamus id arcu nibh. Proin justo risus, consequat ac venenatis vitae, auctor a nisl. Fusce facilisis neque ut rhoncus condimentum. Donec non accumsan tortor. Nam id imperdiet velit. Suspendisse aliquet diam ac dictum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut lectus egestas, tristique enim in, porttitor nisl. In in leo consequat, sodales ipsum non, bibendum est. Maecenas sed rutrum magna.</p>
                </div>

                <div className='Consejo_1' id="Consejo-3" data-aos="fade-right">

                    <h1 className="Consejo1_titulo" >Tip #3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla augue id magna suscipit, ac mattis lacus blandit. Cras at lorem lobortis, varius enim a, pulvinar ligula. Vivamus id arcu nibh. Proin justo risus, consequat ac venenatis vitae, auctor a nisl. Fusce facilisis neque ut rhoncus condimentum. Donec non accumsan tortor. Nam id imperdiet velit. Suspendisse aliquet diam ac dictum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut lectus egestas, tristique enim in, porttitor nisl. In in leo consequat, sodales ipsum non, bibendum est. Maecenas sed rutrum magna.</p>
                </div>

                <div className='Consejo_1' id="Consejo-4" data-aos="fade-left">

                    <h1 className="Consejo1_titulo" >Tip #4</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla augue id magna suscipit, ac mattis lacus blandit. Cras at lorem lobortis, varius enim a, pulvinar ligula. Vivamus id arcu nibh. Proin justo risus, consequat ac venenatis vitae, auctor a nisl. Fusce facilisis neque ut rhoncus condimentum. Donec non accumsan tortor. Nam id imperdiet velit. Suspendisse aliquet diam ac dictum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut lectus egestas, tristique enim in, porttitor nisl. In in leo consequat, sodales ipsum non, bibendum est. Maecenas sed rutrum magna.</p>
                </div>

                <div className='Consejo_1' id="Consejo-5" data-aos="fade-right">

                    <h1 className="Consejo1_titulo" >Tip #5</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla augue id magna suscipit, ac mattis lacus blandit. Cras at lorem lobortis, varius enim a, pulvinar ligula. Vivamus id arcu nibh. Proin justo risus, consequat ac venenatis vitae, auctor a nisl. Fusce facilisis neque ut rhoncus condimentum. Donec non accumsan tortor. Nam id imperdiet velit. Suspendisse aliquet diam ac dictum sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut lectus egestas, tristique enim in, porttitor nisl. In in leo consequat, sodales ipsum non, bibendum est. Maecenas sed rutrum magna.</p>
                </div>

            </div>
        </div>
        )
    }


}

export default Quienes_Somos