const defaultEdit = `# heading  
## heading2  
**paragraph**  
[code](https://www.freecodecamp.com)  
\`<div></div>\`  
\`\`\`
handleChange(e){
    this.setState({
      input:e.target.value
    })
  }
\`\`\`  
- listed item  

> blocked  
![React Logo](https://reactjs.org/)
`;


class Presentational extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      input: defaultEdit
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    this.setState({
      input:e.target.value
    })
  }
  
  render(){
    const markdown = marked(this.state.input, {breaks:true});
    const innerHTML = {__html: markdown};
    return (
      <div class="row">
        <div class="col-6">
          <h2>Enter your Markdown:</h2>
           <textarea id="editor" onChange={this.handleChange} class= "form-control">{this.state.input}</textarea>
        </div>
        
        <div class="col-6">
           <h2>Results:</h2>
          <div id="preview" dangerouslySetInnerHTML ={innerHTML}></div>
        </div>
      </div>
    
    )
  };
};

ReactDOM.render(<Presentational />, document.getElementById("app"));
