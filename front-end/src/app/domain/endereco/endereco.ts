import { Cidade } from "./cidade/cidade";
import { Estado } from "./estado/estado";

export class Endereco {
  id: number;
  logradouro: string;
  complemento: string;
  bairro: string;
  estado: Estado;
  cidade: Cidade;
}
