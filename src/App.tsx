import './styles.css';
import img from './nature.jpg';
import svg from './Butterfly.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
    //const num=0;
    return (
        <div>
            <h1>Edited React typescript webpack - {process.env.NODE_ENV} {process.env.name}</h1>
            <img src={img} alt='Nature' width='300' height='250'/>
            <img src={svg} alt='Butterfly' width='300' height='250'/>
            <ClickCounter />
        </div>
    );
}