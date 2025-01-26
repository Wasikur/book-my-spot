import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PhoneInputPage from './components/PhoneInputPage';
import OtpInputPage from './components/OtpInputPage';
import VehiclePage from './components/VehiclePage';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phone" element={<PhoneInputPage />} />
        <Route path="/authentication" element={<OtpInputPage />} />
        <Route path="/vehicles" element={<VehiclePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
