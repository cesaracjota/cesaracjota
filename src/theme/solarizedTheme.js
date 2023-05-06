// theme.js
import { createTheme } from 'react-data-table-component';

export const solarizedTheme = createTheme('solarized', {
    text: {
        primary: '#FFF',
        secondary: '#FFF',
        tertiary: '#FFF',
        error: '#FFF',
        warning: '#FFF',
    },
    background: {
        default: '#282828',
        hover: '#1a1a1a',
        active: '#1a1a1a'
    },
    context: {
        background: '#282828',
        text: '#FFF',
    },
    divider: {
        default: '#FFF opacity 92%',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});
