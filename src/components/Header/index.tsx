import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="coffee delivery logo" />
      </span>

      <div>
        <button>
          <MapPin size={24} /> Crato, CE
        </button>

        <NavLink to="/checkout">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
