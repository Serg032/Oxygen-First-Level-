import React, { useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [descript, setDescript] = useState("")
  const [todos, setTodos] = useState([])
  const [dones, setDones] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([
      {
        title: title,
        tags: tags,
        description: descript
    },
    ...todos
    ])
    setTitle(" ")
    setTags(" ")
    setDescript(" ")
  }
  return (
    <div className='app'>

      <div className='header'>
      <h1>Application for project Manager</h1>
      </div>

      <form 
      className='form'
      onSubmit={handleSubmit}
      >
        <h3>Create</h3>

        <div className='fields'>

        <div className='field1'>

          <div className='titleBox'>
            <label>Title:</label>
            <input 
            onChange={(event) => setTitle(event.target.value)}
              value={title} 
              type="text"/>
          </div>

          <div className='tagsBox'>
            <label>Tags:</label>
            <input
            onChange={(event) => setTags(event.target.value)}
              value={tags} 
              type="text"/>
          </div>

        </div>

        <div className='field2'>
          <label>Description:</label>
          <textarea
            onChange={(event) => setDescript(event.target.value)}
            value={descript} 
            type="text"  
            className='textareaD'></textarea>
        </div>

        </div>

        <button className='subButton' type='submit'>Submit</button>

      </form>

      <div className='main'>

        <div className='todos'>
          <ul>
            {todos.map(todo => {
              return(
                <div>
                <li> Title: {todo.title}
                <br/>
                Tags: {todo.tags}
                <br/>
                Description: {todo.description}
                </li>
                <button 
                onClick={() => {
                  setDones([
                    {
                      title: todo.title,
                      tags: todo.tags,
                      description : todo.description
                    },
                    ...dones])
                  setTodos(todos.filter(t => t != todo))
                } }
                >
                  DONE
                </button>
                </div>
              )
            })}
          </ul>
        </div>

        <div className='dones'>
        <ul>
            {dones.map(done => {
              return(
                <div>
                <li> Title: {done.title}
                <br/>
                Tags: {done.tags}
                <br/>
                Description: {done.description}
                </li>
                <button 
                onClick={() => {
                  setTodos([{
                    title: done.title,
                    tags: done.tags,
                    description: done.description
                  },
                  ...todos])
                  setDones(dones.filter(d => d != done))
                } }
                >
                  To Do
                </button>
                </div>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default App;
