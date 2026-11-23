
import { NavLink } from 'react-router-dom'
import {
    House,
    Send,
    PlusSquare,
    Bell,
    UserRound
} from 'lucide-react'

import './menuInferior.css'


function MenuInferior() {
    return (
        <nav className="Navegacao_root">

            <NavLink to="/" end className="Navegacao_item">
                <House />
            </NavLink>

            <button className="Navegacao_item" disabled title="Em desenvolvimento">
                <Send />
            </button>

            <NavLink to="/cadastro-pet" className="Navegacao_item">
                <PlusSquare />
            </NavLink>

            <button className="Navegacao_item" disabled title="Em desenvolvimento">
                <Bell />
            </button>

            <button className="Navegacao_item" disabled title="Em desenvolvimento">
                <UserRound />
            </button>

        </nav>
    )
}

export default MenuInferior
