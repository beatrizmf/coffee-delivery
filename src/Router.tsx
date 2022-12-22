import { Route, Routes } from 'react-router-dom'

import { Wrapper } from './layouts/Wrapper'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
