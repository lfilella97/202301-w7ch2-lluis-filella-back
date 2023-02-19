export interface RobotStructure {
  id: number;
  name: string;
  imageUrl: string;
  speed: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  endurance: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  creationDate: string;
}

export type RobotsStructure = RobotStructure[];
