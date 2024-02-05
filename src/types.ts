import type IStory from "~/core/interfaces/IStory";
import type IUpdate from "~/core/interfaces/IUpdate";

export type DataRes = {
    updates:string;
    mostRead:string;
}

export type DataResReturn = {
    updates:{storys:IUpdate[],total_pages:number};
    mostRead:IStory[];
}