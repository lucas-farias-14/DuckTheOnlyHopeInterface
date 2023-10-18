import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { Login, Register, StartPage, Teacher } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/startpage" element={<StartPage />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
