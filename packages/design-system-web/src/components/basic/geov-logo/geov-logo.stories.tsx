export default {
    title: '03 - BASIC COMPONENTS/Logos',
}

const Template = () => `


<geov-row start>

    <geov-column style="margin-right:3rem">
        <div style="padding:1rem">
            <geov-logo geovistory></geov-logo>
        </div>
        <geov-text caption>geovistory</geov-text>
    </geov-column>

    <geov-column style="margin-right:3rem">
        <div style="background:black; padding:1rem">
            <geov-logo geovistory-white /></geov-logo>
        </div>
        <geov-text caption>geovistory-white</geov-text>
    </geov-column>
</geov-row>
`

export const Logos = Template.bind({});