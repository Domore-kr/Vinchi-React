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
                    <img src={"Pictures/Group 106.png"}/>
                </div>
                <div className={`page page-left ${isOpen && currentPage === 1 ? 'active' : ''}`}>
                    <div className="working_area">
                        <h2 className="caption">
                            Ордена и медали разных эпох
                        </h2>
                        <img className="first_image" src="Pictures/Group 104.svg" alt=""/>
                    </div>
                </div>
                <div className={`page page-right ${isOpen && currentPage === 1 ? 'active' : ''}`}>
                    <div className="working_area">
                        <h2 className='content_caption'>
                            Содержание
                        </h2>
                        <ul className="menu_items">
                            <li>Введение</li>
                            <li>Орденские знаки Империи</li>
                            <li>Награды советского периода</li>
                            <li>Награды Российской Федерации</li>
                            <li>Награды города Кизляр</li>
                            <li>Викторина</li>
                            <li>Игра «Найди совпадения»</li>
                            <li>Игра «Подбери название»</li>
                        </ul>
                    </div>
                </div>
                <div className={`page page-left ${isOpen && currentPage === 3 ? 'active' : ''}`}>
                    <div className="working_area fancy_area">
                        <h2 className="caption">
                            Ордена и медали разных эпох
                        </h2>
                        <div className='fancy_container'>
                            <Fancybox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <a data-fancybox="gallery" href="/Pictures/02 1.png" className="first_fancy">
                                    <img src="/Pictures/02 1.png" width="200" height="150" />
                                </a>
                                <a data-fancybox="gallery" href="/Pictures/02 1.png" className="other_fancy">
                                    <img src="/Pictures/02 1.png" width="200" height="150" />
                                </a>
                                <a data-fancybox="gallery" href="/Pictures/02 1.png" className="other_fancy">
                                    <img src="/Pictures/02 1.png" width="200" height="150" />
                                </a>
                            </Fancybox>
                        </div>
                    </div>
                </div>
                <div className={`page page-right ${isOpen && currentPage === 3 ? 'active' : ''}`}>
                    <div className="working_area">
                        <button>Орденские знаки империи</button>
                        <h2 className='content_caption'>
                            Орден святого Андрея Первозванного
                        </h2>
                        <p className="content_text">Орден Святого апостола Андрея Первозванного – первая и высшая награда Российской империи,
                            основанная Петром I. Действует в настоящее время, сохраняя статус по старшинству. За
                            годы правления, царь-реформатор наградил только 38 человек, из них 12 иностранцев.
                            Открыл список в 1699 году глава дипломатического ведомства, видный государственный
                            деятель петровской эпохи – генерал-адмирал Ф. А. Головин. Сам Пётр I оказался лишь
                            шестым среди награждённых, тщательно подбирая «подходящий случаю» подвиг. Несмотря на
                            одну степень, производили 2 варианта изделий, с бриллиантами и без них. Всего орден
                            вручили 1100 номинантам. В РФ действие регалии восстановили в 1998 г. За противоправные
                            действия награды могли лишить. Это случилось лишь однажды, со вторым орденским кавалером
                            – гетманом Иваном Мазепой. За измену во время Северной войны и переход на сторону
                            шведов, украинский предводитель вместо «Андрея Первозванного» был пожалован специально
                            для него изготовленным «почётным знаком» Иуды. Уникальная регалия, разработанная лично
                            царём, представляла собой серебряную монету, весом 5 кг. Её предполагалось надеть на шею
                            гетмана перед казнью.</p>
                    </div>
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
