import React, { useState } from 'react'

export const ThemeContext = React.createContext({})

export function ThemeProvider(props) {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>

    )
}