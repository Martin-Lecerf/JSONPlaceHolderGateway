import { HttpService } from 'src/common/http/http.service';
import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { IBaseCrudService } from 'src/interfaces/IBaseCrudService';

export abstract class BaseCrudService<
  T,
  DTOIn,
  DTOOut,
> implements IBaseCrudService<T, DTOIn, DTOOut> {
  protected constructor(
    protected readonly httpService: HttpService,
    protected readonly mapper: IBaseCrudMapper<T, DTOIn, DTOOut>,
    protected readonly endpoint: string,
  ) {}

  async findById(id: number): Promise<DTOOut> {
    const data = await this.httpService.get<T>(`${this.endpoint}/${id}`);
    return this.mapper.toDTO(data);
  }

  async findAll(): Promise<DTOOut[]> {
    const data = await this.httpService.get<T[]>(this.endpoint);
    return data.map((item) => this.mapper.toDTO(item));
  }
}
