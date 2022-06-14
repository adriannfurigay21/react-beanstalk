import React from 'react';

// Creates a Context object
const UserContext = React.createContext();

// The "Provider" components allows other components to consume/use the context object and supply the necessary information needed to the context object

export const UserProvider = UserContext.Provider;

export default UserContext;