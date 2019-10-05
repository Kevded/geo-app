// thanks to https://github.com/GitbookIO/normall/blob/master/index.js
export function replaceSpaceWithHyphen(str: string): string {

    const regex = /\s+/g;
    return str.replace(regex, '-');
}

export function replaceSpecialChar(str: string): string {
    const regex = /[\/\\\?\%\*\:\;\|\"\'\\<\\>\#\$\(\)\!\.\@]/g;
    return str.replace(regex, '-');
}