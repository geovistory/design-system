export default {
    title: 'Grid Components/Row',
}

const Template = () => `
<geov-row justify="start" style="margin-bottom:10px; border:1px solid red; height:35px">Start</geov-row>
<geov-row justify="center" style="margin-bottom:10px; border:1px solid red; height:35px">Center</geov-row>
<geov-row justify="end" style="margin-bottom:10px; border:1px solid red; height:35px">End</geov-row>
<geov-row justify="space-between" style="margin-bottom:10px; border:1px solid red; height:35px">
    <geov-text>Text1</geov-text>
    <geov-text>Space between</geov-text>
    <geov-text>Text2</geov-text>
</geov-row>
<geov-row justify="space-around" style="margin-bottom:10px; border:1px solid red; height:35px">
    <geov-text>Text1</geov-text>
    <geov-text>Space around</geov-text>
    <geov-text>Text2</geov-text>
</geov-row>
`

export const Row = Template.bind({});