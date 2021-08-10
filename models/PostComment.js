// 16 Import from sequelize and /config/connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// 17 Create Post model
class PostComment extends Model {}

// 18 Initialize PostComment (See ../seeds/index.js) (also see W13-E-CommerceBackEnd/models/Product.js Tag.js ProductTag.js)
PostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true,
    },
    post_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    comment_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'comment',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_comment',
  }
);

module.exports = PostComment;
