import React, { useState } from 'react';
import './Book.css';

const Book: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const openBook = () => {
        setIsOpen(true);
    };

    const closeBook = () => {
        setIsOpen(false);
    };

    const nextPage = () => {
        if (currentPage < 5) {
            setCurrentPage(currentPage + 2);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 2);
        }
    };

    return (
        <div className="book-container">
            <div className={`book ${isOpen ? 'open' : ''}`}>
                <div className="cover" onClick={openBook}>
                    <h2>Cover</h2>
                </div>
                <div className={`page page-left ${isOpen && currentPage === 1 ? 'active' : ''}`}>
                    <h2>Page 1</h2>
                </div>
                <div className={`page page-right ${isOpen && currentPage === 1 ? 'active' : ''}`}>
                    <h2>Page 2</h2>
                </div>
                <div className={`page page-left ${isOpen && currentPage === 3 ? 'active' : ''}`}>
                    <h2>Page 3</h2>
                </div>
                <div className={`page page-right ${isOpen && currentPage === 3 ? 'active' : ''}`}>
                    <h2>Page 4</h2>
                </div>
                <div className={`page page-left ${isOpen && currentPage === 5 ? 'active' : ''}`}>
                    <h2>Page 5</h2>
                </div>
                <div className={`page page-right ${isOpen && currentPage === 5 ? 'active' : ''}`}>
                    <h2>Page 6</h2>
                </div>
            </div>
            <div className="navigation-buttons">
                {isOpen ? (
                    <>
                        <button className="prev-button" onClick={prevPage} disabled={currentPage <= 1}>
                            Previous Page
                        </button>
                        <button className="next-button" onClick={nextPage} disabled={currentPage >= 5}>
                            Next Page
                        </button>
                        <button className="close-button" onClick={closeBook}>
                            Close Book
                        </button>
                    </>
                ) : (
                    <button className="open-button" onClick={openBook}>
                        Open Book
                    </button>
                )}
            </div>
        </div>
    );
};

export default Book;
