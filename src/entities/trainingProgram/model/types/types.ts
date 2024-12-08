// import { ProgramType } from "stores";

import { ProgramType } from "@entities/trainingProgram/types/ProgramTypes";

export enum trainingProgramPosition {
  left = "left",
  right = "right",
}

export type ITrainingProgram = ProgramType & {
  position: trainingProgramPosition;
};

export interface IGetPrograms {
  programs: ITrainingProgram[];
}
