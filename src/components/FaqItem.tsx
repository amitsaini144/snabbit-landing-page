"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <motion.div
            layout="position"
            className="flex flex-col py-6 cursor-pointer select-none overflow-hidden"
            onClick={toggleOpen}
        >
            <motion.div layout className="flex justify-between border-b">
                <motion.p layout className="text-black text-lg font-medium pb-2">
                    {question}
                </motion.p>
                <div className="w-6 h-6 relative">
                    <div className="absolute flex items-center justify-center">
                        {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-black" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-black" />
                        )}
                    </div>
                </div>
            </motion.div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <motion.p className="text-[#525871] text-[15px] md:text-[17px] mt-4 leading-snug w-[95%] md:w-[87%]">
                            {answer}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}