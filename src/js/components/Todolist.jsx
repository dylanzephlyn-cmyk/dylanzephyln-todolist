import { useEffect, useState } from "react"

export const Todolist = () => {
    const host = 'https://playground.4geeks.com/todo';
    const user = 'dylbert1235';
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);
    const [editTask, setEditTask] = useState('');
    const [editId, setEditId] = useState('');


    const handleTask = (event) => { setTask(event.target.value) }
    const handleEditTask = (event) => setEditTask(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task != '') {
            createTodo()
        }
    };

    const startEditing = (objeto) => {
        setEditTask(objeto.tarea);
        setEditId(objeto.id);
    };

    const submitEdit = async (event) => {
        event.preventDefault();
        const updatedList = list.map(item =>
            item.id === editId ? { ...item, tarea: editTask } : item
        );
        setList(updatedList);
        setEditTask('');
        setEditId('');
    };

    const createTodo = async () => {
        const body = {
            label: task,
            is_done: false
        };

        const response = await fetch(`${host}/todos/${user}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        console.log(response);
        

        if (!response.ok) return console.log("Error POST");

        const newTodo = await response.json();
        setList([...list, newTodo]); 
        setTask('');
        getLosToDos()
    };

    const getLosToDos = async () => {
        const uri = `${host}/users/${user}`;
        const options = { method: 'GET' }
        const response = await fetch(uri, options)
        if (!response.ok) {
            console.log('error', response.status, response.statusText)
            if (response.status == 404) {
                crearUsuario()
            }
            return;
        }
        const data = await response.json()
        setList(data.todos)


    }
    const crearUsuario = async () => {
        const uri = `${host}/users/${user}`;
        const options = { method: 'POST' }
        const response = await fetch(uri, options)
        if (!response.ok) {
            console.log('error', response.status, response.statusText)
            return;
        }
        const data = await response.json()
        console.log(data);
    }

    const handleDeleteTask = async (todo) => {
        await fetch(`${host}/todos/${todo.id}`, {
            method: "DELETE"
        });

        getLosToDos()
    };




    useEffect(() => {
        getLosToDos()
    }, [])

    return (
        <>
            {editId === "" ? (
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
                </>
            ) : (
                <>
                    <h1 className="mt-2 text-center">Edit Task:</h1>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="card border-0 col-6">
                            <div className="card-body">
                                <form onSubmit={submitEdit} className="text-center d-flex justify-content-center">
                                    <input type="text" className="form-control" placeholder="Edit selected task." value={editTask} onChange={handleEditTask} />
                                    <button type="submit" className="btn btn-outline-danger ms-2">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className="container-fluid d-flex justify-content-center">
                <ul className="list-group list-group col-6">
                    <h1 className="mt-2 text-center">Tasks:</h1>
                    {list.map((objeto) => {
                        return (
                            <li style={{ borderRadius: "5px", border: "0" }} key={objeto.id} className="list-group-item d-flex justify-content-between hidden-icon">
                                - {objeto.label}
                                <div>
                                    <span onClick={() => startEditing(objeto)}>
                                        <i style={{ cursor: "pointer" }} className="bi bi-pen-fill me-2"></i>
                                    </span>
                                    <span onClick={() => handleDeleteTask(objeto)}>
                                        <i style={{ cursor: "pointer" }} className="bi bi-x-square-fill"></i>
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                    <li style={{ borderRadius: "5px", border: "0" }} className="list-group-item text-end bg-body-tertiary">
                        {list.length === 0 ? 'Nothing to do.' : `You have ${list.length} pending task${list.length > 1 ? 's' : ''}.`}
                    </li>
                </ul>
            </div>
        </>
    );
};

