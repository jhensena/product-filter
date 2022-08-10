import { FindOptionsWhere, Repository } from 'typeorm';
import { manager } from '~/datasources';
import { Manufacturer } from '~/entities';

class ManufacturerService {
  private manufacturerRepository: Repository<Manufacturer>;

  constructor() {
    this.manufacturerRepository = manager.getRepository(Manufacturer);
  }

  getAll(filter?: FindOptionsWhere<Manufacturer>) {
    return this.manufacturerRepository.find({ where: filter });
  }
}

export const manufacturerService = new ManufacturerService();
