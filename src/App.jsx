import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/main';
import { Button } from './components/common/Button';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Recovery } from './pages/Recovery';
import { Catalog } from './pages/Catalog';
import { Specialists } from './pages/Specialists';
import { NotFoundPage } from './pages/NotFoundPage';
import { Parents } from './pages/Parents';
import { Profile } from './pages/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='*' element={<NotFoundPage />} />
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
    </Layout>
  );
}

export default App;

// test autoformat for commit
