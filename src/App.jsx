import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/main';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Catalog } from './pages/Catalog';
import { School } from './pages/School';
import { Kindergarten } from './pages/Kindergarten';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegisterModal } from './components/RegisterModal';
import { RegisterSuccessModal } from './components/RegisterSuccessModal';
import { LoginModal } from './components/LoginModal';
import { PasswordRecoveryModal } from './components/PasswordRecoveryModal';
import { PasswordRecoverySuccessModal } from './components/PasswordRecoverySuccessModal';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setToken } from './store/authSlice';
import { useEffect } from 'react';
import { useGetUserQuery } from './api/userApi';
import { LoginToFavoritePopup } from './components/LoginToFavoritPopup';

function App() {
  const dispatch = useDispatch();
  const { data = {}, isLoading, isError, refetch } = useGetUserQuery();

  const token = localStorage.getItem('token');

  const checkUser = async () => {
    try {
      const response = await fetch(
        'https://kinder.acceleratorpracticum.ru/api/me111',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Barrier ${token}`,
            zalupa: true,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkUser();
  });

  useEffect(() => {
    if (token) {
      refetch();

      dispatch(setToken({ token: token }));
      dispatch(setUser({ user: data }));
    }
  }, [token]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/schools/:id' element={<School />} />
        <Route path='/kindergartens/:id' element={<Kindergarten />} />
        <Route path='/password-reset/:id/:token' element={<Home />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <LoginToFavoritePopup />

      <RegisterModal />
      <RegisterSuccessModal />
      <LoginModal />
      <PasswordRecoveryModal />

      <PasswordRecoverySuccessModal />
    </Layout>
  );
}

export default App;
