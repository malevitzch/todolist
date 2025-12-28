import { useState } from "react";
import { useQueryClient, useMutation} from "@tanstack/react-query";
import { useAddMultiTask } from "../../hooks/add-task.js";

function TaskAdderMenu({setMode}) {
    return (
        <div className="bg-blue-200"> </div>
    )
}

function AddSimpleTaskForm() {
    return (
        {}
    )
}

function AddMultiTaskForm() {
    return (
        {}
    )
}

export function TaskAdder() {
    const [mode, setMode] = useState('menu'); // 'menu' | 'add-simple' | 'add-multi'

    const queryClient = useQueryClient();
    const multiAdder = useAddMultiTask();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        e.target.reset(); 

        multiAdder.mutate({ name: formData.get('name') });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" name="name" placeholder="Task Name" required autoComplete="off" 
                className="px-1 py-1 bg-blue-400 focus:bg-blue-500 focus:outline-none"/>
        </form>
    )
}