import React from 'react';
import classes from './PostList.module.css';
import {AppContext} from '../../App';
import PostListRow from '../post-list-row/PostListRow';

export default () => {
    return (
        <AppContext.Consumer>
            {
                ({posts,onPostSelected}) => {
                    return (
                        <ul className={classes.PostList}>
                            {posts.map(p => <li onClick={() => onPostSelected(p.postId)} className={classes['PostList-row']} key={p.postId}>
                                <PostListRow 
                                author={p.author}
                                date={p.date}
                                title={p.title}
                                desc={p.shordDesc}
                                commentCount={p.comments.length}
                            /></li>)}
                        </ul>
                    );
                }
            }
        </AppContext.Consumer>
    );
}