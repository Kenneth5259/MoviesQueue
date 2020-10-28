import React, {useState, useEffect} from 'react';

import MovieForm from './MovieForm/movie-form';
import TvShowForm from './TvShowForm/tv-show-form';

const App = () => {

  const [inputMode, setInputMode] = useState('Movie');
  return (
    <div style={styles.App}>
      <div style={styles.FormButtonContainer}>
        <button onClick={() => {setInputMode('Movie')}}>Movie</button>
        <button onClick={() => {setInputMode('TV Show')}}>TV Show</button>
      </div>
      {inputMode === 'Movie' ? 
      <MovieForm styles={styles}/>: 
      <TvShowForm styles={styles}/>}
    </div>
  );
}

const styles = {
  App: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  Form : {
    display: 'flex', 
    flexDirection: 'column', 
    flex: '1 1 1', 
    width: '80%', 
    maxWidth: '600px'
  },
  FormButtonContainer: {
    display: 'flex', 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  FormButton: {

  }, 
  FormInput: {
  }, 
  FormSubmit: {
    width: '50%', 
    alignSelf: 'center'
  }
}

export default App;
