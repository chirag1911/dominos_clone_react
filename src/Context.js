import React,{createContext, useState} from 'react'

export const Context = createContext();

export const ContextProvider = (props) => {
    const [cart,setCart] = useState([]);
    const [userData,setUserData] = useState({
        deliveryOption: '',
        userName: 'Chirag',
        address: ''
    });
    return (
        <div>
            <Context.Provider value={[cart,setCart,userData,setUserData]}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

