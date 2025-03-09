// https://ideogram.ai/assets/image/lossless/response/yW3o0cH5RXmVQidfOM-jBA  -- square
// https://ideogram.ai/assets/progressive-image/balanced/response/qsypaQtWQOiL6b4OA67jUA
// https://ideogram.ai/assets/image/lossless/response/h5llb1nMR3eCDY4sAmZV7g

export interface Wallpaper{
    url : string;
    name : String;
}

interface FullWallpaper extends Wallpaper{
    liked : boolean;
    suggested : boolean;
    library : boolean;
}

export function useSuggestedWallpapers() : FullWallpaper[]{
    const wallpapers = useWallpapers()
    return wallpapers.filter(wallpaper => wallpaper.suggested)
}

export function useLikedWallpapers() : FullWallpaper[]{
    const wallpapers = useWallpapers()
    return wallpapers.filter(wallpaper => wallpaper.liked)
}

export function useLibraryWallpapers() : FullWallpaper[]{
    const wallpapers = useWallpapers()
    return wallpapers.filter(wallpaper => wallpaper.library)
}


// The FullWallpaper[] after useSuggestedWallpapers() is a TypeScript return type annotation. It specifies that the function returns an array of FullWallpaper objects.



export function useWallpapers() : FullWallpaper[]{
    return [{
        url : "https://ideogram.ai/assets/image/lossless/response/yW3o0cH5RXmVQidfOM-jBA",
        name : "Heritage",
        liked : true,
        suggested : true,
        library : true
    },
    {
        url : "https://ideogram.ai/assets/progressive-image/balanced/response/qsypaQtWQOiL6b4OA67jUA",
        name : "Nature" ,
        liked : true,
        suggested : true,
        library : false
    },
    {
        url : "https://ideogram.ai/assets/image/lossless/response/h5llb1nMR3eCDY4sAmZV7g",
        name : "Mountains",
        liked : false,
        suggested : false,
        library : true
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/UhF8z7vIRb27Uiz1JO0dJQ",
        "name":"SettingSun",
        liked : false,
        suggested : false,
        library : false
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/LRGYVdUQS_iX4taH3bgZCA",
        "name":"People",
        liked : false,
        suggested : true,
        library : true
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/eNLVXFF2SaiPzPc-sRk9PQ",
        "name":"Arty",
        liked : false,
        suggested : true,
        library : true
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/uRtWabAQSymcg43ADbpWVg",
        "name":"Pinky",
        liked : false,
        suggested : true,
        library : false
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/8OJZ2M0eS0-_Lb8pKOaLuA",
        "name":"Aura",
        liked : true,
        suggested : true,
        library : true
    },]
}