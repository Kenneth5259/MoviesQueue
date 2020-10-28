import React, {useState} from 'react';

const MovieForm = (props) => {

    const [form, setFormData] = useState({title: '', user: ''})

    const styles = {...props.styles}

    return(
    <div style={styles.Form}>
        <input style={styles.FormInput} placeholder='Movie Title' value={form.title} onChange={(e) => {
            let formTemp = {...form};
            formTemp.title = e.target.value;
            setFormData(formTemp);
        }}></input>
        <input style={styles.FormInput} placeholder='Who wants this?' onChange={(e) => {
            let formTemp = {...form};
            formTemp.user = e.target.value;
            setFormData(formTemp);
        }}></input>
        <button style={styles.FormSubmit} onClick={() => {
            console.log(form);
        }}>Submit</button>
    </div>)
}

export default MovieForm;