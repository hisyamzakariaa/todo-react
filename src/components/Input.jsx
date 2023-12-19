import classes from'./Input.module.css'

const todosArr = JSON.parse(localStorage.getItem('todos')) || []

function Input(){

    function handleSubmit(event){
        event.preventDefault()

        const fd = new FormData(event.target)
        const enteredTodo = Object.fromEntries(fd.entries())
        event.target.reset

        todosArr.push(enteredTodo)

        localStorage.setItem('todos', JSON.stringify(todosArr))
    }

    return(
        <form  className={classes.inputs_container} onSubmit={handleSubmit}>
            
                <div className={classes.input_container}> 
                    <label htmlFor="title">Title:</label>
                    <input required type="text" name="title"/>
                </div>
                
                <div className={classes.input_container}>
                    <label htmlFor="description">Description: </label>
                    <textarea required name="description" cols="10" rows="5" ></textarea>
                </div>

                <div className={classes.input_container}>
                    <label htmlFor="date">Due Date</label>
                    <input required type="date" name='date' />
                </div>

                <button onClick={() => location.reload()}>Create</button>
            
        </form>
    )
}

export default Input