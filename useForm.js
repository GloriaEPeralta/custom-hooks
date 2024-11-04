import { useState } from 'react';

export const useForm = (initialForm={}) => {

    const [formState,setFormState]=useState(initialForm);

   

    const onInputChange = ({target}) => {
        const {name,value}=target;
        // esta instrucción es para que se mantenga el valor anterior
        // y se actualice el nuevo valor y que aparezca en el input
        setFormState({
            ...formState,
            [name]:value,
        }); 
    }
    const onResetForm = () => {
        setFormState(initialForm);
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,  
  }
}
