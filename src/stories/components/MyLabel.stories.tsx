import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

export default {
  title: 'UI/Etiquetas/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' /*, options: ['normal', 'h3']*/},
    color: { control: 'select'},
    //al llamarse la propiedad como color, el control se detecta automaticamente
    // cssColor: { control: 'color' } 
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
  label:'This is the basic label', 
  size:'normal',
  allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary'
}

export const AnyCssColor = Template.bind({});
AnyCssColor.args = {
  cssColor: '#fafafa',
  bgColor: '#717171',
  size: 'h1'
}