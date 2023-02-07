
import BuscadorCEP_NoliFretes from '../../Assets/noli_project.png';
import AmigosDoReiReact from '../../Assets/amigosrei.png';
import PlataformaEventosOnline from '../../Assets/plataformaEventos.png';
import dtmoney from '../../Assets/dtmoney.png';
import redesocialswif from '../../Assets/redesocial.png';
import todo from '../../Assets/todo.png';

interface imgDesc {
    name: string;
}

export function ImageDescription({ name } : imgDesc){

    return(
        <img src={
            name == "BuscadorCEP_NoliFretes"? BuscadorCEP_NoliFretes :
            name == "AmigosDoReiReact" ? AmigosDoReiReact :
            name == "PlataformaEventosOnline" ? PlataformaEventosOnline :
            name == "dtmoney" ? dtmoney :
            name == "redesocial-swif" ? redesocialswif :
            name == "ToDo-List-React-CRUD" ? todo : ''} alt=""/>
    )
}