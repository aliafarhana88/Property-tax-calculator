import { lbttCalculator , ADS, lbttBandCategory } from "../src/lbttCalculator";
import {test, expect} from "@jest/globals"; 

//----test for LBTT on residential property transaction -----//

// --test for main lbttCalculator function--//
//test to cover the following scenarios:
    // residential property purchase before 1 April 2015 - LBTT not applicable
         // return -1 (or error message on the date)    
    
    // residential property purchased on 1 April 2021 onwards OR Before 15 July 2020
        // include case with first time buyer relief: 
        // test for first time buyer with transaction <= £175000, transaction on 1 April 2021 onwards
            // ----case: transaction on 4/12/2021 with purchase price of £175000 should return LBTT of £600, first time buyer relief of £600 and totalTax of 0 ✅
        // test for first time buyer with transaction > £175000, transaction on 1 April 2021 onwards
            // ----case: transaction on 4/12/2021 with purchase price of £200000 should return LBTT of $1100, first time buyer relief of £600 and totalTax of £500 ✅
        //note: first time buyer relief cannot be applied if ADS applies
    
    // residential property purchased between 15 July 2020 and before 1 April 2021
            // ----case: transaction on 4/12/2020 with purchase price of 175000 should return LBTT of 0 (first time buyer relief is 0 even if it applies) ✅
        
    // with ADS apply:
        //----case: property price of 175000 purchase on 17/12/2022 with ADS on £150000 should return LBTT of £600 and ADS of £9000 and totalTax of £9600 ✅
        //----case: property price of 175000 purchased on 4/11/2022 with ADS on 150000 should return LBTT of £600 and ADS of £6000 and totalTax of £6600 ✅


// test case example
    // buyer owns a property as main residence 
    // buyer sells the property and buys another property as main residence  -- ADS do not apply
    // buyer do not own any other property
    // buyer is not first time buyer


//--test for subfunctions used within the main lbttcaltulator function --//
            
// test the lbttResidential function
    // use forEach to test for each band 
    // "purchase price of %s should return value of %s"

    // example test cases: 
        //LBTT should be 0 for price < 145000
        //LBTT between 145000 and 250000
        //LBTT between 250000 and 325000
        //LBTT between 325000 and 750000
        //LBTT for price above 750000


// test for ADS function  
        // the amount of ADS must be equal or less than the property purchase price
        // test for ADS with transaction on or after 16 December 2022
            //case: property purchase on 17/12/2022 with ADS on £150000 should return ADS of £9000
        // test for ADS with transaction on or after 25 January 2019
            // case: property purchased on 4/11/2022 with ADS on 150000 should return ADS of £6000
        // test for ADS with transaction prior to 25 January 2019



// test for firstTimeBuyerRelief function 

// test for lbttBandCategory function 
    //-- case: transaction on 1/4/2021 will return BandApril2021
    //-- case: transaction on 15/7/2020 will return BandJuly2020
    //-- case: transaction on 14/7/2020 will return BandApril2021

//----------------//

//initial test
test('initial test function to return 0', ()=>{
            // Arrange - set up the data
            const propertyPrice = 0;
            // Act - call the function
            const result = lbttCalculator(undefined, propertyPrice, undefined, undefined, undefined)
            // Assert 
            const expected = 0
            expect(result).toBe(expected)
        
    } )

//----------------//
//test for lbttCalculator function


//----------------//


//test for lbttResidential function

// define array of test cases 
// the array below are specifically for lbttResidential function,
// assume first time buyer relief and ADS do not apply.

// tax amount for price less than 145000
const testCasesA = [[0, 0],
                    [100000, 0],
                    [145000, 0]]
//tax amount for price between 145001 and 250000
const testCasesB = [[146000, 20],
                    [200000, 1100],
                    [250000, 2100]]

// tax amount for price between 250001 and 325000
const testCasesC = [[260000, 2600],
                    [300000, 4600],
                    [325000, 5850]]

