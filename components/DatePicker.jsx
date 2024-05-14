'use client'

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';

const DatePicker = ({ onDateSelect, value }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const Calendar = () => {
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();

        const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

        const months = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];

        const handleDateClick = (day) => {
            const newDate = new Date(currentYear, currentMonth - 1, day);
            setSelectedDate(newDate.toLocaleDateString('fr-FR'));
            setShowCalendar(false);
            const newDate2 = new Date(currentYear, currentMonth - 1, day + 1);
            const formattedDate = newDate2.toISOString().slice(0, 10);
            onDateSelect(formattedDate)
        };

        return (
            <section className="w-full block p-3 max-w-[350px] bg-white text-black rounded-md mt-3 absolute left-0 right-0 top-full z-[60]">
                <div className="mx-auto flex items-center justify-center py-3">
                    <div
                        className="p-1 mx-3 bg-black hover:px-3 duration-200 text-white rounded-md"
                        onClick={handlePrevMonth}
                    >
                        <AiOutlineLeft />
                    </div>
                    <span>{months[currentMonth - 1]} {currentYear}</span>
                    <div
                        className="p-1 mx-3 bg-black hover:px-3 duration-200 text-white rounded-md"
                        onClick={handleNextMonth}
                    >
                        <AiOutlineRight />
                    </div>
                </div>
                <table>
                    <thead className="flex justify-center">
                        <tr>
                            <th className="p-2 font-medium">lun</th>
                            <th className="p-2 font-medium">mar</th>
                            <th className="p-2 font-medium">mer</th>
                            <th className="p-2 font-medium">jeu</th>
                            <th className="p-2 font-medium">ven</th>
                            <th className="p-2 font-medium">sam</th>
                            <th className="p-2 font-medium">dim</th>
                        </tr>
                    </thead>
                    <tbody className="grid gap-2 grid-cols-7">
                        {daysArray.map((day) => (
                            <tr key={day} className="border border-gray-300 rounded-md">
                                <td
                                    className={`p-2 cursor-pointer duration-200 text-center rounded-md flex items-center justify-center ${selectedDate === `${day}/${currentMonth}/${currentYear}` ? 'bg-gray-200' : ''
                                        }`}
                                    onClick={() => handleDateClick(day)}
                                >
                                    {day}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    };

    return (
        <div className="date-picker max-w-[350px] relative">
            <div className="relative">
                <input
                    type="text"
                    value={value != undefined ? value : selectedDate}
                    placeholder="Choisir une date"
                    readOnly
                    onClick={toggleCalendar}
                    className="p-3 cursor-pointer rounded-md w-full block bg-transparent outline outline-1 focus:outline-sky-600 duration-200"
                />
                <FaCalendarAlt onClick={toggleCalendar} className="absolute cursor-pointer hover:text-sky-500 duration-200 top-[14px] right-[14px] text-lg" />
            </div>
            <AnimatePresence>
                {showCalendar &&
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Calendar />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};


export default DatePicker