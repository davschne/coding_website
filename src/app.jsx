import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Landing  from './components/Landing.jsx'
import Resume   from './components/Resume.jsx'
import Projects from './components/Projects.jsx'
import Blog     from './components/Blog.jsx'

const App = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1>David E. Schneider, software developer</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/resume">Résumé</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          {this.props.children}
        </nav>
        <footer>
        </footer>
      </div>
    )
  }
});



render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="resume"   component={Resume}   />
      <Route path="projects" component={Projects} />
      <Route path="blog"     component={Blog}     />
    </Route>
  </Router>,
  document.getElementById('app')
);
