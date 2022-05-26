export default {
    title: 'Basic Components/Dividers',
}

const Template = () => `
<geov-row justify="space-around" style="width: 200px">
    <geov-text>Left</geov-text>
    <geov-divider vertical height="25px"></geov-divider>
    <geov-text>Right</geov-text>
</geov-row>

<geov-column justify="space-around" style="width: 200px; height: 200px">
    <geov-text>Top</geov-text>
    <geov-divider horizontal width="25px"></geov-divider>
    <geov-text>Bottom</geov-text>
</geov-column>

`

export const Dividers = Template.bind({});