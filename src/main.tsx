import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './views/User.tsx';
import Post from './views/Post.tsx';
import Layout from './Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<User />} />
          <Route path="/posts" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
