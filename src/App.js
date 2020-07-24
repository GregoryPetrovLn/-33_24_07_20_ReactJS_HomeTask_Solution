import React, { Component } from "react";
import classes from "./App.module.css";
import PostView from "./components/post-view/PostView";
import PostList from "./components/post-lits/PostList";

export const AppContext = React.createContext();

class App extends Component {
  state = {
    posts: getPosts(),
    currPostId: null,
  };

  addComment = (id, author, text) => {
    const index = this.state.posts.findIndex((p) => p.postId === id);
    const postsTmp = [...this.state.posts];
    const comments = [...postsTmp[index].comments, { author, text }];
    postsTmp[index] = { ...postsTmp[index], comments };
    this.setState({ ...this.state, posts: postsTmp });
  };

  changeCurrentPost = (id) => {
    this.setState({ ...this.state, currPostId: id });
  };

  render() {
    const post = this.state.posts.find(
      (p) => p.postId === this.state.currPostId
    );
    return (
      <div className={classes.App}>
        <AppContext.Provider
          value={{
            posts: this.state.posts,
            postId: this.state.currPostId,
            onPostSelected: this.changeCurrentPost,
            addComment: this.addComment,
          }}
        >
          {post ? (
            <PostView
              author={post.author}
              date={post.date}
              title={post.title}
              text={post.content}
              comments={post.comments}
              onBackHandler={()=> this.changeCurrentPost(null)}
            />
          ) : (
            <PostList />
          )}
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;

function getPosts() {
  return JSON.parse(`
  [
    {
      "postId": "123",
      "date": "12/12/12",
      "author": "John Doe",
      "title":"Post about nothing",
      "shordDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",
      "comments": [
        {
          "author": "Tony Stark",
          "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."
        },
        {
          "author": "Jack Sparrow",
          "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."
        }
      ]
    },
    {
      "postId": "678",
      "date": "01/01/2020",
      "author": "Jack Sparrow",
      "title":"Pirates life",
      "shordDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",
      "comments": []
    },
    {
      "postId": "777",
      "date": "12/02/2020",
      "author": "Tony Stark",
      "title":"Iron Man it's not a hobby",
      "shordDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",
      "comments": [
          {
              "author": "Captain America",
              "text": "Yes i agree with you bro"
          },
          {
              "author": "Thor",
              "text": "Stop! Ragnarok is comming!"
          },
          {
              "author": "Hulk",
              "text": "Wreck!"
          }
      ]
    }
  ]  
  `);
}
