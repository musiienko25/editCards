import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './component/home/Home';
import EditPost from './component/editorPost/EditPost';
import { fetchCustomers } from './asyncActions/asyncActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
