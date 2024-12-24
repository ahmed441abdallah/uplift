import { useTransform } from "framer-motion";
import { motion } from 'framer-motion';

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.div style={{ scale, rotate }}>
            <div className=" sticky top-0 h-screen bg-[#b4b0b0] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
                <p>Scroll Perspective</p>
                <div className="flex gap-4">
                    <p>Section</p>
                    <div className="relative w-[12.5vw]">
                        <img
                            src="https://i.postimg.cc/TYtyNWgF/01.jpg"
                            alt="img"
                            placeholder="blur"
                        />
                    </div>
                    <p>Transition</p>
                </div>
            </div>
        </motion.div>

    )
}
export default Section1