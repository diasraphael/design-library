import React from 'react'

const Navbar = (): JSX.Element => {
  return (
    <div className="flex flex-row items-center w-full z-10 border-b bg-slate-100 fixed top-0 left-0 h-14 px-4 text-xl">
      Navbar
    </div>
  )
}

const Sidebar = (): JSX.Element => {
  return <div>Sidebar</div>
}

const MainContent = (): JSX.Element => {
  return <div>MainContent</div>
}
const Overlay = (): JSX.Element => {
  return <div>Overlay</div>
}

const Layout = (): JSX.Element => {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <MainContent></MainContent>
      <Overlay></Overlay>
    </div>
  )
}

export default Layout
