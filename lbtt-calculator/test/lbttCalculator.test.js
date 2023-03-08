import { lbttCalculator } from "../src/lbttCalculator";
import {test, expect} from "@jest/globals"; 

test('initial test functin to return 0', ()=>{
    // Arrange - set up the data
    const propertyPrice = 0;
    // Act - call the function
    const result = lbttCalculator(propertyPrice)
    // Assert 
    expect(result).toBe(0)

} )