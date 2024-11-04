
import { useEffect,useState } from "react";

const localCache = {};

export const useFetch = (url) => {
    // este es el estado inicial
    const [state, setState] = useState(
        {   data:null, 
            isloading:true, 
            hasError:false,
            error:null
        });
    useEffect(() => {
        //setState({data:null, isloading:true, hasError:false, error:null});
        getFetch();

        },[url]);  
    const setLoadingState = () => {
        setState({data:null, isloading:true, hasError:false, error:null});
    }   
    const getFetch = async () => {

        if (localCache[url]) {  
            console.log('datos desde el cache');
            setState({
                data:localCache[url],
                isloading:false,
                hasError:false,
                error:null,
            });
            return; 
        }
        setLoadingState();

        const resp= await fetch(url);
        // sleep(2000); se espera 2 segundos
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (!resp.ok) {
            setState({
                data:null,
                isloading:false,
                hasError:true,
                error:
                {
                    code:resp.statusText,
                    message:resp.statusText,
                }
            });
            return; // para que no siga ejecutando el código
        }   
        const data= await resp.json();
        setState({
            data,
            isloading:false,
            hasError:false,
            error:null,
        }); 

        // console.log({data});
        // manejo del cache
       localCache[url] = data;

    }
    return {
        data:state.data,
        isloading:state.isloading,
        hasError:state.hasError,  
    }

}
