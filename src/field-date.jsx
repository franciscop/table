import React from 'react';

export default class DateField extends React.Component {
  componentDidMount(){
    var self = this;
    function setValue(value){
      var picker = $(self.date).pickadate('picker');
      var date = value.split('-').map(n => parseInt(n));
      date[1]--; // Months are 0-indexed
      if (value) picker.set('select', date);
    }
    $(this.date).pickadate({
      hiddenName: true,
      format: 'yyyy-mm-dd',
      onClose: function () {
        self.props.onChange(self.date.value);
      }
    });
    setValue(this.date.value);
    // var picker = $(this.date).pickadate('picker');
    // var date = this.date.value.split('-').map(n => parseInt(n));
    // date[1]--; // Months are 0-indexed
    // if (this.date.value) picker.set('select', date);
  }
  render(){
    var field = this.props.field;
    var value = this.props.value;
    return (
      <input className={this.props.className} ref={c => this.date = c} name={field.name} data-type="location" onChange={this.props.onChange} value={value} placeholder={field.placeholder} />
    );
  }
}
