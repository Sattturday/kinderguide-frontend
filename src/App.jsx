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

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/catalog' element={<Catalog />} />
        {/* //Ю. Исправить временные пути */}
        <Route path='/schools/id' element={<School />} />
        <Route path='/kindergartens/id' element={<Kindergarten />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <RegisterModal />
      <RegisterSuccessModal />
      <LoginModal />
      <PasswordRecoveryModal stepRecovery={1} />
      <PasswordRecoverySuccessModal />
    </Layout>
  );
}

export default App;
