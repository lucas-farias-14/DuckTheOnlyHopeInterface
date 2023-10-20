import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { StartPage } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<StartPage />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
