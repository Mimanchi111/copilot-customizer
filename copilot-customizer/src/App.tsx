import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store/store';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AttributesPage from './pages/AttributesPage';
import AppearancePage from './pages/AppearancePage';
import PreviewPage from './pages/PreviewPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="attributes" element={<AttributesPage />} />
            <Route path="appearance" element={<AppearancePage />} />
            <Route path="preview" element={<PreviewPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
