'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";

const HourPicker = ({ onHeureSelect, value }) => {
    const [selectedHeure, setSelectedHeure] = useState('');
    const [openHour, setOpenHour] = useState(false)

    useEffect(() => {
        if (value !== undefined) {
            setSelectedHeure(value);
        }
    }, [value]);

    const heures = [];
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m += 30) {
            const heure = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            heures.push(heure);
        }
    }

    const toggleOpenHour = () => {
        setOpenHour(!openHour)
    }
    
    const handleHeureClick = (heure) => {
        setSelectedHeure(heure);
        setOpenHour(!openHour)
        onHeureSelect(heure)
    };

    return (
        <section>
            <p
                className="p-3 rounded-md outline outline-1 outline-white hover:outline-sky-500 focus:outline-sky-500 duration-200"
                onClick={toggleOpenHour}
            >
                {selectedHeure ? selectedHeure : 'Sélectionnez une heure'}
            </p>
            <div className="relative">
                <AnimatePresence>
                    {openHour &&
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-4 gap-2 bg-white mt-3 p-3 rounded-md text-black absolute top-full left-0 right-0 z-50"
                        >
                            {heures.map((heure, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`p-2 cursor-pointer text-center rounded-md duration-200 border border-gray-300 ${selectedHeure === heure ? 'bg-gray-200 text-black' : ''
                                        }`}
                                    onClick={() => handleHeureClick(heure)}
                                >
                                    {heure}
                                </motion.div>
                            ))}
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

        </section>
    );
};


export default HourPicker