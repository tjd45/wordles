import React from 'react';
import { Wrapper } from './Thumb.styles';

const Thumb = ({ wordle }) => (
    <Wrapper href={wordle.link}>
        {wordle.name}
    </Wrapper>
)

export default Thumb;