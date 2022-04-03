import { TextareaAutosize, TextField, Grid} from '@mui/material'
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
      <>
          <h1>ADD ANNOUNCEMENT</h1>
          <form id="loginForm">
              <Grid container columnSpacing={5}>
                  <Grid item xs={4}>
                      <label htmlFor='title' className='form-label'>Title</label>
                  </Grid>

                  <Grid item xs={4}>
                      <label htmlFor='title' className='form-label'>City</label>
                  </Grid>

                  <Grid item xs={4}>
                      <label htmlFor='title' className='form-label'>Category</label>
                  </Grid>

                  <Grid item xs={4}>
                      <input type="text" className='form-control' id="title" placeholder = "" value = {topic}  onChange = {e => setTopic(e.target.value)}/>
                  </Grid>

                  <Grid item xs={4}>
                      <input type="text" className='form-control' id="city" value = {location}  onChange = {e => setLocation(e.target.value)}/>
                  </Grid>

                  <Grid item xs={4}>
                      <input type="text" className='form-control' id="category" value = {category}  onChange = {e => setCategory(e.target.value)}/>
                  </Grid>

                  <Grid item xs={12}>
                      <label htmlFor='title' className='form-label'>Description</label>
                  </Grid>

                  <Grid item xs={12}>
                      <TextField type="text" className='form-control' id="description" multiline style = {{width: 1000}} rows={5} placeholder = "" value = {content} onChange = {e => setContent(e.target.value)}/>
                  </Grid>

              </Grid>
              <div>
                  <input type="button" className="fadeIn fourth" value="Submit"/>
              </div>




          </form>
      </>
    );
}

export default AnnouncementForm;