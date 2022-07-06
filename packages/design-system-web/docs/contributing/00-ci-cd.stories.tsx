import { IonApp, IonContent, IonGrid, IonItem, IonList, IonText } from '../../.storybook/react/component';

export default {
  title: 'Contributing/CI And CD Workflow',
  parameters: {
    previewTabs: { canvas: { hidden: true } },
    options: { showPanel: false },
  },
};

export const CI_andCDWorkflow = () => (
  <IonApp>
    <IonContent>
      <IonGrid fixed>
        <IonText color="primary">
          <h1>CI & CD Workflow</h1>
        </IonText>

        <p>
          In software engineering, CI & CD stands for continuous integration and continuous development (see [wikipedia](https://en.wikipedia.org/wiki/CI/CD)). We use Github to
          realize a simple and powerful CI & CD workflow for the development and shipping of this design system.
        </p>

        <IonText color="primary">
          <h4>Working with Pull Request</h4>
        </IonText>

        <p>
          For new developments (features or fixes) we use separated branches resulting in pull-requests. Our development platform listens to pull requests triggering two Github
          workflows:
          <ul>
            <li>
              The workflow <code>Test PR</code> builds and tests the application in separate containers.
            </li>
            <li>
              The workflow <code>Dockerize PR</code> tags the repository with a prerelease tag and creates a docker image.
            </li>
          </ul>
          Tags are generated as follows: a pull request #21 checked out from <code>main</code> in version <code>1.3.0</code> will receive the version tag <code>1.3.0-pr-21.0</code>{' '}
          on the first push,
          <code>1.3.0-pr-21.1</code> on the second, etc. (see existing tags of <a href="https://github.com/geovistory/design-system/tags">design system repository</a>).
          <br />
          The docker image is pushed to the <a href="https://github.com/geovistory/design-system/pkgs/container/design-system">container registry of design system</a> with the new
          version tag. (Both workflows are triggered automatically on push to pull request branch.)
        </p>

        <IonText color="primary">
          <h4>Deploy to preview environment</h4>
        </IonText>

        <p>
          Our deployment platform allows us (the maintainers) to dispatch a workflow to deploy the documentation (storybook) of a version tag to two preview environments. There,
          other developers, data and UX specialists can easily review a pull request and comment, approve or decline changes in the thread of the GitHub pull request.
          <br />
          The preview environments are:
          <ul>
            <li>
              <code>design-dev.geovistory.org</code> Shows the last deployed version (tag).
            </li>
            <li>
              <code>design-stag.geovistory.org</code> Shows the last deployed version (tag). On deploy, this version has to be up to date with the <code>main</code> branch, which
              is our default branch.
            </li>
          </ul>
          If a maintainer tries to deploy a version to <code>design-stag.geovistory.org</code> that is behind <code>main</code>, the deployment workflow fails. This enforces, we
          deploy only code to staging that contains all commits of <code>main</code> branch without having merged to <code>main</code> already. This way we avoid blocking the
          deployment pipeline, by potentially breaking
          <code>main</code> with a (logically conflicting) pull request merge.
          <br />
          To deploy a version to a preview environment, a maintainer has to manually start the workflow <code>Deploy Storybook</code>, and choose the tag and environment.
        </p>

        <IonText color="primary">
          <h4>Merge Pull Request</h4>
        </IonText>

        <p>
          After a pull request was approved (using <code>design-stag.geovistory.org</code>), it will be merged into the <code>main</code> branch. A maintainer has to merge the pull
          request using the GitHub UI and delete the branch.
        </p>

        <IonText color="primary">
          <h4>Release npm packages</h4>
        </IonText>

        <p>
          Now a new version can be released. A maintainer has to run the Workflow <code>Release</code> from <code>main</code> branch, choosing the <code>type of increment</code>:{' '}
          <code>[patch | minor | major]</code> as specified by <a href="https://semver.org/">https://semver.org/</a>.
          <br />
          <br />
          In short, choose:
          <ul>
            <li>MAJOR when the version contains breaking changes,</li>
            <li>MINOR when the version adds functionality in a backwards compatible manner, and</li>
            <li>PATCH when the version adds backwards compatible bug fixes.</li>
          </ul>
          <br />
          The <code>Release</code> workflow does the following steps:
          <br />
          <ol>
            <li>It builds the packages</li>
            <li>
              It updates the version according to the given type of increment and commits it to main, e.g.:
              <ul>
                <li>
                  <code>patch</code> : <code>1.3.2-pr-21.4</code> -&gt; <code>1.3.3</code>
                </li>
                <li>
                  <code>minor</code> : <code>1.3.2-pr-21.4</code> -&gt; <code>1.4.0</code>
                </li>
                <li>
                  <code>major</code> : <code>1.3.2-pr-21.4</code> -&gt; <code>2.0.0</code>
                </li>
              </ul>
            </li>
            <li>
              It publishes the packages to npmjs.org (see <a href="https://www.npmjs.com/~geovistory">npm packages of geovistory</a>).
            </li>
            <li>
              It tags the repository (see <a href="https://github.com/geovistory/design-system/tags">tags of design system repository</a>)
            </li>
            <li>
              It builds and pushes a docker image with the new version (see{' '}
              <a href="https://github.com/geovistory/design-system/pkgs/container/design-system">docker images of design system</a>)
            </li>
            <li>
              It deploys the new version to <code>design-stag.geovistory.org</code>
            </li>
          </ol>
        </p>

        <IonText color="primary">
          <h4>Deploy to production environment</h4>
        </IonText>

        <p>
          Regarding the deployed docker images, the production environment of <code>geovistory.org</code> is an exact copy of the staging environment. Thus, the deployment of
          <code>design-stag.geovistory.org</code> to <code>design.geovistory.org</code> underlies the general mechanism of promoting geovistory apps from staging to production.
          This can only be executed by the geovistory DevOps team.
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
