import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Departement } from '../../departements/departements/departement.entity';
import { IsOptional } from 'class-validator';

@Entity()
export class Region {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    nom: string;
    
    @Column()
    normalized_nom: string;

    @IsOptional()
    @OneToMany(type => Departement, departement => departement.region, { eager: false, onDelete: "SET NULL" })
    departements: Departement[];
}
