import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
 children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
 return (
  <>
   <div className="flex flex-col h-screen justify-between">
    <Navbar />
    <main className="h-full bg-yellow-300 min-w-full">{children}</main>
    <Footer />
   </div>
  </>
 )
}

export default Layout
