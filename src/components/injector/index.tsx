import React from 'react'

import { addMarkup, removeMarkups } from '../../helpers/markups'

interface InjectorProps {
  children: React.ReactNode
}

const Injector: React.FC<InjectorProps> = ({ children }) => {
  const objectToString = (object: Object): string => {
    return Object.keys(object)
      .map((key) => {
        return `${key}="${object[key]}"`
      })
      .join('][')
  }

  const childToQuerySelector = (child: React.ReactElement): string => {
    return `${child.type}[${objectToString(child.props)}]`
  }

  React.useEffect(() => {
    const toRemove: Array<string> = []

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return
      const markupToAdd = childToQuerySelector(child)
      toRemove.push(markupToAdd)
    })

    const toRemoveFiltered = toRemove.filter(
      (markup) => !markup.includes('children')
    )

    removeMarkups(document, toRemoveFiltered)

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return
      addMarkup(child)
    })
  }, [])

  return null
}

export default Injector
