import countryFacts from '../api/CountryData.json'

const About = () => {



  return (
    <div className='mx-12'>
    <section className="mx-8" style={{marginInline: "6rem"}}>
      <h2 className="text-center text-6xl mb-2">About Me</h2>
      <p className="text-lg mb-4" style={{marginTop: "2rem"}}>
        I'm a passionate <strong>Frontend Developer</strong> currently pursuing my <strong>Master of Computer Applications</strong> at Chandigarh University. With a strong foundation in <strong>HTML, CSS, JavaScript, React.js, Redux, and Tailwind CSS</strong>, I enjoy building responsive, user-friendly web applications that solve real-world problems.
      </p>
      <br />
      <p className="text-lg mb-4">
        I'm actively working towards becoming a <strong>MERN stack developer</strong>. I'm also exploring Firebase and WebSockets to enhance my understanding of full-stack development.
      </p>
      <p className="text-lg mb-4">
        I enjoy working on innovative projects, such as a <strong>local service booking platform</strong> and a <strong>Local Price Tracker</strong> that compares offline and online prices.
      </p>
      <br />
      <p className="text-lg mb-4" style={{marginBottom: "4rem"}}>
        Outside of development, I'm deeply interested in <strong>spirituality, meditation</strong>, and exploring the intersection of <strong>science and consciousness</strong>. I believe in balancing creativity with technical skills to create meaningful digital experiences.
      </p>
    </section>
    </div>

  );

}

export default About