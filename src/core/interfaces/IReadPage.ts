import type IGenre from "~/core/interfaces/IGenre";
import type IChapter from "~/core/interfaces/IChapter";
import type IPage from "~/core/interfaces/IPage"

export default interface IReadPage{
    readonly id:number;
    readonly chapter_uri:string;
    readonly image:string;
    readonly name_story:string;
    readonly id_story:number;
    readonly slug_story:string;
    readonly chapter_number:number;
    readonly count_chapters:number;
    readonly chapter_name:string;
    readonly all_chapters:IChapter[];
    readonly chapter_pages:IPage[];
    readonly all_genres:IGenre[];
}