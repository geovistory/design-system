export default {
    title: '03 - BASIC COMPONENTS/Texts',
}

const Template = () => `
    <geov-text subtitle>Text 1 (e.g.: subtitles)</geov-text>
    <geov-text description>Text 2 (e.g.: card descriptions)</geov-text>
    <geov-text text>Text 3 (e.g.: texts)</geov-text>
    <geov-text caption>Text 4 (e.g.: captions)</geov-text>

    <div style="background:black; padding:1rem">
        <geov-text light subtitle>Text 1 (e.g.: subtitles)</geov-text>
        <geov-text light description>Text 2 (e.g.: card descriptions)</geov-text>
        <geov-text light text>Text 3 (e.g.: texts)</geov-text>
        <geov-text light caption>Text 4 (e.g.: captions)</geov-text>
    </div>
`

export const Texts = Template.bind({});