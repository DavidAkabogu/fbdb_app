import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import AthletePage from "./pages/AthletePage";
import AthleteFormPage from "./pages/AthleteFormPage";
import AthletesPage from "./pages/AthletesPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/" element={<ProfilePage />} />
          <Route path="/account/biodata" element={<AthletePage />} />
          <Route path="/account/biodata/new" element={<AthleteFormPage />} />
          <Route path="/account/biodata/:id" element={<AthleteFormPage />} />
          <Route path="/biodata/:id" element={<AthletesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
