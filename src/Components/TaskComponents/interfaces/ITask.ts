import { ITaskHeader } from './ItaskHeader';
import { ITaskDescription } from './ItaskDescription';
import { ItaskFooter } from './ITaskFooter';

export interface ITask extends ITaskHeader, ITaskDescription, ItaskFooter {
 
  priority?: string;
 
}
