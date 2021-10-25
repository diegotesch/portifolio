import { environment } from 'src/environments/environment';
import { IFootballAPIParams } from './football-api-params.interface';

export class FootballParams {
  private readonly APIkey: string = environment.apiFootbalToken;

  private readonly _endpoint: string = `${environment.apiFootballUrl}`;

  private parametros?: IFootballAPIParams = {};

  constructor(private action: string, params?: IFootballAPIParams) {
    if (params) this.setParams(params);
  }

  get endpoint() {
    return this._endpoint;
  }

  get params() {
    return {
      action: this.action,
      APIkey: this.APIkey,
      ...this.parametros
    };
  }

  setParams(params: IFootballAPIParams, clean = false) {
    if (!this.parametros || clean) this.parametros = {};
    this.parametros = { ...this.parametros, ...params };
  }
}
