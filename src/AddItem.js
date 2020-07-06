import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
                    newItem:{},
                    For_list: this.props.idName
                 }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
      var List_Name = this.props.idName;
      var Each_List_Item = this.refs.id.value;
      var Obj = this.state.newItem;
      Obj[List_Name] = Each_List_Item;

      var handleAddItem_Function = this.props.addItem;
      handleAddItem_Function(this.state);

      this.setState({ newItem: Obj } , function() {handleAddItem_Function(this.state);});
      this.refs.id.value = "";

  }
    

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
