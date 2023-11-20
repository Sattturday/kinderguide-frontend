import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
import { NewsModal } from './components/NewsModal';
import { PasswordRecoverySuccessModal } from './components/PasswordRecoverySuccessModal';
import { setUser, setToken } from './store/authSlice';
import { useGetUserQuery } from './api/userApi';
import { ProfileExitModal } from './components/ProfileExitModal';
import { LoginToFavoritePopup } from './components/LoginToFavoritePopup';
import ProtectedRouteElement from './utils/ProtectedRoute';
import { LoginToReviewPopup } from './components/LoginToReviewPopup';
import { Favorites } from './pages/Favorites';

function App() {
  const dispatch = useDispatch();
  const { data = {}, refetch } = useGetUserQuery();

  const token = localStorage.getItem('token');

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
        <Route
          path='/profile'
          element={<ProtectedRouteElement element={Profile} token={true} />}
        />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/schools/:id' element={<School />} />
        <Route path='/kindergartens/:id' element={<Kindergarten />} />
        <Route path='/password-reset/:id/:token' element={<Home />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <LoginToFavoritePopup />
      <LoginToReviewPopup />

      <RegisterModal />
      <RegisterSuccessModal />
      <LoginModal />
      <ProfileExitModal />
      <PasswordRecoveryModal />
      <NewsModal />

      <PasswordRecoverySuccessModal />
    </Layout>
  );
}

export default App;
