// use (la palabra use es una convención para los hooks)
// hook es una simple función que retorna un objeto
// hook personalizado

import { useState } from "react"

export const useCounter = (initialValue=10) => {

    const [counter, setCounter] = useState(
        // {
        //     counter1: 10,
        //     counter2: 20,
        //     counter3: 30,
             
        // }
        initialValue
        );
    //const {counter1, counter2, counter3} = state;

    const increment = () => {
        setCounter(counter + 1);
    }   
    const decrement = () => {
        setCounter(counter - 1);
    }   
    const reset = () => {
        setCounter(initialValue);
    }   


    return {
        counter,
        increment,
        decrement,
        reset,
        
    }       

}