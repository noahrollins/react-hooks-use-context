import React from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    return <UserContext.Provider value={null}>{Children}
    </UserContext.Provider>
}

export {UserContext, UserProvider}