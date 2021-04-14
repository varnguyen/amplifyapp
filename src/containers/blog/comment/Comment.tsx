import React from 'react'

import { mockCommentLists } from '../../../constants/data'

const UserInfoComment = ({ ava, user_name, created_at, comment }: any) => {
    return (
        <div className="comment">
            <figure className="comment-media">
                {/* <a href="#"> */}
                <img src={ava} alt="User name" />
                {/* </a> */}
            </figure>

            <div className="comment-body">
                <a href="#" className="comment-reply">
                    Reply
                </a>
                <div className="comment-user">
                    <h4>
                        <a href="#">{user_name}</a>
                    </h4>
                    <span className="comment-date">{created_at}</span>
                </div>

                <div className="comment-content">
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}

const CommentItem = (props: any) => {
    const { comments } = props
    return (
        <>
            <UserInfoComment {...props} />

            {comments.length > 0 && (
                <ul>
                    {comments.map((e: any) => (
                        <li>
                            <UserInfoComment {...e} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

const Comment = () => {
    return (
        <>
            <div className="comments">
                <h3 className="title">3 Comments</h3>

                <ul>
                    {mockCommentLists.map((e) => (
                        <li>
                            <CommentItem {...e} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="reply">
                <div className="heading">
                    <h3 className="title">Leave A Reply</h3>

                    <p className="title-desc">Your email address will not be published. Required fields are marked *</p>
                </div>

                <form action="#">
                    <label htmlFor="reply-message" className="sr-only">
                        Comment
                    </label>
                    <textarea
                        name="reply-message"
                        id="reply-message"
                        cols={30}
                        rows={4}
                        className="form-control"
                        required
                        placeholder="Comment *"></textarea>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="reply-name" className="sr-only">
                                Name
                            </label>
                            <input type="text" className="form-control" id="reply-name" name="reply-name" required placeholder="Name *" />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="reply-email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="reply-email"
                                name="reply-email"
                                required
                                placeholder="Email *"
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-outline-primary-2">
                        <span>POST COMMENT</span>
                        <i className="icon-long-arrow-right"></i>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Comment
