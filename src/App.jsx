import { Button } from './components/common/Button';

function App() {
  return (
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
  );
}

export default App;

// test autoformat for commit
