import { BaseService } from '@/modules/base/BaseService';

import { 
    FilmDTO,  
    CreateFilmDTO, 
    UpdateFilmDTO 
} from '../../dtos/FilmDTO';

export interface FilmService 
    extends BaseService<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {}
