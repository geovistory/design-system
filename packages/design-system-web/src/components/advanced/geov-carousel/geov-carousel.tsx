import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'geov-carousel',
  styleUrl: 'geov-carousel.css',
  shadow: false,
})
export class GeovCarousel {
  interval_timer: number;
  transition_timer: number;

  @Prop() width: string;
  @Prop() height: string;
  @Prop() interval: number = 5000; // in milliseconds
  @Prop() transition: number = 1000; // in milliseconds

  index = 0;
  @State() opacities = ['1', '0'];
  @State() currentTime: number = Date.now();


  transitionCounter = 0
  opacity_steps = 1/100

  connectedCallback() {
    this.interval_timer = window.setInterval(() => {
      const lastIndex = this.index;
      this.index = (this.index + 1) % this.opacities.length
      this.transitionCounter = 0;

      this.transition_timer = window.setInterval(() => {        
        this.transitionCounter++
        let newOpacity_next;
        let newOpacity_last;

        if (this.transitionCounter >= 100) {
          window.clearInterval(this.transition_timer);
          newOpacity_next = 1
          newOpacity_last = 0
        } else {
          const currentOpactiy_next = parseFloat(this.opacities[this.index])
          newOpacity_next = currentOpactiy_next + this.opacity_steps

          const currentOpactiy_last = parseFloat(this.opacities[lastIndex])
          newOpacity_last = currentOpactiy_last - this.opacity_steps
        }

        const newOpacities = new Array(this.opacities.length).fill('0')
        newOpacities[this.index] = newOpacity_next + ''
        newOpacities[lastIndex] = newOpacity_last + ''

        this.opacities = newOpacities
        console.log(this.opacities);
        this.currentTime = Date.now();
        
      }, this.transition / 100)
    }, this.interval);
  }

  disconnectedCallback() {
    window.clearInterval(this.interval_timer);
  }

  render() {
    return (
      <Host style={{ border: '1px solid green', width: this.width, height: this.height, padding: '5px', overflow: 'hidden' }}>

        <geov-row start style={{ width: "200%" }}>
          <div class="slide" style={{ border: '1px solid red', width: this.width, height: this.height, position: 'absolute', opacity: this.opacities[0] }}><h1>SLIDE 1</h1></div>
          <div class="slide" style={{ border: '1px solid blue', width: this.width, height: this.height, position: 'absolute', opacity: this.opacities[1] }}><h1>HELLO 2</h1></div>
        </geov-row>

      </Host>
    );
  }

}
// hidden={!this.slides[0]}
// hidden={!this.slides[1]} 