import { Role } from '../../enums/role.enum';

export const editorStub = {
  id: 1,
  email: 'editor@gmail.com',
  password: 'hashedPassword',
  role: Role.EDITOR,
  campaigns: [],
  createdAt: new Date('2024-06-12 13:54:45.899035'),
  updatedAt: new Date('2024-06-12 13:54:45.899035'),
};

export const adminStub = {
  id: 2,
  email: 'admin@gmail.com',
  password: 'hashedPassword',
  role: Role.EDITOR,
  campaigns: [],
  createdAt: new Date('2024-06-12 13:54:45.899035'),
  updatedAt: new Date('2024-06-12 13:54:45.899035'),
};
