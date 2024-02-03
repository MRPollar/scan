export default function(date:string){
    date = date.split(" ")[0];

    let dateArray:Array<string> = date.split("-");

    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
}