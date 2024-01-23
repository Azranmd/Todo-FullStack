import { Priority } from "../../createTaskform/enums/priority";
import { Status } from "../../createTaskform/enums/status";

export interface ITaskApi {
    id : string;
    Date : string;
    Title : string;
    Description : string;
    Priority : `${Priority}`;
    Status : `${Status}`;
} 