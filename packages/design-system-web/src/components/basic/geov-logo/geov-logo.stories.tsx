export default {
    title: 'Basic Components/Logos',
}

const Template = () => `


<geov-row justify="start">

    <geov-column style="margin-right:3rem">
        <div style="padding:1rem">
            <geov-logo name="geovistory"></geov-logo>
        </div>
        <geov-text variant="caption">geovistory</geov-text>
    </geov-column>

    <geov-column style="margin-right:3rem">
        <div style="background:black; padding:1rem">
            <geov-logo name="geovistory-white" /></geov-logo>
        </div>
        <geov-text variant="caption">geovistory-white</geov-text>
    </geov-column>
</geov-row>
`

export const Logos = Template.bind({});