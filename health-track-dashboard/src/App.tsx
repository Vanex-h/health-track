import { Toaster } from "react-hot-toast";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";

function App() {


  return (
    <RecoilRoot>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:userId" element={<Analytics />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
