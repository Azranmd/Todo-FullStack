import { Status } from './../../createTaskform/enums/status';
import { TaskCounterStatusType } from "../Interfaces/ItaskCounter";

export const EmitCorrectLabel = (status:TaskCounterStatusType):string => {
    switch(status){
        case Status.todo:
            return `Todo's`;
        case Status.inprogress:
            return `InProgress`;
        case Status.completed:
            return `Completed`;
    }
};
