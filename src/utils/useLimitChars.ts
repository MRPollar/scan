export default function(limit:number, text:string):string{
    let totalChartext:number = text.length;
    let newText:string;

    if(totalChartext <= limit) return text;

    newText = text.substring(0, limit);

    return newText[newText.length - 1] === " " ? newText.substring(0, newText.length - 2) + '...' : newText + "...";
}