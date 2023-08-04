let SbiBank = {
    bankName: 'SbiBank',
    location: 'pune',
    accountNo: '99802514586935',
    ifsc: 'SbISBIN0000304',
    interestRate: '6 %',
    showDetails: function () {
      console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`)
    }
  };
  SbiBank.showDetails();
  
  
  
  console.log(`==============================================`);
  
  let AxisBank = {
  
      bankName: "AxisBank",
      location: "mumbai",
      accountNo: "5635367566935",
      ifsc: "UTIB0000135",
      interestRate: "6.6 %",
      showDetails: function(){
        console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
  }
  };
  AxisBank.showDetails();
  
  console.log(`==============================================`);
  
  let hdfcBank = {
  
      bankName: "hdfcBank",
      location: "Goa",
      accountNo: "56354345786935",
      ifsc: "HDFC0CSGUCB",
      interestRate: "9.6 %",
      showDetails: function(){
        console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
  }
  };
  hdfcBank.showDetails();
  
  console.log(`==============================================`);
  
  let yesBank  = {
  
      bankName: "yesBank ",
      location: "Pandharpur",
      accountNo: "65353533535",
      ifsc: "YESB0000419",
      interestRate: "9.6 %",
      showDetails: function(){
        console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
  }
  };
  yesBank .showDetails();
  