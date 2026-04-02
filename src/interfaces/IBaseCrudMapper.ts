export interface IBaseCrudMapper<T, DTOIn, DTOOut> {
  fromDTO(dtoIn: DTOIn, id?: number): T;

  toDTO(entity: T): DTOOut;
}
