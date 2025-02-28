import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return <div className="h-screen w-screen bg-slate-500 p-6">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="w-[500px] space-y-4">
            <h1 className="text-3xl text-slate-100 font-bold text-center">
                Detalhes da Tarefa
            </h1>
            
            <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
            
            <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        
        </div>
    </div>
}

export default TaskPage;