import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Departement } from '../departements/departement.entity';

@Entity()
export class Commune {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    normalized_nom: string;
    
    @Column()
    code: string;

    /*     @Column()
        lat: string;
        @Column()
        lon: string;
     */
    @Column()
    codeRegion: string;

    @Column()
    codeDepartement: string;

    @Column()
    population: number;

 /*    @Column()
    codesPostaux: string[]; */

    @ManyToOne(type => Departement, departement => departement.communes, { nullable: true, onDelete: 'SET NULL' })
    departement: Departement;
}
