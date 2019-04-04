import Sequelize from 'sequelize';
import { connect } from '../../../db';
//import Friend from "../friends/friends.model";


const schema = {

};

const Friend = connect().sequelize.define('friends', schema, {
    underscored: true,
    freezeTableName: true,
});

//User.hasMany(Step);

export default Friend;