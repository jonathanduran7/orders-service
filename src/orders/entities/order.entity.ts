import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() userId: string;
  @Column() productId: string;
  @Column('numeric', { precision: 10, scale: 2 }) total: number;
  @CreateDateColumn() createdAt: Date;
}