export default {
    title: '03 - BASIC COMPONENTS/Links',
}

const Template = () => `
<geov-text text> this is a link to <geov-link href="https://www.geovistory.org/">geovistory.org</geov-link> click on it to follow</geov-text>
<geov-text text> this is a grey link to <geov-link grey href="https://www.geovistory.org/">geovistory.org</geov-link> click on it to follow</geov-text>

<div style="background:black; padding:1rem">
    <geov-text text light> this is a light link to <geov-link href="https://www.geovistory.org/" light>geovistory.org</geov-link> click on it to follow</geov-text>
</div>
`

export const Links = Template.bind({});