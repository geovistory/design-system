export default {
    title: 'Basic Components/Icons',
}

const Template = () => `
    <geov-heading variant="h1">Sizes</geov-heading>
    <geov-row justify="start" style="margin-bottom:50px">
        <geov-column style="margin-right:3rem" justify="start">
            <geov-row><geov-heading variant="h3" style="margin:0">Small</geov-heading></geov-row>
            <geov-row><geov-icon name="github" size="small"></geov-icon></geov-row>
        </geov-column>

        <geov-column style="margin-right:3rem" justify="start">
            <geov-row><geov-heading variant="h3">Medium</geov-heading></geov-row>
            <geov-row><geov-icon name="github" size="medium"></geov-icon></geov-row>
        </geov-column>

        <geov-column style="margin-right:3rem" justify="start">
            <geov-row><geov-heading variant="h3">Large</geov-heading></geov-row>
            <geov-row><geov-icon name="github" size="large"></geov-icon></geov-row>
        </geov-column>

    </geov-row>


    <geov-heading variant="h1" style="margin-bottom:50px">All Icons</geov-heading>
    
    <geov-row justify="start">
        <geov-column justify="start" style="margin-right: 20px">
            <geov-row><geov-icon name="github"></geov-icon></geov-row>
            <geov-row><geov-text variant="caption">github</geov-text></geov-row>
        </geov-column>

        <geov-column justify="start" style="margin-right: 20px">
            <geov-row><geov-icon name="arrow-right"></geov-icon></geov-row>
            <geov-row><geov-text variant="caption">arrow-right</geov-text></geov-row>
        </geov-column>

        <geov-column justify="start" style="margin-right: 20px">
            <geov-row><geov-icon name="link"></geov-icon></geov-row>
            <geov-row><geov-text variant="caption">link</geov-text></geov-row>
        </geov-column>
    </geov-row>
`

export const Icons = Template.bind({});