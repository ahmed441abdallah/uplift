import React from 'react'

const Category = () => {
    return (
        <div className='mt-12'>
            <section className="section">
                <div className="cards">
                    <a href="#" className="card card-1">
                        <figure className="visual">
                            <img
                                className="card-img"
                                src="https://cdn.pixabay.com/photo/2021/07/09/16/31/living-room-6399504_640.jpg"
                                alt="Person with a game controller in hand"
                            />
                            <figcaption className="figcaption">Construction</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card-2">
                        <figure className="visual">
                            <img
                                className="card-img"
                                src="https://cdn.pixabay.com/photo/2023/10/18/11/20/building-8323951_640.jpg"
                                alt="lighting"
                            />
                            <figcaption className="figcaption">Urban Planning</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card-3">
                        <figure className="visual">
                            <img
                                className="card-img"
                                src="https://cdn.pixabay.com/photo/2017/03/25/23/09/living-room-2174575_640.jpg"
                                alt="Person in vibrant neon lighting with abstract shapes"
                            />
                            <figcaption className="figcaption"> Exhibition</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card-4">
                        <figure className="visual">
                            <img
                                className="card-img"
                                src="https://raw.githubusercontent.com/mobalti/ui/main/cards-01/images/img-4.avif"
                                alt="Person wearing a virtual reality headset in a blue-lit room"
                            />
                            <figcaption className="figcaption">Upcoming</figcaption>
                        </figure>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Category
