
// Refactor plan:

//write a main function that computes LBTT for property purchase
    // input parameters to consider:  
        // transactionDate : Date passed as String in format "YYYY-MM-DD"
        // propertyType : String
        // purchasePrice :  Number   
        // isADSapply : Boolean (initialize to false)
        // otherPropertyPrice: Number (initialize to 0)
        // isFirstTimeBuyer : Boolean (initialize to false)
        // isLinkedTransaction : Boolean (initialize to false)
    // output : {LBTT, ADS, firstTimeBuyerRelief, totalTax}
    // think about error handling
    

    //function lbttCalculator (transactionDate, propertyType, purchasePrice, isADSapply, otherPropertyPrice, isFirstTimeBuyer) {
        // initialize LBBT variable to 0

        // if transactionDate is before 1 April 2015
            // return -1 (LBTT not applicable)

        // if propertyType is residential
            // if transactionDate is equal or greater than 1 April 2021 OR transactionDate is less than 15 July 2020
                
                // get BandApril2021
                // call LBTTResidential function 
                // add the result to LBTT

                // if firstTimeBuyer is true
                    // call LBTTfirstTimeBuyerRelief function
                    // subtract the result to LBTT 
                    
                    
            // else if transactionDate is equals or greater than 15 july 2020 && transactionDate is less than 1 April 2021 
                // get BandJuly2020
                // call LBTTResidential function 
                // add the result to LBTT
                // set firstTimeBuyerRelief to 0

            // else 
                // return -1 (error)
            

            // if isADSapply is true
                // call ADS function 
                // add the result to LBTT

        // else if propertyType is commercial 
            //EDIT HERE
            
        // ALSO REFACTOR TO INCLUDE LINKED TRANSACTION - will affect LBTT calculation (ADS may apply)
    //}


//----------------------------//

//write a function that computes the LBTTBand category
    // depends on year of transaction

    // function lbttBandCategory (transactionDate){
        // if transactionDate is equal or greater than 1 April 2021 OR transactionDate is less than 15 July 2020
            // residential property purchased on 1 April 2021 onwards: 
            // price 145000 or less - 0% LBTT
            // price between £145,001 to £250,000 - 2% LBTT
            // price between  £250,001 to £325,000 - 5% LBTT
            // price between £325,001 to £750,000 - 10% LBTT
            // price over £750,000  - 12% LBTT
            // return BandApril2021

        // else if transactionDate is equals or greater than 15 july 2020 && transactionDate is less than  to 1 April 2021
             // residential property purchased between 15 July 2020 to 31 March 2021 (inclusive):
            //price £250,000 or less - 0% LBTT
            // return BandJuly2020

        // else
            // return -1 (error)

    // }

//-----------------------------//
    // function firstTimeBuyerRelief ( propertyPrice ) {
        // residential property price £175,000 or less - 0% LBTT

        //conditions:
            //if transaction is between 15 July 2020 and 1 April 2021, first time buyer relief do not apply
            //if ADS applies, first time buyer relief do not apply

        // error handling
    //}


   

//-----------------------------//

// write a function to compute ADS
      // input parameter : propertyPrice, transactionDate
      // output : ADS
        // function ADS ( propertyPrice, transactionDate ) {
            // transaction on or after 16 December 2022 - 6% of the purchase price
            // transaction on or after 25 January 2019 - 4% of the purchase price
            // transaction prior to 25 January 2019 - 3% of the purchase price
            
            // error handling    
                //if propertyPrice is negative
                //if propertyPrice is string
                //if otherPropertyPrice is greater than purchasePrice
        // }


