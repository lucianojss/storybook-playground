import React from 'react';

//Adds 1rem margin to all stories.
const styles = {
    margin: '1rem'
};

const MarginDecorator = getStory => <main style={styles}>{getStory()}</main>;

export default MarginDecorator;
