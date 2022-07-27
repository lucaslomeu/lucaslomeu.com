import React, { useContext, useState, createContext } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  // Pegar o estado inicial da propria store do electron
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <AuthContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to get the user from the context
export const useAuth = () => useContext(AuthContext)
