import React from 'react'

import Header from "./Header"
import Footer from "./Footer"

import { useTheme } from 'next-themes'

const Layout = (props) => {
    const { children } = props
    const { systemTheme, theme, setTheme } = useTheme();

    const themeToggle = () => {
        const currentTheme = theme == 'system' ? systemTheme : theme
        if (currentTheme === 'dark') {
            setTheme("light");
        }
        else {
            setTheme("dark")
        }
    }

    return (
        <div>
            <div id="top"/>
            <div className="relative flex flex-col min-h-screen bg-default dark:bg-defaultDark text-textPrimary dark:text-textDarkPrimary">
                <Header themeToggle={themeToggle} theme={theme == 'system' ? systemTheme : theme} />
                <main className="flex-grow bg-default dark:bg-defaultDark">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout