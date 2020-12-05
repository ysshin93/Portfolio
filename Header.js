import React, { useState } from 'react'
import './Header.css'
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as InfoIcon } from './icons/info.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as MsgIcon } from './icons/msg.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

function Header() {
    return (
        <div className="header">
            <Navbar>
                
                <NavItem icon={<InfoIcon />} />
                <NavItem icon={<PlusIcon />} />
                <NavItem icon={<MsgIcon />} />
                <NavItem icon={<CaretIcon />}>
                    <DropdownMenu />
                </NavItem>
            </Navbar>
        </div>
    )


    function DropdownMenu() {

        const [activeMenu, setActiveMenu] = useState('main');
        const [menuHeight, setMenuHeight] = useState(null);
      
        function calcHeight(el) {
          const height = el.offsetHeight;
          setMenuHeight(height);
        }
      
      
      
    function DropdownItem(props) {
        return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
          );
        }
      
        return (
          <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition 
              in={activeMenu === 'main'} 
              unmountOnExit 
              timeout={500}
              classNames="menu-primary"
              onEnter={calcHeight}
              >
                <div className="menu">
                  <DropdownItem>My Proflie</DropdownItem>
                  <DropdownItem 
                    leftIcon={<CogIcon />}
                    rightIcon={<ChevronIcon />}
                    goToMenu="settings">
                    Settings
                  </DropdownItem>
                </div>
            </CSSTransition>
      
            <CSSTransition 
              in={activeMenu === 'settings'} 
              unmountOnExit 
              timeout={500}
              classNames="menu-secondary"
              onEnter={calcHeight}>
                <div className="menu">
                  <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main"/>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  
                </div>
            </CSSTransition>
            
          </div>
        );
      }
    

    function Navbar(props) {
        return (
          <nav className="navbar">
            <a> Yoon Sik Shin </a>
            <ul className="navbar-nav">{props.children}</ul>
          </nav>
        );
    }
      
    function NavItem(props) {
      
        const [open, setOpen] = useState(false);
      
        return (
          <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
              {props.icon}
            </a>
      
            {open && props.children}
          </li>
        );
    }
}

export default Header
