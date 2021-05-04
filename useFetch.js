import {useState,useEffect, useRef} from "react";

export const useFetch = (url) => {
    
    //ESTA MONTADO ES PARA LLAMAR SOLO EL SETSTATE CUANDO EL COMPONENTE ESTE MONTAdo
    const estaMontado = useRef(true);

    const [state, setstate] = useState({data: null, loading: true, error:null});
    
    useEffect(()=>{
       return()=>{
           estaMontado.current = false;
       } 
    },[])

    useEffect(() => {


        setstate({data:null,loading:true,error:null});

        //aca le voy a forzar una carga de dos segundos al setState para forzar el error
        
        //setTimeout(() => {
            fetch(url)
            .then(resp => resp.json())
            .then(data =>{

                if(estaMontado.current){
                    setstate({
                        loading:false,
                        error: null,
                        data
                    })
                }
                else{
                    console.log("no esta montado")
                }
            });
        //},2000)
    
        
    }, [url])
    
    return state;
}
