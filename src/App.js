import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Joke from './components/Joke/Joke';

const App = ({image, joke, ...props}) => {
  return (
    <>
      <Header image={image} />
      <main className="main">
        <Categories {...props} />
        <Joke joke={joke} />
      </main>
    </>
  );
}

export default App;
