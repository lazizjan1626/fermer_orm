import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
import { Admin } from './admin/modules/admin.module';
import { Worker } from './workers/models/worker.model';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'laziz2005',
      database: process.env.DB_NAME || 'fermer',
      entities: [Admin,
        Worker
      ],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([]),
    AdminModule,
    WorkersModule,
    AuthModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
