document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle comment form visibility
    const commentForms = document.querySelectorAll('.comment-form');
  
    if (commentForms) {
      commentForms.forEach(form => {
        const commentButton = form.querySelector('.comment-button');
        const commentInput = form.querySelector('.comment-input');
  
        if (commentButton && commentInput) {
          commentButton.addEventListener('click', (event) => {
            event.preventDefault();
            commentInput.classList.toggle('hidden');
          });
        }
      });
    }
  });  