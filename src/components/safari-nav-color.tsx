import React from 'react'

import Injector from './injector'

interface SafariNavColorProps {
  lightThemeColor: string
  darkThemeColor: string
}

const SafariNavColor: React.FC<SafariNavColorProps> = ({
  lightThemeColor,
  darkThemeColor
}) => (
  <Injector>
    <meta
      name='theme-color'
      content={lightThemeColor}
      media='(prefers-color-scheme: light)'
    />
    <meta
      name='theme-color'
      content={darkThemeColor}
      media='(prefers-color-scheme: dark)'
    />
  </Injector>
)

export default SafariNavColor
