import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image from "../assets/Blog1.png";
import blog2 from "../assets/Blog2.png";
import blog3 from "../assets/Blog3.png";
import authorImage from "../assets/AmeerBabu_photo.jpg";

const blogs = [
  {
    id: 1,
    title:
      "Transform your Manufacturing Business with ERPNext Implementation Services from iWEX Infomatics",
    date: "April 5, 2015",
    readTime: "4 min read",
    author: "Ameer Babu",
    authorImage: authorImage,
    category: "Featured · General",
    image: image,
    desc: `Looking to streamline your manufacturing operations? iWEX Infomatics offers top-notch ERPNext implementation services tailored to manufacturing businesses. Find out how we can help you enhance efficiency, optimize workflows, and boost productivity with our expert solutions.`
  },
  {
    id: 2,
    title: "Sudden Shutdowns Affect Millions of Windows Computers",
    date: "July 20, 2025",
    readTime: "3 min read",
    author: "Ameer Babu",
    authorImage: authorImage,
    category: "Technology",
    image: blog2,
    desc: `A major tech issue has affected millions of Windows computer systems worldwide, causing a sudden shutdown or restart.`
  },
  {
    id: 3,
    title: "Major Changes Introduced by Bharatiya Nyaya Sanhita",
    date: "July 1, 2024",
    readTime: "6 min read",
    author: "Ameer Babu",
    authorImage: authorImage,
    category: "General",
    image: blog3,
    desc: `How ERPNext can help your business adapt to the Bharatiya Nyaya Sanhita 2023?`
  }
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 min-h-screen">
        <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
          <img
            src="https://source.unsplash.com/1600x600/?blog,technology"
            alt="Blog Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
              IWEX Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Insights, updates, and expert opinions on technology and business.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 -mt-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left flex flex-col flex-grow">
                <span className="text-sm text-pink-600 font-semibold mb-2 block">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-indigo-600 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.desc}</p>

                <div className="mt-auto border-t pt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{blog.author}</span>
                  </div>
                  <span>
                    {blog.date} · {blog.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
