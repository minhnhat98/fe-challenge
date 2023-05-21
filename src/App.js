import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';

import { routes } from './routes';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <div className='pages'>
            <Routes>
              {routes.map((item, index) => {
                return (
                  <Route path={item.path} element={item.element} key={index} />
                );
              })}
            </Routes>
          </div>
        </Layout>
      </Router>
    </>
  );
}

export default App;
