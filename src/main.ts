import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import * as dotenv from 'dotenv';
dotenv.config();

async function start() {
  try {

    console.log(process.env.DB_NAME);
    const PORT = process.env.PORT
    const app = await NestFactory.create(AppModule);
    //in app add loging to console
    
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
      .setTitle("Stadium Finder")
      .setDescription("My stadium finder project REST API")
      .setVersion("1.0")
      .addTag(
        "NestJs, validation, swagger, guard, TypeORM, pg, mailer, bot, sms"
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("api/docs", app, document);
    //end logging to console
    

    await app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
