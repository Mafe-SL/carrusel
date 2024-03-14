import ImageCarousel from './Carousel';

const images = [
  'https://dynamic.bonfireassets.com/thumb/design-image/22ae06ba-faad-4637-b2b5-df2028863c83/91a52b07-8717-4ce1-8a87-ae8b8a1a5642/900/',
  'https://vangogh.teespring.com/og_pic/73747321/11185763/front.jpg?v=2018-12-21-04-31&background-image=wood&effects=inner-glow',
  'https://vangogh.teespring.com/v3/image/rRPlomlmvWBos1HP9e0cFhEhbxA/480/560.jpg',
];

const ImageCarouselPage = () => {
  return <ImageCarousel images={images} />;
};

export default ImageCarouselPage;