const faker = require('faker');

class CategoryService {
  constructor(){
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
        this.categories.push({
        id: faker.datatype.uuid(),
        categoryName: faker.commerce.department(),
      });
    }
  }

  create() {

  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}


module.exports = CategoryService;
