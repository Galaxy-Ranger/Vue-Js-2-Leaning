import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';
import addBlog from './components/addBlog';
import singleBlog from './components/singleBlog';

export default [
  {path: '/', component: showBlogs},
  {path: '/list-blog', component: listBlogs},
  {path: '/add-blog', component: addBlog},
  {path: '/blog/:id', component: singleBlog}
]