import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
import { Admin } from './admin/modules/admin.module';
import { Worker } from './workers/models/worker.model';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AnimalModule } from './animal/animal.module';
import { MedicalRecordsModule } from './medical_records/medical_records.module';
import { VaccinationsModule } from './vaccinations/vaccinations.module';
import { MilkProductModule } from './milk_product/milk_product.module';
import { Animal } from './animal/entities/animal.entity';
import { FeedingSchudulesModule } from './feeding_schudules/feeding_schudules.module';
import { BreadsModule } from './breads/breads.module';
import { SpeciesModule } from './species/species.module';
import { AnimalCaratacerModule } from './animal_caratacer/animal_caratacer.module';
import { SheltersModule } from './shelters/shelters.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      sortSchema:true,
      playground: true,
      debug: true,
      introspection: true,
      installSubscriptionHandlers: true,

    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'laziz2005',
      database: process.env.DB_NAME || 'fermer',
      entities: [Admin,
        Worker,
        Animal
      ],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([]),
    AdminModule,
    WorkersModule,
    AuthModule,
    AnimalModule,
    MedicalRecordsModule,
    VaccinationsModule,
    MilkProductModule,
    FeedingSchudulesModule,
    BreadsModule,
    SpeciesModule,
    AnimalCaratacerModule,
    SheltersModule, 
  ],
  controllers: [],
  providers: [Logger],
})
export class AppModule {}
