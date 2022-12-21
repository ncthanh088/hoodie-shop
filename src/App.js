import React, { Fragment } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from './routes/index';
import MasterPage from './layout/MasterPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : MasterPage;

            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
