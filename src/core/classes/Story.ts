import type IStory from "~/core/interfaces/IStory";
import type IGenre from "~/core/interfaces/IGenre";
import type IChapter from "~/core/interfaces/IChapter";

export default class Story implements IStory {
    public id:number = 0;
    public name:string = "";
    public description:string = "";
    public slug:string = "";
    public status:string = "";
    public type:string = "";
    public release_date:string = "";
    public image:string = "";
    public genres:Array<IGenre> = [];
    public avaliable:string | number = 0;
    public last_updated:string = "";
    public last_chapters: Array<IChapter> = [];
    public all_chapters:Array<IChapter> = []
}