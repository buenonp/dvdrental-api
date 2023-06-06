import { Request, Response } from 'express';

import { CreateFilmDTO } from '../../dtos/CreateFilmDTO';
import { UpdateFilmDTO } from '../../dtos/UpdateFilmDTO';

import { IFilmService } from '../../business/services/IFilmService';

import { IFilmController } from './IFilmController';

export class FilmController implements IFilmController {
    private readonly filmService: IFilmService;

    constructor(filmService: IFilmService) {
        this.filmService = filmService;
    }

    public async getFilms(req: Request, res: Response): Promise<Response> {
        const films = await this.filmService.getFilms();

        return res.json(films);
    }

    public async getFilmById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const film = await this.filmService.getFilmById(Number(id));

        return res.json(film);
    }

    public async createFilm(req: Request, res: Response): Promise<Response> {
        const film = await this.filmService.createFilm(req.body as CreateFilmDTO);

        return res.json(film);
    }

    public async updateFilm(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const film = await this.filmService.updateFilm(Number(id), req.body as UpdateFilmDTO);

        return res.json(film);
    }

    public async deleteFilm(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        await this.filmService.deleteFilm(Number(id));

        return res.status(204).send();
    }
}
