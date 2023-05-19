import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Series from './Pages/Series';
import Comics from './Pages/Comics';
import Error404 from './Pages/Error404';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={() => <Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
