import React from "react";
import Article from "./Article"


    // const articleItem = Article.map((eachCompo) => (
    //     <ArticleList key={} post={eachCompo.post}/>
    //       ))



          function ArticleList({ posts }) {
            const articles = posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes}
                />
        
            ));
            return <main>{articles}</main>;
        }
    




export default ArticleList;