import React from 'react';
import { Wrapper } from './Thumb.styles';

const Thumb = ({ wordle }) => (
    <Wrapper>
        <a href={wordle.link}>{wordle.name}</a>
    </Wrapper>
)

export default Thumb;