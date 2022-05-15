import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { observer } from "mobx-react";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'yellow', textDecoration: 'none'}} to={SHOP_ROUTE}>e-Shop</NavLink>
                {user.isAuth ? 
                <Nav style={{color: 'yellow', ml: "auto"}}>
                    <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant={"outline-light"} style={{marginLeft: '8px'}} onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
                </Nav> 
                :
                <Nav style={{color: 'yellow', ml: "auto"}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>} 
            </Container>
        </Navbar>
    )
})

export default NavBar;