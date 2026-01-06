export function TaskBox({children}) {
    return (
        <div className="flex flex-col gap-0.5 w-full bg-blue-700 py-1 px-1 border-2 border-blue-300 rounded-xl select-none">
            {children}
        </div>
    )
}