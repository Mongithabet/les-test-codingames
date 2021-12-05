import React, {createContext, useContext} from "react";
const UserContext = createContext({email:'abc@gmail.com'});

const A=()=>{
    const {user}=useContext(UserContext);
    return (
        <di>Email : {user.email}</di>
    );
}

const UserContextMyComp = ()=>{
    return (
        <UserContext.Provider value={{user:{email:"xy@gmail.com"}}}>
        <A/>
        </UserContext.Provider>
    );
}
export default UserContextMyComp
