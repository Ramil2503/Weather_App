import React, {useState, useEffect} from 'react'
import NextBtn from '../button/actionButton/NextBtn'
import PreviousBtn from '../button/actionButton/PreviosBtn'
// import './carousel.css' //will be added later

const Carousel = (props) => {
    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const nextSlide = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <PreviousBtn action={prevSlide}/>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                <NextBtn action={nextSlide}></NextBtn>
            </div>
        </div>
    )
}

export default Carousel