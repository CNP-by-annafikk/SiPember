import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import BerandaSection from './pages/Beranda';
import TentangSection from './pages/Tentang';
import ProgramSection from './pages/Program';
import KontakSection from './pages/Kontak';
import LoginForm from './pages/Login';

// Development
import DevApi from './components/dev/DevApi';
import PageNotFound from './components/dev/Dev404';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Main Pages */}
                <Route path="/beranda" element={<BerandaSection />} />
                
                <Route path="/tentang" element={<TentangSection />} />
                <Route path="/program" element={<ProgramSection />} />
                <Route path="/kontak" element={<KontakSection />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="*" element={<Navigate to="/beranda" />} />

                {/* Development */}
                <Route path="/dev-api" element={<DevApi />} />
                <Route path="/dev-404" element={<PageNotFound />} />

            </Routes>
        </Router>
    );
}

export default App;