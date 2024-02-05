import type IChapter from "~/core/interfaces/IChapter";

export default interface IUpdate{
    id:number;
    image:string;
    name:string;
    slug:string;
    chapters:IChapter[]
}