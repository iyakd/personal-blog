import React from "react"

function Article(props) {
  const {
    content: {
      title,
      text: {
        text,
      },
      cover: {
        file: {
          url
        }
      },
      publishedAt
    }
  } = props;

  return (
    <div>
      <h2>{title}</h2>
      <img src={url} alt={title}/>
      <p>{text}</p>
      <h5>{publishedAt}</h5>
    </div>
  );

}

export default Article
