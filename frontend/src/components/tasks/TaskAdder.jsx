import { useState } from "react";
import { useAddMultiTask, useAddSimpleTask } from "../../hooks/add-task.js";

// FIXME: the animation should play till the end
function TaskAdderMenuButton({onClick, lit, children}) {
    return (
        <button type="button" onClick={onClick}
            className={`px-2 py-1 rounded-full 
                ${lit 
                    ? "bg-blue-500" 
                    : "bg-blue-400 hover:shadow-md hover:bg-blue-500 active:scale-90 transition-transform duration-75"}
             `}>
            {children}
        </button>
    )
}

function TaskAdderMenu({mode, setMode}) {
    return (
        <div>
            <TaskAdderMenuButton lit={mode === 'add-simple'} onClick={() => setMode('add-simple')}>
                New Simple Task
            </TaskAdderMenuButton>
            <TaskAdderMenuButton lit={mode === 'add-multi'} onClick={() => setMode('add-multi')}>
                New Multi Task
            </TaskAdderMenuButton>
        </div>
    )
}

function AddSimpleTaskForm() {
    const multiAdder = useAddSimpleTask();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        multiAdder.mutate(
            {
                name: formData.get('name') 
            },
            {
                onSuccess: () => {
                    e.target.reset();
                },
            },
        );
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
    const [perpetual, setPerpetual] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        

        multiAdder.mutate(
            {
                name: formData.get('name'),
                maxCompletions: parseInt(formData.get('maxCompletions')),
                perpetual: perpetual
            },
            {
                onSuccess: () => {
                    e.target.reset();
                },
            }
        );
    };

    return (
        // TODO: fully controlled form?
        <form onSubmit = {handleSubmit}>
            <div className="flex flex-col gap-1">
                <div>Adding a new MultiTask</div>

                <div className="flex flex-row gap-1">

                    <input type="text" name="name" placeholder="Task Name" required autoComplete="off" 
                        className="w-1/2 px-1 py-1 bg-blue-400 focus:bg-blue-500 focus:outline-none"/>
                    <input type="number" name="maxCompletions" placeholder="Max Completions" required min="1" autoComplete="off"
                        className={`w-1/2 px-1 py-1 focus:outline-none ${
                        perpetual ? "bg-gray-300 cursor-not-allowed" : "bg-blue-400 focus:bg-blue-500"}`}
                        disabled={perpetual}/>
                </div>
                <label className="flex gap-1" htmlFor="perpetual">
                    <input type="checkbox" name="perpetual" checked={perpetual} onChange={() => setPerpetual(!perpetual)} 
                        className="px-1 py-1 bg-blue-400 focus:bg-blue-500 focus:outline-none"/>
                    Perpetual Task
                </label>
                <button type="submit" className="px-2 py-1 bg-blue-400 rounded-full hover:bg-blue-500 hover:shadow-md
                    active:scale-y-90 active:scale-x-96 transition-transform duration-75">
                    Submit
                </button>
            </div>
        </form>
    )
}

export function TaskAdder() {
    const [mode, setMode] = useState('add-multi'); // 'default' | 'add-simple' | 'add-multi'

    return (
        <div>
            <TaskAdderMenu mode={mode} setMode={setMode} />
            {mode === 'default' && <div>Nothing here yet</div>}
            {mode === 'add-multi' && <AddMultiTaskForm />}
            {mode === 'add-simple'&& <AddSimpleTaskForm />}
        </div>
    )
}