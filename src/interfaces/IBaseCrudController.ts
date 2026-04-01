export interface IBaseCrudController<DTOIn, DTOOut> {
  readById(id: number): DTOOut;

  readAll(): DTOOut[];

  create(dtoIn: DTOIn): DTOOut;

  update(dtoIn: DTOIn, id: number): DTOOut;

  delete(id: number): void;

  deleteAll(): void;
}
