import { Component, Host, h, Prop, State } from '@stencil/core';



@Component({
  tag: 'gv-person',
  styleUrl: 'gv-person.css'
})
export class GvPerson {

  @Prop() name: string;
  @Prop() lastname: string;
  @Prop() birthdate: string;
  parsedBirthDate: Date;

  @State() mode: 'long' | 'short' = 'short'

  render() {
    this.parsedBirthDate = new Date(this.birthdate)

    return (
      <Host>
        <gv-button onClick={() => this.toggleMode()}>Toggle</gv-button>
        {this.mode === 'long' ? this.getInnerHTML_long() : this.getInnerHTML_short()}
      </Host>
    );
  }

  toggleMode() {
    if (this.mode === 'long') this.mode = 'short'
    else if (this.mode === 'short') this.mode = 'long';
  }

  getInnerHTML_long() {
    return <h1>
      {this.name} - {this.lastname}
      <span style={{ 'font-size': '12px', 'padding-left': '10px' }}>{this.birthdate}</span>
    </h1>
  }

  getInnerHTML_short() {
    let age = (new Date()).getTime() - (new Date(this.birthdate)).getTime()
    age /= (1000 * 3600 * 24 * 365.25)

    return <h3>
      {this.name.charAt(0)}. {this.lastname}
      <span style={{ 'font-size': '12px', 'padding-left': '10px' }}>{Math.round(age)} years</span>
    </h3>
  }

}
