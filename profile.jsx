//Function Component
//importamos react
import React from 'react';

//Creamos el componente ES6
//naming convention: usa Capital Letter en el nombre dela funcion
// const Profile = () => {
//     console.log("Hola Profile Component")
//     return (
//         <h1> Soy un componente de funcion</h1>
//     )
// }
// la forma mas simple
// vamos a recibir props -> data
const Profile = (props) => (
    <>
        <h1>Componente de funcion simple</h1>
        <h2>Perfil de usuario</h2>
        <p>Nombre de usuario: {props.nombre}{props.apellido}</p>
        <p>Correo: {props.correo}</p>
        <h3>Contador: {props.contador}</h3>
        {/*llamamos la funcion de componente de clase */}
        <button onClick={props.incrementacontador2}>Incrementa contador +2</button>
    </>
)
//Creamos el componente en formato ES5
// function Profile() {
//     return (
//         <h1> Soy un componente de funcion de ES5</h1>
//     )
// }
export default Profile;