import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { Region } from '../../regions/regions/region.entity';
import { Commune } from '../../communes/communes/commune.entity';

@Entity()
export class Departement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    codeRegion: string;

    @Column()
    nom: string;

    @Column()
    normalized_nom: string;

    @ManyToOne(type => Region, region => region.departements, { nullable: true, onDelete: 'SET NULL' })
    region: Region;

    @OneToMany(type => Commune, commune => commune.departement, { eager: false, onDelete: 'SET NULL' })
    communes: Commune[];
}
