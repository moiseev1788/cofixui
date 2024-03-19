import Stories from './Stories.vue';

export default {
    title: 'Stories',
    component: Stories,
};

const Template = (args) => ({
    components: { Stories },
    setup() {
      return { args };
    },
    template: '<Stories />',
});

export const stories = Template.bind({});
stories.args = {};