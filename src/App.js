import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import MovieForm from './MovieForm/movie-form';
import TvShowForm from './TvShowForm/tv-show-form';
import Queue from './Queue/queue';

const formApi = 'https://localhost:5001/api/queue';

const App = () => {
  const [inputMode, setInputMode] = useState('Movie');
  const [queue, updateQueue] = useState([]);

  useEffect(() => {
    Axios.get(formApi)
      .then(items => {
        updateQueue(items.data);
      })
      .catch(err => console.error(err));
  }, []);
  const onFormSubmit = (form) => {
    const f = {...form};
    f.created = new Date().toDateString();

    Axios.post(formApi, f)
      .then(() => {
        let tempQueue = [...queue];
        tempQueue.push(f);
        updateQueue(tempQueue);
      })
      .catch(err => console.err)
      
  }

  return (
    <div style={styles.App}>
      <div style={styles.FormButtonContainer}>
        <button style={inputMode === 'Movie' ? styles.FormButtonActive : styles.FormButton} onClick={() => {setInputMode('Movie')}}>Movie</button>
        <button style={inputMode === 'TV Show' ? styles.FormButtonActive : styles.FormButton} onClick={() => {setInputMode('TV Show')}}>TV Show</button>
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
    backgroundColor: '#3c70c9',
    color: 'white',
    fontSize: '1.25rem',
    width: '8rem',
    height: '2rem',
    border: '1px solid black'
  }, 
  FormButtonActive: {
    backgroundColor: '#2f5aa3',
    color: 'white',
    fontSize: '1.25rem',
    width: '8rem',
    height: '2rem',
    border: '1px solid black'
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
