import classes from './App.module.css'
import Content from './components/Content'
import Input from './components/Input'

const todosArr = JSON.parse(localStorage.getItem('todos'))
function App() {

  let isEmpty = todosArr.length === 0

  // console.log(todosArr.length)
  console.log(typeof(todosArr))

  return (
    <div className={classes.container}>
      <h1>Todo-List</h1>
      <Input />
        <h2 id={classes.header}>Your current task to be completed:</h2>
      <div className={classes.contents_container}>
        {isEmpty ? <p>You have no task to complete...</p> : <Content />}
      </div>
    </div>
  )
}

export default App
