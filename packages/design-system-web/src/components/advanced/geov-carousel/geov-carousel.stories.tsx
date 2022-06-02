export default {
    title: '04 - Advanced Components/Carousel',
}

const Template = (args) => `
<geov-column>
    <geov-carousel
        images="${args.images}"
        width="${args.width}"
        height="${args.height}"
    ></geov-carousel>
</geov-column>
`

export const Carousel = Template.bind({});
Carousel.args = {
    width: "400px",
    height: "400px",
    images: "",
}