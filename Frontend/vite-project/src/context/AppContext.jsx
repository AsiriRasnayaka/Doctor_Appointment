import { createContext, useState } from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";




export const AppContext = createContext();

const AppContextProvider = ({ children})=> {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const value = { navigate, user, setUser, loading, setLoading };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};

export default AppContextProvider;