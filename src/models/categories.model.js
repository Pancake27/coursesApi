const db = require('../utils/db');
const { DataTypes } = require('sequelize');

const Categories = db.define('categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id',
    }
});

module.exports = Categories;