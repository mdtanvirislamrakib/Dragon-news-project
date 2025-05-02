import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            <main>
                <section className='left_nav'>

                </section>
                <section className='main'></section>
                <section className='right_nav'></section>
            </main>

        </div>
    );
};

export default HomeLayouts;