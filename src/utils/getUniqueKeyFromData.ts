import { WorkData } from 'types';

export const getUniqueKeyFromData = (data: WorkData): string => {
  return Object.values(data).join('-');
};
