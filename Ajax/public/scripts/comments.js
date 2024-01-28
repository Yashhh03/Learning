const loadCommentsBtnElement = document.getElementById('load-comments-btn');
const commentsSection = document.getElementById('comments');
const commentsForm = document.querySelector('#comments-form form');
const commentTitle = document.getElementById('title');
const commentText = document.getElementById('text');

function createCommentsList(comments) {
    const commentList = document.createElement('ol');

    for(const comment of comments) {
        const commentElement = document.createElement('li');
        commentElement.innerHTML = `
        <article class="comment-item">
            <h2>${comment.title}</h2>
            <p>${comment.text}</p>
        </article>`;
        commentList.appendChild(commentElement);
    }
    return commentList;
}

async function fetchCommentsForPost() {
    const postId = loadCommentsBtnElement.dataset.postid;
    const response = await fetch(`/posts/${postId}/comments`);
    const responseData = await response.json();

    if(responseData && responseData.length>0) {
        const commentsListElements = createCommentsList(responseData);
        commentsSection.innerHTML = '';
        commentsSection.appendChild(commentsListElements);
    }else {
        commentsSection.firstElementChild.textContent= 'We could not find the Elements. Maybe add some';
    }
};

async function saveComment(event) {
    event.preventDefault();
    const postId = commentsForm.dataset.postid;

    const enteredTitle = commentTitle.value;
    const enteredText = commentText.value;

    const comment = {title: enteredTitle, text:enteredText};

    const response = await fetch(`/posts/${postId}/comments`,{
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetchCommentsForPost();
};

loadCommentsBtnElement.addEventListener('click',fetchCommentsForPost);
commentsForm.addEventListener('submit', saveComment);