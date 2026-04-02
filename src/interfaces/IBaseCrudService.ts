export interface IBaseCrudService<T, DTOIn, DTOOut> {
  findById(id: number): Promise<DTOOut>;

  findAll(): Promise<DTOOut[]>;

  // create(dtoIn: DTOIn): DTOOut;

  // update(dtoIn: DTOIn, id: number): DTOOut;

  // deleteById(id: number): void;

  // deleteAll(): void;
}
