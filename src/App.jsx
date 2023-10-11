import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/main';
import { Home } from './pages/Home';
import { Recovery } from './pages/Recovery';
import { Catalog } from './pages/Catalog';
import { Specialists } from './pages/Specialists';
import { NotFoundPage } from './pages/NotFoundPage';
import { Parents } from './pages/Parents';
import { Profile } from './pages/Profile';
import { Popup } from './components/common/Popup';
import { ImagePopup } from './components/common/ImagePopup';
import { RegisterModal } from './components/RegisterModal';
import { RegisterSuccessModal } from './components/RegisterSuccessModal';
import { LoginModal } from './components/LoginModal';
import { PasswordRecoveryModal } from './components/PasswordRecoveryModal';
import { PasswordRecoverySuccessModal } from './components/PasswordRecoverySuccessModal/PasswordRecoverySuccessModal';

function App() {
  // Стейты для попапов
  const [infoMessage, setInfoMessage] = useState('');
  const [image, setImage] = useState('');
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(true);
  const [isOpenRegisterSuccessModal, setIsOpenRegisterSuccessModal] =
    useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenPasswordRecoveryModal, setIsOpenPasswordRecoveryModal] =
    useState(false);
  const [
    isOpenPasswordRecoverySuccessModal,
    setIsOpenPasswordRecoverySuccessModal,
  ] = useState(false);

  // Для просмотра работы попапа с непустыми значениями,
  // раскомментируйте одну из следующих пар строк и закомментируйте пустые значения

  // const [infoMessage, setInfoMessage] = useState(
  //   'Помогаем найти лучший образовательный центр для вашего ребёнка.'
  // );
  // const [image, setImage] = useState(
  //   'https://images.unsplash.com/photo-1696655496030-079414c31e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  // );

  function closeAllPopups() {
    setInfoMessage('');
    setImage('');
    setIsOpenRegisterModal(false);
    setIsOpenRegisterSuccessModal(false);
    setIsOpenLoginModal(false);
    setIsOpenPasswordRecoveryModal(false);
    setIsOpenPasswordRecoverySuccessModal(false);
  }

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Popup isOpen={infoMessage} name='info' onClose={closeAllPopups}>
        <p className='popup__title popup__title_info'>{infoMessage}</p>
      </Popup>

      <ImagePopup image={image} onClose={closeAllPopups} />

      <RegisterModal isOpen={isOpenRegisterModal} onClose={closeAllPopups} />

      <RegisterSuccessModal
        isOpen={isOpenRegisterSuccessModal}
        onClose={closeAllPopups}
      />

      <LoginModal isOpen={isOpenLoginModal} onClose={closeAllPopups} />
      <PasswordRecoveryModal
        isOpen={isOpenPasswordRecoveryModal}
        onClose={closeAllPopups}
        stepRecovery={1}
        // stepRecovery={2}
      />
      <PasswordRecoverySuccessModal
        isOpen={isOpenPasswordRecoverySuccessModal}
        onClose={closeAllPopups}
      />
    </Layout>
  );
}

export default App;
