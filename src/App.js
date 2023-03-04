import HeaderComponent from './components/landing/Header'
import LandingPage from './components/landing/Body'
import FooterPage from './components/landing/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from './components/chat/landing';
import NotFound from './components/not-found';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <HeaderComponent />
            <LandingPage />
            <FooterPage />
          </div>
        }>
        </Route>
        <Route path="/chat" element={ <ChatBot /> }> </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
