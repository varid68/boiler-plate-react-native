import React, { createContext, useState } from 'react'

export const LoginContext = createContext()

function LoginContextProvider(prop) {
  return (
    <LoginContext.Provider value={{
    }}>
      {prop.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider