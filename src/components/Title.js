import React from 'react'

const Title = ({ base, mixin, condiment, seasoning, shell }) =>
    <p style={{ fontSize: 34 }}>
        A delicious <strong>{base}</strong> and <strong>{mixin}</strong> taco
        with <strong>{condiment}</strong> and a dash of <strong>{seasoning}</strong> on top,
        in <strong>{shell}</strong>. Yummy!
    </p>

export default Title
