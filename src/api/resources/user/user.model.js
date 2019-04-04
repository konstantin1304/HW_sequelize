import Sequelize from 'sequelize';
import { connect } from '../../../db';
import Recipe from '../recipe/recipe.model';
import Friend from "../friend/friend.model";

const schema = {
    name: Sequelize.STRING,
    token: Sequelize.STRING
};

const User = connect().sequelize.define('user', schema, {
    indexes: [{
        unique: true,
        fields: ['token']
    }],
    underscored: true,
    freezeTableName: true,    
});

User.hasMany(Recipe);

User.belongsToMany(User, { as: 'children', foreignKey: 'UserId1', through: 'Friend' });
User.belongsToMany(User, { as: 'parents', foreignKey: 'UserId2', through: 'Friend' });



export default User;