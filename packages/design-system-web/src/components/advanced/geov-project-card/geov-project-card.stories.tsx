export default {
    title: 'Advanced Components/Project Card',
}

const Template = (args) => `
<geov-project-card 
    project-title="${args.projectTitle}" 
    project-desc="${args.projectDesc}" 
    project-page-url="${args.projectPageUrl}"
></geov-project-card>
`

export const ProjectCard = Template.bind({});
ProjectCard.args = {
    projectTitle: "ANR Processetti",
    projectDesc:"Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.",
    projectPageUrl: "https://www.geovistory.org/project/591"
}