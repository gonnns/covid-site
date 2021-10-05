import { ComponentStory } from '@storybook/react';

import Page from './Page';
import * as HeaderStories from './Header.stories';

const PageStories = {
  title: 'Example/Page',
  component: Page,
};

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

export default PageStories;
