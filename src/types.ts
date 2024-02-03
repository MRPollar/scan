import type IStory from "~/core/interfaces/IStory";
import type IGenre from "~/core/interfaces/IGenre";

export type DataRes = {
    storys:string;
    mostRead:string;
}

export type DataResReturn = {
    storys:{storys:IStory[],total:number};
    mostRead:IStory[];
}