import { Router } from 'express';
import FindUserByIdController from '@User/Controllers/FindUserByIdController';
import FindAllUsersController from '@User/Controllers/FindAllUsersController';
import CreateUserController from '@User/Controllers/CreateUserController';
import AuthController from '@User/Controllers/AuthController';
import UpdateUserController from '@User/Controllers/UpdateUserController';
import DeleteUserController from '@User/Controllers/DeleteUserController';
import authMiddleware from 'src/Middlewares/AuthMiddleware';
import FindUserByNameController from '@User/Controllers/FindUserByNameController';

const userRoutes = Router();

userRoutes.post('/auth', AuthController.handle);
userRoutes.get('/user', FindAllUsersController.handle);
userRoutes.get('/user/:id', FindUserByIdController.handle);
userRoutes.post('/user', CreateUserController.handle);
userRoutes.put('/user/:id', UpdateUserController.handle);
userRoutes.delete('/user/:id', DeleteUserController.handle);
userRoutes.get('user/:name', authMiddleware, FindUserByNameController.handle);

export default userRoutes;