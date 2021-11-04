const { Comment } = require('../models');

const commentData = [
// TODO: UPDATE
  {
    title: 'JavaScript Comment #1',
    description: "Here is the first comment on JavaScript by Sal",
    date_created: "01/11/2021",
    user_id: 1,
    post_id: 1,
  },
  {
    title: 'JavaScript Comment #2',
    description: "Here is the second comment on JavaScript by Lernantino",
    date_created: "02/12/2021",
    user_id: 2,
    post_id: 1,
  },
  {
    title: 'JavaScript Comment #3',
    description: "Here is the third comment on JavaScript by Amiko",
    date_created: "03/13/2021",
    user_id: 3,
    post_id: 1,
  },
  {
    title: 'HTML Comment #1',
    description: "Here is the first comment on HTML by Sal",
    date_created: "01/21/2021",
    user_id: 1,
    post_id: 2,
  },
  {
    title: 'HTML Comment #2',
    description: "Here is the second comment on HTML by Lernantino",
    date_created: "02/22/2021",
    user_id: 2,
    post_id: 2,
  },
  {
    title: 'HTML Comment #3',
    description: "Here is the third comment on HTML by Amiko",
    date_created: "03/23/2021",
    user_id: 3,
    post_id: 2,
  },
  {
    title: 'Learning HTML',
    description: "Some ppl think that HTML is not worth learning and others feel that it is vital.",
    date_created: "08/26/2021",
    user_id: 4,
    post_id: 2,
  },
  {
    title: 'CSS Comment #1',
    description: "Here is the first comment on CSS by Sal",
    date_created: "01/01/2021",
    user_id: 1,
    post_id: 3,
  },
  {
    title: 'CSS Comment #2',
    description: "Here is the second comment on CSS by Lernantino",
    date_created: "02/02/2021",
    user_id: 2,
    post_id: 3,
  },
  {
    title: 'CSS Comment #3',
    description: "Here is the third comment on CSS by Amiko",
    date_created: "03/03/2021",
    user_id: 3,
    post_id: 3,
  },,
  {
    title: 'CSS',
    description: "There are so many things that you can do with this file.",
    date_created: "08/26/2021",
    user_id: 4,
    post_id: 3,
  },
  {
    title: 'Awesome work!',
    description: "Awesome job on your tech blog!",
    date_created: "08/26/2021",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
