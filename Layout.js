import React from 'react'
import FooterSun from './pages/components/FooterSun'
import HeaderSun from './pages/components/HeaderSun'
import "./pages/i18n"

export default function Layout({children}) {
  return (
    <>
        <HeaderSun/>
          <main>
            
            {children}
          </main>
        <FooterSun/>
    </>
  )
}
