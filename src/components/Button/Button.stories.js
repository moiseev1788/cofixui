import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'tertiary', 'ghost', 'accent']
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small']
    },
    rounded: {
      control: 'select',
      options: ['rounded-small', 'rounded-medium', 'rounded-full']
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    }
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  color: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  color: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Button',
  color: 'warning',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  color: 'tertiary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Button',
  color: 'ghost',
};

export const Accent = Template.bind({});
Accent.args = {
  label: 'Button',
  color: 'accent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true, 
};
