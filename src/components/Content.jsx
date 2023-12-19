import classes from './Content.module.css'

const todosArr = JSON.parse(localStorage.getItem('todos'))

export default function Content(){

    // function formatDate(date){
    //     const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    //     let dateArr = date.split('-')
    //     let day = dateArr[2]
    //     let month = monthArr[dateArr[1] - 1]
    //     let year = dateArr[0]
        
    //     return day + ' ' + month + ' ' + year
    // }

    function handleDelete(todo){
        todosArr.forEach((element,index) => {
            if(element.title === todo.title){
                todosArr.splice(index,1)
            }
        });

        localStorage.setItem('todos', JSON.stringify(todosArr))
        location.reload()
    }

    return(
        todosArr.map((todo) => (
            <div key={todo.title} className={classes.container}>
                <h2>{todo.title}</h2>
                <p className={classes.desc}>Description: {todo.description}</p>
                {/* <p>Due Date: {formatDate(todo.date)}</p> */}
                <p>Due Date: {todo.date}</p>
                <button onClick={() => handleDelete(todo)}>Delete</button>
            </div>
        ))
    )
}
