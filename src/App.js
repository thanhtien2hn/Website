import { Fragment } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DefaultComponent from './DefaultComponent/DefaultComponent'
import { routes } from './routes'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <>
                    <Layout></Layout>
                    <Page />
                  </>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
