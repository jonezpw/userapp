export interface IUser {
  id: number;
  name: string;
  full_name: string;
  city: string;
  age: number;
  knowledge: IKnowledge[];
}

export interface IKnowledge {
  language: string;
  frameworks: string[];
}
