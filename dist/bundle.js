"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),PropTypes=_interopDefault(require("prop-types")),styled=_interopDefault(require("styled-components"));function styleInject(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var css=".rsc .base {\n    border-color: rgb(0,122,255) !important;\n    color: rgb(0,122,255);\n}\n\n.rsc .dark {\n    border-color: #333 !important;\n    color: #333;\n}\n\n.rsc .light {\n    border-color: rgb(247, 247, 247) !important;\n    color: rgb(247, 247, 247);\n    background: transparent !important;\n}\n\n.rsc .success {\n    border-color: #5cb85c !important;\n    color: #5cb85c;\n}\n\n.rsc .error {\n    border-color: #d9534f !important;\n    color: #d9534f;\n}\n\n.rsc .base.selected {\n    background: rgb(0,122,255) !important;    \n    color: #fff !important;\n}\n\n.rsc .dark.selected {\n    background: #333 !important;\n    color: #fff !important;\n}\n\n.rsc .light.selected {\n    background: rgb(247, 247, 247) !important;\n    color: #333 !important;\n}\n\n.rsc .success.selected {\n    background: #5cb85c !important; \n    color: #fff !important;\n}\n\n.rsc .error.selected {\n    background: #d9534f !important;\n    color: #fff !important;\n}";styleInject(css);const Container=styled.div`
    width: 100%;
    background-color: #fff;    
    border-bottom: 1px solid #e9eff3;
    border-left: 1px solid #fff;
    text-align: center;
    height: 38px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    direction: ltr;
    display: table;
`,ScList=styled.ul`
    display: table-row;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 6px 8px;
`,ScListItem=styled.li`
    background: #fff;
    border: 1px solid;    
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
        border-right: 1px solid;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }    
`;class SegmentedControl extends React.Component{constructor(...e){var t;return t=super(...e),this.state={selectedSegment:0},this.onChange=(e=>{this.setState({selectedSegment:e}),this.props.onChangeSegment(e)}),t}componentDidMount(){this.setState({selectedSegment:this.props.selected})}render(){return React__default.createElement(Container,{className:"rsc"},React__default.createElement(ScList,null,this.props.segments.map((e,t)=>t===this.state.selectedSegment?React__default.createElement(ScListItem,{key:t,className:`${this.props.variant} selected`},e):React__default.createElement(ScListItem,{key:t,className:`${this.props.variant}`,onClick:()=>this.onChange(t)},e))))}}SegmentedControl.defaultProps={onChangeSegment:e=>e,variant:"base",selected:0},SegmentedControl.propTypes={segments:PropTypes.array.isRequired,selected:PropTypes.number,variant:PropTypes.string},exports.SegmentedControl=SegmentedControl;
