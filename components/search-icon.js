import { Motion, spring, presets } from 'react-motion'

export default props => (
  <Motion defaultStyle={{scale: 0}} style={{scale: spring(1, presets.wobbly)}}>
    {({ scale }) => (
      <svg width='40' height='40' version='1.1' viewBox='0 0 100 100' style={{transform: `scale(${scale})`}}>
        <path d='M47.102 32.602C39 32.602 32.5 39.204 32.5 47.204c0 8.102 6.602 14.602 14.602 14.602 8.102 0 14.602-6.602 14.602-14.602C61.7 39.2 55.2 32.602 47.102 32.602z' />
        <path d='M50.102 1.398C23.2 1.398 1.399 23.2 1.399 50.101c0 26.898 21.801 48.7 48.699 48.7C77 98.8 98.801 76.998 98.801 50.1 98.801 23.2 77 1.398 50.102 1.398zm23.699 73.703c-.7.7-1.8 1.102-3 1.102s-2.2-.398-3-1.102l-9.2-9.199-.898.5c-3.3 1.801-6.898 2.801-10.602 2.801-12.102 0-21.898-9.8-21.898-21.898 0-12.102 9.801-21.898 21.898-21.898 12.102 0 21.898 9.8 21.898 21.898 0 4.3-1.199 8.398-3.601 12l-.602 1 9.102 9.102c.699.8 1.199 1.8 1.199 2.898-.098.996-.496 1.996-1.297 2.797z' />
      </svg>
    )}
  </Motion>
)