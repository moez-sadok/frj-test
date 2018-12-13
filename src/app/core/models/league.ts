import { Team } from "./team";

export interface League {
  idLeague: string;
  strLeague: string;
  teams?: Team[];
}
