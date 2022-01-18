import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserCreate from './userCreate';
import UserList from './userList';
import UserEdit from './userEdit';
function App() {
  return (
    <BrowserRouter>
      <div className='container mt-5'>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/edit-user/:id" element={<UserEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
