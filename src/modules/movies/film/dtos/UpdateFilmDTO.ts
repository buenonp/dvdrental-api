export class UpdateFilmDTO {
    title?: string;
    description?: string;
    release_year?: number;
    language_id?: number;
    rental_duration?: number;
    rental_rate?: number;
    length?: number;
    replacement_cost?: number;
    rating?: string;
    last_update?: Date;
    special_features?: string;
    fulltext?: string;
}