import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import MovieForm from './MovieForm/movie-form';
import TvShowForm from './TvShowForm/tv-show-form';
import Queue from './Queue/queue';

const formApi = '';

const App = () => {
  const [inputMode, setInputMode] = useState('Movie');
  const [queue, updateQueue] = useState([]);

  const onFormSubmit = (form) => {
    const f = {...form};
    f.date = new Date();

    Axios.post(formApi, {form: f})
      .then(() => {
        
      })
      .catch(err => console.err)
      let tempQueue = [...queue];
      tempQueue.push(f);
      updateQueue(tempQueue);
  }

  return (
    <div style={styles.App}>
      <div style={styles.FormButtonContainer}>
        <button onClick={() => {setInputMode('Movie')}}>Movie</button>
        <button onClick={() => {setInputMode('TV Show')}}>TV Show</button>
      </div>
      {inputMode === 'Movie' ? 
      <MovieForm styles={styles} submit={onFormSubmit}/>: 
      <TvShowForm styles={styles} submit={onFormSubmit}/>}
      <Queue queue={queue}/>
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
    border: 'none',
    borderBottom: '2px solid lightgrey',
    fontSize:'1rem',
    padding: '1rem', 
    margin: '1rem', 
    outline: 'none'
  }, 
  FormSubmit: {
    width: '50%', 
    alignSelf: 'center', 
    height: '2.5rem',
    fontSize: '1.25rem',
    border: 'none',
    backgroundColor: 'green', 
    color: 'white', 
    borderRadius: '1rem'
  }
}

export default App;
