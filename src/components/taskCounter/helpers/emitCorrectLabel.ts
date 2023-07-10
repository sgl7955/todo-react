import { Status } from '../../createTaskForm/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return `할 일🔥`;
    case Status.inProgress:
      return '진행중⌚';
    case Status.completed:
      return '완료🎉';
  }
};
