import type IUpdate from "~/core/interfaces/IUpdate";
import type IChapter from "~/core/interfaces/IChapter";

export default class Update implements IUpdate{
    public id: number = 0;
    public image:string = '';
    public name:string = '';
    public slug:string = '';
    public chapters:IChapter[] = [];
}