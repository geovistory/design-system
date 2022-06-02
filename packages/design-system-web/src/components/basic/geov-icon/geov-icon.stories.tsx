export default {
    title: '03 - BASIC COMPONENTS/Icons',
}

const Template = () => `
    <geov-heading h-1>Sizes</geov-heading>
    <geov-row start style="margin-bottom:50px">
        <geov-column start style="margin-right:3rem">
            <geov-row><geov-heading h-3 style="margin:0">Small</geov-heading></geov-row>
            <geov-row><geov-icon github small></geov-icon></geov-row>
        </geov-column>

        <geov-column start style="margin-right:3rem">
            <geov-row><geov-heading h-3>Medium</geov-heading></geov-row>
            <geov-row><geov-icon github medium></geov-icon></geov-row>
        </geov-column>

        <geov-column start style="margin-right:3rem">
            <geov-row><geov-heading h-3>Large</geov-heading></geov-row>
            <geov-row><geov-icon github large></geov-icon></geov-row>
        </geov-column>

    </geov-row>


    <geov-heading h-1 style="margin-bottom:50px">All Icons</geov-heading>
    
    <geov-row start>
        <geov-column start style="margin-right: 20px">
            <geov-row><geov-icon github></geov-icon></geov-row>
            <geov-row><geov-text caption>github</geov-text></geov-row>
        </geov-column>

        <geov-column start style="margin-right: 20px">
            <geov-row><geov-icon arrow-right></geov-icon></geov-row>
            <geov-row><geov-text caption>arrow-right</geov-text></geov-row>
        </geov-column>

        <geov-column start style="margin-right: 20px">
            <geov-row><geov-icon link></geov-icon></geov-row>
            <geov-row><geov-text caption>link</geov-text></geov-row>
        </geov-column>
    </geov-row>
`

export const Icons = Template.bind({});