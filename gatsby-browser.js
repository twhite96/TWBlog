import littlefoot from 'littlefoot';
import './src/utils/littlefoot.css'

export function onRouteUpdate() {
  littlefoot({
    allowMultiple: true,
    dismissOnUnhover: true,
    hoverDelay: 100,
    preventPageScroll: false
  });
}
