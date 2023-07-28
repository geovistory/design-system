/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import { Primary, Markdown, Stories, Subtitle, Title, DocsContext } from '@storybook/blocks';
import React, { useContext, useRef } from 'react';

export const docsTemlpate = (overview: string, componentApi: string) => {
  let overviewRef = useRef<HTMLElement>(null);
  let componentApiRef = useRef<HTMLHeadingElement>(null);
  let examplesRef = useRef<HTMLElement>(null);
  let usageRef = useRef<HTMLHeadingElement>(null);
  let themingRef = useRef<HTMLHeadingElement>(null);

  const scrollTo = (el: React.MutableRefObject<HTMLElement>) => {
    setTimeout(() => {
      el?.current?.focus();
      el?.current?.scrollIntoView();
    }, 0);
  };

  return (
    <>
      <span ref={overviewRef}></span>
      <div className="geov-custom-toc sb-unstyled">
        <div>
          <p>Content</p>
          <ul>
            <li>
              <button onClick={_ => scrollTo(overviewRef)}>Introduction</button>
            </li>
            <li>
              <button onClick={_ => scrollTo(examplesRef)}>Examples</button>
            </li>
            <li>
              <button onClick={_ => scrollTo(componentApiRef)}>Component API</button>
            </li>
            <li>
              <button onClick={_ => scrollTo(usageRef)}>Usage</button>
            </li>
            <li>
              <button onClick={_ => scrollTo(themingRef)}>Theming</button>
            </li>
          </ul>
        </div>
      </div>
      <Title />
      <Subtitle />
      <br />
      <br />
      <br />
      <Markdown>{overview}</Markdown>
      <Primary></Primary>
      <PlaygroundButton></PlaygroundButton>
      {/* <Controls /> */}
      <span ref={examplesRef}></span>
      <Stories includePrimary={false} title={'Examples'} />
      <h1 ref={componentApiRef} className="sb-unstyled">
        Component API
      </h1>
      <Markdown>{componentApi}</Markdown>
      <h1 ref={usageRef} className="sb-unstyled">
        Usage
      </h1>
      <Usage></Usage>
      <h1 ref={themingRef} className="sb-unstyled">
        Theming
      </h1>
      <Theming></Theming>
    </>
  );
};
const PlaygroundButton = () => {
  const { componentStories } = useContext(DocsContext);
  const stories = componentStories().filter(story => !story.parameters?.docs?.disable);
  if (!stories.length) return <></>;
  const primaryStory = stories[0];
  const md = `
  <ion-button href="${`?path=/story/${primaryStory.id}`}" target="_self">
      Go to playground (Canvas)
  </ion-button>`;
  return <Markdown>{md}</Markdown>;
};

const Usage = () => {
  const md = `
  This documentation explains how to implement and use Geovistory Design System components across different technologies.

  <div>
    <ion-button href="?path=/story/getting-started-installation--html-5" target="_self">
      <span>Go to component usage</span>
    </ion-button>
  </div>
`;
  return <Markdown>{md}</Markdown>;
};

const Theming = () => {
  const md = `
  <div>
    <ion-button href="?path=/story/design-theming--theming" target="_self">
      <span>Go to theming page</span>
    </ion-button>
  </div>

  <p style="margin-top: 8rem">
    If you experience any issues while using a component, please head over to the <a href="https://github.com/geovistory/design-system/issues">Github page</a> for more guidelines and
    help.
  </p>`;
  return <Markdown>{md}</Markdown>;
};
