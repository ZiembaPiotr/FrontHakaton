
import { TextareaAutosize, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

function AnnouncementForm() {

    const [topic, setTopic] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')

    useEffect(() => {
        setTopic('')
        setContent('')
        setCategory('')
        setLocation('')
    }, [])

    return (
        <div>
            <h1>DODAJ OGŁOSZENIE</h1>
            <form id="loginForm">
                <div>
                <div>
                    <label htmlFor='title' className='form-label'>Title</label>
                    <input type="text" className='form-control' id="name" placeholder = "" value = {topic}  onChange = {e => setTopic(e.target.value)}/>
                </div>
               
                <div>
                    <label htmlFor='title' className='form-label'>City</label>
                    <input type="text" className='form-control' id="name" value = {location}  onChange = {e => setLocation(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='title' className='form-label'>Category</label>
                    <input type="text" className='form-control' id="name" value = {category}  onChange = {e => setCategory(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor='title' className='form-label'>Description</label>
                    <input type="text" className='form-control' id="description" rows="5" placeholder = "" value = {content} onChange = {e => setContent(e.target.value)}/>
                </div>

                <div>
                    <input type="button" className="fadeIn fourth" value="Submit"/>
                </div>

                </div>

                
            </form>
        </div>
      );
}

export default AnnouncementForm;