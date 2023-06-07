import { FilmDTO, CreateFilmDTO, UpdateFilmDTO } from "../../dtos/FilmDTO";

export interface IFilmRepository {
    getFilms(): Promise<FilmDTO[]>;
    getFilmById(id: number): Promise<FilmDTO>;
    createFilm(film: CreateFilmDTO): Promise<FilmDTO>;
    updateFilm(id: number, film: UpdateFilmDTO): Promise<FilmDTO>;
    deleteFilm(id: number): Promise<void>;
}
