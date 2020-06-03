# React useHoverDirection

![Example usage](https://user-images.githubusercontent.com/38357771/53678998-b326c680-3c94-11e9-8e4f-f65feee8651f.gif)

## Installation

```shell
npm i @shwilliam/react-use-hover-direction
```

## Usage

Import `useHoverDirection` and call it in your React component with a `ref` to
the target component. For example:

```jsx
import React, {useRef} from 'react'
import {useHoverDirection} from '@shwilliam/react-use-hover-direction'

export const App = () => {
  const boxRef = useRef()
  const mouseDirection = useHoverDirection(boxRef)

  return (
    <>
      <div ref={boxRef}>Hover me</div>

      <p>
        {mouseDirection.x} {mouseDirection.y}
      </p>
    </>
  )
}
```

## Development

To start local development, simply install npm dependencies (`npm i`) and run
`npm run dev` to watch ts files in `src/`. Built files can be found in `dist/`.

## Demo

To run the demo, ensure you have run the build script and have a `dist` dir in
your project root. Then run `npm run demo:setup` to copy these to the demo.
Navigate to the demo and install its dependencies (`cd demo && npm i`). You can
now start the demo app locally by running `npm start`.

## Contributing

This project is open to and encourages contributions! Feel free to discuss any
bug fixes/features in the [issues](https://github.com/shwilliam/react-use-hover-direction/issues).
If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/react-use-hover-direction)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/react-use-hover-direction/pull/new/master)
