// https://ideogram.ai/assets/image/lossless/response/yW3o0cH5RXmVQidfOM-jBA  -- square
// https://ideogram.ai/assets/progressive-image/balanced/response/qsypaQtWQOiL6b4OA67jUA
// https://ideogram.ai/assets/image/lossless/response/h5llb1nMR3eCDY4sAmZV7g

export interface Wallpaper{
    url : String;
    name : String;
}


export function useWallpapers() : Wallpaper[]{
    return [{
        url : "https://ideogram.ai/assets/image/lossless/response/yW3o0cH5RXmVQidfOM-jBA",
        name : "Heritage"
    },
    {
        url : "https://ideogram.ai/assets/progressive-image/balanced/response/qsypaQtWQOiL6b4OA67jUA",
        name : "Nature" 
    }]
}