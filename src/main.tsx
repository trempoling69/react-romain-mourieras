import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './views/UserView.tsx';
import Post from './views/PostView.tsx';
import Layout from './Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Layout />}>
          <Route path="/users" element={<User />} />
          <Route path="/posts" element={<Post />} />
          {/* <Route path="/fromages" element={<ItemView cheeses={Cheeses} />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
