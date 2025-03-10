import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pending from './pages/Pending';
import InProgress from './pages/InProgress.jsx';
import LandingPage from "./pages/landingPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Pending" element={<Pending />} />
                <Route path="/in-progress" element={<InProgress />} />
                {/* Define routes for other pages here */}
            </Routes>
        </Router>
    );
}

export default App;