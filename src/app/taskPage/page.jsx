import ModalPage from "@/components/Modal";
import TaskDetailsPage from "@/components/TaskDetailsPage";
import { createATask } from "@/lib/actions";
import { getTask } from "@/lib/task";



const taskPage = async() => {
    const tasks = await getTask()
    return (
        <div>
            <h2> task : {tasks.length}</h2>
            <div className="w-10/12 mx-auto py-10">
                <ModalPage createATask={createATask}></ModalPage>
            </div>
            <div className="grid grid-cols-3 mx-auto w-10/12 gap-5">
                {
                    tasks.map(element => <TaskDetailsPage key={element.id} task={element}></TaskDetailsPage>)
                }
            </div>
        </div>
    );
};

export default taskPage;