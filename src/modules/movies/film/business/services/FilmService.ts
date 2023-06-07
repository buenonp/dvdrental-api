import { IFilmRepository } from '../../database/repositories/IFilmRepository';

import { FilmDTO,  CreateFilmDTO, UpdateFilmDTO } from '../../dtos/FilmDTO';

import { IFilmService } from './IFilmService';

export class FilmService implements IFilmService {
    private readonly filmRepository: IFilmRepository;

    constructor(filmRepository: IFilmRepository) {
        this.filmRepository = filmRepository;
    }

    async getFilms(): Promise<FilmDTO[]> {
        return this.filmRepository.getFilms();
    }

    async getFilmById(film_id: number): Promise<FilmDTO> {
        return this.filmRepository.getFilmById(film_id);
    }

    async createFilm(film: CreateFilmDTO): Promise<FilmDTO> {
        return this.filmRepository.createFilm(film);
    }

    async updateFilm(id: number, film: UpdateFilmDTO): Promise<FilmDTO> {
        return this.filmRepository.updateFilm(id, film);
    }

    async deleteFilm(id: number): Promise<void> {
        return this.filmRepository.deleteFilm(id);
    }

}
