import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAuth from "./layout/LayoutAuth";
import Home from "./pages/app/Home";
import NewProject from "./pages/app/NewProject";
import ChangePassword from "./pages/login/ChangePassword";
import ConfirmAccount from "./pages/login/ConfirmAccount";
import ForgotPassword from "./pages/login/ForgotPassword";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="change-password/:token" element={<ChangePassword />} />
          <Route path="confirm-account/:token" element={<ConfirmAccount />} />
        </Route>

        <Route path="/app">
          <Route index element={<Home />} />
          <Route path="new-project" element={<NewProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