// tax amount for price between 325001 and 750000
const testCasesD = [[326000, 5950], 
                    [500000, 23350],
                    [750000, 48350]]

// tax amount for price above 750000
const testCasesE = [[800000, 54350],
                    [1000000, 78350]]

                
//funtion lbttCalculator input argument: (transactionDate, purchasePrice, isADSapply, otherPropertyPrice, isFirstTimeBuyer)
//function return value: {LBTT: number, 
                       // ADS: number,
                       // firstTimeBuyerRelief : number, 
                        //totalTax:number}

//test code for main function 
describe("tests for lbttCalculator function", ()=>{
    test.each(testCasesA)("LBTT for price < 145000. Price of %s should return LBTT of %s", (propertyPrice, expectedLBTT) =>{
        // const result = lbttCalculator("2022-11-4", propertyPrice, undefined, undefined, undefined)
        // const lbttResult = result.LBTT
        // expect(lbttResult).toBe(expectedLBTT)
    } )

    test.each(testCasesB)("LBTT for price between 145001 and 250000. Price of %s should return LBTT of %s", (propertyPrice, expectedLBTT) =>{
        //Arrange - specify the transactionDate to be "2022-11-4", and leave other parameters as undefined
        //Act - call the function
        //Assert - expect actual results to be expected results. 
    })

    test.each(testCasesC)("LBTT for price between 250001 and 325000. Price of %s should return LBTT of %s", (propertyPrice, expectedLBTT)=>{
        //Arrange - specify the transactionDate to be "2022-11-4"
       
    })

    test.each(testCasesD)("LBTT for price between 325001 and 750000. Price of %s should return LBTT of %s", (propertyPrice, expectedLBTT)=>{
        //specify transactionDate to be "2022-11-4"
       
    })

    test.each(testCasesE)("LBTT for price above 750000. Price of %s should return LBTT of %s", (propertyPrice, expectedLBTT)=>{
        //specify transactionDate to be "2022-11-4"
       
    })
})


//----test ADS function ----//

//test cases
const testCasesADS2 = [["2022-12-17", 150000, 9000],
                    ["2022-11-4", 150000, 6000]]

describe("tests for ADS function", ()=>{
    test.each(testCasesADS2)("case with ADS: transaction on %s with other property price of %s should result with ADS of %s", (date, otherPropertyPrice, expectedADS)=>{
        const result = ADS(date, otherPropertyPrice)
        expect(result).toBe(expectedADS)
    })
})


//----test cases for first time buyer relief------//
//this array represents [date, propertyPrice, LBTT, firstTimeBuyerRelief, totalTax]
const testCasesFTB = [["2021-12-04", 175000, 600, 600, 0],
                    ["2021-12-04", 200000, 1100, 600, 500]]

//----test cases for ADS------//
//this array represents [date, propertyPrice, otherPropertyPrice, LBTT, ADS, totalTax]
const testCasesADS = [["2022-12-17", 175000, 150000, 600, 9000, 9600],
                    ["2022-11-4", 175000, 150000, 600, 6000, 6600]]


//funtion lbttCalculator input argument: (transactionDate, purchasePrice, isADSapply, otherPropertyPrice, isFirstTimeBuyer)
//function return value: {LBTT: number, 
                       // ADS: number,
                       // firstTimeBuyerRelief : number, 
                        //totalTax:number}





//------test for transaction between 15 July2020 and before 1 April 2021----//

// test("property purchased between 15 July 2020 and before 1 April 2021", ()=>{
//     const result = lbttCalculator("2020-12-04", 175000, undefined, undefined, undefined)
//     const expected = {LBTT: 0, ADS: 0, firstTimeBuyerRelief: 0, totalTax: 0}
//     expect(result).toEqual(expected)

// })




//------------------//

                    
//--other tests to be added--//
// test for error handling
        // test if function will throw error if input is invalid 
            // case of invalid input: propertyPrice is not a number, propertyPrice is negative
    

// test for different property type
// test for accuracy up to two decimal points

// test the other sub functions that computes LBTT in different categories. 