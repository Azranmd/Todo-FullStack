import { ITaskApi } from "../interfaces/ITaskApi";
import { TaskCounterStatusType } from "../../taskCounter/Interfaces/ItaskCounter";


export const CountTasks = (Tasks: ITaskApi[],Status:TaskCounterStatusType) =>{
    if(!Array.isArray(Tasks)){
        return 0;
    }
    const TotalTasks = Tasks.filter((Tasks) => { return Tasks.Status === Status;});

    return TotalTasks.length;

};