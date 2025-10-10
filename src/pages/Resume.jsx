import React from "react";
import {motion} from "framer-motion";

export default function Resume()
{
    return(
        <motion.div
        
        className=" text-center space-y-6 sm:space-y-8 "
         initial={{opacity:0,y:10}}
         animate={{opacity:1,y:0}}
         exit={{opacity:0,y:-10}}
         transition={{duration:0.5}}
        >
            <h2
            className=" text-3xl sm:text-4xl lg:text-5xl font-bold">📄 My resume</h2>
            <p className="text-gray-600 dark: text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                Download my latest resume (PDF).
            </p>

            <div className="flex justify-center gap-4">
                <a href="/AmanKhanResume.pdf"
                download="AmanKhanResume.pdf"
                className=" px-4 py-2 rounded-full bg-blue-600 text-white"
                >
                    ⬇️ Download Resume
                </a>

                <a href="/AmanKhanResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="  bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full" >
                   🔍 open in new tab
                </a>
            </div>
        </motion.div>
    );
}