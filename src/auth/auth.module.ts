import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioRepository } from 'src/usuario/usuario.repository';

@Module({
    imports : [
        TypeOrmModule.forFeature([Usuario]), 
        UsuarioModule, 
        JwtModule
    ],
    providers: [
        AuthService,
        UsuarioService,
        UsuarioRepository
    ],
    controllers: [AuthController]
})
export class AuthModule {}
