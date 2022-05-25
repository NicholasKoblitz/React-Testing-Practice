import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";


// Smoke Test
it("Should render element", () => {
    render(<Card/>);
});

// Snapshot Test
test("Compare snapshots", () => {
    const {asFragment} = render(<Card/>);
    expect(asFragment()).toMatchSnapshot();
})