// hoy en dia en react para crear componentes lo
// que mas se utiliza son functional componentes

//lo que nos permite es que en un mismo elemtno podamos tener
// logica y poder retornar un html
// primer fomra de importar, luego debo agregar import desde App
// export const Home = () => {
import { useState } from "react";
import Navbar from "../../common/navbar/Navbar";
import PruebasHoks from "../../common/pruebasHoks/PruebasHoks";
// import MainHome from "../../common/mainHome/MainHome"
export const Home = () => {
    const [ contador, setContador ] = useState(0)
    // letNombre  = "pepito";
    // letApellido = "joseMari";

    // el return no nos deja realizar la accion con mas de un elemento
    // pero en este caso en React para retornar mas de un elemento
    // podemos agregar ambar en un div
    
    //otra opcion de retornar varios elementos y no crear
    // innecesariamente divs padres para poder hacerlo es 
    //simplemente con <></>de esta foma ya puedo contener
    //varios elementos sin necesidad de andar creando divs
    return (
        <>
            <Navbar />
            <PruebasHoks contador={contador} setContador={setContador} />
        </>
    );
};
// export default Home;
// <MainHome nombre={} apellido={} /> 