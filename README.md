# Geovistory Design System

Geovistory Design System consists of two types of components: Ionic components and Geovistory components.

At Geovistory, we create components to display data from our research projects, and we are constently updating them, enhancing the behavior, and adding new ones.

We also encourage our community to participate to this development by creating commponents which answer to their specific needs. We will be glad to add them to the Geovistory project!


The components are coded as Stencil components. Doing so, we have Angular, React and Web component versions of each component made, without having to redevelop everything for each technology. They are available through npm packages:

* [@geovistory/design-system-web](https://www.npmjs.com/package/@geovistory/design-system-web): Web components
* [@geovistory/design-system-react](https://www.npmjs.com/package/@geovistory/design-system-react): React components
* [@geovistory/design-system-angular](https://www.npmjs.com/package/@geovistory/design-system-angular): Angular components
* [@geovistory/design-system-happy-dom](https://www.npmjs.com/package/@geovistory/design-system-happy-dom): HappyDom worker for server side rendering


---


[Checkout our documentation](https://design.geovistory.org/)


## Publication

The packages are published to npm on each release by the Release workflow.

For manual publications of dockerized PR do the following:

1. Let the Dockerize workflow run

2. Pull the changes to your local repo

3. Run this command:

```bash
# clean install dependencies
npm ci

# build
npm run build

# publish: replace <XYZ> with version number you find in lerna.json -> version
# example for <XYZ>: 1.1.1-pr-18.32 
lerna publish <XYZ> --no-git-tag-version  --no-changelog --dist-tag next

```