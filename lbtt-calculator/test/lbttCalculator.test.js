import { lbttCalculator } from "../src/lbttCalculator";
import {test, expect} from "@jest/globals"; 

//test for LBTT on residential property transaction 
//parameters to consider:  
    // date of transaction
    // property type
    // purchase price
    // isADSapply
    // isFirstTimeBuyer
    // isLinkedTransaction

//test to cover the following scenarios:
    // residential property purchase before April 2015 - LBTT not applicable
    // residential property purchased on 1 April 2021 onwards: 
        // price 145000 or less - 0% LBTT
        // price between £145,001 to £250,000 - 2% LBTT
        // price between  £250,001 to £325,000 - 5% LBTT
        // price between £325,001 to £750,000 - 10% LBTT
        // price over £750,000  - 12% LBTT

        // first time buyer relief: 
            // residential property price £175,000 or less - 0% LBTT
    
    // residential property purchased between 15 July 2020 to 31 March 2021 (inclusive):
        //price £250,000 or less - 0% LBTT

    // residential property purchased before 15 July 2020:
        // same rate as 1 April 2021 onwards, but without first time buyer relief

    // with ADS apply:
        // transaction on or after 16 December 2022 - 6% of the purchase price
        // transaction on or after 25 January 2019 - 4% of the purchase price
        // transaction prior to 25 January 2019 - 3% of the purchase price



// test case example
    // buyer owns a property as main residence 
    // buyer sells the property and buys another property as main residence  -- ADS do not apply
    // buyer do not own any other property
    // buyer is not first time buyer


test('initial test functin to return 0', ()=>{
    // Arrange - set up the data
    const propertyPrice = 0;
    // Act - call the function
    const result = lbttCalculator(propertyPrice)
    // Assert 
    const expected = 0
    expect(result).toBe(expected)

} )