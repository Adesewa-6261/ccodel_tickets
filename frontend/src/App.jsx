import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/admin/Dashboard";
function App() {
  return (
    <Routes>
      {/*Auth Routes */}
      <Route path="/" element={<Login />} />
      {/*  <Route path='/register' element={}/>*/}
      {/*Auth Routes */}

      {/*Admin Routes */}
        <Route path='/admin' element={<Dashboard/>}/>
      {/*  <Route path='/admin' element={}/>*/}
      {/*  <Route path='/admin' element={}/>*/}
      {/*  <Route path='/admin' element={}/>*/}
      {/*  <Route path='/admin' element={}/>*/}
      {/*Admin Routes */}

      {/*Student Routes */}
      {/*  <Route path='student/' element={}/>*/}
      {/*  <Route path='student/' element={}/>*/}
      {/*  <Route path='student/' element={}/>*/}
      {/*  <Route path='student/' element={}/>*/}
      {/*  <Route path='student/' element={}/>*/}
      {/*  <Route path='student/' element={}/>*/}
      {/*Student Routes */}

      {/*Support Routes */}
      {/*  <Route path='/support' element={}/>*/}
      {/*  <Route path='/support' element={}/>*/}
      {/*  <Route path='/support' element={}/>*/}
      {/*  <Route path='/support' element={}/>*/}
      {/*  <Route path='/support' element={}/>*/}
      {/*  <Route path='/support' element={}/>*/}
      {/*Support Routes */}
    </Routes>
  );
}

export default App;
