import {Carousel } from 'react-bootstrap';
interface Props {
    slider: any[]
}

function CarouselComponent(props: Props) {
    const {slider} = props

    return (
      <>
        <Carousel controls={false} className='carousel'>
        {
          slider && slider.map(item => (
            <Carousel.Item className='carousel' interval={3000} key={item.id}>
           <img src={item.image} width='100%'  alt="" />
            <Carousel.Caption className='carousel-caption'>
              <h3>{item.name}</h3>
              <p style={{color: 'gold', fontWeight: 'bold', fontSize: '40px'}}>{item.vote}/10</p>
            </Carousel.Caption>
          </Carousel.Item>
           ))
        }
        </Carousel>
      </>
    )
}

export default CarouselComponent;
