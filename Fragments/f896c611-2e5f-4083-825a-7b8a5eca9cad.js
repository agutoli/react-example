import React from 'react';

const styles = {
  border: '1px solid',
  margin: '1rem',
  padding: '1rem'
};

export default class SomeFragment extends React.Component {
    render(){
        return (
            <div style={styles} className="someFragment">
                This is my generated fragment
            </div>
        );
    }
}
