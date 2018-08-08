import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './segmented-control-react.css';

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    color: #1787fb;
    border-bottom: 1px solid #e9eff3;
    border-left: 1px solid #fff;
    text-align: center;
    height: 38px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    direction: ltr;
    display: table;
`;

const ScList = styled.ul`
    display: table-row;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 6px 8px;
`;

const ScListItem = styled.li`
    background: #fff;
    border: 1px solid #87a6bc;
    border-right: none;
    font-size: 13px;
    height: 26px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
    display: table-cell;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    -ms-flex: auto;
    flex: auto;

    &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    &:last-of-type {
        border-right: 1px solid #87a6bc;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    &:not(.selected):hover {
        color: #333;
    }
`;

export default class SegmentedControl extends Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            selectedSegment: 0
        }, this.onChange = selectedSegment => {
            this.setState({ selectedSegment });
            this.props.onChangeSegment(selectedSegment);
        }, _temp;
    }

    componentDidMount() {
        this.setState({ selectedSegment: this.props.selected });
    }

    render() {
        return React.createElement(
            Container,
            null,
            React.createElement(
                ScList,
                null,
                this.props.segments.map((segment, i) => {
                    if (i === this.state.selectedSegment) {
                        return React.createElement(
                            ScListItem,
                            { key: i, className: 'selected' },
                            segment
                        );
                    } else {
                        return React.createElement(
                            ScListItem,
                            {
                                key: i,
                                onClick: () => this.onChange(i)
                            },
                            segment
                        );
                    }
                })
            )
        );
    }
}

SegmentedControl.defaultProps = {
    onChangeSegment: x => x
};
SegmentedControl.propTypes = {
    segments: PropTypes.array,
    selected: PropTypes.number
};