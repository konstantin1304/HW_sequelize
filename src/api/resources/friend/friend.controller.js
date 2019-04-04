import Friend from './friend.model';
import User from '../user/user.model';

const getByUser = model => (req, res, userId) => {
    return model.findAll({
        where: {
            user_id1: userId
          },
        include:[
            {
                model:User,
                where:{userId:model.userId2}
            }
        ]
    })
        .then(entities => res.status(200).json(entities))
        .catch(error => res.status(500).json(error))
};

const createOne = model => (req, res, next) => {
    console.log('createOne', req.body);
    return model.create(req.body)
        .then(entity => res.status(201).json(entity))
        .catch(error => next(error));
};

const deleteOne = () => (req, res, next) => {
    return req.docFromId.destroy()
        .then(entity => res.status(201).json(entity))
        .catch(error => next(error));
};

export default {
    getByUser: getByUser(Friend),
    createOne: createOne(User,User),
    deleteOne: deleteOne(User,User),
}