import React, { useState } from 'react';
import './Book.css';
import Fancybox from "../Fancybox/Fancybox";

const Book: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const openBook = () => {
        setIsOpen(true);
    };

    const closeBook = () => {
        setIsOpen(false);
        setCurrentPage(1);
    };

    const nextPage = () => {
        if (currentPage < 11) {
            setCurrentPage(currentPage + 2);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 2);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="book-container">
                <div className={`book ${isOpen ? 'open' : ''}`}>
                    <div className="cover" onClick={openBook}>
                        <img src={"Pictures/Group 106.png"} alt="Cover" />
                    </div>

                    <div className={`page page-right ${isOpen && currentPage === 1 ? 'active' : ''}`}>
                        <div className="working_area">
                            <h2 className='content_caption'>Содержание</h2>
                            <ul className="menu_items">
                                <li><a href="#introduction" onClick={() => handlePageClick(1)}>Введение</a></li>
                                <li><a href="#imperial" onClick={() => handlePageClick(3)}>Орденские знаки Империи</a></li>
                                <li><a href="#soviet" onClick={() => handlePageClick(5)}>Награды советского периода</a></li>
                                <li><a href="#russian" onClick={() => handlePageClick(7)}>Награды Российской Федерации</a></li>
                                <li><a href="#kizlyar" onClick={() => handlePageClick(9)}>Награды города Кизляр</a></li>
                                <li><a href="#quiz" onClick={() => handlePageClick(11)}>Викторина</a></li>
                                <li>Игра «Найди совпадения»</li>
                                <li>Игра «Подбери название»</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`page page-left ${isOpen && currentPage === 1 ? 'active' : ''}  `}>
                        <div className="working_area">
                            <h2 className="caption">Ордена и медали разных эпох</h2>
                            <img className="first_image" src="Pictures/Group 104.svg" alt="Page 1" />
                        </div>
                        <img src="Pictures/za14_241221 copy 1.svg" alt="" className="picture_book"/>
                    </div>
                    <div className={`page page-left ${isOpen && currentPage === 3 ? 'active' : ''}`}>
                        <div className="working_area fancy_area">
                            <h2 className="caption">Ордена и медали разных эпох</h2>
                            <div className='fancy_container'>
                                <Fancybox
                                    options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                    <a data-fancybox="gallery" href="/Pictures/02 1.png" className="first_fancy">
                                        <img src="/Pictures/02 1.png" width="200" height="150" alt="Page 3" />
                                    </a>
                                    <a data-fancybox="gallery" href="/Pictures/02 1.png" className="other_fancy">
                                        <img src="/Pictures/02 1.png" width="200" height="150" alt="Page 4" />
                                    </a>
                                    <a data-fancybox="gallery" href="/Pictures/02 1.png" className="other_fancy">
                                        <img src="/Pictures/02 1.png" width="200" height="150" alt="Page 5" />
                                    </a>
                                </Fancybox>
                            </div>
                        </div>
                        <img src="Pictures/za14_241221 copy 1.svg" alt="" className="picture_book"/>
                    </div>
                    <div className={`page page-right ${isOpen && currentPage === 3 ? 'active' : ''}`}>
                        <div className="working_area">
                            <button onClick={() => handlePageClick(1)}>Орденские знаки империи</button>
                            <h2 className='content_caption'>Орден святого Андрея Первозванного</h2>
                            <p className="content_text">
                                Орден Святого апостола Андрея Первозванного – первая и высшая награда Российской империи,
                                основанная Петром I. Действует в настоящее время, сохраняя статус по старшинству. За
                                годы правления, царь-реформатор наградил только 38 человек, из них 12 иностранцев. Открыл список в 1699 году глава дипломатического ведомства, видный государственный
                                деятель петровской эпохи – генерал-адмирал Ф. А. Головин. Сам Пётр I оказался лишь
                                шестым среди награждённых, тщательно подбирая «подходящий случай» подвиг. Несмотря на
                                одну степень, производили 2 варианта изделий, с бриллиантами и без них. Всего орден
                                вручили 1100 номинантам. В РФ действие регалии восстановили в 1998 г. За противоправные
                                действия награды могли лишить. Это случилось лишь однажды, со вторым орденским кавалером
                                – гетманом Иваном Мазепой. За измену во время Северной войны и переход на сторону
                                шведов, украинский предводитель вместо «Андрея Первозванного» был пожалован специально
                                для него изготовленным «почётным знаком» Иуды. Уникальная регалия, разработанная лично
                                царём, представляла собой серебряную монету, весом 5 кг. Её предполагалось надеть на шею
                                гетмана перед казнью.
                            </p>
                        </div>
                    </div>
                    <div className={`page page-left ${isOpen && currentPage === 5 ? 'active' : ''}`}>
                        <h2 id="imperial">Page 5</h2>
                    </div>
                    <div className={`page page-right ${isOpen && currentPage === 5 ? 'active' : ''}`}>
                        <h2>Page 6</h2>
                    </div>
                    <div className={`page page-left ${isOpen && currentPage === 7 ? 'active' : ''}`}>
                        <h2>Page 7</h2>
                    </div>
                    <div className={`page page-right ${isOpen && currentPage === 7 ? 'active' : ''}`}>
                        <h2>Page 8</h2>
                    </div>
                    <div className={`page page-left ${isOpen && currentPage === 9 ? 'active' : ''}`}>
                        <h2>Page 9</h2>
                    </div>
                    <div className={`page page-right ${isOpen && currentPage === 9 ? 'active' : ''}`}>
                        <h2>Page 10</h2>
                    </div>
                    <div className={`page page-left ${isOpen && currentPage === 11 ? 'active' : ''}`}>
                        <h2 id="quiz">Page 11</h2>
                    </div>
                    <div className={`page page-right ${isOpen && currentPage === 11 ? 'active' : ''}`}>
                        <h2>Page 12</h2>
                    </div>
                </div>

            </div>
            <div className="navigation-buttons">
                <>
                    <button className="prev-button" onClick={prevPage} disabled={currentPage <= 1}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="big arrow left">
                                <circle id="Ellipse 24" cx="30" cy="30" r="29" stroke="white" strokeWidth="2"/>
                                <path id="Line 1" d="M23.5 30L60 30" stroke="white" strokeWidth="2"/>
                                <path id="Rectangle 65" d="M37.1421 15.8579L23 30L37.1421 44.1421" stroke="white" strokeWidth="2"/>
                            </g>
                        </svg>
                    </button>
                    <button className="next-button" onClick={nextPage} disabled={currentPage >= 11}>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="arrow right">
                                <circle id="Ellipse 24" cx="30" cy="30" r="29" stroke="#666B6C" strokeWidth="2"/>
                                <path id="Line 1" d="M36.5 30L0 30" stroke="#666B6C" strokeWidth="2"/>
                                <path id="Rectangle 65" d="M22.8579 15.8579L37 30L22.8579 44.1421" stroke="#666B6C" strokeWidth="2"/>
                            </g>
                        </svg>
                    </button>
                </>
            </div>
        </>
    );
};

export default Book;