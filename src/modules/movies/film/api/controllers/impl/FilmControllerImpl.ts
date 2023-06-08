import { injectable, inject } from 'tsyringe';

import { BaseControllerImpl } from '@/modules/base/BaseControllerImpl';

import { 
    CreateFilmDTO, 
    UpdateFilmDTO, 
    FilmDTO 
} from '../../../dtos/FilmDTO';

import { FilmService } from '../../../business/services/FilmService';

@injectable()
export class FilmControllerImpl 
    extends BaseControllerImpl<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {
    
    constructor(
        @inject('FilmService')
        filmService: FilmService
    ) {
        super(filmService);
    }

}
