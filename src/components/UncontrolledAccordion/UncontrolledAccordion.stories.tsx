
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    tilte: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

export  const UncontrolledAccordionDemo = () => {
    return <UncontrolledAccordion titleValue={"--Uncontrolled Accordion Demo--"}/>
}
