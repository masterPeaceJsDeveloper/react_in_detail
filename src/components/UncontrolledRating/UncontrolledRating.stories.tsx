import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'Uncontrolled Rating stories',
    component: UncontrolledRating,
}

const callback = action('Rating changing inside components')

export const EmptyStars = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback} />
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback} />
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback} />
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback} />
