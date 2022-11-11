import mock from './mock.json';

export interface IEmployee {
  name: string;
  phone: string;
}

export type IWorkers = Record<string, IEmployee[]>;

const filteredData = mock.data.reduce((workersFilteredByType: IWorkers, currentObject) => {
  const objectType = currentObject.type;
  const objectToAdd = {
    name: `${currentObject.name.first} ${currentObject.name.last}`,
    phone: currentObject.phone
  }

  if (workersFilteredByType[objectType]) {
    workersFilteredByType[objectType].push(objectToAdd);
  } else {
    workersFilteredByType[objectType] = [objectToAdd];
  }

  return workersFilteredByType;
}, {});

export const links = Object.keys(filteredData).map((key, index) => {
  return {title: key, value: index}
});

export const mockData = {
  total: mock.total,
  data: filteredData
}
