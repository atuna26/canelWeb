import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate,  } from "react-router-dom";
import Main from "./homeLandingPage/components/Main";
import LoginPage from "./LoginPage";
import styles from "./style";
import { Navbar } from "./homeLandingPage/components";
import RegisterPage from "./RegisterPage";
import { useSelector } from "react-redux";

function App() {
  const isAuth = true;
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>
      {isAuth ? (
        <div className='bg-white w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter} shadow-lg  border-b-[.5px] border-gray`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                <Route path="/" element={<Main />} />
              </Routes>
            </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}