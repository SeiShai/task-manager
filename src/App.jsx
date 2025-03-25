import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pending from './pages/pending';
import InProgress from './pages/inProgress.jsx';
import LandingPage from "./pages/landingPage.jsx";
import Done from './pages/done.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Pending" element={<Pending />} />
                <Route path="/in-progress" element={<InProgress />} />
                <Route path="/done" element={<Done />} />
                {/* Define routes for other pages here */}
            </Routes>
        </Router>
    );
}

export default App;