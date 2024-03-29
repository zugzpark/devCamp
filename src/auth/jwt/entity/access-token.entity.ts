import { Column, Entity, ManyToOne, Relation } from 'typeorm';
import { BaseEntity } from '../../../common';
import { User } from '../../../module/user'

@Entity()
export class AccessToken extends BaseEntity {
  @ManyToOne(() => User)
  user: Relation<User>;

  @Column()
  jti: string;

  @Column()
  token: string;

  @Column({ type: 'timestamp' })
  expiresAt: Date;

  @Column({ default: false })
  isRevoked: boolean;
}
