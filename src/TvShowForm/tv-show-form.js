import React, {useState} from 'react';

const TvShowForm = (props) => {
    const [form, setFormData] = useState({title: '', seasons: '', user: ''})
    const styles ={...props.styles};
    return(
    <div style={styles.Form}>
        <input style={styles.FormInput} value={form.title} placeholder='TV Show Title' onChange={(e) => {
            let formTemp = {...form};
            formTemp.title = e.target.value;
            setFormData(formTemp);
        }}></input>
        <input style={styles.FormInput} value={form.seasons} placeholder='Which Seasons?' onChange={(e) => {
            let formTemp = {...form};
            formTemp.seasons = e.target.value;
            setFormData(formTemp);
        }}></input>
        <input style={styles.FormInput} value={form.user} placeholder='Who wants this?' onChange={(e) => {
            let formTemp = {...form};
            formTemp.user = e.target.value;
            setFormData(formTemp);
        }}></input>
        <button style={styles.FormSubmit} onClick={() => props.submit(form)}>Submit</button>
    </div>);
}

export default TvShowForm;