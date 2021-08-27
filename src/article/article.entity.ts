import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Timestamp } from 'rxjs';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'article_id' })
  id: number;

  @Column({ name: 'article_title' })
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  text: string;

  @Column({ nullable: true, name: 'article_image' })
  image: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
