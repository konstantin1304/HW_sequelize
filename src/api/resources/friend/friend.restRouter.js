import express from 'express';
import controller from './friend.controller';

export const friendRouter = express.Router({});

//friendRouter.param('id', controller.findByParam);
friendRouter.param('userId', controller.getByUser);

friendRouter.route('/')
    .post(controller.createOne);


friendRouter.route('/:id')
    .delete(controller.deleteOne);


friendRouter.route('/userid/:userId')
    .get(controller.getByUser);