import { Route, Routes } from 'react-router-dom';

import { Button } from './components/common/Button';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import EducationPage from './pages/EducationPage';
import SpecialistsPage from './pages/SpecialistsPage';
import ErrorPage from './pages/ErrorPage';
import ParentsPage from './pages/ParentsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/specialists' element={<SpecialistsPage />} />
        <Route path='/parents' element={<ParentsPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <div>
        <Button size='large' onClick={() => console.log('Кнопка нажата')}>
          Нажми меня
        </Button>
        <Button variant='square' onClick={() => console.log('Я квадратная')}>
          И меня!
        </Button>
        <Button variant='link' onClick={() => console.log('Ссылка нажата')}>
          И меня тоже
        </Button>
      </div>
    </div>
  );
}

export default App;

// test autoformat for commit
