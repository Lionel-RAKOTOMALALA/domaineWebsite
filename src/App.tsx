import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { routes } from './routes/App.routes'

const AppRoutes = () => {
  const element = useRoutes(routes)
  return element
}

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  )
}

export default App
