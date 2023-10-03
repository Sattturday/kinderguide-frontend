import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/main';
import { Button } from './components/common/Button';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Education from './pages/Education';
import Specialists from './pages/Specialists';
import Error from './pages/Error';
import Parents from './pages/Parents';
import Profile from './pages/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Error />} />
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
