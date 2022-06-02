export default {
    title: '04 - Advanced Components/FooterGeovistory',
}

const Template = (args) => `
<geov-footer-geovistory featured-projects='${JSON.stringify(args.featuredProjects)}'></geov-footer-geovistory>
`

export const FooterGeovistory = Template.bind({});
FooterGeovistory.args = {
    featuredProjects: [{
        text: "Tagebücher Anna Maria Preiswerk-Iselin",
        href: "/project/924033"
    }, {
        text: "ANR Processetti",
        href: "/project/591"
    }, {
        text: "ANR Globalvat",
        href: "/"
    }]
}