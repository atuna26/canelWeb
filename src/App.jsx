import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate,  } from "react-router-dom";
import Main from "./homeLandingPage/components/Main";
import LoginPage from "./LoginPage";
import styles from "./style";
import { Navbar } from "./homeLandingPage/components";
import RegisterPage from "./RegisterPage";
import { useSelector } from "react-redux";
import AllProducts from "./allProducts";
import { useState } from "react";

function App() {
  const isAuth = true;
  const location = useLocation();
  const [items,setItems] = useState([])
  console.log(location.pathname)
  return (
    <div>
      {isAuth ? (
        <div className='w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter} shadow-lg  border-b-[.5px] border-gray`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
            <div className={` ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/urunler/tum-urunler" element={<AllProducts />} />
                </Routes>
              </div>
              <div className='flex justify-center items-center fixed right-0 bottom-0 mr-5 mb-5 w-[50px] h-[50px] text-white bg-primary rounded-[50%] cursor-pointer'>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-accent border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{items.length}</div>
                <i className="fa-solid fa-code-compare"></i>
              </div>
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