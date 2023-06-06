import { Request, Response } from 'express';

export interface IFilmController {
    getFilms(req: Request, res: Response): Promise<Response>;
    getFilmById(req: Request, res: Response): Promise<Response>;
    createFilm(req: Request, res: Response): Promise<Response>;
    updateFilm(req: Request, res: Response): Promise<Response>;
    deleteFilm(req: Request, res: Response): Promise<Response>;
}
