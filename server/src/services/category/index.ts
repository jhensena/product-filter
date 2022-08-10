import { Repository } from 'typeorm';
import { manager } from '~/datasources';
import { Category } from '~/entities';

class CategoryService {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = manager.getRepository(Category);
  }

  getOne() {
    return this.categoryRepository.findOneBy({});
  }
}

export const categoryService = new CategoryService();
