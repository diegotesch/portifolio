import { IJogador } from './jogador.interface';

export interface ITime {
  id: string;
  nome: string;
  escudo?: string;
  tecnico: string;
  jogadores: IJogador[];
}
