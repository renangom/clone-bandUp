import React, {useState} from 'react'
import { Container } from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
    const [menuMobileActive, setMenuMobileActive] = useState(false);
    console.log(menuMobileActive)
  return (
            <Container>
                <div className='ano'>
                    <span> @ 2022 bandUP!</span>
                </div>
                <div className="itens">
                    <div className='icons'>
                        <div className="menu" onClick={() => setMenuMobileActive(!menuMobileActive)}>
                            <MenuIcon className='menuIcon' />
                        </div>
                        <div className="logo">
                            <img src='https://recursos.bandupstore.com.br/i/logo_bandup.png' />
                        </div>
                        <div className="sacola">
                            <WorkOutlineIcon className='sacolaIcon' />
                        </div>
                        <div className={menuMobileActive ? "login activeLogin" : "login"}>
                            <AccountCircleIcon className='loginIcon' />
                        </div>
                        <div className="search">
                            <input type='text' placeholder='Busque aqui ...' />
                            <button className='btn'><SearchIcon className='searchIcon' /></button>
                        </div>
                    </div>
                </div>
                <nav className={menuMobileActive ? "navbar active" : "navbar"}>
                    <ul>
                        <li><a href='#'>Feminino</a></li>
                        <li><a href='#'>Masculino</a></li>
                        <li><a href='#'>Infantil</a></li>
                        <li><a href='#'>Casa e Decoração</a></li>
                        <li><a href='#'>Acessórios</a></li>
                        <li><a href='#'>Música</a></li>
                        <li><a href='#'>Heróis e Comics</a></li>
                        <li><a href='#'>Séries e Filmes</a></li>
                    </ul>
                </nav>        
            </Container>
  )
}
