export interface IBaseCrudService<DTOIn, DTOOut> {
  findById(id: number): DTOOut;

  findAll(): DTOOut[];

  create(dtoIn: DTOIn): DTOOut;

  update(dtoIn: DTOIn, id: number): DTOOut;

  deleteById(id: number): void;

  deleteAll(): void;
}
