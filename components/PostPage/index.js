import PropTypes from 'prop-types';
import usePost from 'hooks/usePost';
import usePostComments from 'hooks/usePostComments';

export default function PostPage({ postId }) {
  const { post, isLoading: isLoadingPost, error: errorPost } = usePost(postId);
  const {
    comments,
    isLoading: isLoadingPostComments,
    error: errorPostComments,
  } = usePostComments(postId);
  console.log(post, isLoadingPost, errorPost);
  console.log(comments, isLoadingPostComments, errorPostComments);
  return (
    <>
      {post && (
        <>
          <p>
            <b>Post:</b>
          </p>
          <p>{post.title}</p>
        </>
      )}
      {comments && (
        <>
          <p>
            <b>Comments:</b>
          </p>
          <ul>
            {comments &&
              comments.map((comment) => (
                <li key={comment.id}>{comment.name}</li>
              ))}
          </ul>
        </>
      )}
    </>
  );
}

PostPage.propTypes = {
  postId: PropTypes.string,
};
