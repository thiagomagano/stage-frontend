export type DepartmentInfo = {
  id: number;
  title: string;
  processes: Process[];
};

export type Process = {
  id: number;
  name: string;
  description: string;
  steps: StepProcess[];
  department: DepartmentInfo
};

export type StepProcess = {
  id: number;
  name?: string;
  description?: string;
  prev: number;
};
