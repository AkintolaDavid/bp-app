import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";
import { Landingpage } from "./Landingpage/Landingpage";
// import { DoctorView } from "./DoctorView/DoctorView";
import { Signup } from "./Signup/Signup";
import { Accsetting } from "./Acc_setting/Accsetting";
import { Profile } from "./Profile/Profile";
import DoctorView from "./DoctorView/DoctorView";
import PrivateRoute from "./PrivateRoute";
import ProtectedComponent from "./ProtectedComponent";
import { Content } from "./Content/Content";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/acc_setting" element={<Accsetting />} />
        <Route path="/doctor" element={<DoctorView />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <ProtectedComponent />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
