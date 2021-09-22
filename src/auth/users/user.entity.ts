import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'user_id'})
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;
}
