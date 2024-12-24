'use client';
import { use, useContext } from 'react';
import { projectContext } from "../../../context/projectsContext.jsx";
import { useParams } from 'next/navigation.js';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
    const { projects } = useContext(projectContext);
    const params = useParams();
    const project = projects?.find((p) => p.id === parseInt(params.id));

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <>
            <div className="p-8 sm:p-32">
                <motion.h1
                    className="text-2xl sm:text-5xl text-white font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {project.name}
                </motion.h1>

                <motion.p
                    className="text-gray-500 mt-4 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    {project.type}
                </motion.p>
                <motion.div
                    className=" grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    {project.images.map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            alt={project.name}
                            className="w-full sm:w-[400px] h-[400px] object-cover rounded-lg"
                            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                        />
                    ))}
                </motion.div>
                <motion.h2
                    className="mt-4 leading-8 w-[90%] tracking-wider text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    {project.descriptions}
                </motion.h2>
            </div>
        </>
    );
};

export default ProjectDetails;
