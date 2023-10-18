import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/main';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Specialists } from './pages/Specialists';
import { NotFoundPage } from './pages/NotFoundPage';
import { Profile } from './pages/Profile';
import { ImagePopup } from './components/common/ImagePopup';
import { School } from './pages/School';
import { RegisterModal } from './components/RegisterModal';
import { RegisterSuccessModal } from './components/RegisterSuccessModal';
import { LoginModal } from './components/LoginModal';
import { PasswordRecoveryModal } from './components/PasswordRecoveryModal';
import { PasswordRecoverySuccessModal } from './components/PasswordRecoverySuccessModal';
import { Kindergarten } from './pages/Kindergarten';
import { ProfielExitModal } from './components/ProfielExitModal';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/profile' element={<Profile />} />
        {/* //Ю. Исправить временные пути */}
        <Route path='/schools/id' element={<School />} />
        <Route path='/kindergartens/id' element={<Kindergarten />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <ImagePopup />

      <RegisterModal />
      <RegisterSuccessModal />
      <LoginModal />
      <ProfielExitModal />
      <PasswordRecoveryModal stepRecovery={1} />
      <PasswordRecoverySuccessModal />
    </Layout>
  );
}

export default App;
