const faker = require('faker-br');
const request = require('supertest');
const app = require('../../src/app');
const factory = require('../../src/factories');

describe('List students', () =>  {
  it('should be list a student on route /students', async () => {
    const student = await factory.create('Student');
    const res = await request(app).get('/students');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(res.body.length);
  });
});

describe('Find student by id', () =>  {
  it('should be find a student by id on route /students/:id', async () => {
    const student = await factory.create('Student');
    const res = await request(app).get(`/students/${student.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name");
  });
});

describe('Create a student', () =>  {
  it('should be list a student on route /students', async () => {
    const res = await request(app).post('/students')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        cpf: faker.br.cpf(),
        ra: faker.random.number()
      });
      
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('createdAt');
  });
});

describe('Update a student', () =>  {
  it('should be update a student on route /students/:id', async () => {
    const student = await factory.create('Student');
    const res = await request(app).put(`/students/${student.id}`)
      .send({ 
        name: faker.name.findName(),
        email: faker.internet.email(),
      });
      
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('msg');
  });
});

describe('Delete a student', () =>  {
  it('should be delete a student on route students/:id', async () => {
    const student = await factory.create('Student');
    const res = await request(app).delete(`/students/${student.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('msg');
  });
});