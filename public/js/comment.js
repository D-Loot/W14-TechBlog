// the purpose of this js is to receive comment posts and comment deletions.
const newFormHandler = async (event) => {
  const post_id = document.querySelector('#post-id').value;
  const title = document.querySelector('#comment-title').value.trim();
  const description = document.querySelector('#comment-desc').value.trim();

  if (title && description&& post_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ title, description, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/comments/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/post');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.comment-list')
//   .addEventListener('click', delButtonHandler);
