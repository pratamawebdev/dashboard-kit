import { dataTaskStatus } from "../data";

export const getTaskStatusColor = (status) => {
  const priorityObj = dataTaskStatus.find((item) => item.status === status);
  return priorityObj ? priorityObj.bgColor : "#FFFFFF";
};
