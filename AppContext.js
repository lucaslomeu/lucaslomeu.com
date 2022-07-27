import React, { useContext, useState, createContext } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <AuthContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
