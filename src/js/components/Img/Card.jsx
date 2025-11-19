
import React, { useState } from "react";

export const Card = () => {
    const quotes = [
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
        { quote: "Your life is as good as your mindset.", author: "Anonymous" },
        { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { quote: "Everything you want is on the other side of fear.", author: "George Addair" },
        { quote: "What we think, we become.", author: "Buddha" },
        { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" },
        { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
        { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
        { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
        { quote: "Keep going. Everything you need will come to you at the perfect time.", author: "Anonymous" },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { quote: "Do something today that your future self will thank you for.", author: "Anonymous" },
        { quote: "It always seems impossible until it is done.", author: "Nelson Mandela" },
        { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
    ];

    const [current, setCurrent] = useState(quotes[0]);

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrent(quotes[randomIndex]);
    };

    return (
        <div className="container-fluid d-flex justify-content-center my-5">
            <div className="card col-6">
                <div className="card-body">
                    <p>"{current.quote}"</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p>- {current.author}</p>
                    <button className="btn btn-outline-danger" onClick={generateQuote}>Generate Quote</button>
                </div>
            </div>
        </div>
    );
};
