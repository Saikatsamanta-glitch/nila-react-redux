import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './navbar';
import Foot from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "Kamalesh";
// class and functional

// class component ❌ functional component ✅
root.render(
  <>
    <App/>
  </>
)

// index js: try not manipulating ay code further