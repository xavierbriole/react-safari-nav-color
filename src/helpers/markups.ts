export const addMarkup = (child: React.ReactElement): void => {
  const { type, props } = child

  switch (type) {
    case 'meta': {
      const meta = document.createElement('meta')

      Object.keys(props).forEach((key) => {
        meta.setAttribute(key, props[key])
      })

      document.head.appendChild(meta)
      break
    }
    case 'title': {
      document.title = props.children
      break
    }
    default:
      throw new Error(`Unsupported markup type: ${type}`)
  }
}

export const removeMarkups = (
  document: Document,
  selectors: Array<string>
): void => {
  if (selectors.length === 0) {
    return
  }

  const nodesSelectors = selectors.map((selector) => `head>${selector}`)
  const nodes = document.querySelectorAll(nodesSelectors.join(','))

  for (let elementIndex = 0; elementIndex < nodes.length; elementIndex++) {
    nodes[elementIndex].remove()
  }
}
