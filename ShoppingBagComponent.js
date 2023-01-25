import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ShoppingBagComponent = (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={370}
      height={370}
      viewBox="0 0 37.035 37.035"
      xmlSpace="preserve"
      {...props}
    >
      <Path fill="black" d="m33.228 37.035.921-2.104-1.177-27.446h-7.884C24.133 3.067 21.695 0 18.773 0c-2.925 0-5.356 3.067-6.315 7.485H4.794L2.887 35.518l1.231 1.518h29.11zM22.885 11.692a1.32 1.32 0 1 0 2.637 0c0-.211-.004-.424-.008-.633a2.056 2.056 0 1 1-3.333 1.609c0-.607.269-1.154.688-1.529.01.182.016.368.016.553zm-4.112-9.05c1.377 0 2.862 1.863 3.613 4.844h-7.228c.754-2.979 2.24-4.844 3.615-4.844zm-6.742 8.483c-.006.188-.009.378-.009.567a1.32 1.32 0 0 0 2.641 0c0-.207.006-.412.012-.617a2.055 2.055 0 1 1-3.35 1.595c.003-.616.275-1.17.706-1.545z" />
    </Svg>
  )
  

export default ShoppingBagComponent

// import { SvgXml } from "react-native-svg";  
// import React  from "react";

// export function ShoppingBagComponent() {
//     const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"/></svg>`
//     const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;  
  
//     return <SvgImage />;
// }