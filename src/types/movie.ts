
export default interface genre {
    id: any,
    name: string
}
export default interface movie {
    poster_path: string,
    vote_average: string | number | any | unknown,
    original_title: string,
    overview: string,
    id: number,
    homepage?: string,
    genres?: genre[] 
}
