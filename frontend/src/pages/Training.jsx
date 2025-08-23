import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const programs = [
    {
        title: "Quick Overview of ERPNext",
        duration: "1–2 days",
        content: [
            "Introduction to ERPNext",
            "Overview of key modules (CRM, Sales, Purchase, Inventory, Accounting, HR)",
            "Basic navigation and user interface",
            "High-level business processes",
            "Quick setup guide",
            "Q&A session"
        ],
    },
    {
        title: "Short Course of ERPNext",
        duration: "1–2 weeks (5–10 days)",
        content: [
            "Detailed introduction to ERPNext",
            "In-depth exploration of core modules (CRM, Sales, Purchase, Inventory, Accounting, HR)",
            "Basic configurations and settings",
            "Common workflows and use cases",
            "Introduction to user roles and permissions",
            "Basic customization options",
            "Hands-on exercises and practical sessions",
            "Q&A sessions after each module"
        ],
    },
    {
        title: "Long Course of ERPNext",
        duration: "4–6 weeks",
        content: [
            "Comprehensive overview of ERPNext",
            "Deep dive into all modules (including Manufacturing, Projects, Asset Management)",
            "Advanced configurations and settings",
            "Detailed workflows and process automation",
            "User roles, permissions, and security settings",
            "Advanced customization (Custom fields, scripts, reports)",
            "Integration with other systems (API, third-party integrations)",
            "Troubleshooting common issues",
            "Real-world case studies and best practices",
            "Extensive hands-on exercises and projects",
            "Assessments and feedback sessions",
            "Final Q&A"
        ],
    }
];

const Training = () => (
    <>
        <Navbar />
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <section className=" py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    ERPNext Training Programs
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                >
                    Choose from our tailored ERPNext training paths—designed to fit your pace and goals.
                </motion.p>
            </section>

            {/* Training Programs */}
            <section className="py-16 px-4 md:px-20 flex-1">
                <div className="grid gap-10 md:grid-cols-3">
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transform hover:-translate-y-2 transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{prog.title}</h2>
                            <span className="text-sm text-gray-500 mb-4">{prog.duration}</span>
                            <ul className="list-disc list-inside text-gray-700 flex-1 space-y-2 text-sm">
                                {prog.content.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                            <motion.button
                                className="mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 rounded-full"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Now
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-10 bg-white text-center">
                <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started with ERPNext Training
                </motion.button>
            </section>
        </div>
        <Footer />
    </>
);

export default Training;
