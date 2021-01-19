import { useScrollTrigger } from '@material-ui/core';
import { IS_BROWSER } from 'data/Constants';

export default function useScrollDetection(threshold: number = 0) {
  return useScrollTrigger({
    disableHysteresis: true,
    threshold,
    target: IS_BROWSER ? window : undefined,
  });
}
