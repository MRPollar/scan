import type IGenre from '~/core/interfaces/IGenre';
import type IChapter from "~/core/interfaces/IChapter";

export default interface IStory{
    'id': number;
    'name':string;
    'description':string
    'slug':string;
    'status':string;
    'type':string;
    'release_date':string;
    'image':string;
    'genres':Array<IGenre>;
    'avaliable':string | number;
    'last_updated':string;
    'last_chapters': Array<IChapter>
    'all_chapters':Array<IChapter>
}