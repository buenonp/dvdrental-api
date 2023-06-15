import { Film } from '@/modules/movies/film/database/repositories/impl/typeorm/entities/film.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Language {
    @PrimaryGeneratedColumn()
    languageId: number;

    @Column()
    name: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    lastUpdate: Date;

}
