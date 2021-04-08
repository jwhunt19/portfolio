import Image from 'next/image'

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

    {/* Hero */}
    <div className="hero">
      <h1>JOSEPH &#40;JOEY&#41; <br/>HUNTINGTON</h1>
      <h2>Full Stack Software Engineer</h2>
    </div>

    {/* About */}
    <div className="about">
      <h3>About</h3>
      <div className="about-wrapper">
        <Image 
          class="about-image" 
          src="/images/me.jpg" 
          height={390}
          width={390}
          alt="a photo of me looking very handsome"
        />
        <p>
          A full-stack software engineer who started as a front-end developer. I completed a
          front-end tech degree with a focus on mobile-first development and responsive design
          from the online technology school Treehouse.<br/><br/>

          I decided to move into full-stack development to open more opportunities, learn a vast
          pool of technologies, and work in a more diverse environment where I can exercise my
          problem-solving skills. I graduated from Hack Reactor's Advanced Software Engineering
          Immersive with a focus on the PERN/MERN stack and continue to learn new technologies every day.
        </p>
      </div>
    </div>

    {/* Experience */}
    <div className="experience">
      <h3>Experience</h3>
      <div className="experience-wrapper">
        <div className="experience-card">
          <img className="experience-cert" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/17097430"></img>
          <h4>Treehouse</h4>
          <p>Front End Web Development Techdegree</p>
        </div>
        <div className="experience-card">
          <Image
            className="experience-cert"
            src="/images/galvanize-cert.png"
            height={400}
            width={480}
            alt="galvanize and hack reactor certificate"
          />
          <h4>Hack Reactor | Galvanize</h4>
          <p>Front End Web Development Techdegree</p>
        </div>
      </div>
    </div>

    {/*  */}
    </>
  )
}
