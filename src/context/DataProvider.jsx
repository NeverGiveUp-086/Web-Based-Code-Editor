import {createContext} from "react";

const DataContext=createContext();
 
const DataProvider=()=>{

    const [html,setHtml]=useState('');
    const [css,setCss]=useState('');
    const [js,setJs]=useState('');

    return (
        <DataContext.Provider 
        value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}
        >
        </DataContext.Provider>
    )
}

export default DataProvider;