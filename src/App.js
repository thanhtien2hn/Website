import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            return <Route path={route.path} element={<Page />} />
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
