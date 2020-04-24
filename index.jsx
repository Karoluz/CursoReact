//Class Component
//import React from 'react';
import React, { Component } from 'react';
import Profile from './profile';
//import Image from './image';

class UserComponent extends Component{

    constructor() {
        super();
        this.state = {
            name:'Carlos',
            lastName:'Ibarra',
            age: 33,
            gender: 'Male',
            email: 'karoluzibarra@gmail.com',
            counter: 0
        }
    }

    /* Funcion para incrementar el contador */
    incrementCounterValue = () => {
        let {counter} = this.state
        this.setState({
            counter: counter += 1
        }
        );
    }
    /* funcion para decrementar el contador */
    /* otra forma de hacer este set state */
    decreaseCounterValue = () => {
        this.setState(prevState => {
                //console.log(prevState.counter);
                return prevState.counter -= 1;
            }
        );
    }

    incrementCounterValuex2 = () => {
        let {counter} = this.state
        this.setState({
            counter: counter += 2
        }
        );
    }

    render() {
        //deconstruimos el state
        const { name, lastName, age, email, counter} = this.state
        return(
            <div>
                {/*<Image />*/}
                <h1>Clase Component</h1>
                <p>Mi Nombre es: {name} {lastName}</p>
                <p>Edad: {age}</p>
                <p>Email: {email}</p>
                <button onClick={() => this.incrementCounterValue()}>Incrementar</button>
                <button onClick={() => this.decreaseCounterValue()}>Decrementar</button>
                <p>Contador: {counter}</p>

                {/* function component pasando data mediante props */}
                <Profile
                    nombre = {name}
                    apellido = {lastName}
                    correo = {email}
                    contador = {counter}
                    /*para pasar una funcion por props*/
                    incrementacontador2 = {this.incrementCounterValuex2}
                />

            </div>
        )
    }
}

export default UserComponent;