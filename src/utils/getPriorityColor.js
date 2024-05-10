import { dataPriority } from "../data";

export const getPriorityBgColor = (priority) => {
  const priorityObj = dataPriority.find((item) => item.priority === priority);
  return priorityObj ? priorityObj.bgColor : "#FFFFFF";
};
