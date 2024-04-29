import './App.css';

function Header(props) {
  return <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is boring.'},
    {id:2, title:'css', body:'css is good.'},
    {id:3, title:'js', body:'html is awesome.'}
  ]
  return (
    <div>
      <Header title="REACT" onChangeMode = {function(){
        alert('Header')
      }}></Header>
      <Nav topics = {topics}></Nav>
      <Article title ="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
