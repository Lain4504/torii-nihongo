import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';

import { GatewayController } from './gateway.controller';
import { GatewayResolver } from './gateway.resolver';
import { GatewayService } from './gateway.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/gateway/schema.gql'),
      sortSchema: true,
      playground: false,
      graphiql: true,
    }),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.AUTH_HOST ?? '127.0.0.1',
          port: Number(process.env.AUTH_PORT ?? 3001),
        },
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService, GatewayResolver],
})
export class GatewayModule {}
