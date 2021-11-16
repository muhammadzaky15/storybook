import React from "react";
import "../index.css"

import { Text } from "./Text";

export default {
    title: "Example/Text Tailwind",
    component: Text
}

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})