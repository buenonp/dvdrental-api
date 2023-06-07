import { Repository } from 'typeorm';

import { Film } from '../entities/film.entity';
import { IFilmRepository } from './IFilmRepository';

import { CreateFilmDTO, UpdateFilmDTO } from '../../dtos/FilmDTO';

import dataSource from '@config/database/typeorm/data-source';

export class FilmRepository implements IFilmRepository {
    private readonly typeormRepository: Repository<Film>;
    
    constructor() {
        this.typeormRepository = dataSource.getRepository(Film);
    }

    async getFilms(): Promise<Film[]> {
        return await this.typeormRepository.find();
    }

    async getFilmById(film_id: number): Promise<Film> {
        return await this.typeormRepository.findOneBy({ film_id });
    }

    async createFilm(film: CreateFilmDTO): Promise<Film> {
        const newFilm = this.typeormRepository.create(film);

        return await this.typeormRepository.save(newFilm);
    }

    async updateFilm(id: number, film: UpdateFilmDTO): Promise<Film> {
        await this.typeormRepository.update(id, film);

        return await this.getFilmById(id);
    }

    async deleteFilm(id: number): Promise<void> {
        const film = await this.getFilmById(id);

        await this.typeormRepository.delete(id);
    }
}
