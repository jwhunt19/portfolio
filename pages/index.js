import Head from 'next/head'

export default function Home() {
  return (
    <>
    <header>
      <span className="logo">&lt;Joey /&gt;</span>
      <nav>
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="socials">
        <a href="https://github.com/jwhunt19">
          <i className="fab fa-github"></i>
        </a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </header>

    <div className="hero">
      <h1>JOSEPH &#40;JOEY&#41; <br/>HUNTINGTON</h1>
      <h2>Full Stack Software Engineer</h2>
    </div>

    <div>
      <h3>About</h3>
      <div>
        <img></img>
      </div>
    </div>
    </>
  )
}
