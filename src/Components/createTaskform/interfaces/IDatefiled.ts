
import { IDisabled } from "./Idisabled";

export interface IDatefiled extends IDisabled {
    value? : Date|null,
    onChange? : (Date : Date|null) => void;
};