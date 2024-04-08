import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import { UsuarioRepository } from './usuario.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { CredencialesDto } from './dto/credenciales-usuario.dto';


@Injectable()
export class UsuarioService {

  constructor(
    private readonly usuarioRepository : UsuarioRepository)
  {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.crear(createUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.listar();
  }

  findOne(id: number) : Promise<Usuario>{
    return this.usuarioRepository.buscarPorId(id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = this.usuarioRepository.buscarPorId(id);
    if (!usuario){
      throw new Error(`Usuari con el id ${id} no encontrado`);
    }
    return this.usuarioRepository.actualizar(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.eliminar(id);
  }

  acceder(credencialesSto : CredencialesDto){

  }
}
