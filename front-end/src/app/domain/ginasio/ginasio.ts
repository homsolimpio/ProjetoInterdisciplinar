import { Endereco } from "../endereco/endereco";
import { Cidade } from "../endereco/cidade/cidade";
import { Estado } from "../endereco/estado/estado";

export class Ginasio {
  id: number;
  nome: string;
  endereco: Endereco;
  cidade: Cidade;
  estado: Estado;
}
