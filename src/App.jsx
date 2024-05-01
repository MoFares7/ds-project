import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./components/footer";

function App() {
 
  return (
    <Router>
      <div id="app" style={{  width: '100%', }}>
        <AppRoutes />
        <Footer />
      </div>
  
    </Router>
  );
}

export default App;
