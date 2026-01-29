import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import WelcomePage from "./WelcomePage";
import OAuth2Callback from "./OAuth2Callback";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/jwtoauth2react/login" element={<LoginPage />} />
        <Route path="/jwtoauth2react/welcome" element={<WelcomePage />} />
        <Route path="/jwtoauth2react/callback" element={<OAuth2Callback />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
 );
}
export default App;
