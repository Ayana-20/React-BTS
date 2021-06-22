import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
function NewMeetupForm(){
    const titleInputRef= useRef();
    function submitHandler(event){
        event.preventDefault(); 
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Blog Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image URL</label>
                    <input type='url' required id='image' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Army name </label>
                    <input type='text' required id='address' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Post</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;