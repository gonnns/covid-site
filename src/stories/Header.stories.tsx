import { ComponentStory } from '@storybook/react';

import Header from './Header';

const HeaderStories = {
  title: 'Example/Header',
  component: Header,
};

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export { HeaderStories as default };
