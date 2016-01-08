import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link } from 'react-router'
import Landing  from './components/Landing.jsx'
import Resume   from './components/Resume.jsx'
import Projects from './components/Projects.jsx'
import Blog     from './components/Blog.jsx'

const App = React.createClass({
  render() {
    return (
      <div>
        <header>
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



render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="resume"   component={Resume}   />
      <Route path="projects" component={Projects} />
      <Route path="blog"     component={Blog}     />
    </Route>
  </Router>
), document.getElementById('app'));
