import { useState } from "react"


export const Todolist = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])
    const handleTask = (event) => { setTask(event.target.value) }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task != '') {
            const dataToSend = { id: list.length + 1, tarea: task };
            setList([...list, dataToSend])
            setTask('')
        }
    }
    const handleDeleteTask = (deletedTask) => { setList(list.filter(item => item.id != deletedTask.id)) }

    return (
        <>
            <h1 className="mt-2 text-center">Add Task:</h1>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card border-0 col-6">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="text-center d-flex justify-content-center">
                            <input type="text" className="form-control" placeholder="Things to do today." value={task} onChange={handleTask} />
                            <button type="submit" className="btn btn-outline-danger ms-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center">
                <ul className="list-group list-group col-6">
                    <h1 className="mt-2 text-center">Tasks:</h1>
                    {list.map((objeto, index) => {
                        return (
                            <li style={{ borderRadius: "5px", border: "0" }} key={objeto.id} className="list-group-item d-flex justify-content-between hidden-icon">- {objeto.tarea}
                                <span onClick={() => handleDeleteTask(objeto)}>
                                    <i style={{ cursor: "pointer" }} class="bi bi-x-square-fill" />
                                </span>
                            </li>
                        )
                    })}
                    <li style={{ borderRadius: "5px", border: "0" }} className="list-group-item text-end bg-body-tertiary">
                        {list.length === 0 ? 'Nothing to do.' : `You have ${list.length} pending task${list.length > 1 ? 's' : ''}.`}
                    </li>

                </ul>
            </div>
        </>
    )
}






