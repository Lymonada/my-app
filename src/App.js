import logo from './logo.svg';
import './App.css';

function Header(props) {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function Nav(props) {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
