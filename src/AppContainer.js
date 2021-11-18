import {connect, Provider} from 'react-redux';
import { useEffect } from 'react';
import { setCategories, setInitialState, setJoke } from './redux/appReducer';
import App from './App';

const AppContainer = ({setInitialState, setCategories, ...props}) => {
  useEffect(() => {
    setInitialState()
    setCategories()
  }, [])
  return (
    <App {...props} />
  )
}

const mapStateToProps = (state) => ({
  image: state.icon_url,
  categories: state.jokeCategories,
  joke: state.joke.value || state.value
})

export default connect(mapStateToProps, {setInitialState, setCategories, setJoke})(AppContainer);
