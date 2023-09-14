import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

export { User };
