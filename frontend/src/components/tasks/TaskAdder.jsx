import { useState } from "react";
import { useQueryClient, useMutation} from "@tanstack/react-query";
import { useAddMultiTask, useAddSimpleTask } from "../../hooks/add-task.js";

function TaskAdderMenuButton({onClick, children}) {
    return (
        <button type="button" onClick={onClick}
            className="px-2 py-1 bg-blue-400 rounded-full hover:shadow-md
             hover:bg-blue-500 active:scale-90 transition-transform duration-75">
            {children}
        </button>
    )
}

function TaskAdderMenu({setMode}) {
    return (
        <div>
            <TaskAdderMenuButton onClick={() => setMode('add-simple')}>New Simple Task</TaskAdderMenuButton>
            <TaskAdderMenuButton onClick={() => setMode('add-multi')}>New Multi Task</TaskAdderMenuButton>
        </div>
    )
}

function AddSimpleTaskForm() {
    const multiAdder = useAddSimpleTask();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        e.target.reset(); 

        multiAdder.mutate({ name: formData.get('name') });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>Adding a new SimpleTask</div>
            <input type="text" name="name" placeholder="Task Name" required autoComplete="off" 
                className="px-1 py-1 bg-blue-400 focus:bg-blue-500 focus:outline-none"/>
        </form>
    )
}

function AddMultiTaskForm() {

    const multiAdder = useAddMultiTask();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        e.target.reset(); 

        multiAdder.mutate({ name: formData.get('name') });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>Adding a new MultiTask</div>
            <input type="text" name="name" placeholder="Task Name" required autoComplete="off" 
                className="px-1 py-1 bg-blue-400 focus:bg-blue-500 focus:outline-none"/>
        </form>
    )
}

export function TaskAdder() {
    const [mode, setMode] = useState('add-multi'); // 'default' | 'add-simple' | 'add-multi'

    return (
        <div>
            <TaskAdderMenu setMode={setMode} />
            {mode === 'default' && <div>Nothing here yet</div>}
            {mode === 'add-multi' && <AddMultiTaskForm />}
            {mode === 'add-simple'&& <AddSimpleTaskForm />}
        </div>
    )
}