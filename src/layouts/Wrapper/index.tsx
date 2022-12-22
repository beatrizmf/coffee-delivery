import { Outlet } from 'react-router-dom'

export function Wrapper() {
  return (
    <>
      <h1>Wrapper</h1>
      <Outlet />
    </>
  )
}
