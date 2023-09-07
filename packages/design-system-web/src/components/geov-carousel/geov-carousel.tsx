import { Component, h, Host, Prop } from '@stencil/core';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

/**
 * This component displays a list of images in a carousel. It is implemented with Swiper
 * and allows dragging/swiping.
 */
@Component({
  tag: 'geov-carousel',
  styleUrl: 'geov-carousel.css',
  shadow: true,
})
export class GeovCarousel {
  containerEl: HTMLElement;
  paginationEl: HTMLElement;
  /** array of image URLs passed to src attribute of the <img src="">  */
  @Prop({ mutable: true }) images: string[];

  componentDidRender() {
    const infinitLoop: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1500,
      loop: true,
      pagination: {
        el: this.paginationEl,
        clickable: true,
      },
      modules: [Autoplay, Pagination],
    };
    new Swiper(this.containerEl, infinitLoop);
  }

  render() {
    return (
      <Host>
        <div class="swiper" ref={el => (this.containerEl = el)}>
          <div class="swiper-wrapper">
            {this.images?.map(ref => (
              <div class="swiper-slide">
                <img src={ref} />
              </div>
            ))}
          </div>
          <div class="swiper-pagination" ref={el => (this.paginationEl = el)}></div>
        </div>
      </Host>
    );
  }
}
