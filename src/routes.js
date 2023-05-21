import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Blog } from './components/Pages/Blog';
import { Contact } from './components/Pages/Contact';
import { Privacy } from './components/Pages/Privacy';

export const routes = [
  { path: '/', element: <Home />, name: 'Home', isShowNavbar: true },
  { path: '/about', element: <About />, name: 'About', isShowNavbar: true },
  { path: '/blog', element: <Blog />, name: 'Blog', isShowNavbar: true },
  {
    path: '/contact',
    element: <Contact />,
    name: 'Contact',
    isShowNavbar: true,
  },
  {
    path: '/privacy',
    element: <Privacy />,
    name: 'Privacy',
    isShowNavbar: false,
  },
];
