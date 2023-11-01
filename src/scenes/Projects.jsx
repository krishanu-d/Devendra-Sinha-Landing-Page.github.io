import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import proj1Img from "../assets/proj-1.jpg";
import proj2Img from "../assets/proj-2img.jpeg";
import proj3Img from "../assets/proj-3img.jpeg";
import proj4Img from "../assets/proj-4img.jpeg";
import proj5Img from "../assets/proj-5img.jpeg";
import proj6Img from "../assets/proj-6img.jpeg";
import proj7Img from "../assets/proj-7img.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{text}</p>
      </div>
      <img src={img} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const proj1 =
    'One Day Workshop on - "Live Hacking & Cyber Security" (Share knowledge Hacker techniques, attacker to victims) held on Crime Branch - Cyber Cell, Durg Police Bhilai';
  const proj2 =
    "Sharing my insights and expertise at KK Modi University. Empowering them with knowledge to fend off cyber threats, attacks, and navigate the complexities of the dark web.  ";
  const proj3 =
    " I spoke at the Pre Hacks session of Holiday Hacks SSTC on “Live Hacking & Cyber Security Fundamental” and told the attendees the various ways a site can get hacked. And also informed them how they can remain secure on the web.";
  const proj4 = "";
  const proj5 =
    "I was listed in the Hall of Fame of Hall of Fame in Indian Government web Portal.";
  const proj6 = "";
  const proj7 = "An incredible journey as a Team Member at Seasides Information security conference, India’s Most Loved Conference.";
  const title6 =
    'Workshop on " Cyber Security Awareness (Live Hacking Session ) & Cyber Sangi" ';
  return (
    <section id="career timeline" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">CAREER </span> TIMELINE
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I have extensive experience in conducting workshops on cyber crimes
          for various audiences and organizations.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
           ~ Worked at Darwinbox for 2yrs 1month<br/>
           From Jun2021 to Jun2023.
          </div>
          <Project
            title="Crime Branch - Cyber Cell, Durg 
Police Bhilai"
            text={proj1}
            img={proj1Img}
          />
          <Project
            title="Workshop at KK Modi University"
            text={proj2}
            img={proj2Img}
          />

          {/* ROW 2 */}
          <Project
            title=" Shri Shankaracharya Technical Campus, Bhilai "
            text={proj3}
            img={proj3Img}
          />
          <Project
            title="My article Published in Newspaper"
            text={proj4}
            img={proj4Img}
          />
          <Project
            title="National Critical Information Infrastructure Protection Centre"
            text={proj5}
            img={proj5Img}
          />

          {/* ROW 3 */}
          <Project title={title6} text={proj6} img={proj6Img} />
          <Project title="🌟 Gratitude and Growth at Seasides 🌟" text={proj7} img={proj7Img} />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            ~ Cyber Security Analyst Intern at Hacksera for 1yr 6months<br/>
            From Jul2019 to Dec2020
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
