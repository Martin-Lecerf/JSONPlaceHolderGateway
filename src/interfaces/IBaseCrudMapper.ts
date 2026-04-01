export interface BaseCrudMapper<T, DTOIn, DTOOut> {
  fromDTO(dtoIn: DTOIn);

  fromDTO(dtoIn: DTOIn, id: number): T;

  toDTO(T): DTOOut;
}
