import React, { useState, useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'

// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

// create a button that calls a context function to set a new open state when clicked
const Button = () => {
  const ctx = useContext(MyContext)
  return (
    <button onClick={ctx.toggleMenu}>Toggle menu</button>
  )
}

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext)

  return (
    <Menu
      right
      customBurgerIcon={false}
      customCrossIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">About</a>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">Projects</a>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">Corporate Experience</a>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">Startup Experience</a>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">Education</a>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">Writing & Podcasting</a>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">Contact</a>
      <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="#projects">Social</a>
    </Menu>
  )
}

// default export here
const Hamburger = () => {
  return (
    <MyProvider>
      <div>
        <Button />
        <Navigation />
      </div>
    </MyProvider>
  )
}

export default Hamburger;