export default {
    title: 'Grid Components/Column',
}

const Template = () => `
<geov-row height="80vh">
    <geov-column justify="start" style="margin-right:10px; border:1px solid red; width:150px; height:300px">Start</geov-column>
    <geov-column justify="center" style="margin-right:10px; border:1px solid red; width:150px; height:300px">Center</geov-column>
    <geov-column justify="end" style="margin-right:10px; border:1px solid red; width:150px; height:300px">End</geov-column>
    <geov-column justify="space-between" style="margin-right:10px; border:1px solid red; width:150px; height:300px">
        <geov-text>Text1</geov-text>
        <geov-text>Space between</geov-text>
        <geov-text>Text2</geov-text>
    </geov-column>
    <geov-column justify="space-around" style="border:1px solid red; width:150px; height:300px" >
        <geov-text>Text1</geov-text>
        <geov-text>Space around</geov-text>
        <geov-text>Text2</geov-text>
    </geov-column>
</geov-row>
`

export const Column = Template.bind({});