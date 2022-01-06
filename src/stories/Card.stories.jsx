import React from "react";
import Crad from "./Card";

export default {
    title: "Example/Show Card",
    component: Crad
}

const Template = (args) => <Crad {...args} />

export const Default = Template.bind({})