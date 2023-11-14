import { NavLink } from "react-router-dom";

export default function Menu() {
    function isActiveFunc(isActiveElement: boolean) {
        if (isActiveElement) {
            return 'menu__item menu__item-active'
        } else {
            return 'menu__item'
        }
    }

    return (
        <nav className="menu">
            <NavLink className={({ isActive }) => isActiveFunc(isActive)} to="/">Главная</NavLink>
            <NavLink className={({ isActive }) => isActiveFunc(isActive)} to="/drift">Дрифт-такси</NavLink>
            <NavLink className={({ isActive }) => isActiveFunc(isActive)} to="/timeattack">Time Attack</NavLink>
            <NavLink className={({ isActive }) => isActiveFunc(isActive)} to="/forza">Forza Karting</NavLink>
        </nav>
    )
}