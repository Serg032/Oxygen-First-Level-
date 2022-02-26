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
      <div className='todoContainer'>
          <h3>To Do</h3>
          {todos.map(todo => {
            return(
              <div className='todoCard'>
                   Title: {todo.title}
                  <br/>
                  Tags: {todo.tags}
                  <br/>
                  Description: {todo.description}
                  <button 
                  className='buttonDone'
                  onClick={() => {
                    setDones([
                      {
                        title: todo.title,
                        tags: todo.tags,
                        description : todo.description
                      },
                      ...dones])
                    setTodos(todos.filter(t => t !== todo))
                  } }
                  >
                    DONE
                  </button>
              </div>
  )
})}
      </div>
      <div className='doneContainer'>
          <h3>DONE</h3>
          
            {dones.map(done => {
              return(
                <div className='doneCard'>
                Title: {done.title}
                <br/>
                Tags: {done.tags}
                <br/>
                Description: {done.description}
                <button 
                className='toDoButton'
                onClick={() => {
                  setTodos([{
                    title: done.title,
                    tags: done.tags,
                    description: done.description
                  },
                  ...todos])
                  setDones(dones.filter(d => d !== done))
                } }
                >
                  To Do
                </button>
                </div>
              )
            })}
          
      </div>
    </div>
    <div className='footer'>
      <div className='devInfo'>
            <div className='name'>
              <h3>Sergio Radigales</h3>
            </div>
            <div>
              <a target="_blank" href='https://www.linkedin.com/in/sergioradigales/'
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a target="_blank" href= "https://github.com/Serg032"
              >
                GitHub
              </a>
            </div>
      </div>
      <div className='projectInfo'>
            <div>
              <h4>@ToDoApp</h4>
            </div>
            <div>
              <h5>Oxygen Academy Test</h5>
            </div>
      </div>
    </div>
    </div>
  );
};

export default App;

