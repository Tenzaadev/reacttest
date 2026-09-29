import Greeting from './components/Greeting';
import TaskList from './components/TaskList';
import ActionButton from './components/ActionButton';
import ProfileCard from './components/ProfileCard';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Мои React-компоненты</h1>

      <section>
        <h2>1. Компонент «Приветствие»</h2>
        <Greeting />
      </section>

      <hr />

      <section>
        <h2>2. Компонент со списком задач</h2>
        <TaskList />
      </section>

      <hr />

      <section>
        <h2>3. Компонент с кнопкой</h2>
        <ActionButton />
      </section>

      <hr />

      <section>
        <h2>4. Карточка профиля</h2>
        <ProfileCard />
      </section>

      <hr />

      <section>
        <h2>5. Галерея изображений</h2>
        <ImageGallery />
      </section>
    </div>
  );
}

export default App;