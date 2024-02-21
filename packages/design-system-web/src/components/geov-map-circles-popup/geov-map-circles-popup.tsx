import { Component, Host, Prop, h } from '@stencil/core';

export interface PopupSubitem {
  label: string;
  url?: string;
}
export interface PopupItem {
  label: string;
  url?: string;
  suffix?: string;
  items?: PopupSubitem[];
}
/**
 * This component is used as content of the popup appearing, when user
 * clicks on a circle on the map circles component.
 */
@Component({
  tag: 'geov-map-circles-popup',
  styleUrl: 'geov-map-circles-popup.css',
  shadow: true,
})
export class GeovMapCirclesPopup {
  @Prop() items: PopupItem[] = [];
  render() {
    return (
      <Host>
        <ul>
          {this.items.map(i => (
            <li>
              {i.url ? (
                <a target="_blank" href={i.url}>
                  {i.label}
                </a>
              ) : (
                i.label
              )}{' '}
              {i.suffix && <small>({i.suffix})</small>}
              {i?.items?.length > 0 && (
                <ul>
                  {i.items.map(subitem => (
                    <li>
                      {subitem.url ? (
                        <a target="_blank" href={subitem.url}>
                          {subitem.label}
                        </a>
                      ) : (
                        subitem.label
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
