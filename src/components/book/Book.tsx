import React, { useState } from 'react';
import './Book.css';

const Book: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div className="book-container">
            <div className="book">
                <div className={`page page-left ${currentPage === 0 ? 'current-page' : ''}`}>
                    <h2>Page 1</h2>
                </div>
                <div className={`page page-right ${currentPage === 1 ? 'current-page' : ''}`}>
                    <h2>Page 2</h2>
                </div>
                <div className={`page page-left ${currentPage === 2 ? 'current-page' : ''}`}>
                    <h2>Page 3</h2>
                </div>
            </div>
            <div className="navigation-buttons">
                <button onClick={prevPage} disabled={currentPage === 0}>
                    Previous Page
                </button>
                <button onClick={nextPage} disabled={currentPage === 2}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default Book;
