import type { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Pricing from '../pages/Pricing'
import Download from '../pages/Download'
import Register from '../pages/Register'
import ComponentShowcase from '../components/component-showcase'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/pricing',
    element: <Pricing />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/design-system',
    element: <ComponentShowcase />
  }
] 