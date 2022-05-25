import axios, {AxiosError, AxiosResponse} from "axios";
const url = 'https://swapi.dev/api/films';

export const getAllFilms = async () => {
    let films: any = [];
    await axios.get(url)
        .then((response: AxiosResponse) => {
            let data =  response.data.results;
            data.map((position: any) => {
                films.push({
                    episode_id: position.episode_id,
                    title: position.title,
                    release_date: position.release_date
                });
            });
        })
        .catch((error: AxiosError) => {
            console.log(error);
        })
    return films;
}