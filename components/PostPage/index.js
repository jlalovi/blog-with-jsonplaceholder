import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import usePost from 'hooks/usePost';
import useUser from 'hooks/useUser';
import usePostComments from 'hooks/usePostComments';
import PostPaper from 'components/PostPaper';
import css from 'styled-jsx/css';
import { colors } from 'styles/theme';

const postPageStyles = css`
  .postPaperContainer {
    margin-top: 32px;
  }
  .commentsPaperContainer {
    width: 100%;
    max-width: 1160px;
    margin: 32px auto;
    background: ${colors.cardBackground};
    padding: 18px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .commentsTitle {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 16px;
  }
  .commentItem {
    border: 1px solid ${colors.separator};
    padding: 8px;
    margin-bottom: 16px;
  }
  .commentItem .commentTitle {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 4px;
  }
  .commentItem .commentBody {
    margin-bottom: 8px;
  }
  .commentItem .commentMail {
    text-align: right;
  }
`;

export default function PostPage({ postId }) {
  const router = useRouter();
  const { post, isLoading: isLoadingPost } = usePost(postId);
  const { user, isLoading: isLoadingUser } = useUser(post?.userId);
  const {
    comments,
    isLoading: isLoadingPostComments,
    error: errorPostComments,
  } = usePostComments(postId);

  return (
    <>
      {post && (
        <section className="postPaperContainer">
          <PostPaper
            title={post.title}
            body={post.body}
            userName={user?.username}
            postSrc={`https://picsum.photos/1160/190?random=${post.id}`}
            userSrc={`https://loremflickr.com/150/150/portrait?random=${post.userId}`}
            postTitleOnClick={() => router.push(`/posts/${post.id}`)}
            userOnClick={() => router.push(`/users/${post.userId}`)}
          />
        </section>
      )}
      {comments && (
        <section className="commentsPaperContainer">
          <p className="commentsTitle">Comments:</p>
          {comments &&
            comments.map((comment, key) => (
              <div key={key} className="commentItem">
                <p className="commentTitle">{comment.name}</p>
                <p className="commentBody">{comment.body}</p>
                <p className="commentMail">
                  <a href="#">{comment.email}</a>
                </p>
              </div>
            ))}
        </section>
      )}
      <style jsx>{postPageStyles}</style>
    </>
  );
}

PostPage.propTypes = {
  postId: PropTypes.string,
};
