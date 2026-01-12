import { TaskBox }  from "./TaskBox.jsx"
import { LimitedTask } from "./task-types/LimitedTask.jsx"
import { OneTimeTask } from "./task-types/OneTimeTask.jsx"
import { PerpetualTask } from "./task-types/PerpetualTask.jsx"

const TASK_COMPONENTS = {
    'one-time': OneTimeTask,
    'limited': LimitedTask,
    'perpetual': PerpetualTask,
};

function ErrorTask({task}) {
    return (
        <TaskBox>
            <div className="text-center bg-blue-500 rounded-xl">
                {task.tag}
            </div>
            <div className="pt-0.5 text-center bg-blue-400 rounded-xl">
                 Unknown task type "{task.type}"
            </div>
        </TaskBox>
    )
}

export function TaskList({data, isLoading, error}) {
    if(error) {
        return <div>Error: {error.message}</div>;
    }
    else if(!isLoading) {
        return (
            <div className="flex-1 overflow-y-scroll grid grid-cols-4 gap-1 p-1 items-start auto-rows-min">
                {data.map(task => {
                    // TODO: add fallback for unknown task types
                    const TaskComponent = TASK_COMPONENTS[task.type] || ErrorTask;
                    return (
                        <TaskComponent key={task.id} task={task} />
                    );
                })}
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}