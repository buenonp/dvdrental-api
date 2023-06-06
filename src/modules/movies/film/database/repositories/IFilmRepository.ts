import { Film } from "../entities/film.entity";

import { CreateFilmDTO } from "../../dtos/CreateFilmDTO";
import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO";

export interface IFilmRepository {
    getFilms(): Promise<Film[]>;
    getFilmById(id: number): Promise<Film>;
    createFilm(film: CreateFilmDTO): Promise<Film>;
    updateFilm(id: number, film: UpdateFilmDTO): Promise<Film>;
    deleteFilm(id: number): Promise<void>;
}
