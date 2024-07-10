import React from "react";

function Title( { children, id }) {
  return (
   <h1 
    id={id && id}
    className="text-3xl font-bold underline underline-offset-8 decoration-4 mb-8 text-stone-900"
   >
    {children}
   </h1> 
  )

}

export default Title;
