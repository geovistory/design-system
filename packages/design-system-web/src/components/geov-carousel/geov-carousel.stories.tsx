import React from 'react';
import { Components } from '../..';
import { GeovCarousel } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Design Components/Carousel',
  component: GeovCarousel,
};
const Template = (args: Components.GeovCarousel) => <GeovCarousel style={{height:400, maxWidth:600}} {...args}></GeovCarousel>;

export const Carousel = Template.bind({});
const args: Components.GeovCarousel = {
  images: [
    'https://www.geovistory.org/carousel-1_maquette-lugdunum.jpg',
    'https://www.geovistory.org/carousel-2_tapisserie-bayeux.jpg',
    'https://www.geovistory.org/carousel-3_vitrail.jpg',
    'https://www.geovistory.org/carousel-4_astrolabe-arabe.jpg',
    'https://www.geovistory.org/carousel-5_quetzalcoatl.jpg',
    'https://www.geovistory.org/carousel-6_bronzes-benin.jpg',
    'https://www.geovistory.org/carousel-7_carte-amerique.jpg',
    'https://www.geovistory.org/carousel-8_assemble-vizille.jpg',
    'https://www.geovistory.org/carousel-9_acte-deces.jpg',
    'https://www.geovistory.org/carousel-10_guerre-russo-japonaise.jpg',
    'https://www.geovistory.org/carousel-11_congret-musique.jpg',
    'https://www.geovistory.org/carousel-12_toronto.jpg',
  ],
};
Carousel.args = args;
