import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="add ons" className="pt-10 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          ADD ONS +
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          I have been part of various organisations and have been listed in
          different Hall Of Fames.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[500px] flex flex-col justify-center
           p-16 mt-10
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center w-full text-xl">
            <p className="font-bold">Additional Activities</p>
            ●Community Member of International Security Conference OWASP
            SEASIDES, Goa. ● Community Member of International Security
            Conference, Bsides Delhi. ● Community Member of International
            Security Conference, BsidesAhmedabad. ● Community Volunteer of OWASP
            Hyderabad Chapter, Hyderabad
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[500px] flex flex-col  p-16 mt-10
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-xl">
            < p className="font-bold">Hall of Fame By </p><br />
            ● Pantheon.io
            <br />
            ● Jet.com
            <br />
            ● Healthifyme.com
            <br />
            ● Atlassian.com
            <br />
            ● iRobot.com
            <br />
            ● Indeed.com
            <br />
            ● Telefónica Germany
            <br />
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[500px] flex flex-col  p-16 mt-10
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-xl w-full">
          < p className="font-bold"> Recognition By</p> <br />● NASSCOM <br />● LG Electronics
            <br /> ● Indian Govt Website 6 times NCIIPC
            <br /> ● IIT Kanpur Websites
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
