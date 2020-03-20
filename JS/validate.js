(function () {
    const firstName              =document.getElementById("firstName");
    const lastName               =document.getElementById("lastName");
    const companyName            =document.getElementById("companyName");
    const tel                    =document.getElementById("tel");
    const addressLine1           =document.getElementById("addressLine1");
    const addressLine2           =document.getElementById("addressLine2");
    const addressCity            =document.getElementById("addressCity");
    const addressPostCode        =document.getElementById("addressPostCode");
    const addressCountry         =document.getElementById("addressCountry");
  //  const addressPara            =document.getElementById("addressPara");
    const email                  =document.getElementById("email");
    const Password               =document.getElementById("Password");
    const PasswordConfirm        =document.getElementById("PasswordConfirm");

    const Datepickers            =document.getElementById("Datepickers");
    const Ecommerce             =document.getElementById("E-commerce");
    const Blogs                  =document.getElementById("Blogs");
    const Informational          =document.getElementById("Informational");
    const OnlineCommunity        =document.getElementById("OnlineCommunity");
    const websiteType            =document.getElementById("websiteType");

    const budget                 =document.getElementById("budget");
    const budget3                =document.getElementById("budget3");
    const budget5                =document.getElementById("budget5");
    const budget10               =document.getElementById("budget10");
    const budgetover10           =document.getElementById("budgetover10");

    const search_engine          =document.getElementById("search_engine");
    const newspaper              =document.getElementById("newspaper");
    const recommendation         =document.getElementById("recommendation");
    const others                 =document.getElementById("others");

    const contactUs              =document.getElementById("contactUs");
    const submitBtn              =document.getElementById("submitBtn");
    const submitErrorMsg         =document.getElementById("submitErrorMsg");
    const contactUsErrorPara     =document.getElementById("contactUsErrorPara");

    const bgModal               =document.querySelector(".bg-modal");
    const close                 =document.querySelector(".close");


    const webType                =document.getElementById("webType");
    const YourBudget             =document.getElementById("YourBudget");
    const HowToFindUs            =document.getElementById("HowToFindUs");

    let valid = true;



    /*================= firstName Validation =============== */
    /**
     *  @name   firstNameValidation
     *  @desc   This will validate the firstName input field, No blank value enter allowed;
     *
     */

    function firstNameValidation() {
        if(/^[a-zA-Z ]+$/.test(firstName.value)&&firstName.value.trim()!=0){return valid;}
        else{
            firstName.className="invalidate-Input";
            firstName.nextElementSibling.innerHTML="Please fill valid first name";
            valid=false;
        } //if


    } //firstNameValidation

    firstName.addEventListener("blur", (e) =>{
        firstNameValidation();
    });  // blur event

    firstName.addEventListener("focus", (e) =>{
        firstName.className="";
        firstName.nextElementSibling.innerHTML="";
    });  // focus event




    /*================= lastName Validation =============== */
    /**
     *  @name   lastNameValidation
     *  @desc   This will validate the last Name input field, No blank value enter allowed;
     *
     */

    function lastNameValidation() {
        if(/^[a-zA-Z ]+$/.test(lastName.value)&&lastName.value.trim()!=0){return valid;}
        else{
            lastName.className="invalidate-Input";
            lastName.nextElementSibling.innerHTML="Please fill valid last name";
            valid=false; } //if
    }  //lastNameValidation

    lastName.addEventListener("blur",(e) =>{
        lastNameValidation();
    });  // blur event

    lastName.addEventListener("focus", (e) =>{
        lastName.className="";
        lastName.nextElementSibling.innerHTML="";
    });  // focus event


    /*================= companyName Validation =============== */
    /**
     *  @name   companyName Validation
     *  @desc   This will validate the companyName input field, No blank value enter allowed;
     *
     */


    function companyNameValidation(){
        if(/^[a-zA-Z ]+$/.test(companyName.value)&&companyName.value.trim()!=0){return valid;}
        else{
            companyName.className="invalidate-Input";
            companyName.nextElementSibling.innerHTML="Please fill valid company name";
            valid=false;
        } //if
    }; // companyNameValidation
    companyName.addEventListener("blur",(e) =>{
        companyNameValidation();
    });  // blur event

    companyName.addEventListener("focus", (e) =>{
        companyName.className="";
        companyName.nextElementSibling.innerHTML="";
    });  // focus event


    /*================= telephone Validation =============== */
    /**
     *  @name  telephone Validation
     *  @desc   This will validate uk telephone Number only, no text allowed; Number (uk based mobile and landline 11 digitals only)
     *
     */

    function telephoneNoValidation(){
        if(/^[0-9]{10}$/.test(tel.value)){valid=true;}
        else
        {
            tel.className="invalidate-Input";
            tel.nextElementSibling.innerHTML="Invalid value enter, please fill correctly";
            valid=false;

        } //if
    };// telephoneNoValidation

    tel.addEventListener("blur",(e) =>{
        telephoneNoValidation();
    });  // blur event

    tel.addEventListener("focus", (e) =>{
        tel.className="";
        tel.nextElementSibling.innerHTML="";
    });  // focus event




    /*================= Address Validation =============== */
    /**
     *  @name  AddressValidationLine1 Validation
     *  @desc   This will validate the address input field, No blank value enter allowed;
     *
     */
    function AddressValidationLine1()  {

        if(/^[0-9 ]+$/.test(addressLine1.value)&&addressLine1.value.trim()!=0){valid=true;}
        else{
            addressLine1.className="invalidate-Input";
            addressLine1.nextElementSibling.innerHTML="Please fill valid house number";
            valid=false;}

    }//AddressValidationLine1

    addressLine1.addEventListener("blur",(e) =>{
        AddressValidationLine1();
    });  // blur event

    addressLine1.addEventListener("focus", (e) =>{
        addressLine1.className="";
        addressLine1.nextElementSibling.innerHTML="";
    });  // focus event


    /**
     *  @name  AddressValidationLine2 Validation
     *  @desc   This will validate the address input field, No blank value enter allowed;
     *
     */
    function AddressValidationLine2()  {



        if(/^[A-z]{2,10}\s(Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St|avenue|lane|road|boulevard|drive|street|ave|dr|rd|blvd|ln|stgardens|garden)/i.test(addressLine2.value)&&addressLine2.value.trim()!=0){valid=true;}
        else{
            addressLine2.className="invalidate-Input";
            addressLine2.nextElementSibling.innerHTML="Please fill valid street name";
            valid=false;}

    }//AddressValidationLine2

    addressLine2.addEventListener("blur",(e) =>{
        AddressValidationLine2();
    });  // blur event

    addressLine2.addEventListener("focus", (e) =>{
        addressLine2.className="";
        addressLine2.nextElementSibling.innerHTML="";
    });  // focus event


    /**
     *  @name  AddressValidationCity Validation
     *  @desc   This will validate the address input field, No blank value enter allowed;
     *
     */
    function AddressValidationCity()  {
        if(/(Bath|Birmingham|Bradford|Brighton|and|Hove|Bristol|Cambridge|Canterbury|Carlisle|Chester|Chichester|Coventry|Derby|Durham|Ely|Exeter|Gloucester|Hereford|Kingston|Upon|Hull|Lancaster|Leeds|Leicester|Lichfield|Lincoln|Liverpool|City|of|London|Manchester|ewcastle|upon|Tyne|Norwich|Nottingham|Oxford|Peterborough|Plymouth|Portsmouth|Preston|Ripon|Salford|Salisbury|Sheffield|Southampton|St|Albans|Stoke-on-Trent|Sunderland|Truro|Wakefield|Wells|Westminster|Winchester|Wolverhampton|Worcester|York|Bangor|Cardiff|Newport|Davids|Swansea|Aberdeen|Dundee|Edinburgh|Glasgow|Inverness|Stirling|Armagh|Belfast|Londonderry|Lisburn|Newry)/gi.test(addressCity.value)&&addressCity.value.trim()!=0){valid=true;}
        else{
            addressCity.className="invalidate-Input";
            addressCity.nextElementSibling.innerHTML="Please fill valid city name";
            valid=false;}

    }//AddressValidationCity

    addressCity.addEventListener("blur",(e) =>{
        AddressValidationCity();
    });  // blur event

    addressCity.addEventListener("focus", (e) =>{
        addressCity.className="";
        addressCity.nextElementSibling.innerHTML="";
    });  // focus event



    /**
     *  @name  addressPostCode Validation
     *  @desc   This will validate the address input field, No blank value enter allowed;
     *
     */
    function AddressValidationPostCode()  {
        if(/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/gi.test(addressPostCode.value)&&addressPostCode.value.trim()!=0){valid=true;}
        else{
            addressPostCode.className="invalidate-Input";
            addressPostCode.nextElementSibling.innerHTML="Please fill valid postcode";
            valid=false;}

    }//AddressValidationCity

    addressPostCode.addEventListener("blur",(e) =>{
        AddressValidationPostCode();
    });  // blur event

    addressPostCode.addEventListener("focus", (e) =>{
        addressPostCode.className="";
        addressPostCode.nextElementSibling.innerHTML="";
    });  // focus event





    /*================= Email Validation =============== */
    /**
     *  @name  Email Validation
     *  @desc   This will validate the valid Email address input field, the valid email will include: "@ " and "."
     *
     */

    function EmailValidation(){
        let EmailValidate  = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,10})?$/;

        if(EmailValidate.test(email.value)
        ){valid=true; }
        else {
            email.className="invalidate-Input";
            email.nextElementSibling.innerHTML="Please fill valid email";
            valid=false;
        }  //if
    } //   EmailValidation

    email.addEventListener("blur",(e) =>{
        EmailValidation();
    });  // blur event


    email.addEventListener("focus", (e) =>{
        email.className="";
        email.nextElementSibling.innerHTML="";
    });  // focus event




    /*================= Password Validation =============== */
    /**
     *  @name  Password Validation
     *  @desc  Password must be at least 6 digital, less than 20 digital
     *
     */

    function PasswordValidation() {
        if (Password.value.length < 6 || Password.value.length > 20) {
            Password.className = "invalidate-Input";
            Password.nextElementSibling.innerHTML = "Password need to be least 6 digital long , and less than 20 digital";
            valid = false;
        }  //if

    }// PasswordValidation
    Password.addEventListener("blur",(e) =>{
        PasswordValidation();
    });  // blur event


    Password.addEventListener("focus", (e) =>{
        Password.className="";
        Password.nextElementSibling.innerHTML="";
    });  // focus event


    /*================= PasswordConfirm Validation =============== */
    /**
     *  @name  PasswordConfirm Validation
     *  @desc  Password must be same as Password enter previous
     *
     */

    function PasswordConfirmValidation() {
        if (PasswordConfirm.value !== Password.value) {
            PasswordConfirm.className = "invalidate-Input";
            PasswordConfirm.nextElementSibling.innerHTML = "Password must be same as entered previous";
            valid = false;

        }  //if
    }//PasswordValidation
    PasswordConfirm.addEventListener("blur",(e) =>{
        PasswordConfirmValidation();
    });  // blur event

    PasswordConfirm.addEventListener("focus", (e) =>{
        PasswordConfirm.className="";
        PasswordConfirm.nextElementSibling.innerHTML="";
    });  // focus event

    /*================= appointmentDate Validation =============== */
    /**
     *  @name  appointmentDate Validation
     *  @desc  The date should not be blank value, and at lease after current date;
     *
     */

    function appointmentDateValidation() {
        if (Datepickers.value.length === 0) {
            Datepickers.className = "invalidate-Input";
            Datepickers.nextElementSibling.innerHTML = "Please select appointment date";
            valid = false;
        }  //if

    } // PasswordValidation
    Datepickers.addEventListener("blur",(e) =>{
        setTimeout(function (){appointmentDateValidation()},300);

    });  // blur event

    Datepickers.addEventListener("focus", (e) =>{
        Datepickers.className="";
        Datepickers.nextElementSibling.innerHTML="";
    });  // focus event



    /*================= type of website Validation =============== */
    /**
     *  @name  type of website Validation
     *  @desc  Need select at least 1 checkbox; No blank value enter allowed
     *
     */

    function typeOfWebsite() {

        if (Ecommerce.checked == false && Blogs.checked == false && Informational.checked == false && OnlineCommunity.checked == false && websiteType.checked == false) {
            webType.style.color = "red";
            webType.innerHTML = " You need select at least one option"
            valid = false;
        } //if
    } // typeOfWebsite

    $("input[name='websiteType']").click(function () {
        webType.style.color = "";
        webType.innerHTML = "";
        typeOfWebsite();

    });


    /*================= budget Validation =============== */
    /**
     *  @name  budget  Validation
     *  @desc  Need select 1 option; No blank value enter allowed
     *
     */
    function budgetValidation() {

        if (budget.checked === false && budget3.checked === false && budget5.checked === false && budget10.checked === false && budgetover10.checked === false) {
            YourBudget.style.color = "red";
            YourBudget.innerHTML = "You need select one option"
            valid = false;
        } //if
    } //budgetValidation


    $("input[name='budgets']").click(function () {
       // alert('you clicked');
        YourBudget.style.color = "";
        YourBudget.innerHTML = "";
        budgetValidation();
    });







    /*================= How-to-find Validation =============== */
    /**
     *  @name  How-to-find  Validation
     *  @desc  Need select 1 option; No blank value enter allowed
     *
     */
    function howToFind() {

        if (search_engine.checked === false && newspaper.checked === false && recommendation.checked === false && others.checked === false) {
            HowToFindUs.style.color = "red";
            HowToFindUs.innerHTML = "You need select one option"
            valid = false;
        } //if
    }//howToFind

    $("input[name='media']").click(function () {

        HowToFindUs.style.color = "";
        HowToFindUs.innerHTML = "";
        howToFind();
    });


    /*================= contactUs  length Validation =============== */
    /**
     *  @name  countWords
     *  @desc  This will validate and count the words number in textarea
     *
     */
     let WordsNo;
     let WordsNoCount;
    function countWords(){

        WordsNo = document.getElementById("contactUs").value;
        WordsNo = WordsNo.replace(/(^\s*)|(\s*$)/gi,"");
        WordsNo = WordsNo.replace(/[ ]{2,}/gi," ");
        WordsNo = WordsNo.replace(/\n /,"\n");
        WordsNoCount = WordsNo.split(' ').length;

    };

    /*================= contactUs  length Validation =============== */
    /**
     *  @name  contactUs  length  Validation
     *  @desc   Lengths need at least 100
     *
     */

    function contactUsValidation() {

        if (WordsNoCount < 100) {
            contactUs.className = "invalidate-Input";
            contactUsErrorPara.style.color = "red";
            contactUsErrorPara.innerHTML = "Write more than 100 words to describe details of requirement";
            valid = false;
        }   //if
    }//contactUsValidation


    contactUs.addEventListener("blur",(e) =>{
        countWords();
        contactUsValidation();
    });  // blur event


        contactUs.addEventListener("focus", (e) =>{
            contactUs.className = "";
            contactUsErrorPara.style.color = "";
            contactUsErrorPara.innerHTML = "";
        });  // focus event


    /*=================bindBtns =============== */
    /**
     *  @name
     *  @desc
     *
     */

    function bindBtns() {
        submitBtn.addEventListener('click',function(e) {
            e.preventDefault(); // this line will prevent submission
            validateForm();
            submissionComMsg();
            ModalClose();


        });

    } //bindBtns

    /*================= RemoveErrorMessage  =============== */
    /**
     *  @name   RemoveErrorMessage
     *  @desc  Remove Error Message
     *
     */


    function RemoveErrorMessage() {

        const errorinput             =document.querySelectorAll(".invalidate-Input");
        const errorPara              =document.querySelectorAll(".error");


        [].forEach.call(errorinput, function (el){
            el.classList.remove("invalidate-Input");});

        [].forEach.call(errorPara, function (el){
            el.innerHTML = ""; })
    } //RemoveErrorMessage


    /*================= Form Validation =============== */
    /**
     *  @name    validateForm
     *  @desc
     *
     */
    function validateForm(){
        RemoveErrorMessage();
        firstNameValidation();
        lastNameValidation();
        companyNameValidation();
        telephoneNoValidation();

        AddressValidationLine1();
        AddressValidationLine2();
        AddressValidationCity();
        AddressValidationPostCode();
     //   AddressValidationCountry();

        EmailValidation();
        PasswordValidation();
        PasswordConfirmValidation();
        appointmentDateValidation();
        typeOfWebsite();
        budgetValidation();
        howToFind();
        countWords();
        contactUsValidation();
        ModalDisplay();



    } // validateForm()


    /*================= submission confirmation message =============== */
    /**
     *  @name  submission confirmation error message
     *  @desc   form without filled correctly, this will show the error message
     *
     */

    function submissionComMsg() {

        if (valid !== true) {
            submitErrorMsg.innerHTML = "Please check all form fields fill correctly before you submit";
            submitErrorMsg.style.color = "red";
        }   //if
    }//submissionComMsg



    /*================= Modal Confirmation=============== */
    /**
     *  @name  ModalDisplay
     *  @desc  after click button, validate date, then it will pop up comfirmation message
     *
     */

    function ModalDisplay() {
        submitBtn.addEventListener("click",function () {
            if (valid===true)
            {bgModal.style.display = "flex";}})
    } // ModalDisplay

    /**
     *  @name  ModalClose
     *  @desc  It will close the confirmation pop up button
     *
     */


    function ModalClose() {
        close.addEventListener("click", function () {
            bgModal.style.display = "none";
        });
    } // ModalClose



    /*================= Textarea real time words counter =============== */
    /**
     *  @name  Textarea words counter
     *  @desc  this will count the textarea words input in real time
     *
     */

       /* $('#contactUs').on('keyup',function () {
            var count = $ ('#contactUs').val().trim().split(' ');
           $("#feedback").text(count.length);
        });
        */

    counter = function(){
        var value =$('#contactUs').val();
        if(value.length == 0){
            $('#feedback').html(0);
            return;
        }; //if

        var regex = /\s+/gi;
        var feedback = value.trim().replace(regex, ' ').split(' ').length;
        $('#feedback').html(feedback);
    };  //counter
    $(document).ready(function() {

        $('#contactUs').change(counter);
        $('#contactUs').keydown(counter);
        $('#contactUs').keypress(counter);
        $('#contactUs').keyup(counter);
        $('#contactUs').blur(counter);
        $('#contactUs').focus(counter);
    });


    /*================= init =============== */
    /**
     *  @name    init function
     *  @desc    Window on load
     *
     */

    function init() {
        bindBtns();



    } //init

    window.addEventListener("load",init) ;



})();  //IIFE