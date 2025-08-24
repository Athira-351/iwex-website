import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const positions = [
    {
        id: 1,
        title: "ERPNext/Frappe Developer",
        type: "Full Time",
        location: "Kochi, Kerala",
        desc: `
    <p>Are you a skilled developer passionate about <strong>ERPNext</strong> and the <strong>Frappe framework</strong>?<br/>
    Do you have a knack for solving complex business challenges with innovative tech solutions?<br/>
    iWEX Infomatics is looking for a talented ERPNext/Frappe Developer to join our dynamic team in Kochi, Kerala, and drive impactful projects.</p>

    <br/>
    <h3><strong>About Us:</strong></h3>
    <p>At iWEX Infomatics, we are committed to delivering top-tier IT and data solutions that propel our clients towards success.<br/>
    Our team thrives in a collaborative environment where creativity, innovation, and excellence are celebrated.</p>

    <br/>
    <h3><strong>What You'll Do:</strong></h3>
    <ul>
      <li><strong>Develop & Customize:</strong> Build and customize ERPNext modules and applications to meet client requirements.</li>
      <li><strong>Integration:</strong> Integrate ERPNext with other systems and third-party applications.</li>
      <li><strong>Enhancements:</strong> Develop new features and enhance existing functionalities within the Frappe framework.</li>
      <li><strong>User Support:</strong> Provide technical support and training to end-users.</li>
      <li><strong>Performance Optimization:</strong> Optimize system performance and ensure scalability.</li>
      <li><strong>Collaboration:</strong> Work closely with cross-functional teams to deliver high-quality solutions.</li>
    </ul>

    <br/>
    <h3><strong>Your Skills & Qualifications:</strong></h3>
    <ul>
      <li><strong>Educational Background:</strong> Degree in Computer Science, Information Technology, or a related field.</li>
      <li><strong>Technical Proficiency:</strong> Proven experience with ERPNext and Frappe framework.</li>
      <li><strong>Programming Skills:</strong> Proficiency in Python, JavaScript, SQL, GitHub.</li>
      <li><strong>Web Technologies:</strong> Strong understanding of web technologies (HTML, CSS, JavaScript).</li>
      <li><strong>Database Management:</strong> Experience with database management systems like MariaDB/MySQL.</li>
      <li><strong>Problem-Solving:</strong> Excellent analytical and problem-solving skills.</li>
      <li><strong>Communication:</strong> Strong verbal and written communication skills.</li>
      <li><strong>Team Player:</strong> Ability to work effectively in a team-oriented environment.</li>
    </ul>

    <br/>
    <h3><strong>Why Join Us?</strong></h3>
    <ul>
      <li><strong>Innovative Projects:</strong> Work on challenging ERPNext/Frappe projects that make a real impact.</li>
      <li><strong>Professional Growth:</strong> Opportunities for continuous learning and career development.</li>
      <li><strong>Collaborative Culture:</strong> Join a supportive team of experts dedicated to innovation.</li>
      <li><strong>Competitive Benefits:</strong> Attractive salary and comprehensive benefits package.</li>
    </ul>

    <br/>
    <h3><strong>How to Apply:</strong></h3>
    <p>If you're ready to take your career to the next level and be part of a dynamic team, we'd love to hear from you!</p>
    <p>Send your resume and a cover letter detailing your experience and why you're a great fit for this role to 
    <a href="mailto:jobs@iwex.in" style="color:#ec4899; font-weight:bold;">jobs@iwex.in</a>.</p>`
    },
    {
        id: 2,
        title: "Frontend Developer",
        type: "Full Time",
        location: "Kochi, Kerala",
        desc: `
        Are you a talented programmer with a keen eye for design? <br />
        Do you thrive in a dynamic environment where creativity meets technology? <br />
        iWEX Infomatics is on the lookout for a skilled Frontend Developer to join our innovative team in Kochi, Kerala, and work on exciting Frappe/ERPNext projects!<br /><br />

        <strong>About Us:</strong><br />
        At iWEX Infomatics, we are dedicated to delivering cutting-edge IT and data solutions that drive success for our clients. 
        Our collaborative work environment encourages creativity, growth, and excellence.<br /><br />

        <strong>What You'll Do:</strong><br />
        <ul>
            <li>Design & Structure: Shape the structure and design of web pages, ensuring a seamless and engaging user experience.</li>
            <li>User-Centric Development: Develop features that enhance user experience, balancing functionality and aesthetics.</li>
            <li>Mobile Optimization: Ensure web designs are optimized for smartphones and other devices.</li>
            <li>Reusable Code: Build reusable code to streamline future projects.</li>
            <li>Efficiency & Speed: Optimize web pages for maximum speed and scalability.</li>
            <li>Brand Consistency: Maintain brand consistency throughout all designs.</li>
        </ul><br />

        <strong>Your Skills & Qualifications:</strong><br />
        <ul>
            <li>Educational Background: Degree in Computer Science or a related field.</li>
            <li>Design Principles: Strong understanding of key design principles.</li>
            <li>Technical Proficiency: Expertise in HTML, CSS, JavaScript, Vue/React SPA, Tailwind, and jQuery.</li>
            <li>CSS & SEO: Proficient in server-side CSS and SEO principles.</li>
            <li>Graphic Design: Experience with graphic design applications like Adobe Illustrator.</li>
            <li>Responsive Design: Skilled in responsive and adaptive design techniques.</li>
            <li>Problem-Solving: Strong analytical and problem-solving skills.</li>
            <li>Communication: Excellent verbal communication and interpersonal skills.</li>
        </ul><br />

        <strong>Why Join Us?</strong><br />
        <ul>
            <li>Innovative Projects: Work on groundbreaking Frappe/ERPNext projects that challenge and inspire.</li>
            <li>Collaborative Team: Join a team of talented developers, designers, and UX experts.</li>
            <li>Professional Growth: Opportunities for continuous learning and career advancement.</li>
            <li>Competitive Benefits: Attractive salary and comprehensive benefits package.</li>
        </ul><br />

        <strong>How to Apply:</strong><br />
        <p>Ready to take your frontend development skills to the next level? We'd love to hear from you!</p>
        <p>Send your resume and a cover letter detailing your experience and why you're a great fit for this role to 
        <a href="mailto:jobs@iwex.in" style="color:#ec4899; font-weight:bold;">jobs@iwex.in</a>.</p>`
    },
];

const JobDetails = () => {
    const { id } = useParams();
    const job = positions.find((job) => job.id === parseInt(id));

    if (!job) {
        return <div className="text-center text-white py-20 text-xl">Job not found</div>;
    }

    return (
        <>
            <Navbar />
            <div className="bg-blue-950 min-h-screen text-white py-16 px-4 md:px-12 lg:px-20 md:mt-16">
                <div className="max-w-5x mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 space-y-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-pink-400 leading-tight">
                        {job.title}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-6 -mt-10">
                        {job.type} • {job.location}
                    </p>
                    <div
                        className="text-gray-200 text-lg md:text-lg leading-relaxed space-y-6"
                        dangerouslySetInnerHTML={{ __html: job.desc }}
                    />
                    <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
                        <a
                            href="mailto:jobs@iwex.in"
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                        >Apply Now
                        </a>
                        <Link to="/career" className="text-gray-300 hover:underline text-lg md:text-xl">Back to Careers</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JobDetails;
