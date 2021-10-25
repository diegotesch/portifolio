import { HttpHeaders, HttpParams } from '@angular/common/http';

export default function buildHttpOptions(
  parametros?: {},
  tipoConteudo: string | null = null,
  tipoResposta: string = 'json'
) {
  let resposta = {};
  let headers = {};

  if (tipoConteudo) {
    headers = new HttpHeaders({
      'Content-Type': tipoConteudo
    });
  }

  resposta = {
    headers,
    params: new HttpParams({
      fromObject: parametros
    }),
    responseType: tipoResposta
  };

  return resposta;
}
