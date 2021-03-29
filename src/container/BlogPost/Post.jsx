import React from 'react';
const Post = (props) => {
    return(
        <div className="article">
            <div className="article-image">
                <img src="http://placeimg.com/80/80/tech" alt="Article Tumbnail"></img>
            </div>
            <div className="article-content">
                <div className="article-title">{props.title}</div>
                <p className="article-contents">{props.content}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.deleteArticle(props.idArticle)}>Delete</button>
            </div>
        </div>
    )
}
export default Post;