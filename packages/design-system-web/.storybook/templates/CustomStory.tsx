/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import { StoryProps } from '@storybook/addon-docs';
import React, { FunctionComponent } from 'react';
export const CustomStory: FunctionComponent<StoryProps> = (props) => {
  return <div>Custom Story Component {props.inline}</div>;
};
