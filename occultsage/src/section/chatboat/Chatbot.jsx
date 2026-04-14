import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const DATA = {
    acharya: {
        intro: "Acharya Pankaj Ji is the founder of OccultSage with 15+ years of experience in Vedic Sciences.",
        details: "He has mentored 10,000+ students globally. Expert in: \n• Scientific Vastu (No Demolition)\n• Predictive Astrology\n• Lo-shu Grid Numerology\n• Energy Scanning",
        awards: "Awarded 'Vastu Shiromani' and 'Jyotish Bhushan' for his contributions to Occult Sciences."
    },
    courses: [
        { id: 'astrology', name: "Predictive Astrology", fee: "₹15,000", duration: "3 Months", syllabus: "Kundli Reading, Graha Dasha, Remedies, Transit." },
        { id: 'vastu', name: "Master Vastu", fee: "₹12,000", duration: "2 Months", syllabus: "Directions, 5 Elements, Industrial & Residential Vastu." },
        { id: 'numerology', name: "Advanced Numerology", fee: "₹8,000", duration: "1 Month", syllabus: "Name Correction, Mobile Numerology, Lo-shu Grid." },
        { id: 'tarot', name: "Tarot Reading", fee: "₹7,500", duration: "45 Days", syllabus: "Card Meanings, Spreads, Intuition Building." },
        { id: 'palmistry', name: "Palmistry", fee: "₹9,000", duration: "2 Months", syllabus: "Mounts, Lines, Signs, Hand Shapes." },
        { id: 'facereading', name: "Face Reading", fee: "₹6,000", duration: "1 Month", syllabus: "Feature Analysis, Character Reading." },
        { id: 'watchreading', name: "Watch Reading", fee: "₹4,000", duration: "15 Days", syllabus: "Wristwatch Analysis for Destiny." },
        { id: 'motionreading', name: "Motion Reading", fee: "₹5,000", duration: "20 Days", syllabus: "Body Language & Energy Vibrations." }
    ]
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { 
            text: "Namaste! 🙏 I am Sage AI, your guide to Occult Sciences. How can I help you today?", 
            sender: 'bot',
            options: ["Explore Courses 📚", "Acharya Ji's Profile 🎓", "Career & Scope 💼", "Common Doubts ❓", "Contact Support 📞"] 
        }
    ]);
    const chatEndRef = useRef(null);

    useEffect(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages]);

    const handleOptionClick = (option) => {
        setMessages(prev => [...prev, { text: option, sender: 'user' }]);

        setTimeout(() => {
            let nextMsg = { text: "", sender: 'bot', options: [] };

            // --- MAIN CATEGORIES ---
            switch (option) {
                case "Explore Courses 📚":
                case "Back to Courses ⬅️":
                    nextMsg.text = "We offer 8 Professional Courses. Select one to see details:";
                    nextMsg.options = DATA.courses.map(c => c.name).concat(["Main Menu 🏠"]);
                    break;

                case "Acharya Ji's Profile 🎓":
                    nextMsg.text = `${DATA.acharya.intro}\n\n${DATA.acharya.details}\n\n${DATA.acharya.awards}`;
                    nextMsg.options = ["Book Consultation 🗓️", "Main Menu 🏠"];
                    break;

                case "Career & Scope 💼":
                    nextMsg.text = "After completing our courses, you can:\n1. Start your own Consultancy\n2. Work on International Portals\n3. Earn ₹50,000 to ₹1,00,000+ per month.\n\nWe provide 100% guidance to build your brand.";
                    nextMsg.options = ["Explore Courses 📚", "Main Menu 🏠"];
                    break;

                case "Common Doubts ❓":
                case "Back to FAQs ❓":
                    nextMsg.text = "How can I clear your doubts?";
                    nextMsg.options = ["About Certification 📜", "Classes Mode (Online/Live) 🎥", "Fee Installments 💰", "Batch Timings ⏰", "Main Menu 🏠"];
                    break;

                case "Contact Support 📞":
                    nextMsg.text = "Direct Connect:\n📞 Phone: +91-9540407086\n✉️ Email: info@occultsage.com\n📍 Office: Vegas Mall, Dwarka, Delhi.";
                    nextMsg.options = ["Main Menu 🏠"];
                    break;

                case "Main Menu 🏠":
                    nextMsg.text = "Welcome back! What would you like to explore now?";
                    nextMsg.options = ["Explore Courses 📚", "Acharya Ji's Profile 🎓", "Career & Scope 💼", "Common Doubts ❓"];
                    break;

                // --- FAQ RESPONSES ---
                case "About Certification 📜":
                    nextMsg.text = "Yes! You get an ISO 9001:2015 certified certificate from OccultSage which is globally recognized.";
                    nextMsg.options = ["Back to FAQs ❓", "Main Menu 🏠"];
                    break;

                case "Classes Mode (Online/Live) 🎥":
                    nextMsg.text = "All classes are 100% Live on Zoom. You also get 1-year access to recordings on our App.";
                    nextMsg.options = ["Back to FAQs ❓", "Main Menu 🏠"];
                    break;

                case "Fee Installments 💰":
                    nextMsg.text = "Yes, for Astrology and Vastu, you can pay in 2 easy installments. No extra charges!";
                    nextMsg.options = ["Back to FAQs ❓", "Main Menu 🏠"];
                    break;

                case "Batch Timings ⏰":
                    nextMsg.text = "We have Morning and Evening batches. \nEvening: 7:00 PM - 9:00 PM\nMorning: 10:00 AM - 12:00 PM";
                    nextMsg.options = ["Back to FAQs ❓", "Main Menu 🏠"];
                    break;

                case "Book Consultation 🗓️":
                    nextMsg.text = "You can book a personal 1-on-1 session with Acharya Ji for Kundli or Vastu map analysis. Would you like the booking link?";
                    nextMsg.options = ["Contact Support 📞", "Main Menu 🏠"];
                    break;

                // --- DYNAMIC COURSE HANDLING ---
                default:
                    const course = DATA.courses.find(c => c.name === option);
                    if (course) {
                        nextMsg.text = `📖 *${course.name}*\n\n💰 Fee: ${course.fee}\n⏳ Duration: ${course.duration}\n📚 Syllabus: ${course.syllabus}\n\n*Classes:* Live on Zoom + Recorded Videos.`;
                        nextMsg.options = ["I want to Enroll! ✅", "Back to Courses ⬅️"];
                    } else if (option === "I want to Enroll! ✅") {
                        nextMsg.text = "Great choice! Please call us at +91-9540407086 or message us on WhatsApp to confirm your seat. ✨";
                        nextMsg.options = ["Main Menu 🏠"];
                    } else {
                        nextMsg.text = "Select an option to continue:";
                        nextMsg.options = ["Main Menu 🏠"];
                    }
                    break;
            }

            setMessages(prev => [...prev, nextMsg]);
        }, 500);
    };

    return (
        <div className="bot-container">
            {!isOpen ? (
                <div className="bot-launcher" onClick={() => setIsOpen(true)}>🔮 Ask Sage AI</div>
            ) : (
                <div className="bot-card">
                    <div className="bot-header">
                        <div className="header-info"><div className="status-dot"></div><span>OccultSage Assistant</span></div>
                        <button onClick={() => setIsOpen(false)}>&times;</button>
                    </div>
                    <div className="bot-body">
                        {messages.map((m, i) => (
                            <div key={i} className="msg-wrapper">
                                <div className={`msg ${m.sender}`}>{m.text}</div>
                                {m.sender === 'bot' && m.options && (
                                    <div className="option-container">
                                        {m.options.map((opt, idx) => (
                                            <button key={idx} className="opt-btn" onClick={() => handleOptionClick(opt)}>{opt}</button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;