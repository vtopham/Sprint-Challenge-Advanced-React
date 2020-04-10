

import React from 'react';
import {render, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import ColorPicker from './ColorPicker';

it("renders the buttons, also i can click them", () => {
    //arrange
    const {getByText} = render(<ColorPicker />)
    const redButton = getByText("I like red")
    const blueButton = getByText("I like blue")

    //act - clicky
    fireEvent.click(redButton)
    fireEvent.click(blueButton)

    //assert
    expect(redButton).toBeVisible()
    expect(blueButton).toBeVisible()

})

