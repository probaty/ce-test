export interface IFilter {
  title: string;
  icon: string;
  active: boolean;
}

export type IEventContext = (event: string, data?: any) => void;
