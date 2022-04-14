import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-signin', {useNewUrlParser: true}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
    }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
