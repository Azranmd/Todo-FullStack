import { Status } from './../../createTaskform/enums/status';

export type TaskCounterStatusType = Status.todo|Status.inprogress|Status.completed;

export interface ITaskCounter {
    count?:number;
    status?:TaskCounterStatusType;

}