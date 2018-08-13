import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './segmented-control-react.css';

export default class SegmentedControl extends Component {
    state = {
        selectedSegment: 0
    };
    static defaultProps = {
        onChangeSegment: x => x,
        variant: 'base',
        selected: 0
    };
    componentDidMount() {
        this.setState({ selectedSegment: this.props.selected });        
    }   

    onChange = selectedSegment => {
        this.setState({ selectedSegment });
        this.props.onChangeSegment(selectedSegment);
    };
    render() {
        return (
            <div className="r-segmented-control">
                <ul>
                    {                                                
                        this.props.segments.map((segment, i) => {                         
                            if (i === this.state.selectedSegment) {
                                return (
                                    <li 
                                        key={i} 
                                        className={`${this.props.variant} selected`}
                                    >
                                        {segment}
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={i}
                                        className={`${this.props.variant}`}
                                        onClick={() => this.onChange(i)}
                                    >
                                        {segment}
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

SegmentedControl.propTypes = {
    segments: PropTypes.array.isRequired,
    selected: PropTypes.number,
    variant: PropTypes.string    
};