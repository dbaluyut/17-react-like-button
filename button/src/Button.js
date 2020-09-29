import React, { useState } from "react"

function plusOne() {}

function Button() {
  let count = 0

  return (
    <button
      onClick={function () {
        count = count + 1
      }}
    >
      {" "}
      {count}test
    </button>
  )
}

export default Button
