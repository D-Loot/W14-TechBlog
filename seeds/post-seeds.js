const { Post } = require('../models');

const postData = [
// TODO: UPDATE
{
  title: 'JavaScript Post',
  description: "Here is the post on JavaScript by Sal",
  date_created: "12/01/2020",
  user_id: 1,
},
{
  title: 'HTML Post',
  description: "Here is the post on HTML by Lernantino",
  date_created: "12/02/2020",
  user_id: 2,
},
{
  title: 'CSS Post',
  description: "Here is the post on CSS by Amiko",
  date_created: "12/03/2021",
  user_id: 3,
},{
  title: 'Coding and Things',
  description: "Coding is a journey that once started is hard to stop. However, sometimes life gets in the way with a new job and wanting to learn new skills. Everyone has their own way to learn and practice.",
  date_created: "08/26/2021",
  user_id: 4,
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
