
// seed data for multiple users
// User #1 = "Ms Green" is related to odd number _id
// User #2 = "Mr Yellow" is related to evens number _id

  
const folders = [
  
  //Ms Green
  {
    _id: '222222222222222222222201',
    foldername: 'School',
    userId: '000000000000000000000001'
  },
  {
    _id: '222222222222222222222203',
    foldername: 'Drafts',
    userId: '000000000000000000000001'
  },
   
  {
    _id: '111111111111111111111107',
    foldername: 'Work',
    userId: '000000000000000000000001'
  },
  
  
  //Mr Yellow
  {
    _id: '222222222222222222222202',
    foldername: 'Archive',
    userId: '000000000000000000000002'
  },
  {
    _id: '222222222222222222222204',
    foldername: 'Important',
    userId: '000000000000000000000002'
  },
  {
    _id: '222222222222222222222206',
    foldername: 'Personal',
    userId: '000000000000000000000002'
  },
  {
    _id: '222222222222222222222208',
    foldername: 'Work-In-Progress',
    userId: '000000000000000000000002'
  }
];

  
const users = [
  {
    _id: '000000000000000000000001',
    firstName: 'Ms Green',
    username: 'msgreen',
    password: '$2a$10$aKp4ayGhELjjvMzEIKt5lefS9TnApOgxmW6eu0jnTqmSn7OGIuBbm'
  },
  {
    _id: '000000000000000000000002',
    firstName: 'Mr Yellow',
    username: 'mryellow',
    password: '$2a$10$aKp4ayGhELjjvMzEIKt5lefS9TnApOgxmW6eu0jnTqmSn7OGIuBbm'
  }
];
  
module.exports = { folders, users };