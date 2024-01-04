import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="about">
      <h3>About</h3>
      <div className="about-wrapper">
        <div className="about-image-wrapper">
          <Image
            class="about-image"
            src="/images/me.jpg"
            layout="fill"
            alt="a photo of me looking very handsome"
            priority
          />
        </div>
        <p>
          Hello! My name is Joseph but you can call me Joey. I am a full stack
          software engineer based in Northern Virginia always looking for the
          next great opportunity. With a background as an Apprentice Electrician
          and Office Administrator I've been involved in problem solving across
          a wide spectrum, and I love it. My dream has always been to work with
          the latest technology in a way that I can bring my creative ideas to
          life, and with my love for problem solving, programming was a natural
          conclusion.
          <br />
          <br />
          I studied front end development with the online technology
          school Treehouse then was selected to join the highly selective Hack
          Reactor Software Engineering Immersive program where I learned
          everything from CS fundamentals to the latest technologies in software
          engineering. I plan to use my creative passions to innovate solutions
          for this industry.
        </p>
      </div>
    </div>
  );
};

export default About;
