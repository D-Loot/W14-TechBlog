const User = require('./User.js');
const Post = require('./Post.js');
const Comment = require('./Comment.js');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// REF - W13
// Product.belongsTo(Category, {
//   foreignKey: 'category_id',
// });

// Category.hasMany(Product, {
//   foreignKey: 'category_id',
// });

// Product.belongsToMany(Tag, {
//   foreignKey: 'product_id',
//   through: ProductTag
// });

// Tag.belongsToMany(Product, {
//   foreignKey: 'tag_id',
//   through: ProductTag
// });

// module.exports = { User, Post };
module.exports = { User, Post, Comment};
