import User from '../models/users.js';

function createUserRepository(newUser) {
  return User.create(newUser);
}

function findUserByEmailRepository(email) {
  return User.findOne({ email }).select('+password');
}

function findUserByIdRepository(id) {
  return User.findById(id);
}

function findAllUserRepository() {
  return User.find();
}

function updateUserRepository(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true });
}

function deleteUserByIDRepository(id) {
  return User.findByIdAndDelete(id);
}

export default {
  createUserRepository,
  findUserByEmailRepository,
  findUserByIdRepository,
  findAllUserRepository,
  updateUserRepository,
  deleteUserByIDRepository,
};