//write a function to compute LBTT for residential property purchase
export function lbttCalculator ( transactionDate, purchasePrice, isADSapply = false, otherPropertyPrice = 0, isFirstTimeBuyer = false ) { 
    //initialize variables
    let lbttDue = 0
    let remainingPurchasePrice = purchasePrice
    let firstTimeBuyerRelief = 0
    let adsDue = 0
    let lbttTaxTotal = 0

    
    //get the LBTT band category
    
    
    //compute LBTT for residential property purchase
    //loop through the LBTT band array
    //compute amount of tax due in each band 
    //keep track of remaining taxable property price 
    //break the loop if remaining taxable property price is 0 or less


    //write for loop
        //exit the loop if remainingPurchasePrice is less than 0
        

        //get variables of the current band from lbtt array
       
        
        //get the value of the lower limit. 
        //exception for if index is 0, set the lower limit to 0
       

        //compute lbtt due in each band iteratively
        //first, initialize a taxable amount variable to 0
        //if propertyPrice is under the top limit for a band,
            //taxable amount is equivalent to the price over the lower limit. 
        //if properetyPrice is greater than the top limit, 
            //taxable amount is eqivalent to the min and max threshold of the band
            //ie: taxable amount = top limit - low limit
       
        
        // compute lbtt tax in this band 
            //lbttInBand = lbttRate*taxableAmount
       

        //add lbtt tax in this band to the lbttDue variable
        

        //substract taxedAmount from the remainingPurchasePrice
        
    

    //if ADS apply

    if(isADSapply){
        //compute ADS due
        adsDue = ADS(transactionDate, otherPropertyPrice)
    }

    //if first time buyer relief applies 
    if(isFirstTimeBuyer && (transactionDate >= '2021-04-01' || transactionDate < '2020-07-15')){
        //compute the first time buyer relief

        //initialize priceLimitFTB to £175000

        //if the purchasePrice is less than or equal to £175000, 
            //the first time buyer relief is lbttDue
        //if the purchasePrice is greater than £175000
            // the first time buyer relief is equal to
            //(£175000 - £145000) * 0.02
            //OR (£175000 - lbttBand[0].priceLimit) * lbttBand[1].lbttRate


    }

    //compute total tax
    //take account ADS and firstTimeBuyerRelief 
    lbttTaxTotal = lbttDue + adsDue - firstTimeBuyerRelief

    let lbttObject = { LBTT : lbttDue,
                ADS : adsDue,  
                firstTimeBuyerRelief : firstTimeBuyerRelief,
                totalTax : lbttTaxTotal  
    }
    
    //return lbttObject
    return 0
}


export function lbttBandCategory(transactionDate){
    //define LBTT bands in an array that stores the LBTT band based on the upper threshold for each band
    const lbttBandApril2021 = [
        {priceLimit: 145000, lbttRate: 0},
        {priceLimit: 250000, lbttRate: 0.02},
        {priceLimit: 325000, lbttRate: 0.05},
        {priceLimit: 750000, lbttRate: 0.1},
        {priceLimit: Infinity, lbttRate: 0.12}
    ]    

    const lbttBandJuly2020 = [
        {priceLimit: 145000, lbttRate: 0},
        {priceLimit: 250000, lbttRate: 0},
        {priceLimit: 325000, lbttRate: 0.05},
        {priceLimit: 750000, lbttRate: 0.1},
        {priceLimit: Infinity, lbttRate: 0.12}
    ]    

    if (transactionDate >= '2021-04-01' || transactionDate < '2020-07-15'){
        return lbttBandApril2021
    }
    else if(transactionDate >= '2020-07-15' && transactionDate < '2021-04-01'){
        return lbttBandJuly2020
    }else {
        return -1
    }

    }

export function ADS(transactionDate, otherPropertyPrice){
    //initialize ADSdue variable
    let ADSdue = 0
    if (transactionDate >= '2022-12-16'){
        ADSdue = 0.06*otherPropertyPrice
    }else if(transactionDate >= `2019-01-25`){
        ADSdue = 0.04*otherPropertyPrice
    }else if(transactionDate < `2019-01-25`){
        ADSdue = 0.03*otherPropertyPrice
    }else{
        return -1
    }
        return ADSdue
    }
    
    






//write a function to compute LBTT for commercial property purchase

//write another main function to compute LBTT for commercial lease transaction



