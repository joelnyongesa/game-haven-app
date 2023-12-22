import {createContext, useContext, useState, useEffect} from "react";
import supabase from "../config/supabaseClient";

const AppContextProvider = ({ children}) =>{
    const [user, setUser] = useState()
    const [session, setSession] = useState(null)

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const { users, errors} = await supabase
                .from('users')
                .select()
        }
    }, [])
}
