import { Status } from "../../createTaskform/enums/status";
import { TaskCounterStatusType } from "../Interfaces/ItaskCounter";
export const EmitCorrectBorderColor = (status: TaskCounterStatusType):string => {
    
        switch(status){
            case Status.todo:
                return 'error.light';
            case Status.inprogress:
                return 'warning.light';
            case Status.completed:   
                return 'success.light';    
         }
    
};