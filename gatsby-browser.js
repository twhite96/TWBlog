import Wrapper from './src/components/ContextWrapper';
import littlefoot from 'littlefoot';
import './src/utils/littlefoot.css'

export const wrapRootElement = Wrapper;

export function onRouteUpdate() {
  littlefoot({
    allowMultiple: true,
    dismissOnUnhover: true,
    hoverDelay: 100,
    preventPageScroll: false
  });
}

