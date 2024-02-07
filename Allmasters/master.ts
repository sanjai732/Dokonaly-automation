import { test, expect } from '../Allmaster pom_fixture/all_pom_fixture'
import * as data from "../Allmaster data/Datas.json"
/*
clear cache before start 
mark all as read in notification
check with email id, details for customer in db
partner mail id 
logout from all valid mail id like admin, ot, partner and customer
there should be no schedule
change the date in holiday excel
*/
test.describe.skip("Country", async () => {
  
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(90000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

  })
  test("check all the fields with validation and add one country (INDIA -> ACTIVE)", async ({ page, adminpg, loginpg, baseURL }) => {

    await adminpg.country_head()
    await adminpg.search_country(data.countryname)   //change
    await adminpg.search_country("India")   //change
    await adminpg.no_rows()
    await adminpg.add_country()
    await adminpg.save_country()
    await adminpg.coun_name_req()
    await adminpg.coun_code_req()
    await adminpg.coun_region_req()
    await adminpg.coun_currency_req()
    await adminpg.coun_rate_req()
    await adminpg.coun_phonecode_req()
    await adminpg.coun_phoneformat_req()
    await expect(page.locator("//p[text()='Time Zone is required']")).toBeVisible()

    await adminpg.country(data.splcharacter_data)
    await adminpg.coun_name_req1()
    await adminpg.country(data.numeric_data)
    await adminpg.coun_name_req1()
    await adminpg.country(data.space_data)
    await adminpg.coun_name_req()
    await adminpg.country(data.countryname)

    await adminpg.countrycode(data.splcharacter_data)
    await adminpg.coun_code_req1()
    await adminpg.countrycode(data.numeric_data)
    await adminpg.coun_code_req1()
    await adminpg.countrycode(data.space_data)
    await adminpg.coun_code_req()
    //  await adminpg.countrycode(data.countrycode)
    //  await adminpg.coun_code_req()
    //  await adminpg.countrycode(data.countrycode_tr)
    //  await adminpg.coun_code_req()
    await adminpg.countrycode(data.countrycode)  //change

    await adminpg.region(data.australia)
    await adminpg.region(data.africa)
    await adminpg.region(data.Namerica)
    await adminpg.region(data.Samerica)
    await adminpg.region(data.Camerica)
    await adminpg.region(data.Europe)
    await adminpg.region(data.asia)


    await adminpg.currency(data.splcharacter_data)
    await adminpg.coun_currency_req1()
    await adminpg.currency("093")
    await adminpg.coun_currency_req1()
    await adminpg.currency(data.space_data)
    await adminpg.coun_currency_req()
    await adminpg.currency(data.countrycode_s)
    await adminpg.curr_code_req()
    await adminpg.currency(data.countrycode_db)
    await adminpg.curr_code_req()
    await adminpg.currency(data.currency)

    await adminpg.rate(data.splcharacter_data)
    await adminpg.coun_rate_req1()
    await adminpg.rate(data.space_data)
    await adminpg.coun_rate_req()
    await adminpg.rate(data.alphabets_data)
    await adminpg.coun_rate_req1()
    await adminpg.rate(data.zero_data)
    await adminpg.coun_rate_req2()// rate zero validation msg was here chce
    await adminpg.rate(data.rate)

    await adminpg.phonecode(data.splcharacter_data)
    await adminpg.coun_phonecode_req1()   /// validation msg need to change
    await adminpg.phonecode(data.numeric_data)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.space_data)
    await adminpg.coun_phonecode_req()
    await adminpg.phonecode(data.apl_phonecode)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.spl_phonecode)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.phonecode)

    await adminpg.numberformat(data.splcharacter_data)
    await adminpg.coun_phoneformat_req1()
    await adminpg.numberformat(data.space_data)
    await adminpg.coun_phoneformat_req()
    await adminpg.numberformat(data.alphabets_data)
    await adminpg.coun_phoneformat_req1()
    await adminpg.numberformat(data.numeric_data)
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("Asia/Kolkata")
    //  await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
    await page.waitForTimeout(1000)
    await adminpg.search_country(data.countryname)
    await adminpg.search_country("India")   //change
    await adminpg.search_country_one()  
    await page.locator("(//div[contains(@class,'MuiDataGrid-cell--withRenderer MuiDataGrid-cell')]//div)[3]").click()
    await expect(page.locator("//input[@value='india']")).toHaveValue("India")
    await expect(page.locator("//select[@name='region']")).toHaveValue("Asia")//disabled fiedl can't able to assert
    await expect(page.locator("//input[@value='inr']")).toHaveValue("INR")
    await expect(page.locator("//input[@placeholder='Enter Exchange Rate']")).toHaveValue("1")
    await expect(page.locator("//input[@placeholder='Enter Phone Code']")).toHaveValue("+91")
    await expect(page.locator("//input[@placeholder='Enter Phone Number']")).toHaveValue("1234567890")
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()


  })
  test("check that able to add country with same details like same country name and code (NOT ADDED)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country(data.countryname)
    await adminpg.countrycode(data.countrycode)
    await adminpg.region(data.asia)
    await adminpg.currency(data.currency)
    await adminpg.rate(data.rate)
    await adminpg.phonecode(data.phonecode)
    await adminpg.numberformat(data.numeric_data)
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("Asia/Kolkata")
    await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.errortoast()
  })
  test("check that able to add country with same details with different country name and code (UAE -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country(data.countryname1)
    await adminpg.countrycode(data.countrycode1)
    await adminpg.region(data.asia)
    await adminpg.currency("aed")
    await adminpg.rate("0.044")
    await adminpg.phonecode("+971")
    await adminpg.numberformat("1234567")
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("Asia/Dubai")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
    await adminpg.search_country(data.countryname1)
    await adminpg.search_country("United Arab Emirates")
    await adminpg.search_country_one()

  })
  test("check that able to add country with same details with different country name and code (CAN -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country("Canada")
    await adminpg.countrycode("ca")
    await adminpg.region(data.Namerica)
    await adminpg.currency("cad")
    await adminpg.rate("60.25")
    await adminpg.phonecode("+1")
    await adminpg.numberformat("1234567980")
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("America/Cambridge_Bay")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
    await adminpg.search_country(data.countryname1)
    await adminpg.search_country("Canada")
    await adminpg.search_country_one()

  })
  test("Add one country edit each and every field and check for duplicates also (USA -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country("united states of america")
    await adminpg.countrycode("us")
    await adminpg.region(data.Namerica)
    await adminpg.currency("usd")
    await adminpg.rate("83.18")
    await adminpg.phonecode("+1")
    await adminpg.numberformat("1234567809")
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("America/Chicago")
    await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()

    await adminpg.search_country("United States Of America")
    await adminpg.search_country_one()
    await adminpg.edit_country()


    await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()

    await adminpg.search_country("united states of america")
    await adminpg.search_country_one()
    await adminpg.edit_country()

    await adminpg.country("india")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
    await page.waitForTimeout(2000)

    // await adminpg.countrycode("in")
    // //await adminpg.Inactive()
    // await adminpg.save_country()
    // await adminpg.pop_up_yes()
    // await adminpg.duptoast()
    await adminpg.country("united states of america")
//    await adminpg.countrycode("us")
    await adminpg.region(data.Europe)
    await adminpg.currency("dfr")
    await adminpg.rate("8")
    await adminpg.phonecode("+102")
    await adminpg.numberformat("123456789")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()
  })
  test("search the country in another country filter (SEARCH INDIA IN AFRICA FILTER)", async ({ adminpg }) => {
    await adminpg.filters()
    await adminpg.filter_Africa()
    await adminpg.search_country(data.countryname)
    await adminpg.no_rows()
  })
  test("search the country in same country filter (SEARCH USA IN EUROPE FILTER)", async ({ adminpg, page }) => {
    await adminpg.filters()
    await adminpg.filter_Europe()
    await adminpg.search_country("united states of america")
    await adminpg.search_country_one()
  })
})//done

test.describe("Register personal details", async () => {
  test.beforeEach(async ({ baseURL, page }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
  })
  test("checking the register personal details with validation message for UAE country", async ({ page, loginpg, adminpg }) => {
    
    // await page.locator("//button[text()='Register']").click()
    // await page.locator("//input[@type='checkbox']").click()
    // await page.locator("//button[text()='Get Started']").click()
    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("mohammed nabi")
    // const till = await page.locator("//select[@name='designation']")
    // await till.selectOption("Procurement")
    // const tils = await page.locator("//select[@name='mobileCode']")
    // await tils.selectOption("+971")        
    // await page.locator("//input[@placeholder='Enter Mobile Number']").fill("3233222")       /// change
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("mohammed.nabi@dokonaly.com") /// change email everytime
    // await page.locator("(//input[@type='password'])[1]").fill("Doko@2023")
    // await page.locator("(//input[@type='password'])[2]").fill("Doko@2023")
    // await page.locator("//button[text()='Get Started']").click()
    // await page.pause()
   // otp need to put 
///

await loginpg.select_type(data.type3)
  await loginpg.emailID("obt@ams.com") //change
  await loginpg.password("Doko@2023")
  await loginpg.sign_in()
  await page.waitForTimeout(5000)
  const input = await page.isVisible("//h2[text()='User Already Logged In']")
  if (input) {
    console.log('Pop-up is visible.');
    await page.click("//button[text()='Yes']")
  }
  else {
    console.log('Pop-up is not visible.');
  }

  await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
  await expect(page.locator("//p[text()='1']")).toBeVisible()
  await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
  await expect(page.locator("//button[text()='Mark as all read']")).toBeVisible()
  await expect(page.locator("//button[text()='Next']")).toBeVisible()
  await expect(page.locator("_notidiv_fqyfb_34")).toBeVisible()
  await expect(page.locator("(//h4[contains(.,'user made a registration without completing KYC page')])[1]")).toBeVisible()
  await page.locator("//button[text()='Next']").click()
  await page.locator("//button[text()='Previous']").click()
  await page.reload()
  await page.locator("//li[text()='Sign Out']").click()

  await loginpg.select_type(data.type3)
  await loginpg.emailID("admin@ams.com") //change
  await loginpg.password("Doko@2023")
  await loginpg.sign_in()
  await page.waitForTimeout(5000)
  //const input = await page.isVisible("//h2[text()='User Already Logged In']")
  if (input) {
    console.log('Pop-up is visible.');
    await page.click("//button[text()='Yes']")
  }
  else {
    console.log('Pop-up is not visible.');
  }
  await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
  await expect(page.locator("//p[text()='1']")).toBeVisible()
  await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
  await expect(page.locator("//button[text()='Mark as all read']")).toBeVisible()
  await expect(page.locator("//button[text()='Next']")).toBeVisible()
  await expect(page.locator("_notidiv_fqyfb_34")).toBeVisible()
  await expect(page.locator("(//h4[contains(.,'user made a registration without completing KYC page')])[1]")).toBeVisible()
  await page.locator("//button[text()='Next']").click()
  await page.locator("//button[text()='Previous']").click()
  await page.reload()
  await page.locator("//li[text()='Sign Out']").click()

  await loginpg.select_type(data.type3)
  await loginpg.emailID("ot@ams.com") //change
  await loginpg.password("Doko@2023")
  await loginpg.sign_in()
  await page.waitForTimeout(5000)
  //const input = await page.isVisible("//h2[text()='User Already Logged In']")
  if (input) {
    console.log('Pop-up is visible.');
    await page.click("//button[text()='Yes']")
  }
  else {
    console.log('Pop-up is not visible.');
  }
  await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
  await expect(page.locator("//p[text()='1']")).toBeVisible()
  await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
  await expect(page.locator("//button[text()='Mark as all read']")).toBeVisible()
  await expect(page.locator("//button[text()='Next']")).toBeVisible()
  await expect(page.locator("_notidiv_fqyfb_34")).toBeVisible()
  await expect(page.locator("(//h4[contains(.,'user made a registration without completing KYC page')])[1]")).toBeHidden()
  await page.locator("//button[text()='Next']").click()
  await page.locator("//button[text()='Previous']").click()
  await page.reload()
  await page.locator("//li[text()='Sign Out']").click()

///
    await loginpg.select_type(data.type1)
    await loginpg.emailID("mohammed.nabi@dokonaly.com") // change mail id everytime
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    //const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await expect(page.locator("//select[@name='country']")).toBeDisabled()
    await expect(page.locator("//p[text()='City is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload COI File']")).toBeVisible()
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload BL File']")).toBeVisible()
    
     
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("Mohammed nabi pvt ltd")
    await page.locator("(//input[@role='combobox'])[1]").fill("Dubai")
    await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 

    await page.locator("//input[@placeholder='Enter Trade License']").fill("   ")
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL0198")

    await page.locator("//input[@placeholder='Enter Group Name']").fill("MD Group")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("Dun1300")

///// 
    await page.locator("//input[@id='ci']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='ci']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='bl']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()
   
    await page.locator("//button[text()='Continue']").click()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("Mohammed nabi pvt ltd")
    await page.locator("(//input[@role='combobox'])[1]").fill("Dubai")
    await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 
    await page.locator("//input[@id='ci']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL09989")
    await page.locator("//input[@placeholder='Enter Group Name']").fill("MHDNB")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("LJODd921")
    await page.locator("//button[text()='Continue']").click()
    //verification 24 hrs page
    await expect(page.locator("//h5[text()='Verification']")).toBeVisible()
    await expect(page.locator("//h6[text()='takes upto 24 hrs']")).toBeVisible()
    await expect(page.locator("//p[contains(.,'Since all your docs will be manually verified by our Team')]")).toBeVisible()
    await page.locator("//button[text()='Back to Login']").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()
//after completing kyc page
await loginpg.select_type(data.type3)
await loginpg.emailID("obt@ams.com") //change
await loginpg.password("Doko@2023")
await loginpg.sign_in()
await page.waitForTimeout(5000)
//const input = await page.isVisible("//h2[text()='User Already Logged In']")
if (input) {
  console.log('Pop-up is visible.');
  await page.click("//button[text()='Yes']")
}
else {
  console.log('Pop-up is not visible.');
}
await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
await expect(page.locator("//p[text()='1']")).toBeVisible()
await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
await expect(page.locator("(//h4[contains(.,'made a new registration by completing KYC page')])[1]")).toBeVisible()
await page.reload()
await page.locator("//li[text()='Sign Out']").click()

await loginpg.select_type(data.type3)
await loginpg.emailID("admin@ams.com") //change
await loginpg.password("Doko@2023")
await loginpg.sign_in()
await page.waitForTimeout(5000)
//const input = await page.isVisible("//h2[text()='User Already Logged In']")
if (input) {
  console.log('Pop-up is visible.');
  await page.click("//button[text()='Yes']")
}
else {
  console.log('Pop-up is not visible.');
}
await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
await expect(page.locator("//p[text()='1']")).toBeHidden()
await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
await expect(page.locator("(//h4[contains(.,'made a new registration by completing KYC page')])[1]")).toBeHidden()
await page.reload()
await page.locator("//li[text()='Sign Out']").click()


await loginpg.select_type(data.type3)
await loginpg.emailID("ot@ams.com") //change
await loginpg.password("Doko@2023")
await loginpg.sign_in()
await page.waitForTimeout(5000)
//const input = await page.isVisible("//h2[text()='User Already Logged In']")
if (input) {
  console.log('Pop-up is visible.');
  await page.click("//button[text()='Yes']")
}
else {
  console.log('Pop-up is not visible.');
}
await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
await expect(page.locator("//p[text()='1']")).toBeHidden()
await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
await expect(page.locator("//h4[contains(.,'made a new registration by completing KYC page')]")).toBeHidden()
await expect(page.locator("//h4[contains(.,'user made a registration without completing KYC page')]")).toBeHidden()
await page.reload()
await page.locator("//li[text()='Sign Out']").click()


  })
  test("checking the register personal details with validation message for US country", async ({ page, loginpg, adminpg }) => {
    
    // await page.locator("//button[text()='Register']").click()
    // await page.locator("//input[@type='checkbox']").click()
    // await page.locator("//button[text()='Get Started']").click()
    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("willamson")
    // const till = await page.locator("//select[@name='designation']")
    // await till.selectOption("finance")
    // const tils = await page.locator("//select[@name='mobileCode']")
    // await tils.selectOption("+1")        
    // await page.locator("//input[@placeholder='Enter Mobile Number']").fill("3324387332")       /// change
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("willams@jfre.com") /// change email everytime
    // await page.locator("(//input[@type='password'])[1]").fill("Doko@2023")
    // await page.locator("(//input[@type='password'])[2]").fill("Doko@2023")
    // await page.locator("//button[text()='Get Started']").click()
    // await page.pause()

    // otp need to put 

    await loginpg.select_type(data.type1)
    await loginpg.emailID("willams@jfre.com") // change mail id everytime
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Country is required']")).toBeVisible()
    await expect(page.locator("//p[text()='City is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload COI File']")).toBeVisible()
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload BL File']")).toBeVisible()
    
     
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await page.locator("//select[@name='country']").selectOption("United States Of America")
    await page.locator("(//input[@role='combobox'])[1]").fill("Florida")
    await page.waitForTimeout(7000)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 

    await page.locator("//input[@placeholder='Enter Trade License']").fill("   ")
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL01928")

    await page.locator("//input[@placeholder='Enter Group Name']").fill("MD Group")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("Dun1400")

///// 
    await page.locator("//input[@id='ci']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='ci']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='bl']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()
   
    await page.locator("//button[text()='Continue']").click()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("J f cargo freight pvt ltd")
    await page.locator("//select[@name='country']").selectOption("United States Of America")
    await page.locator("(//input[@role='combobox'])[1]").fill("Florida")
    await page.waitForTimeout(7000)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 
    await page.locator("//input[@id='ci']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL013928")
    await page.locator("//input[@placeholder='Enter Group Name']").fill("jfftrei")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("Duns1400")
    await page.locator("//button[text()='Continue']").click()
    //verification 24 hrs page
    await expect(page.locator("//h5[text()='Verification']")).toBeVisible()
    await expect(page.locator("//h6[text()='takes upto 24 hrs']")).toBeVisible()
    await expect(page.locator("//p[contains(.,'Since all your docs will be manually verified by our Team')]")).toBeVisible()
    await page.locator("//button[text()='Back to Login']").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()


  })
  test("checking the register personal details with validation message for Canada country", async ({ page, loginpg, adminpg }) => {
    
    // await page.locator("//button[text()='Register']").click()
    // await page.locator("//input[@type='checkbox']").click()
    // await page.locator("//button[text()='Get Started']").click()
    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("John")
    // const till = await page.locator("//select[@name='designation']")
    // await till.selectOption("finance")
    // const tils = await page.locator("//select[@name='mobileCode']")
    // await tils.selectOption("+1")        
    // await page.locator("//input[@placeholder='Enter Mobile Number']").fill("3329087332")       /// change
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("john@jf.com") /// change email everytime
    // await page.locator("(//input[@type='password'])[1]").fill("Doko@2023")
    // await page.locator("(//input[@type='password'])[2]").fill("Doko@2023")
    // await page.locator("//button[text()='Get Started']").click()
    // await page.pause()

    // otp need to put 

    await loginpg.select_type(data.type1)
    await loginpg.emailID("john@jf.com") // change mail id everytime
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Country is required']")).toBeVisible()
    await expect(page.locator("//p[text()='City is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload COI File']")).toBeVisible()
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload BL File']")).toBeVisible()
         
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await page.locator("//select[@name='country']").selectOption("Canada")
    await page.locator("(//input[@role='combobox'])[1]").fill("Southampton")
    await page.waitForTimeout(6000)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 

    await page.locator("//input[@placeholder='Enter Trade License']").fill("   ")
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL01528")

    await page.locator("//input[@placeholder='Enter Group Name']").fill("MSD Group")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("Dun1200")

///// 
    await page.locator("//input[@id='ci']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='ci']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='bl']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()
   
    await page.locator("//button[text()='Continue']").click()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("J f freigh pvt ltd")
    await page.locator("//select[@name='country']").selectOption("Canada")
    await page.locator("(//input[@role='combobox'])[1]").fill("Southampton")
    await page.waitForTimeout(6000)
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 
    await page.locator("//input[@id='ci']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL021528")
    await page.locator("//input[@placeholder='Enter Group Name']").fill("J F Fre Group")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("Duns1200")
    await page.locator("//button[text()='Continue']").click()
    //verification 24 hrs page
    await expect(page.locator("//h5[text()='Verification']")).toBeVisible()
    await expect(page.locator("//h6[text()='takes upto 24 hrs']")).toBeVisible()
    await expect(page.locator("//p[contains(.,'Since all your docs will be manually verified by our Team')]")).toBeVisible()
    await page.locator("//button[text()='Back to Login']").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()


  })
  test("checking the register personal details with validation message for India country", async ({ page, loginpg, adminpg }) => {

    // await page.locator("//button[text()='Register']").click()
    // await page.locator("//input[@type='checkbox']").click()
    // await page.locator("//button[text()='Get Started']").click()

    // await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("   ")
    // await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("#$%^&")
    // await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("32132")
    // await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("ravi")

    // const till = await page.locator("//select[@name='designation']")
    // await till.selectOption("IT")

    // const tils = await page.locator("//select[@name='mobileCode']")
    // await tils.selectOption("+91")               /// change 
    // await page.locator("//input[@placeholder='Enter Mobile Number']").fill("9853299910")
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@gmail.com")
    // await expect(page.locator("//p[text()='Enter your official email']")).toBeVisible()
  
    // const dm = 62
    // for (let i = 0; i < dm; i++) {
    //   await adminpg.cfs_email(data.sample[i])
    //   await expect(page.locator("//p[text()='Enter your official email']")).toBeVisible()
    // }

    // await page.locator("(//input[@type='password'])[1]").fill("Doko@2023")
    // await page.locator("(//input[@type='password'])[2]").fill("Doko@2023")
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("ravi@doko.com")
    // await page.locator("//button[text()='Get Started']").click()

    // await page.pause()
    // otp need to put 

    await loginpg.select_type(data.type1)
    await loginpg.emailID("ravi@doko.com") // change mail id everytime
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await expect(page.locator("//select[@name='country']")).toBeDisabled()
    await expect(page.locator("//p[text()='State is required']")).toBeVisible()
    await expect(page.locator("//p[text()='City is required']")).toBeVisible()
    await expect(page.locator("//p[text()='GST is required']")).toBeVisible()
    await expect(page.locator("//p[text()='PAN is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload BL File']")).toBeVisible()
    
     
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("Ravi pvt ltd")

    const state = await page.locator("//select[@name='state']")
    await state.selectOption("Arunachal Pradesh")

    const city = await page.locator("//select[@name='city']")
    await city.selectOption("Naharlagun")
    
    await page.locator("//input[@placeholder='Enter GST Number']").fill("453435324324")
    await expect(page.locator("//p[text()='Please enter a valid GST']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter GST Number']").fill("#(*(*(*&*&*")
    await expect(page.locator("//p[text()='Please enter a valid GST']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter GST Number']").fill("dmnsjkknma")
    await expect(page.locator("//p[text()='Please enter a valid GST']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter GST Number']").fill("    ")
    await expect(page.locator("//p[text()='GST is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter GST Number']").fill("33FUDBS8311OIZ3")
    await expect(page.locator("//p[text()='Please Upload GST File']")).toBeVisible()

    await page.locator("//input[@placeholder='Enter PAN Number']").fill("453435324324")
    await expect(page.locator("//p[text()='Please enter valid PAN']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("#(*(*(*&*&*")
    await expect(page.locator("//p[text()='Please enter valid PAN']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("dmnsjkknma")
    await expect(page.locator("//p[text()='Please enter valid PAN']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("    ")
    await expect(page.locator("//p[text()='PAN is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("FUCBS8311O")

    await page.locator("//input[@placeholder='Enter Trade License']").fill("   ")
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL098")

    await page.locator("//input[@placeholder='Enter Group Name']").fill("Rofrei")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("LJod921")

///// 
    await page.locator("//input[@id='gst']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='gst']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='bl']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='gst']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='gst']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()
   
    await page.locator("//button[text()='Continue']").click()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("Robert freight pvt ltd")
    await state.selectOption("Arunachal Pradesh")
    await city.selectOption("Naharlagun")
    await page.locator("//input[@placeholder='Enter GST Number']").fill("33FUCBS8311OIZ3")
    await page.locator("//input[@id='gst']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("FUCBS8311O")
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.locator("//input[@placeholder='Enter Trade License']").fill("TL098")
    await page.locator("//input[@placeholder='Enter Group Name']").fill("Rofrei")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("LJod921")
    
    
    await page.locator("//button[text()='Continue']").click()
    //verification 24 hrs page
    await expect(page.locator("//h5[text()='Verification']")).toBeVisible()
    await expect(page.locator("//h6[text()='takes upto 24 hrs']")).toBeVisible()
    await expect(page.locator("//p[contains(.,'Since all your docs will be manually verified by our Team')]")).toBeVisible()
    await page.locator("//button[text()='Back to Login']").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()


  })
  test("checking the register personal details with validation message for another India country", async ({ page, loginpg, adminpg }) => {

    // await page.locator("//button[text()='Register']").click()
    // await page.locator("//input[@type='checkbox']").click()
    // await page.locator("//button[text()='Get Started']").click()

    // await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("lames")
    // const till = await page.locator("//select[@name='designation']")
    // await till.selectOption("IT")
    // const tils = await page.locator("//select[@name='mobileCode']")
    // await tils.selectOption("+91")               /// change
    // await page.locator("//input[@placeholder='Enter Mobile Number']").fill("8857399921")

    // await expect(page.locator("//p[text()='Email is required']")).toBeVisible()
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("492389")
    // await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("efsdfd")
    // await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("#$@#$%$")
    // await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@gmail.com")
    // await expect(page.locator("//p[text()='Enter your official email']")).toBeVisible()
  
    // const dm = 62
    // for (let i = 0; i < dm; i++) {
    //   await adminpg.cfs_email(data.sample[i])
    //   await expect(page.locator("//p[text()='Enter your official email']")).toBeVisible()
    // }

    // await page.locator("(//input[@type='password'])[1]").fill("Doko@2023")
    // await page.locator("(//input[@type='password'])[2]").fill("Doko@2023")

    // await page.locator("//input[@placeholder='Enter Email Address']").fill("ravi@doko.com")
    // await page.locator("//button[text()='Get Started']").click()
    // await expect(page.locator("//div[text()='Email Already Exists']")).toBeVisible()
    // await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@allmasters.ai") /// change email everytime
    // await page.locator("//button[text()='Get Started']").click()

    // await page.pause()
    // otp need to put 

    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.s@allmasters.ai") // change mail id everytime
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await expect(page.locator("//select[@name='country']")).toBeDisabled()
    await expect(page.locator("//p[text()='State is required']")).toBeVisible()
    await expect(page.locator("//p[text()='City is required']")).toBeVisible()
    await expect(page.locator("//p[text()='GST is required']")).toBeVisible()
    await expect(page.locator("//p[text()='PAN is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await expect(page.locator("//p[text()='Please Upload BL File']")).toBeVisible()
    
     
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("chittoor comp")

    const state = await page.locator("//select[@name='state']")
    await state.selectOption("Arunachal Pradesh")

    const city = await page.locator("//select[@name='city']")
    await city.selectOption("Naharlagun")
    
    await page.locator("//input[@placeholder='Enter GST Number']").fill("33FUCBS8311OIZ3")
    await expect(page.locator("//p[text()='This GST already exists']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter GST Number']").fill("22EWWSA4342QAZ3")
    await expect(page.locator("//p[text()='Please Upload GST File']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("FUCBS8311O")
    await expect(page.locator("//p[text()='This PAN already exists']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("EWWSA4342Q")

    await page.locator("//input[@placeholder='Enter Trade License']").fill("   ")
    await expect(page.locator("//p[text()='Trade License is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Trade License']").fill("tal029")

    await page.locator("//input[@placeholder='Enter Group Name']").fill("chittoor group")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("DUN0039")

///// 
    await page.locator("//input[@id='gst']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='gst']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='bl']").setInputFiles("data-files/3mb(1).pdf")
    await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='gst']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()

    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='gst']").setInputFiles("data-files/ie.pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
    await page.reload()
   
    await page.locator("//button[text()='Continue']").click()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("chittoor comp")
    await state.selectOption("Andhra Pradesh")
    await city.selectOption("Chittoor")
    await page.locator("//input[@placeholder='Enter GST Number']").fill("22EWWSA4342QAZ3")
    await page.locator("//input[@id='gst']").setInputFiles("data-files/Gst.pdf")
    await page.locator("//input[@placeholder='Enter PAN Number']").fill("EWWSA4342Q")
    await page.locator("//input[@id='bl']").setInputFiles("data-files/ie.pdf")
    await page.locator("//input[@placeholder='Enter Trade License']").fill("tal029")
    await page.locator("//input[@placeholder='Enter Group Name']").fill("chittoor group")
    await page.locator("//input[@placeholder='Enter DUNS Number']").fill("DUN0039")
    
    
    await page.locator("//button[text()='Continue']").click()
    //verification 24 hrs page
    await expect(page.locator("//h5[text()='Verification']")).toBeVisible()
    await expect(page.locator("//h6[text()='takes upto 24 hrs']")).toBeVisible()
    await expect(page.locator("//p[contains(.,'Since all your docs will be manually verified by our Team')]")).toBeVisible()
    await page.locator("//button[text()='Back to Login']").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()


  })
})

test.describe("user management", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("obt@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("checking with all assertions and approve one user", async ({ adminpg, loginpg, page }) => {
    
    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='New']").click()
    await adminpg.new_reg_assert()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='New Registration'])[1]")).toBeVisible()    //status

    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()// update mail id //div[text()='sanjai.s@allmaters.ai']
   
    await adminpg.assert_user()

    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//h5[text()='Looks empty']")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    
// bug on that
    await page.locator("//button[text()='Revalidate']").click()
    await expect(page.locator("//div[text()='Revalidate Reasons']")).toBeVisible()
    await expect(page.locator("//label[@for='legalEntity']")).toBeVisible()
    await expect(page.locator("//label[@for='gstinCerti']")).toBeVisible()
    await expect(page.locator("//label[@for='panNumber']")).toBeVisible()
    await expect(page.locator("//label[@for='mtoTrador']")).toBeVisible()
    await expect(page.locator("//label[@for='blCopy']")).toBeVisible()
    await expect(page.locator("//label[@for='coiCopy']")).toBeVisible()
    await expect(page.locator("//label[@for='other']")).toBeVisible()

    await page.locator("//label[@for='other']").click()
    await page.locator("(//button[text()='Revalidate'])[2]").click()
    await expect(page.locator("(//div[@class='Toastify__toast-body']//div)[2]")).toBeVisible()

    //await page.locator("//label[@for='other']").click()
    await page.locator("//textarea[@name='others']").fill("  ")
    await page.locator("(//button[text()='Revalidate'])[2]").click()
    await expect(page.locator("(//div[@class='Toastify__toast-body']//div)[2]")).toBeVisible()

    //await page.locator("//label[@for='other']").click()
    await page.locator("//textarea[@name='others']").fill("Revalidate user")
    await page.locator("//label[@for='legalEntity']").click()
    await page.locator("//label[@for='gstinCerti']").click()
    await page.locator("//label[@for='panNumber']").click()
    await page.locator("//label[@for='mtoTrador']").click()
    await page.locator("//label[@for='blCopy']").click()
    await page.locator("//label[@for='coiCopy']").click()
    await page.locator("(//button[text()='Revalidate'])[2]").click()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    await expect(page.locator("//h3[text()='Re-Validated Users']")).toBeVisible()

    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='OBT Re-validated'])[1]")).toBeVisible()//status

    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.s@allmasters.ai") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
//chnage on value and check
    await expect(page.locator("//input[@value='chittoor comp']")).toBeVisible()
    await expect(page.locator("input[value='22EWWSA4342QAZ3']")).toBeVisible()
    await expect(page.locator("input[value='EWWSA4342Q']")).toBeVisible()
    await expect(page.locator("input[value='chittoor group']")).toBeVisible()
    await expect(page.locator("span[title='ie.pdf']")).toBeVisible()
    await expect(page.locator("input[value='DUN0039']")).toBeVisible()
    await expect(page.locator("span[title='Gst.pdf']")).toBeVisible()
    await expect(page.locator("input[value='tal029']")).toBeVisible()
    await expect(page.locator("//span[text()='Disclaimer']")).toBeVisible()
    await expect(page.locator("//p[text()=' : Trade License, HBL Copy Stationery, GSTIN & PAN or Certificate of Incorporation should belong to the same company']")).toBeVisible()
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//h5[text()='Verification']")).toBeVisible()
    await expect(page.locator("//h6[text()='takes upto 24 hrs']")).toBeVisible()
    await expect(page.locator("//p[contains(.,'Since all your docs will be manually verified by our Team')]")).toBeVisible()
    await page.locator("//button[text()='Back to Login']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID("obt@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    
    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='New']").click()
    await adminpg.new_reg_assert()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='New Registration'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("//td[text()='06-01-2024']")).toBeVisible()
    await expect(page.locator("//td[text()='Revalidated']")).toBeVisible()
    await expect(page.locator("//td[text()='OBT']")).toBeVisible()
    await expect(page.locator("//li[text()='Certificate of incorporation is Incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='B/L Copy Stationery is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Trade License Number is invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Company PAN number is incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='GSTIN Certificate is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Legal Entity Name is incorrect']")).toBeVisible()
    await expect(page.locator("//b[text()='Others:']")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await page.locator("//button[text()='Close']").click()

    await page.locator("//button[text()='Reject']").click()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    await expect(page.locator("//h3[text()='Rejected Users']")).toBeVisible()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='OBT Rejected'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await page.locator("//li[text()='Sign Out']").click()

    
    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='OBT-Rejected']").click()
    await adminpg.new_OBTrej_assert()
    await expect(page.locator("//h3[text()='Rejected Users']")).toBeVisible()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='OBT Rejected'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Certificate of incorporation is Incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='B/L Copy Stationery is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Trade License Number is invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Company PAN number is incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='GSTIN Certificate is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Legal Entity Name is incorrect']")).toBeVisible()
    await expect(page.locator("//b[text()='Others:']")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()

    await page.locator("//button[text()='Reject']").click()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    await expect(page.locator("//h3[text()='De-Activated Users']")).toBeVisible()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='Admin Rejected'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Certificate of incorporation is Incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='B/L Copy Stationery is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Trade License Number is invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Company PAN number is incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='GSTIN Certificate is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Legal Entity Name is incorrect']")).toBeVisible()
    await expect(page.locator("//b[text()='Others:']")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    
    await page.locator("//button[text()=' Back']").click()
 
    //await page.pause()
    await page.locator("(//div[@data-colindex='5'])[1]/*[1]").click()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID("obt@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()

    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='New']").click()
    await adminpg.new_reg_assert()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='New Registration'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Certificate of incorporation is Incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='B/L Copy Stationery is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Trade License Number is invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Company PAN number is incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='GSTIN Certificate is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Legal Entity Name is incorrect']")).toBeVisible()
    await expect(page.locator("//b[text()='Others:']")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()

    await page.locator("//button[text()='Approve']").click()
    await expect(page.locator("//label[text()='SHIPMNTS Customer ID']")).toBeVisible()
    await page.locator("//input[@placeholder='SHIPMNTS Customer ID']").fill("SHP872")
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    
   
    await expect(page.locator("//h3[text()='Pending Users']")).toBeVisible()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='Pending'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await expect(page.locator("//p[text()='SHIPMNTS Customer ID :']")).toBeVisible()
    await expect(page.locator("//p[text()='SHP872']")).toBeVisible()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Certificate of incorporation is Incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='B/L Copy Stationery is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Trade License Number is invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Company PAN number is incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='GSTIN Certificate is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Legal Entity Name is incorrect']")).toBeVisible()
    await expect(page.locator("//b[text()='Others:']")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='5']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[5]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[3]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    
    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='New']").click()
    await adminpg.new_reg_assert()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='New Registration'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await expect(page.locator("//p[text()='SHIPMNTS Customer ID :']")).toBeVisible()
    await expect(page.locator("//p[text()='SHP872']")).toBeVisible()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Certificate of incorporation is Incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='B/L Copy Stationery is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Trade License Number is invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Company PAN number is incorrect.']")).toBeVisible()
    await expect(page.locator("//li[text()='GSTIN Certificate is not legible/ invalid.']")).toBeVisible()
    await expect(page.locator("//li[text()='Legal Entity Name is incorrect']")).toBeVisible()
    await expect(page.locator("//b[text()='Others:']")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='5']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[5]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[3]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
/////
    await page.locator("//button[text()='Revalidate']").click()
    await expect(page.locator("//div[text()='Revalidate Reasons']")).toBeVisible()
    await expect(page.locator("//label[@for='legalEntity']")).toBeVisible()
    await expect(page.locator("//label[@for='gstinCerti']")).toBeVisible()
    await expect(page.locator("//label[@for='panNumber']")).toBeVisible()
    await expect(page.locator("//label[@for='mtoTrador']")).toBeVisible()
    await expect(page.locator("//label[@for='blCopy']")).toBeVisible()
    await expect(page.locator("//label[@for='coiCopy']")).toBeVisible()
    await expect(page.locator("//label[@for='other']")).toBeVisible()

    await page.locator("//label[@for='other']").click()
    await page.locator("(//button[text()='Revalidate'])[2]").click()
    await expect(page.locator("(//div[@class='Toastify__toast-body']//div)[2]")).toBeVisible()

    await page.locator("//textarea[@name='others']").fill("  ")
    await page.locator("(//button[text()='Revalidate'])[2]").click()
    await expect(page.locator("(//div[@class='Toastify__toast-body']//div)[2]")).toBeVisible()

    await page.locator("//textarea[@name='others']").fill("Revalidate user once again")
    await page.locator("//label[@for='legalEntity']").click()
    await page.locator("//label[@for='gstinCerti']").click()
    await page.locator("//label[@for='panNumber']").click()
    await page.locator("//label[@for='mtoTrador']").click()
    await page.locator("//label[@for='blCopy']").click()
    await page.locator("//label[@for='coiCopy']").click()
    await page.locator("(//button[text()='Revalidate'])[2]").click()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    await expect(page.locator("//h3[text()='Revalidated Users']")).toBeVisible()

    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='Admin Re-validated'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await expect(page.locator("//p[text()='SHIPMNTS Customer ID :']")).toBeVisible()
    await expect(page.locator("//p[text()='SHP872']")).toBeVisible()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[1]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='5']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[5]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[3]")).toBeVisible()
    await expect(page.locator("//td[text()='6']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[6]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[3]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[2]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[2]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user once again']")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID("obt@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()

    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='Revalidated']").click()
    await adminpg.new_revalideOBTADMIN_assert()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='Admin Re-validated'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await expect(page.locator("//p[text()='SHIPMNTS Customer ID :']")).toBeVisible()
    await expect(page.locator("//p[text()='SHP872']")).toBeVisible()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[1]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='5']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[5]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[3]")).toBeVisible()
    await expect(page.locator("//td[text()='6']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[6]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[3]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[2]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[2]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user once again']")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    await page.locator("//button[text()='Approve']").click()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    
// bug
    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='Pending']").click()
    await adminpg.new_pend_assert()
    await expect(page.locator("//h3[text()='Pending Users']")).toBeVisible()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='Pending'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await expect(page.locator("//p[text()='SHIPMNTS Customer ID :']")).toBeVisible()
    await expect(page.locator("//p[text()='SHP872']")).toBeVisible()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[1]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='5']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[5]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[3]")).toBeVisible()
    await expect(page.locator("//td[text()='6']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[6]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[3]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[2]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[2]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user once again']")).toBeVisible()
    await expect(page.locator("//td[text()='7']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[7]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[4]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    
    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='New']").click()
    await adminpg.new_reg_assert()
    await expect(page.locator("//h3[text()='New Registrations']")).toBeVisible()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='New Registration'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    await adminpg.assert_user()
    await expect(page.locator("//p[text()='SHIPMNTS Customer ID :']")).toBeVisible()
    await expect(page.locator("//p[text()='SHP872']")).toBeVisible()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[1]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='5']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[5]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[3]")).toBeVisible()
    await expect(page.locator("//td[text()='6']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[6]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[3]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[2]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[2]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user once again']")).toBeVisible()
    await expect(page.locator("//td[text()='7']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[7]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[4]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    await page.locator("//button[text()='Approve']").click()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Status Updated Successfully']")).toBeVisible()
    
    await expect(page.locator("//h3[text()='User Management']")).toBeVisible()
    await expect(page.locator("//div[text()='COMPANY NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()

    await expect(page.locator("//div[@title='Chittoor Comp']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("(//span[text()='Accepted'])[1]")).toBeVisible()//status
    await page.locator("//div[text()='sanjai.s@allmasters.ai']").click()
    /////
    await expect(page.locator("//h3[text()='Team Details']")).toBeVisible()
    await expect(page.locator("//p[text()='Country']")).toBeVisible()
    await expect(page.locator("//p[text()='State']")).toBeVisible()
    await expect(page.locator("//p[text()='City']")).toBeVisible()
    await expect(page.locator("//p[text()='PAN']")).toBeVisible()
    await expect(page.locator("//p[text()='Trader License']")).toBeVisible()
    await expect(page.locator("//p[text()='Documents']")).toBeVisible()
    await expect(page.locator("//p[text()='DUNS Number :']")).toBeVisible()
    await expect(page.locator("//div[text()='FULL NAME']")).toBeVisible()
    await expect(page.locator("//div[text()='MOBILE']")).toBeVisible()
    await expect(page.locator("//div[text()='EMAIL']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()
    await expect(page.locator("//h4[text()='chittoor comp']")).toBeVisible()
    await expect(page.locator("//span[text()='chittoor group']")).toBeVisible()
    await expect(page.locator("//p[text()='india']")).toBeVisible()   //change
    await expect(page.locator("//p[text()='andhra pradesh']")).toBeVisible()//change
    await expect(page.locator("//p[text()='chittoor']")).toBeVisible()//change
    await expect(page.locator("//p[text()='EWWSA4342Q']")).toBeVisible()
    await expect(page.locator("//p[text()='Tal029']")).toBeVisible()
    await expect(page.locator("//a[contains(text(),'22EWWSA4342QAZ3')]")).toBeVisible()
    await expect(page.locator("//a[contains(text(),'BL file')]")).toBeVisible()
    await expect(page.locator("//p[text()='DUN0039']")).toBeVisible()
    await expect(page.locator("//div[@title='Lames']")).toBeVisible()
    await expect(page.locator("//div[@title='8857399921']")).toBeVisible()
    await expect(page.locator("//div[@title='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//span[text()='//span[text()='Active']']")).toBeVisible()
    
    //////
    await expect(page.locator("//p[text()='SHIPMNTS Customer ID :']")).toBeVisible()
    await expect(page.locator("//p[text()='SHP872']")).toBeVisible()
    await page.locator("//button[text()='View History']").click()
    await expect(page.locator("//h2[text()='View History']")).toBeVisible()
    await expect(page.locator("//td[text()='1']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[1]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[1]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[1]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user']")).toBeVisible()
    await expect(page.locator("//td[text()='2']")).toBeVisible()
    //current date
    await expect(page.locator("(//td[text()='06-01-2024'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='3']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin Rejected'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[1]")).toBeVisible()
    await expect(page.locator("//td[text()='4']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[4]")).toBeVisible()
    await expect(page.locator("(//td[text()='Restored'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[2]")).toBeVisible()
    await expect(page.locator("//td[text()='5']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[5]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[1]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[3]")).toBeVisible()
    await expect(page.locator("//td[text()='6']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[6]")).toBeVisible()
    await expect(page.locator("(//td[text()='Revalidated'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[3]")).toBeVisible()
    await expect(page.locator("(//li[text()='Certificate of incorporation is Incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='B/L Copy Stationery is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Trade License Number is invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Company PAN number is incorrect.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='GSTIN Certificate is not legible/ invalid.'])[2]")).toBeVisible()
    await expect(page.locator("(//li[text()='Legal Entity Name is incorrect'])[2]")).toBeVisible()
    await expect(page.locator("(//b[text()='Others:'])[2]")).toBeVisible()
    await expect(page.locator("//li[text()='Revalidate user once again']")).toBeVisible()
    await expect(page.locator("//td[text()='7']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[7]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[2]")).toBeVisible()
    await expect(page.locator("(//td[text()='OBT'])[4]")).toBeVisible()
    await expect(page.locator("//td[text()='8']")).toBeVisible()
    await expect(page.locator("(//td[text()='06-01-2024'])[8]")).toBeVisible()
    await expect(page.locator("(//td[text()='Approved'])[3]")).toBeVisible()
    await expect(page.locator("(//td[text()='Admin'])[4]")).toBeVisible()
    await page.locator("//button[text()='Close']").click()
    await page.locator("//li[text()='Sign Out']").click()

  })
  test("check and approve second user with no assertions", async({adminpg, loginpg, page})=>{
 
    await page.locator("//p[text()='Registration']").click()
    await page.locator("//p[text()='New']").click()
    await page.locator("(//div[@data-colindex='0']//div)[2]").click()
    await page.locator("//button[text()='Approve']").click()
    await page.locator("//input[@placeholder='SHIPMNTS Customer ID']").fill("lpol203")
    await page.locator("//button[text()='Yes']").click()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await page.locator("//p[text()='Registration']").click()
  await page.locator("//p[text()='New']").click()
  await page.locator("(//div[@data-colindex='0']//div)[1]").click()
  await page.locator("//button[text()='Approve']").click()
  await page.locator("//button[text()='Yes']").click()
  await page.locator("//li[text()='Sign Out']").click()
  })
})//Done

test.describe("login funtionality", async () => {
  test.beforeEach(async ({ baseURL, page }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
  })
  test.describe('login functionality with mulitple logins as customer', async () => {
    test("login with valid username and password as customer", async ({ loginpg, page }) => {
      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.password_ff)

      await loginpg.sign_in()
      await loginpg.logout_dd()
      //await page.locator("//p[text()='Logout']").click()
      await page.close()
    })
    test("login with Invalid username and valid password as customer", async ({ loginpg, page }) => {
      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    test("login with valid username and Invalid password as customer and check that wrong toast message for first three times after should have different toast message", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast2()
      await page.close()

    })
    test("login with Invalid username and Invalid password as customer", async ({ loginpg, page }) => {
      await loginpg.select_type(data.type1)
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID(data.InvmailID_ff)
      await loginpg.password(data.Invpassword_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()

    })
    test("login with valid credentials of customer but as partner and adminstrator", async ({ loginpg, page }) => {
      await loginpg.select_type(data.type2)
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.select_type(data.type3)
      await loginpg.emailID(data.mailID_ff)
      await loginpg.password(data.password_ff)
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()

    })
  })
  test.describe('login functionality with mulitple logins as administrator', async () => {
    test("login with valid username and password as administrator", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await page.locator("//li[text()='Sign Out']").click()
      await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()
      await page.close()
    })
    test("login with valid username and Invalid password as administrator after three times receive another toast message", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast2()
      await page.close()
    })
    test("login with Invalid username and valid password as administrator", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("admi@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID("admi@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID("admi@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    test("login with Invalid credentials as administrator", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type3)
      await loginpg.emailID("admi@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID("admi@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.emailID("admi@ams.com")
      await loginpg.password("Doko2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
    test("login with valid credentials of adminstrator but as customer and partner", async ({ loginpg, page }) => {

      await loginpg.select_type(data.type1)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.reload()
      await loginpg.select_type(data.type2)
      await loginpg.emailID("admin@ams.com")
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await loginpg.login_wrgtoast()
      await page.close()
    })
  })
  test("checking the login functionality with validation msg ", async ({ loginpg, page }) => {

    await loginpg.sign_in()
    await loginpg.email_toast()
    await loginpg.password_toast()
    await loginpg.emailID(data.numeric_data)
    await loginpg.email_toast1()
    await loginpg.emailID(data.alphabets_data)
    await loginpg.email_toast1()
    await loginpg.emailID(data.splcharacter_data)
    await loginpg.email_toast1()
    await loginpg.emailID(data.space_data)
    await loginpg.email_toast()
    await loginpg.password(data.space_data)
    await loginpg.password_toast()
    await page.close()
  })
})//done

test.describe("Forgot password", async () => {
    test.beforeEach(async ({ baseURL, page }) => {
      test.setTimeout(3600000)
      await page.goto(`${baseURL}`)
    })
    test("Checking with forgot password", async ({ loginpg, page }) => {

      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await expect(page.locator("//h5[text()='Reset Password']")).toBeVisible()
      await page.locator("//a[contains(text(),'Go back')]").click()
      await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()
      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await expect(page.locator("//h5[text()='Reset Password']")).toBeVisible()
      await expect(page.locator("//p[text()='Are you new here ?']")).toBeVisible()
      await page.locator("//button[text()='Register']").click()
      await page.waitForTimeout(5000)
      await expect(page.locator("//h5[text()='Get Started']")).toBeVisible()  
      await expect(page.locator("//p[text()='Freight Logistics Simplified']")).toBeVisible()

      await expect(page.locator("//p[text()='Already have an account ?']")).toBeVisible()
      await page.locator("//a[contains(text(),'Login')]").click()
      await page.waitForTimeout(5000)
      await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()  
      await expect(page.locator("//p[text()='Book & Track your shipments']")).toBeVisible()
      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await page.locator("//button[text()='Reset Password']").click()
      await expect(page.locator("//span[text()='Type is required']")).toBeVisible()
      await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
      await page.reload()

      await page.locator("//input[@placeholder='Enter Email Address']").fill("       ")
      await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Email Address']").fill("878378")
      await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Email Address']").fill("udyahjidin")
      await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Email Address']").fill("$^$%^$%#$")
      await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()

      await loginpg.select_type(data.type1)
      await page.locator("//input[@placeholder='Enter Email Address']").fill("subham.sidhartha@dokonaly.com")
      await page.locator("//button[text()='Reset Password']").click()
      await expect(page.locator("//h5[text()='Check your Inbox']")).toBeVisible()
      await expect(page.locator("//h6[text()='for your new password']")).toBeVisible()
      await expect(page.locator("//span[text()='Note']")).toBeVisible()
      await expect(page.locator("//p[text()=' : If you can`t find the mail in your inbox, kindly check your SPAM']")).toBeVisible()
      await page.locator("//a[contains(text(),'Back to Login')]").click()

      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await page.locator("//button[text()='Reset Password']").click()
      await loginpg.select_type(data.type2)
      await page.locator("//input[@placeholder='Enter Email Address']").fill("admin@ams.com")
      await page.locator("//button[text()='Reset Password']").click()
      await expect(page.locator("//h5[text()='Check your Inbox']")).toBeVisible()
      await expect(page.locator("//h6[text()='for your new password']")).toBeVisible()
      await expect(page.locator("//span[text()='Note']")).toBeVisible()
      await expect(page.locator("//p[text()=' : If you can`t find the mail in your inbox, kindly check your SPAM']")).toBeVisible()
      await page.locator("//a[contains(text(),'Back to Login')]").click()

      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await page.locator("//button[text()='Reset Password']").click()
      await loginpg.select_type(data.type3)
      await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@allmasters.ai")
      await page.locator("//button[text()='Reset Password']").click()
      await expect(page.locator("//h5[text()='Check your Inbox']")).toBeVisible()
      await expect(page.locator("//h6[text()='for your new password']")).toBeVisible()
      await expect(page.locator("//span[text()='Note']")).toBeVisible()
      await expect(page.locator("//p[text()=' : If you can`t find the mail in your inbox, kindly check your SPAM']")).toBeVisible()
      await page.locator("//a[contains(text(),'Back to Login')]").click()

      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await page.locator("//button[text()='Reset Password']").click()
      await loginpg.select_type(data.type1)
      await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@allmasters.ai")
      await page.locator("//button[text()='Reset Password']").click()
      await expect(page.locator("//h5[text()='Check your Inbox']")).toBeVisible()
      await expect(page.locator("//h6[text()='for your new password']")).toBeVisible()
      await expect(page.locator("//span[text()='Note']")).toBeVisible()
      await expect(page.locator("//p[text()=' : If you can`t find the mail in your inbox, kindly check your SPAM']")).toBeVisible()
      await page.locator("//a[contains(text(),'Back to Login')]").click()

      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await page.locator("//button[text()='Reset Password']").click()
      await loginpg.select_type(data.type2)
      await page.locator("//input[@placeholder='Enter Email Address']").fill("subham.sidhartha@dokonaly.com")
      await page.locator("//button[text()='Reset Password']").click()
      await expect(page.locator("//h5[text()='Check your Inbox']")).toBeVisible()
      await expect(page.locator("//h6[text()='for your new password']")).toBeVisible()
      await expect(page.locator("//span[text()='Note']")).toBeVisible()
      await expect(page.locator("//p[text()=' : If you can`t find the mail in your inbox, kindly check your SPAM']")).toBeVisible()
      await page.locator("//a[contains(text(),'Back to Login')]").click()

      await page.locator("//a[contains(text(),'Forgot Password?')]").click()
      await page.locator("//button[text()='Reset Password']").click()
      await loginpg.select_type(data.type3)
      await page.locator("//input[@placeholder='Enter Email Address']").fill("admin@ams.com")
      await page.locator("//button[text()='Reset Password']").click()
      await expect(page.locator("//h5[text()='Check your Inbox']")).toBeVisible()
      await expect(page.locator("//h6[text()='for your new password']")).toBeVisible()
      await expect(page.locator("//span[text()='Note']")).toBeVisible()
      await expect(page.locator("//p[text()=' : If you can`t find the mail in your inbox, kindly check your SPAM']")).toBeVisible()
      await page.locator("//a[contains(text(),'Back to Login')]").click()
      
    })

})//done

test.describe.skip("Country", async () => {
  
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(90000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

  })
  test("check all  fields with validation and add one country (INDIA -> ACTIVE)", async ({ page, adminpg, loginpg, baseURL }) => {

    await adminpg.country_head()
    await adminpg.search_country(data.countryname)   //change
    await adminpg.search_country("India")   //change
    await adminpg.no_rows()
    await adminpg.add_country()
    await adminpg.save_country()
    await adminpg.coun_name_req()
    await adminpg.coun_code_req()
    await adminpg.coun_region_req()
    await adminpg.coun_currency_req()
    await adminpg.coun_rate_req()
    await adminpg.coun_phonecode_req()
    await adminpg.coun_phoneformat_req()
    await expect(page.locator("//p[text()='Time Zone is required']")).toBeVisible()

    await adminpg.country(data.splcharacter_data)
    await adminpg.coun_name_req1()
    await adminpg.country(data.numeric_data)
    await adminpg.coun_name_req1()
    await adminpg.country(data.space_data)
    await adminpg.coun_name_req()
    await adminpg.country(data.countryname)

    await adminpg.countrycode(data.splcharacter_data)
    await adminpg.coun_code_req1()
    await adminpg.countrycode(data.numeric_data)
    await adminpg.coun_code_req1()
    await adminpg.countrycode(data.space_data)
    await adminpg.coun_code_req()
    //  await adminpg.countrycode(data.countrycode)
    //  await adminpg.coun_code_req()
    //  await adminpg.countrycode(data.countrycode_tr)
    //  await adminpg.coun_code_req()
    await adminpg.countrycode(data.countrycode)  //change

    await adminpg.region(data.australia)
    await adminpg.region(data.africa)
    await adminpg.region(data.Namerica)
    await adminpg.region(data.Samerica)
    await adminpg.region(data.Camerica)
    await adminpg.region(data.Europe)
    await adminpg.region(data.asia)


    await adminpg.currency(data.splcharacter_data)
    await adminpg.coun_currency_req1()
    await adminpg.currency("093")
    await adminpg.coun_currency_req1()
    await adminpg.currency(data.space_data)
    await adminpg.coun_currency_req()
    await adminpg.currency(data.countrycode_s)
    await adminpg.curr_code_req()
    await adminpg.currency(data.countrycode_db)
    await adminpg.curr_code_req()
    await adminpg.currency(data.currency)

    await adminpg.rate(data.splcharacter_data)
    await adminpg.coun_rate_req1()
    await adminpg.rate(data.space_data)
    await adminpg.coun_rate_req()
    await adminpg.rate(data.alphabets_data)
    await adminpg.coun_rate_req1()
    await adminpg.rate(data.zero_data)
    await adminpg.coun_rate_req2()// rate zero validation msg was here chce
    await adminpg.rate(data.rate)

    await adminpg.phonecode(data.splcharacter_data)
    await adminpg.coun_phonecode_req1()   /// validation msg need to change
    await adminpg.phonecode(data.numeric_data)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.space_data)
    await adminpg.coun_phonecode_req()
    await adminpg.phonecode(data.apl_phonecode)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.spl_phonecode)
    await adminpg.coun_phonecode_req1()
    await adminpg.phonecode(data.phonecode)

    await adminpg.numberformat(data.splcharacter_data)
    await adminpg.coun_phoneformat_req1()
    await adminpg.numberformat(data.space_data)
    await adminpg.coun_phoneformat_req()
    await adminpg.numberformat(data.alphabets_data)
    await adminpg.coun_phoneformat_req1()
    await adminpg.numberformat(data.numeric_data)
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("Asia/Kolkata")
    //  await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
    await page.waitForTimeout(1000)
    await adminpg.search_country(data.countryname)
    await adminpg.search_country("India")   //change
    await adminpg.search_country_one()  
    await page.locator("(//div[contains(@class,'MuiDataGrid-cell--withRenderer MuiDataGrid-cell')]//div)[3]").click()
    await expect(page.locator("//input[@value='india']")).toHaveValue("India")
    await expect(page.locator("//select[@name='region']")).toHaveValue("Asia")//disabled fiedl can't able to assert
    await expect(page.locator("//input[@value='inr']")).toHaveValue("INR")
    await expect(page.locator("//input[@placeholder='Enter Exchange Rate']")).toHaveValue("1")
    await expect(page.locator("//input[@placeholder='Enter Phone Code']")).toHaveValue("+91")
    await expect(page.locator("//input[@placeholder='Enter Phone Number']")).toHaveValue("1234567890")
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()


  })
  test("check that able to add country with same details like same country name and codes (NOT ADDED)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country(data.countryname)
    await adminpg.countrycode(data.countrycode)
    await adminpg.region(data.asia)
    await adminpg.currency(data.currency)
    await adminpg.rate(data.rate)
    await adminpg.phonecode(data.phonecode)
    await adminpg.numberformat(data.numeric_data)
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("Asia/Kolkata")
    await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.errortoast()
  })
  test("check that able to add country with same details with different country name and codes (UAE -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country(data.countryname1)
    await adminpg.countrycode(data.countrycode1)
    await adminpg.region(data.asia)
    await adminpg.currency("aed")
    await adminpg.rate("0.044")
    await adminpg.phonecode("+971")
    await adminpg.numberformat("1234567")
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("Asia/Dubai")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
    await adminpg.search_country(data.countryname1)
    await adminpg.search_country("United Arab Emirates")
    await adminpg.search_country_one()

  })
  test("Add one country edit each & every field and check for duplicates also (USA -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

    await adminpg.country_head()
    await adminpg.add_country()
    await adminpg.country("united states of america")
    await adminpg.countrycode("us")
    await adminpg.region(data.Namerica)
    await adminpg.currency("usd")
    await adminpg.rate("83.18")
    await adminpg.phonecode("+1")
    await adminpg.numberformat("1234567809")
    const tz = await page.locator("//select[@name='timezone']")
    await tz.selectOption("America/Chicago")
    await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()

    await adminpg.search_country("United States Of America")
    await adminpg.search_country("united states of america")
    await adminpg.search_country_one()
    await adminpg.edit_country()


    await adminpg.Inactive()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()

    await adminpg.search_country("united states of america")
    await adminpg.search_country_one()
    await adminpg.edit_country()

    await adminpg.country("india")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
    await page.waitForTimeout(2000)

    // await adminpg.countrycode("in")
    // //await adminpg.Inactive()
    // await adminpg.save_country()
    // await adminpg.pop_up_yes()
    // await adminpg.duptoast()
    await adminpg.country("united states of america")
//    await adminpg.countrycode("us")
    await adminpg.region(data.Europe)
    await adminpg.currency("dfr")
    await adminpg.rate("8")
    await adminpg.phonecode("+102")
    await adminpg.numberformat("123456789")
    await adminpg.active()
    await adminpg.save_country()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()
  })
  test("search the country in another country filters (SEARCH INDIA IN AFRICA FILTER)", async ({ adminpg }) => {
    await adminpg.filters()
    await adminpg.filter_Africa()
    await adminpg.search_country(data.countryname)
    await adminpg.no_rows()
  })
  test("search the country in same country filters (SEARCH USA IN EUROPE FILTER)", async ({ adminpg, page }) => {
    await adminpg.filters()
    await adminpg.filter_Europe()
    await adminpg.search_country("united states of america")
    await adminpg.search_country_one()
  })
})//done

test.describe.skip("Lane Management", async () => {
// port code is unique
  ///////// Don't add extra active lane, it will shows in dashboard

  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(90000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

  })
  test("check all the fields with validation and add one lane (INNSA -> ACTIVE)", async ({ adminpg, page }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.savelane()
    await adminpg.lane_coun_val()
    await adminpg.lane_portname_val()
    await adminpg.lane_portcode_val()
    await adminpg.lane_gatefee_val()
    await adminpg.lane_gatewaycode_val()

    await adminpg.lane_country(data.countryname)   //change
    await adminpg.lane_type(data.gateway)

    await adminpg.lane_portname(data.splcharacter_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portname(data.numeric_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portname(data.space_data)
    await adminpg.lane_portname_val()
    await adminpg.lane_portname(data.portname)  //change

    await adminpg.lane_portcode(data.splcharacter_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portcode(data.numeric_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portcode(data.space_data)
    await adminpg.lane_portcode_val()
    await adminpg.lane_portcode(data.portcode)   //change

    await adminpg.lane_gateway_fee(data.zero_data)
    await adminpg.lane_gatefee_val()
    await adminpg.lane_gateway_fee(data.fee)

    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("   ")
    await expect(page.locator("//span[text()='Gateway Code is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("Q#$%^")
    await expect(page.locator("//span[text()='Only Numbers are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("sdsds")
    await expect(page.locator("//span[text()='Only Numbers are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("100")

    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

  })
  test("check that can able to add INNSA as destination port and search in filter",async({page, adminpg})=>{ 
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countryname)   //change
    await adminpg.lane_type(data.destination)
    await adminpg.lane_portname(data.portname)  //change
    await adminpg.lane_portcode(data.portcode)   //change
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()
    await adminpg.lane_search("nhava")
    await expect(page.locator("(//div[@data-field='country'])[2]")).toBeVisible()
    await expect(page.locator("(//div[@data-field='country'])[3]")).toBeVisible()
    

  })
  test("check that able to add lane with same details like same port name and code (NOT ADDED)", async ({ adminpg, page }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countryname) //change
    await adminpg.lane_type(data.gateway)
    await adminpg.lane_portname(data.portname)  //change
    await adminpg.lane_portcode(data.portcode)  //change
    await adminpg.lane_gateway_fee(data.fee)
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("100")
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await adminpg.lane_error()

  })
  test("check that able to add lane with different details for another gateway(INMAA -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countryname) //change
    await adminpg.lane_type(data.gateway)
    await adminpg.lane_portname("chennai port")  //change
    await adminpg.lane_portcode("inmaa")  //change
    await adminpg.lane_gateway_fee(data.fee)
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("101")
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

  })
  test("check that able to add lane with same details with different port name and code(AEJEA -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_type(data.destination)
    await adminpg.savelane()

    await adminpg.lane_coun_val()
    await adminpg.lane_portname_val()
    await adminpg.lane_portcode_val()
    await adminpg.lane_country(data.countrynamee)   //change

    await adminpg.lane_portname(data.splcharacter_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portname(data.numeric_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portname(data.space_data)
    await adminpg.lane_portname_val()
    await adminpg.lane_portname(data.ano_portname)//change

    await adminpg.lane_portcode(data.splcharacter_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portcode(data.numeric_data)
    await adminpg.lane_portname_val1()
    await adminpg.lane_portcode(data.space_data)
    await adminpg.lane_portcode_val()
    await adminpg.lane_portcode(data.ano_portcode)//change
    
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()
  })
  test("Add one country edit each and every field and check duplicates also(SMPLA -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.laneheading()
    await adminpg.addlane()
    await adminpg.lane_country(data.countryname) //change
    await adminpg.lane_type(data.gateway)
    await adminpg.lane_portname("sample port")  //change
    await adminpg.lane_portcode("smpla")  //change
    await adminpg.lane_gateway_fee("20")
    await page.locator("//input[@placeholder='Enter Gateway Code']").fill("103")
    await adminpg.savelane()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

    await adminpg.lane_search("sample port")
    await adminpg.edit_first()
    await adminpg.lane_country("dummy coun")
    await adminpg.lane_type(data.destination)
    await adminpg.lane_portname("us port")  //change
    await adminpg.lane_portcode("usprt")
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

    await adminpg.laneheading()
    await adminpg.lane_search("us port")
    await adminpg.edit_first()
    await adminpg.active()
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

    await adminpg.laneheading()
    await adminpg.lane_search("us port")
    await adminpg.edit_first()
    await adminpg.lane_portcode(data.portcode)
    await adminpg.Inactive()
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()
    await page.waitForTimeout(7000)
    await adminpg.lane_portname(data.portname)
    await adminpg.updatelane()
    await adminpg.pop_up_yes()
    await adminpg.duptoast()

  })
  test("search the lane in different filter (SEARCH JEBEL ALI IN GATEWAY AND SEARCH NHAVA SHEVA IN DESTINATION)", async ({ adminpg }) => {
    await adminpg.laneheading()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_gate()
    await adminpg.lane_search(data.ano_portname)
    await adminpg.no_rows()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_dest()
    await adminpg.lane_search(data.portname)
    await adminpg.no_rows()

  })
  test("search the lane in correct filter (SEARCH NHAVA SHEVA IN DESTINATION AND SEARCH JEBEL ALI IN GATEWAY)", async ({ adminpg }) => {
    await adminpg.laneheading()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_gate()
    await adminpg.lane_search(data.portname)
    await adminpg.search_lane_one()
    await adminpg.lane_filter3()
    await adminpg.lane_filter_dest()
    await adminpg.lane_search(data.ano_portname)
    await adminpg.search_lane_one()
  })
})//done

test.describe.skip("Cost Heading Management", async () => {

  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(90000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

  })
  test("check all the fields with validation and add one cost heading (UAE COUNTRY -> ACTIVE)", async ({ adminpg, page }) => {
    await expect(page.locator("//h3[text()='Cost Heading']")).toHaveValue("Cost Heading")
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.save_costheading()
    await adminpg.costheading_sac_val()
    await adminpg.costheading_ch_val()
    await adminpg.costheading_countries_val()

    await adminpg.costheading_sac(data.splcharacter_data)
    await adminpg.costheading_sac_val1()
    await adminpg.costheading_sac(data.alphabets_data)
    await adminpg.costheading_sac_val1()
    await adminpg.costheading_sac(data.space_data)
    await adminpg.costheading_sac_val()
    await adminpg.costheading_sac(data.sac)

    await adminpg.costheading_ch(data.splcharacter_data)
    await adminpg.costheading_ch_val1()
    await adminpg.costheading_ch(data.numeric_data)
    await adminpg.costheading_ch_val1()
    await adminpg.costheading_ch(data.space_data)
    await adminpg.costheading_ch_val()
    await adminpg.costheading_ch(data.costheading)

    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum()  //change
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.Addedcostheading_toast()

  })
  test("check add same cost heading for added country (NO ADDED)", async ({ adminpg }) => {
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac1)
    await adminpg.costheading_ch(data.costheading1)
    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum()
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.costheading_error()
  })
  test("check add another cost heading for already added country (DUMMY COUN -> ACTIVE)", async ({ page, adminpg }) => {
    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac1)
    await adminpg.costheading_ch(data.costheading1)
    await adminpg.costheading_countries()
    await adminpg.costheading_countries_dum()  //change
    await adminpg.click_out()
    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.costheading_error()

    await page.reload()

    await adminpg.costheading()
    await adminpg.add_costheading()
    await adminpg.costheading_sac(data.sac1)
    await adminpg.costheading_ch(data.costheading1)
    await adminpg.costheading_countries()
    await page.locator("//span[text()='united states of america']").click()
    await adminpg.click_out()

    await adminpg.save_costheading()
    await adminpg.pop_up_yes()
    await adminpg.Addedcostheading_toast()

    await adminpg.cost_searchbox("ams new")
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.Inactive()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

    await adminpg.cost_searchbox("ams new")
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.active()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

    await adminpg.cost_searchbox("ams new")
    await expect(page.locator("(//div[@data-field='sacCode'])[2]")).toBeVisible()
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.costheading_sac("901321")
    await adminpg.costheading_ch("chs")
    await page.click("//button[text()='Update Cost Heading']")
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

  })
  test("search with valid cost heading", async ({ page, adminpg }) => {
    await adminpg.costheading()
    await adminpg.cost_searchbox("chs")
    await expect(page.locator("(//div[@data-field='sacCode'])[2]")).toBeVisible()

  })
  test("search with Invalid cost heading", async ({ adminpg }) => {
    await adminpg.costheading()
    await adminpg.cost_searchbox("382911")
    await adminpg.cost_norows()

  })
})//done 

test.describe.skip("Cfs Management", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("check all the fields with validation and add one cfs (NHAVA SHEVA CFS -> ACTIVE, MAIL->SUBHAM)", async ({ adminpg, page }) => {
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.save_cfs()
    await adminpg.cfs_country_val()
    await adminpg.cfs_type_val()
    await adminpg.cfs_cfsname_val()
    await adminpg.cfs_cfsbranch_val()
    await adminpg.cfs_fullname_val()
    await adminpg.cfs_email_val()
    await adminpg.cfs_address_val()
    await adminpg.cfs_phonecode_val()

    await adminpg.cfs_countryname(data.countryname)
    await adminpg.cfs_type(data.typedes)
    await adminpg.cfs_destination_val()
    await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible() 
    await page.locator("//input[@placeholder='Enter Storage Free days']").fill("0000")
    await expect(page.locator("//span[text()='Only positive numbers are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Storage Free days']").fill("5")
    //await expect(page.locator("(//span[text()='Only numbers are allowed'])[1]")).toBeHidden()

    await adminpg.cfs_countryname(data.countryname)
    await adminpg.cfs_type(data.typeori)
    await adminpg.save_cfs()
    await adminpg.cfs_gateway_val()
    await expect(page.locator("//span[text()='Shed Number is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Shed Number']").fill(data.space_data)
    await expect(page.locator("//span[text()='Shed Number is Required']")).toBeVisible()
    await expect(page.locator("//span[text()='Allmasters Account Code is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='AllMasters Account Code']").fill(data.space_data)
    await expect(page.locator("//span[text()='Allmasters Account Code is Required']")).toBeVisible()
  
    await page.locator("//input[@placeholder='Enter Shed Number']").fill("SHDN01")
    await page.locator("//input[@placeholder='AllMasters Account Code']").fill("ALMSX91")

    // await adminpg.cfs_type(data.typeori)
    // await adminpg.save_cfs()
    // await adminpg.cfs_gateway_val()
    await adminpg.cfs_gateway(data.cfs_orilane)

    await adminpg.cfs_cfsname(data.space_data)
    await adminpg.cfs_cfsname_val()
    await adminpg.cfs_cfsbranch(data.space_data)
    await adminpg.cfs_cfsbranch_val()

    await adminpg.cfs_cfsname(data.cfsname)
    await adminpg.cfs_cfsbranch(data.cfsbranch)

    await adminpg.cfs_fullname(data.splcharacter_data)
    await adminpg.cfs_fullname_1_val()
    await adminpg.cfs_fullname(data.numeric_data)
    await adminpg.cfs_fullname_1_val()
    await adminpg.cfs_fullname(data.space_data)
    await adminpg.cfs_fullname_val()
    await adminpg.cfs_fullname(data.name)

    await adminpg.cfs_email(data.splcharacter_data)
    await adminpg.cfs_email_1_val()
    await adminpg.cfs_email(data.numeric_data)
    await adminpg.cfs_email_1_val()
    await adminpg.cfs_email(data.space_data)
    await adminpg.cfs_email_val()
    await adminpg.cfs_email(data.cfs_email)

    await adminpg.cfs_address(data.space_data)
    await adminpg.cfs_address_val()
    await adminpg.cfs_address(data.cfs_Address)

    await adminpg.cfs_phonecode(data.splcharacter_data)
    await adminpg.cfs_phonecode_1_val()
    await adminpg.cfs_phonecode(data.numeric_data)
    await expect(page.locator("//span[text()='Mobile Number format is not correct']")).toBeVisible()
    await adminpg.cfs_phonecode(data.space_data)
    await adminpg.cfs_phonecode_1_val()
    await adminpg.cfs_phonecode(data.alphabets_data)
    await adminpg.cfs_phonecode_1_val()
    // await adminpg.cfs_phonecode("")
    // await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
    await adminpg.cfs_phonecode(data['mobilecode&number'])

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(5000)
    await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/destination (2).xls")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/sample.png")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

    await adminpg.save_cfs()
    await adminpg.pop_up_yes()
    await page.waitForTimeout(4000)
    await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

  })
  test("check all the fields with validation and add one cfs (CHENNAI CFS -> ACTIVE, MAIL->BALREDDY)", async ({ adminpg, page }) => {

    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countryname)
    await adminpg.cfs_type(data.typeori)
    await adminpg.cfs_gateway("chennai port")
    await adminpg.cfs_cfsname("chennai")
    await adminpg.cfs_cfsbranch("branch 1")
    await adminpg.cfs_fullname("balreddy")
    await adminpg.cfs_email("balreddy.mahendra@dokonaly.com")
    await adminpg.cfs_address("balreddy address")
    await adminpg.cfs_phonecode(data.mobilecode_number)
    await page.locator("//input[@placeholder='Enter Shed Number']").fill("SHDN03")
    await page.locator("//input[@placeholder='AllMasters Account Code']").fill("ALMSX94")

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(5000)
    await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()

    await page.locator("(//p[text()='3mb(1).pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.waitForTimeout(5000)

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

    await adminpg.save_cfs()
    await adminpg.pop_up_yes()
    await page.waitForTimeout(4000)
    await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

  })
  test("check all the fields with validation and add one cfs (JEBEL ALI CFS -> ACTIVE, MAIL->BALAJI)", async ({ adminpg, page }) => {
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.cfs_countryname(data.countrynamee)
    await adminpg.cfs_type(data.typedes)
    await adminpg.cfs_destination("jebel ali")
    await page.locator("//input[@placeholder='Enter Storage Free days']").fill("5")
    await adminpg.cfs_cfsname("jebel ali cfs")
    await adminpg.cfs_cfsbranch("branch 1")
    await adminpg.cfs_fullname("balaji")
    await adminpg.cfs_email("balaji.r@dokonaly.com")
    await adminpg.cfs_address("balaji address")
    await adminpg.cfs_phonecode("+9711234567")

    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(5000)
    await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()
    await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

    await adminpg.save_cfs()
    await adminpg.pop_up_yes()
    await page.waitForTimeout(4000)
    await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

  })
  test("check mail validations ", async ({ adminpg, page }) => {
    await adminpg.cfsmanagement()
    await adminpg.add_cfs()
    await adminpg.save_cfs()
    await adminpg.cfs_email(data.cfs_email)
    await adminpg.cfs_duplicatemailval()

    const dm = 62
    for (let i = 0; i < dm; i++) {
      await adminpg.cfs_email(data.sample[i])
      await adminpg.cfs_offemailval()
    }
    await page.close()
  })
// after create password
  test("check that edit functionality and save as inactive", async({adminpg, page, baseURL, loginpg})=>{
    //await page.pause()
    await adminpg.cfsmanagement()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MUMBAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MumBai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("     mumbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("(//div[@data-colindex='6']//div)[1]").click()
    await expect(page.locator("//select[@name='countryName']")).toBeDisabled()
    await expect(page.locator("//select[@name='type']")).toBeDisabled()
    await expect(page.locator("//select[@name='gateway']")).toBeDisabled()
    await expect(page.locator("//input[@name='email']")).toBeDisabled()
    await expect(page.locator("//span[text()='+']")).toBeDisabled()
    await expect(page.locator("//p[text()='3mb(1).pdf']")).toBeVisible()
    await page.locator("(//div[@data-colindex='6']//div)[1]").click()
    await page.locator("(//p[@title='3mb(1).pdf']/following-sibling::div)[1]").click()
    await page.locator("//button[text()='Save CFS']").click()
    await page.locator("//button[text()='Yes']").click()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MumBai")
    await page.locator("(//div[@data-colindex='6']//div)[1]").click()
    await expect(page.locator("//p[text()='3mb(1).pdf']")).toBeHidden()
    await page.locator("//button[text()='Save CFS']").click()
    await page.locator("//button[text()='Yes']").click()
    await page.waitForTimeout(4000)
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    await page.locator("//li[text()='Sign Out']").click()
    // go with admin login and change the status into inactive

    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

    await adminpg.cfsmanagement()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("(//input[@type='checkbox'])[1]").click()
    await page.locator("//button[text()='Yes']").click()
    await page.waitForTimeout(6000)
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("jebel ali cfs")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@type='checkbox']").click()
    await page.locator("//button[text()='Yes']").click()
    await page.waitForTimeout(6000)
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type2)
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()

    await loginpg.select_type(data.type2)
    await loginpg.emailID("balaji.r@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()

    // after chnage the status into active
    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input1 = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input1) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

    await adminpg.cfsmanagement()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@type='checkbox']").click()
    await page.locator("//button[text()='Yes']").click()
    await page.waitForTimeout(6000)
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("jebel ali cfs")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@type='checkbox']").click()
    await page.locator("//button[text()='Yes']").click()
    await page.waitForTimeout(6000)
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type2)
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()

    await loginpg.select_type(data.type2)
    await loginpg.emailID("balaji.r@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()

  })
  test("login with ocfs and dcfs credentials", async ({ page, baseURL, loginpg }) => {
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type2)
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()

    await loginpg.select_type(data.type2)
    await loginpg.emailID("balreddy.mahendra@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()

    await loginpg.select_type(data.type2)
    await loginpg.emailID("balaji.r@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.logout_dd()
    await page.close()
  })
})

test.describe('login functionality with mulitple logins as partner', async () => {
  test.beforeEach(async ({ baseURL, page }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
  })
  test("login with valid username and password as partner", async ({ loginpg, page }) => {

    await loginpg.select_type(data.type2)
    await loginpg.emailID("subham@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.locator("(//a[@class='dropdown-toggle nav-link'])[1]").click()
    await page.locator("//a[contains(text(),'Logout')]").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()
    await page.close()
  })
  test("login with valid username and Invalid password as partner after three times receive another toast message", async ({ loginpg, page }) => {

    await loginpg.select_type(data.type2)
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.reload()
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.reload()
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast2()
    await page.close()
  })
  test("login with Invalid username and valid password as partner", async ({ loginpg, page }) => {

    await loginpg.select_type(data.type2)
    await loginpg.emailID("subha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.reload()
    await loginpg.emailID("subha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.reload()
    await loginpg.emailID("subha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.close()
  })
  test("login with Invalid username and Invalid password as partner", async ({ loginpg, page }) => {

    await loginpg.select_type(data.type2)
    await loginpg.emailID("subha@dokonaly.com")
    await loginpg.password("Doko2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.reload()
    await loginpg.emailID("subha@dokonaly.com")
    await loginpg.password("Doko2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.reload()
    await loginpg.emailID("subha@dokonaly.com")
    await loginpg.password("Doko2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.close()
  })
  test("login with valid credentials of partner but as customer and administrator", async ({ loginpg, page }) => {

    await loginpg.select_type(data.type1)
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.reload()
    await loginpg.select_type(data.type3)
    await loginpg.emailID("subham.sidhartha@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await loginpg.login_wrgtoast()
    await page.close()
  })
})

test.describe("Holiday", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(340000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })

  test.only("Check validation & add holiday and search with holiday name", async ({ adminpg, page }) => {
    /*await adminpg.holiday()
    await adminpg.holiday_add()
    await adminpg.holiday_save()
    await adminpg.holiday_validationmsg()
    await adminpg.holiday_portcode(data.portcode_holi)
    await adminpg.holiday_dateclk()
    await adminpg.holiday_date_choose()
    await adminpg.holiday_name(data.space_data)
    await adminpg.holiday_space_validationmsg()
    await adminpg.holiday_name(data.numeric_data)
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name(data.splcharacter_data)
    await adminpg.holiday_name_validationmsg()

    await adminpg.holiday_name(data.name_holi)
    await adminpg.holiday_save()
    await adminpg.holiday_yes()
    await adminpg.holiday_search(data.name_holi)
    await adminpg.asser_holiday()*/

    await adminpg.holiday()
    await adminpg.holiday_headingname()
    await adminpg.holiday_add()
    await adminpg.holiday_save()
    await adminpg.holiday_validationmsg()
    await adminpg.holiday_portcode("INNSA")
    await adminpg.holiday_name("@#@#!@")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("34234234")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("     ")
    await adminpg.holiday_space_validationmsg()
    await adminpg.holiday_name("QA one holiday")
    await adminpg.holiday_dateclk()
    await adminpg.holiday_date_choose()

    await adminpg.holiday_save()
    await adminpg.holiday_yes()
    await adminpg.add_holiday_toast()

    await adminpg.holiday_search("qa one holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Active'])[1]")).toBeVisible()
    await page.reload()

    await adminpg.holiday()
    await adminpg.holiday_add()
    await adminpg.holiday_save()
    await adminpg.holiday_validationmsg()
    await adminpg.holiday_portcode("AEJEA")
    await adminpg.holiday_name("@#@#!@")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("34234234")
    await adminpg.holiday_name_validationmsg()
    await adminpg.holiday_name("     ")
    await adminpg.holiday_space_validationmsg()
    await adminpg.holiday_name("QA one holiday")
    await adminpg.holiday_dateclk()
    await adminpg.holiday_date_choose1()
    await adminpg.holiday_save()
    await adminpg.holiday_yes()
    await adminpg.add_holiday_toast()

    await adminpg.holiday_search("qa one holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await expect(page.locator("(//div[@data-colindex='0'])[2]")).toBeVisible()
    await expect(page.locator("(//span[text()='Active'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Active'])[2]")).toBeVisible()


    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.holiday_name("edit qa one holiday")
    await page.click("(//button[@name='status'])[2]")
    await adminpg.holiday_update()
    await adminpg.holiday_yes()
    await adminpg.edit_holiday_toast()
    await page.reload()

    await page.click("//div[text()='Active']")
    await page.click("//li[text()='Inactive']")
    await adminpg.holiday_search("edit qa one holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Inactive'])[1]")).toBeVisible()

  })

  test.only("Upload different types of data in Xls file and check validation and search also", async ({ adminpg, page }) => {

    await adminpg.holiday()
    await adminpg.holiday_upload("data-files/Works.docx")
    await adminpg.otherdoc_toast()
    await page.reload()
    await adminpg.holiday_upload("data-files/test.pdf")
    await adminpg.otherdoc_toast()
    await page.reload()
    await adminpg.holiday_upload("data-files/sample.png")
    await adminpg.otherdoc_toast()
    await page.reload()

    await adminpg.holiday_upload("data-files/wrong portcode.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.invalidportcode_toast()
    await page.reload()

    await adminpg.holiday_upload("data-files/wrong date.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.invaliddate_toast()
    await page.reload()

    //await page.pause()
    await adminpg.holiday_upload("data-files/wrong holiday name.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.invalidholidayname_toast()
    await page.reload()

    await adminpg.holiday_upload("data-files/valid holiday.xls")
    await adminpg.file_upload_toast()
    await adminpg.submit_button_file()
    await adminpg.holiday_yes()
    await adminpg.add_holiday_toast()
    await page.reload()

    await adminpg.holiday_search("Upload file Test One")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await adminpg.holiday_search("Upload file Test Two")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()


  })
})

test.describe("Schedule", async () => {

  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(180000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password(data.password_Ad)
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("check all validation message (INNSA-AEJEA -> ACTIVE)", async ({ page, adminpg }) => {

    await adminpg.schedule()
    await adminpg.add_schedule()
    await adminpg.save_schedule()

    await expect(page.locator("//input[@name='volume']")).toBeDisabled()
    await expect(page.locator("//span[text()='CBM']")).toBeEnabled()
    await expect(page.locator("//input[@name='weight']")).toBeDisabled()
    await expect(page.locator("//span[text()='Kg']")).toBeEnabled()
    await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[3]")).toBeDisabled()
    await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[4]")).toBeDisabled()
    await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[5]")).toBeDisabled()
    await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[6]")).toBeDisabled()
    await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[7]")).toBeDisabled()

    await expect(page.locator("//span[text()='POL is required']")).toBeVisible()
    await expect(page.locator("//span[text()='POD is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Container type is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Volume is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Weight is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Vessel is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Voyage is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Service Name is required']")).toBeVisible()

    await expect(page.locator("//span[text()='ETD is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Booking CutOff Date is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Origin CFS CutOff Date is required']")).toBeVisible()
    await expect(page.locator("//span[text()='ETA is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Destination CFS Cargo Delivery Date is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Origin CFS Name is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Origin CFS Closing Time is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Destination CFS Name is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Destination Available Time is required']")).toBeVisible()
    
    await adminpg.sch_pol(data.ori_portcode)
    await adminpg.sch_pod("AEJEA")
    await adminpg.save_schedule()
    await expect(page.locator("//span[text()='Origin CFS Branch is required']")).toBeVisible()
    await expect(page.locator("//span[text()='Destination CFS Branch is required']")).toBeVisible()
    await adminpg.sch_container("40HC")
    await adminpg.schedule_vessel("!@#$%")
    await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
    await adminpg.schedule_vessel("78728")
    await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
    await adminpg.schedule_vessel("kdjs")
    await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
    await adminpg.schedule_vessel("   ")
    await expect(page.locator("//span[text()='Vessel is required']")).toBeVisible()
    await adminpg.schedule_vessel("Evergreen")

    await adminpg.schedule_voyage("!@#$%")
    await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
    await adminpg.schedule_voyage("78728")
    await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
    await adminpg.schedule_voyage("kdjs")
    await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
    await adminpg.schedule_voyage("   ")
    await expect(page.locator("//span[text()='Voyage is required']")).toBeVisible()
    await adminpg.schedule_voyage("V.3982")


    await adminpg.schedule_service("*&^&*&(")
    await expect(page.locator("//span[text()='Only alphabets & numbers are allowed']")).toBeVisible()
    await adminpg.schedule_service("    ")
    await expect(page.locator("//span[text()='Service Name is required']")).toBeVisible()
    await adminpg.schedule_service("324333")
    await expect(page.locator("//span[text()='Only alphabets & numbers are allowed']")).toBeHidden()
    await adminpg.schedule_service("IEMS")
    await expect(page.locator("//span[text()='Service Name is required']")).toBeHidden()
   
    ///after verified with msg adding a new schedule
    // await adminpg.sch_pol(data.ori_portcode)
    // await adminpg.sch_pod("AEJEA")
    // await adminpg.sch_container("40HC")
    // await adminpg.schedule_vessel("evergreen")
    // await adminpg.schedule_voyage("V. 120")
    // await adminpg.schedule_service("IEX0")
    await page.locator("(//button[@aria-label='Choose date'])[3]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='16']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[3]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='8']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[3]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='10']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[3]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='19']").click()

    await page.waitForTimeout(1000)
    await page.locator("(//button[@aria-label='Choose date'])[3]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='24']").click()

    await adminpg.sch_oricfsname("mumbai")
    await adminpg.sch_oricfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()

    await adminpg.sch_destcfsname("jebel ali cfs")
    await adminpg.sch_destcfsbranch("branch 1")
    await adminpg.ct()
    await adminpg.ct_select()
    await adminpg.ct_ok()
    await adminpg.save_schedule()
    await adminpg.pop_up_yes()
    await adminpg.add_sch_toast()

    await expect(page.locator("(//div[@title='Evergreen'])[1]")).toBeVisible()
    await expect(page.locator("(//div[@title='V.3982'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Active'])[1]")).toBeVisible()
    await page.locator("(//div[contains(@class,'MuiDataGrid-cell--withRenderer MuiDataGrid-cell')]//div)[3]").click()
    await expect(page.locator("//select[@name='pol']")).toBeDisabled()
    await expect(page.locator("//select[@name='pod']")).toBeDisabled()
    await expect(page.locator("//select[@name='container']")).toBeDisabled()
    await expect(page.locator("//input[@name='volume']")).toBeDisabled()
    await expect(page.locator("//input[@name='weight']")).toBeDisabled()
    await page.locator("//button[text()='Inactive']").click()
    await page.locator("//button[text()='Update Schedule']").click()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    await page.locator("//div[text()='Active']").click()
    await page.locator("//li[text()='Inactive']").click()
    await expect(page.locator("(//div[@title='Evergreen'])[1]")).toBeVisible()
    await expect(page.locator("(//div[@title='V.3982'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Inactive'])[1]")).toBeVisible()
    await page.locator("(//div[contains(@class,'MuiDataGrid-cell--withRenderer MuiDataGrid-cell')]//div)[3]").click()
    await page.locator("//button[text()='Active']").click()
    await page.locator("//button[text()='Update Schedule']").click()
    await adminpg.pop_up_yes()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    

  })
  test("Editing the schedule", async ({ page, adminpg }) => {

    await adminpg.schedule()
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.schedule_vessel("edit vessel")
    await adminpg.schedule_voyage("edit voyage")
    await adminpg.schedule_service("edit service")
    await page.locator("//button[text()='Update Schedule']").click()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()

    await page.reload()
    await adminpg.schedule()
    await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
    await adminpg.schedule_vessel("Evergreen")
    await adminpg.schedule_voyage("V.3982")
    await page.locator("//button[text()='Update Schedule']").click()
    await adminpg.pop_up_yes()
    await adminpg.edi_sch_toast()


  })
})

test.describe("Rates", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("rdt@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("verify that can able to add zero in rates", async ({ adminpg, page }) => {

    await adminpg.rates()
    await expect(page.locator("//h3[text()='Rate Management']")).toBeVisible()
    await expect(page.locator("//button[text()='Add Rate']")).toBeVisible()
    await expect(page.locator("//div[text()='Schedule ID']")).toBeVisible()
    await expect(page.locator("//div[text()='POL']")).toBeVisible()
    await expect(page.locator("//div[text()='POD']")).toBeVisible()
    await expect(page.locator("//div[text()='ETA']")).toBeVisible()
    await expect(page.locator("//div[text()='ETD']")).toBeVisible()
    //await expect(page.locator("//div[text()='Destination Total']")).toBeVisible()
    await expect(page.locator("//div[text()='Created At']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()
    await expect(page.locator("//div[text()='VIEW']")).toBeVisible()
    await adminpg.add_rates()
    //await adminpg.select_ScheduleID()
    await page.locator("//input[@placeholder='Select Schedule ID']").click()
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await expect(page.locator("//h3[text()='Add Rates']")).toBeVisible()
    await expect(page.locator("//p[text()='Schedule ID']")).toBeVisible()
    await expect(page.locator("//p[text()='CBM']")).toBeVisible()
    await expect(page.locator("//h3[text()='58']")).toBeVisible()
    await expect(page.locator("//p[text()='Type']")).toBeVisible()
    await expect(page.locator("//h3[text()='40 HC']")).toBeVisible()
    await expect(page.locator("//p[text()='Weight']")).toBeVisible()
    await expect(page.locator("//h3[text()='28000']")).toBeVisible()

    await expect(page.locator("//h1[text()='Origin']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[1]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Breakeven'])[1]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[1]")).toBeVisible()
    await expect(page.locator("//h1[text()='Freight']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[2]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Breakeven'])[2]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[2]")).toBeVisible()
    await expect(page.locator("//h1[text()='Destination']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[3]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Breakeven'])[3]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[3]")).toBeVisible()
    await expect(page.locator("//h1[text()='Other']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[4]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[4]")).toBeVisible()
    await expect(page.locator("//h3[text()='Final Preview - Start Price']")).toBeVisible()
    await expect(page.locator("//h3[text()='Savings Calculator']")).toBeVisible()
    await expect(page.locator("//h1[text()='Important!! ']")).toBeVisible()
    await expect(page.locator("//p[text()='Rate Engine cannot be altered after confirmation!']")).toBeVisible()

    for(let code=0; code<4; code++){
    await adminpg.ocfs(data.rates[code])
    await adminpg.odoc(data.rates[code])
    await adminpg.ori_break(data.rates[code])
    await adminpg.comp_ocfs(data.rates[code])
    await adminpg.comp_odoc(data.rates[code])
    await adminpg.freight(data.rates[code])
    await adminpg.fri_break(data.rates[code])
    await adminpg.comp_fri(data.rates[code])
    await adminpg.dcfs(data.rates[code])
    await adminpg.ddo(data.rates[code])
    await adminpg.dest_break(data.rates[code])
    await adminpg.comp_dcfs(data.rates[code])
    await adminpg.comp_ddo(data.rates[code])
    await adminpg.Ch_cost(data.rates[code])
    await adminpg.Ch_comp(data.rates[code])
    await adminpg.rates_confirm()
    }
    await expect(page.locator("//p[text()='Add Rate to this schedule ?']")).toBeVisible()
    await expect(page.locator("//div[text()='Are you sure that you want to add this Rate to this schedule, This action is irreversible and this rate cannot be altered?']")).toBeVisible()
    await page.locator("//button[text()='No']").click()
    await adminpg.rates_confirm()
    await expect(page.locator("//p[text()='Add Rate to this schedule ?']")).toBeVisible()
    await expect(page.locator("//div[text()='Are you sure that you want to add this Rate to this schedule, This action is irreversible and this rate cannot be altered?']")).toBeVisible()
    await page.locator("//button[text()='Yes']").click()
    await expect(page.locator("//div[text()='Rate Added Successfully']")).toBeVisible()
    await page.reload()
    await adminpg.ratemgmtheading()
    await page.locator("//div[text()='Active']").click()
    await page.locator("//li[text()='All']").click()
    await expect(page.locator("(//div[@data-colindex='1'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Inactive'])[1] ")).toBeVisible()
    await page.locator("//div[text()='All']").click()
    await page.locator("//li[text()='Inactive']").click()
    await expect(page.locator("(//div[@data-colindex='1'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Inactive'])[1] ")).toBeVisible()

  })
  test("check the schedule without getting approved by admin & when the schedule was inactive shouldn't get display in Dashboard", async ({ loginpg, page }) => {
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.s@allmasters.ai")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Place Booking']").click()
    await expect(page.locator("//p[contains(.,'Stay Tuned! Schedules will be Live shortly.')]")).toBeVisible()
    await loginpg.logout_dd()
  })
  test("login in admin check to add rates", async ({ adminpg, page, loginpg }) => {
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await adminpg.rates()
    await expect(page.locator("//h3[text()='Rate Management']")).toBeVisible()
    await expect(page.locator("//button[text()='Add Rate']")).toBeHidden()
    await expect(page.locator("//div[text()='Schedule ID']")).toBeVisible()
    await expect(page.locator("//div[text()='POL']")).toBeVisible()
    await expect(page.locator("//div[text()='POD']")).toBeVisible()
    await expect(page.locator("//div[text()='ETA']")).toBeVisible()
    await expect(page.locator("//div[text()='ETD']")).toBeVisible()
    //await expect(page.locator("//div[text()='Destination Total']")).toBeVisible()
    await expect(page.locator("//div[text()='Created At']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()
    await expect(page.locator("//div[text()='VIEW']")).toBeVisible()
    await expect(page.locator("(//div[@data-colindex='1'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Active'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='View'])[1]")).toBeVisible()
    await page.locator("//div[text()='Active']").click()
    await page.locator("//li[text()='All']").click()
    await expect(page.locator("(//div[@data-colindex='1'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Inactive'])[1] ")).toBeVisible()
    await expect(page.locator("(//p[text()='Approve'])[1]")).toBeVisible()
    await page.locator("//div[text()='All']").click()
    await page.locator("//li[text()='Inactive']").click()
    await expect(page.locator("(//div[@data-colindex='1'])[1]")).toBeVisible()
    await expect(page.locator("(//span[text()='Inactive'])[1] ")).toBeVisible()
    await expect(page.locator("(//p[text()='Approve'])[1]")).toBeVisible()
    await page.locator("(//p[text()='Approve'])[1]").click()

    await expect(page.locator("//h3[text()='Rates Details']")).toBeVisible()
    await expect(page.locator("//p[text()='Schedule ID']")).toBeVisible()
    await expect(page.locator("//p[text()='CBM']")).toBeVisible()
    await expect(page.locator("//h3[text()='58']")).toBeVisible()
    await expect(page.locator("//p[text()='Type']")).toBeVisible()
    await expect(page.locator("//h3[text()='40 HC']")).toBeVisible()
    await expect(page.locator("//p[text()='Weight']")).toBeVisible()
    await expect(page.locator("//h3[text()='28000']")).toBeVisible()

    await expect(page.locator("//h1[text()='Origin']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[1]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Breakeven'])[1]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[1]")).toBeVisible()
    await expect(page.locator("//h1[text()='Freight']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[2]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Breakeven'])[2]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[2]")).toBeVisible()
    await expect(page.locator("//h1[text()='Destination']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[3]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Breakeven'])[3]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[3]")).toBeVisible()
    await expect(page.locator("//h1[text()='Other']")).toBeVisible()
    await expect(page.locator("(//h3[text()='Cost'])[4]")).toBeVisible()
    await expect(page.locator("(//h3[text()='Comparison'])[4]")).toBeVisible()
    await expect(page.locator("//h3[text()='Final Preview - Start Price']")).toBeVisible()
    await expect(page.locator("//h3[text()='Savings Calculator']")).toBeVisible()
    await expect(page.locator("//h1[text()='Important!! ']")).toBeHidden()
    await expect(page.locator("//p[text()='Rate Engine cannot be altered after confirmation!']")).toBeHidden()

    await page.locator("//button[text()='Edit']").click()
    for(let code=0; code<4; code++){
      await adminpg.ocfs(data.rates[code])
      await adminpg.odoc(data.rates[code])
      await adminpg.ori_break(data.rates[code])
      await adminpg.comp_ocfs(data.rates[code])
      await adminpg.comp_odoc(data.rates[code])
      await adminpg.freight(data.rates[code])
      await adminpg.fri_break(data.rates[code])
      await adminpg.comp_fri(data.rates[code])
      await adminpg.dcfs(data.rates[code])
      await adminpg.ddo(data.rates[code])
      await adminpg.dest_break(data.rates[code])
      await adminpg.comp_dcfs(data.rates[code])
      await adminpg.comp_ddo(data.rates[code])
      await adminpg.Ch_cost(data.rates[code])
      await adminpg.Ch_comp(data.rates[code])
      await page.locator("//button[text()='Approve']").click()
    }
    await expect(page.locator("//p[text()='Add Rate to this schedule ?']")).toBeVisible()
    await expect(page.locator("//div[text()='Are you sure that you want to add this Rate to this schedule, This action is irreversible and this rate cannot be altered?']")).toBeVisible()
    await page.locator("//button[text()='No']").click()
    await adminpg.ocfs("40000")
    await adminpg.odoc("2300")
    await adminpg.ori_break("23")
    await adminpg.comp_ocfs("1800")
    await adminpg.comp_odoc("2200")
    await adminpg.freight("35")
    await adminpg.fri_break("30")
    await adminpg.comp_fri("5")
    await adminpg.dcfs("12000")
    await adminpg.ddo("1000")
    await adminpg.dest_break("12")
    await adminpg.comp_dcfs("1200")
    await adminpg.comp_ddo("1800")
    await adminpg.Ch_cost("23")
    await adminpg.Ch_comp("34")
    await page.locator("//button[text()='Approve']").click()
    await expect(page.locator("//p[text()='Add Rate to this schedule ?']")).toBeVisible()
    await expect(page.locator("//div[text()='Are you sure that you want to add this Rate to this schedule, This action is irreversible and this rate cannot be altered?']")).toBeVisible()
    await page.locator("//button[text()='Yes']").click()
    await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    await page.reload()
    await adminpg.ratemgmtheading()

  })
})

test.describe("Full Booking", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(340000)
    await page.goto(`${baseURL}`)
    await loginpg.emailID("sanjai.s@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {

      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test.only("cargo details", async ({ page, adminpg }) => { 
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)

    await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Height is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
    await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()
    await page.reload()

    await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await page.locator("//button[text()='Pre-Book Now']").click()
    await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Height is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
    await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()

    await page.locator("//button[text()='Continue to Book']").click()
    await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Height is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
    await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()

    await adminpg.non_stackable()
    await page.locator("//button[text()='Continue to Book']").click()
    await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Height is required']")).toBeHidden()
    await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
    await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()

    await adminpg.stackable()
    await adminpg.package_0(data.Crates)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("2212")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("2212")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("2212")

    await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    await page.locator("//button[@value='M']").click()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    await page.locator("//button[@value='MM']").click()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    await page.locator("//button[@value='IN']").click()
    await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()

    await page.reload()
    await adminpg.package_0(data.Barrels)
    await page.locator("//input[@name='cargoDetails.0.radius']").fill("2212")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("2212")

    await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
    await page.locator("//button[@value='M']").click()

    await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    await page.locator("//button[@value='MM']").click()

    await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    await page.locator("//button[@value='IN']").click()

    await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()

    //length check

    await page.reload()
    await adminpg.package_0(data.Crates)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("0")
    await expect(page.locator("(//p[text()='Zero not allowed'])[1]")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.length']").fill("2.")
    await expect(page.locator("//p[text()='Enter Valid Number']")).toBeVisible()

    await page.locator("//input[@name='cargoDetails.0.length']").fill("220.01")
    await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.length']").fill("2.20")
    await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.length']").fill("2200.01")
    await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.length']").fill("86.60")
    await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
    await page.reload()




    //p[text()='Should have 8 numbers']
    //   (//p[text()='Only Single Decimal is allowed'])[1]
    221
    //button[@value='stackable']
    //button[@value="non-stackable"]
    //select[@id='packageType0']   Pallets,Skids,Crates,Cartons,Bales,Boxes,Barrels,Rolls


    //span[text()='1']
    //span[text()='4']


    //input[@name='cargoDetails.0.radius']  

    //input[@name='cargoDetails.1.length']
    //button[text()='Add Another Package']


  })
  test.only("checking on each package values on different metrics with Stackable", async ({ page, adminpg }) => {
    test.setTimeout(180000);
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)

    //pallet
    await adminpg.package_0(data.Pallets)
    const cm = 9
    for (let i = 0; i < cm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m = 7
    for (let i = 0; i < m; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm = 5
    for (let i = 0; i < mm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc = 3
    for (let i = 0; i < inc; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //skids
    await page.reload()
    await adminpg.package_0(data.Skids)
    const cm1 = 9
    for (let i = 0; i < cm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m1 = 7
    for (let i = 0; i < m1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm1 = 5
    for (let i = 0; i < mm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc1 = 3
    for (let i = 0; i < inc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //crates
    await page.reload()
    await adminpg.package_0(data.Crates)
    const cm2 = 9
    for (let i = 0; i < cm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m2 = 7
    for (let i = 0; i < m2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm2 = 5
    for (let i = 0; i < mm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc2 = 3
    for (let i = 0; i < inc2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //cartons
    await page.reload()
    await adminpg.package_0(data.Cartons)
    const cm3 = 9
    for (let i = 0; i < cm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m3 = 7
    for (let i = 0; i < m3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm3 = 5
    for (let i = 0; i < mm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc3 = 3
    for (let i = 0; i < inc3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //bales
    await page.reload()
    await adminpg.package_0(data.Bales)
    const cm4 = 9
    for (let i = 0; i < cm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m4 = 7
    for (let i = 0; i < m4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm4 = 5
    for (let i = 0; i < mm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc4 = 3
    for (let i = 0; i < inc4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //boxes
    await page.reload()
    await adminpg.package_0(data.Boxes)
    const cm5 = 9
    for (let i = 0; i < cm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m5 = 7
    for (let i = 0; i < m5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm5 = 5
    for (let i = 0; i < mm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc5 = 3
    for (let i = 0; i < inc5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //barrels    need to separate radius and height separately for barrels and rolls
    await page.reload()
    await adminpg.package_0(data.Barrels)
    const cm6 = 9
    for (let i = 0; i < cm6; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
    }

    await page.locator("//button[@value='M']").click()
    const m6 = 7
    for (let i = 0; i < m6; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    }

    const rm = 8
    for (let i = 0; i < rm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
    }

    await page.locator("//button[@value='MM']").click()
    const mm6 = 5
    for (let i = 0; i < mm6; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    }
    const rmm = 4
    for (let i = 0; i < rmm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
    }

    await page.locator("//button[@value='IN']").click()
    const inc6 = 3
    for (let i = 0; i < inc6; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    }
    const rinc = 6
    for (let i = 0; i < rinc; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
    }

    //Rolls
    await page.reload()
    await adminpg.package_0(data.Rolls)
    const cm7 = 9
    for (let i = 0; i < cm7; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
    }

    await page.locator("//button[@value='M']").click()
    const m7 = 7
    for (let i = 0; i < m7; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    }

    const rm1 = 8
    for (let i = 0; i < rm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
    }

    await page.locator("//button[@value='MM']").click()
    const mm7 = 5
    for (let i = 0; i < mm7; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    }
    const rmm1 = 4
    for (let i = 0; i < rmm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
    }

    await page.locator("//button[@value='IN']").click()
    const inc7 = 3
    for (let i = 0; i < inc7; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    }
    const rinc1 = 6
    for (let i = 0; i < rinc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
    }


  })
  test.only("checking on each package values on different metrics with Non-Stackable", async ({ page, adminpg }) => {
    test.setTimeout(180000);
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)

    //pallet
    await adminpg.non_stackable()
    await adminpg.package_0(data.Pallets)
    const cm = 9
    for (let i = 0; i < cm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m = 7
    for (let i = 0; i < m; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm = 5
    for (let i = 0; i < mm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc = 3
    for (let i = 0; i < inc; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    //skids
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Skids)
    const cm1 = 9
    for (let i = 0; i < cm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m1 = 7
    for (let i = 0; i < m1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm1 = 5
    for (let i = 0; i < mm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc1 = 3
    for (let i = 0; i < inc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    //crates
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Crates)
    const cm2 = 9
    for (let i = 0; i < cm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m2 = 7
    for (let i = 0; i < m2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm2 = 5
    for (let i = 0; i < mm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc2 = 3
    for (let i = 0; i < inc2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    //cartons
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Cartons)
    const cm3 = 9
    for (let i = 0; i < cm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m3 = 7
    for (let i = 0; i < m3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm3 = 5
    for (let i = 0; i < mm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc3 = 3
    for (let i = 0; i < inc3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    //bales
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Bales)
    const cm4 = 9
    for (let i = 0; i < cm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m4 = 7
    for (let i = 0; i < m4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm4 = 5
    for (let i = 0; i < mm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc4 = 3
    for (let i = 0; i < inc4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    //boxes
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Boxes)
    const cm5 = 9
    for (let i = 0; i < cm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='M']").click()
    const m5 = 7
    for (let i = 0; i < m5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='MM']").click()
    const mm5 = 5
    for (let i = 0; i < mm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("//button[@value='IN']").click()
    const inc5 = 3
    for (let i = 0; i < inc5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
  //    await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //barrels    need to separate radius and height separately for barrels and rolls
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Barrels)
    const cm6 = 9
    for (let i = 0; i < cm6; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
    }

    await page.locator("//button[@value='M']").click()
    // const m6 = 7
    // for (let i = 0; i < m6; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    // }

    const rm = 8
    for (let i = 0; i < rm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
    }

    await page.locator("//button[@value='MM']").click()
    // const mm6 = 5
    // for (let i = 0; i < mm6; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    // }
    const rmm = 4
    for (let i = 0; i < rmm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
    }

    await page.locator("//button[@value='IN']").click()
    // const inc6 = 3
    // for (let i = 0; i < inc6; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    // }
    const rinc = 6
    for (let i = 0; i < rinc; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
    }

    //Rolls
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Rolls)
    const cm7 = 9
    for (let i = 0; i < cm7; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
    }

    await page.locator("//button[@value='M']").click()
    // const m7 = 7
    // for (let i = 0; i < m7; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    // }

    const rm1 = 8
    for (let i = 0; i < rm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
    }

    await page.locator("//button[@value='MM']").click()
    // const mm7 = 5
    // for (let i = 0; i < mm7; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    // }
    const rmm1 = 4
    for (let i = 0; i < rmm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
    }

    await page.locator("//button[@value='IN']").click()
    // const inc7 = 3
    // for (let i = 0; i < inc7; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    // }
    const rinc1 = 6
    for (let i = 0; i < rinc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
    }

  })
  test.only("checking on each package values on different metrics with Stackable + Adding Number of packages", async ({ page, adminpg }) => {
    test.setTimeout(180000);
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)
    //1
    //pallet
    
    await adminpg.package_0(data.Pallets)
    const cm = 9
    for (let i = 0; i < cm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Pallets)
    const cm01 = 9
    for (let i = 0; i < cm01; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
    }


    await page.locator("(//button[@value='M'])[1]").click()
    const m = 7
    for (let i = 0; i < m; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm02 = 7
    for (let i = 0; i < cm02; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
    }



    await page.locator("(//button[@value='MM'])[1]").click()
    const mm = 5
    for (let i = 0; i < mm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm03 = 5
    for (let i = 0; i < cm03; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc = 3
    for (let i = 0; i < inc; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm04 = 3
    for (let i = 0; i < cm04; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
    }


    //skids
    await page.reload()
    await adminpg.package_0(data.Skids)
    const cm1 = 9
    for (let i = 0; i < cm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Skids)
    const cm05 = 9
    for (let i = 0; i < cm05; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m1 = 7
    for (let i = 0; i < m1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm06 = 7
    for (let i = 0; i < cm06; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
    }


    await page.locator("(//button[@value='MM'])[1]").click()
    const mm1 = 5
    for (let i = 0; i < mm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm07 = 5
    for (let i = 0; i < cm07; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc1 = 3
    for (let i = 0; i < inc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm08 = 3
    for (let i = 0; i < cm08; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
    }

    //crates
    await page.reload()
    await adminpg.package_0(data.Crates)
    const cm2 = 9
    for (let i = 0; i < cm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Crates)
    const cm09 = 9
    for (let i = 0; i < cm09; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m2 = 7
    for (let i = 0; i < m2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm10 = 7
    for (let i = 0; i < cm10; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm2 = 5
    for (let i = 0; i < mm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm11 = 5
    for (let i = 0; i < cm11; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc2 = 3
    for (let i = 0; i < inc2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm12 = 3
    for (let i = 0; i < cm12; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
    }

    //cartons
    await page.reload()
    await adminpg.package_0(data.Cartons)
    const cm3 = 9
    for (let i = 0; i < cm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Cartons)
    const cm13 = 9
    for (let i = 0; i < cm13; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m3 = 7
    for (let i = 0; i < m3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm14 = 7
    for (let i = 0; i < cm14; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
    }
    
    await page.locator("(//button[@value='MM'])[1]").click()
    const mm3 = 5
    for (let i = 0; i < mm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm15 = 5
    for (let i = 0; i < cm15; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc3 = 3
    for (let i = 0; i < inc3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm16 = 3
    for (let i = 0; i < cm16; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
    }

    //bales
    await page.reload()
    await adminpg.package_0(data.Bales)
    const cm4 = 9
    for (let i = 0; i < cm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Bales)
    const cm17 = 9
    for (let i = 0; i < cm17; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m4 = 7
    for (let i = 0; i < m4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm18 = 7
    for (let i = 0; i < cm18; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm4 = 5
    for (let i = 0; i < mm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm19 = 5
    for (let i = 0; i < cm19; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc4 = 3
    for (let i = 0; i < inc4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm20 = 3
    for (let i = 0; i < cm20; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
    }
    //boxes
    await page.reload()
    await adminpg.package_0(data.Boxes)
    const cm5 = 9
    for (let i = 0; i < cm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Boxes)
    const cm21 = 9
    for (let i = 0; i < cm21; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m5 = 7
    for (let i = 0; i < m5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm22 = 7
    for (let i = 0; i < cm22; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm5 = 5
    for (let i = 0; i < mm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm23 = 5
    for (let i = 0; i < cm23; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc5 = 3
    for (let i = 0; i < inc5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm24 = 3
    for (let i = 0; i < cm24; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
    }

    //barrels    need to separate radius and height separately for barrels and rolls
    await page.reload()
    await adminpg.package_0(data.Barrels)
    const cm6 = 9
    for (let i = 0; i < cm6; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Barrels)
    const cm25 = 9
    for (let i = 0; i < cm25; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }


    await page.locator("(//button[@value='M'])[1]").click()
    const m6 = 7
    for (let i = 0; i < m6; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm26 = 7
    for (let i = 0; i < cm26; i++) {
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }

    const rm = 8
    for (let i = 0; i < rm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
    }
    const cm27 = 8
    for (let i = 0; i < cm27; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm6 = 5
    for (let i = 0; i < mm6; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm28 = 5
    for (let i = 0; i < cm28; i++) {
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }

    const rmm = 4
    for (let i = 0; i < rmm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
    }
    const cm29 = 4
    for (let i = 0; i < cm29; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc6 = 3
    for (let i = 0; i < inc6; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm30 = 3
    for (let i = 0; i < cm30; i++) {
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }

    const rinc = 6
    for (let i = 0; i < rinc; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
    }
    const cm31 = 6
    for (let i = 0; i < cm31; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
    }

    //Rolls
    await page.reload()
    await adminpg.package_0(data.Rolls)
    const cm7 = 9
    for (let i = 0; i < cm7; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.package_1(data.Rolls)
    const cm32 = 9
    for (let i = 0; i < cm32; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m7 = 7
    for (let i = 0; i < m7; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm33 = 7
    for (let i = 0; i < cm33; i++) {
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }

    const rm1 = 8
    for (let i = 0; i < rm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
    }
    const cm34 = 8
    for (let i = 0; i < cm34; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
    }
    

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm7 = 5
    for (let i = 0; i < mm7; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm35 = 5
    for (let i = 0; i < cm35; i++) {
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }

    const rmm1 = 4
    for (let i = 0; i < rmm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
    }
    const cm36 = 4
    for (let i = 0; i < cm36; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc7 = 3
    for (let i = 0; i < inc7; i++) {
      await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm37 = 3
    for (let i = 0; i < cm37; i++) {
      await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }

    const rinc1 = 6
    for (let i = 0; i < rinc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
    }
    const cm38 = 6
    for (let i = 0; i < cm38; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
    }

  })
  test.only("checking on each package values on different metrics with Non-Stackable + Adding Number of packages", async ({ page, adminpg }) => {
    test.setTimeout(180000);
  
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)
    //1
    //pallet
    await adminpg.non_stackable()
    await adminpg.package_0(data.Pallets)
    const cm = 9
    for (let i = 0; i < cm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Pallets)
    const cm01 = 9
    for (let i = 0; i < cm01; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
    }


    await page.locator("(//button[@value='M'])[1]").click()
    const m = 7
    for (let i = 0; i < m; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm02 = 7
    for (let i = 0; i < cm02; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
    }



    await page.locator("(//button[@value='MM'])[1]").click()
    const mm = 5
    for (let i = 0; i < mm; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm03 = 5
    for (let i = 0; i < cm03; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc = 3
    for (let i = 0; i < inc; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm04 = 3
    for (let i = 0; i < cm04; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }


    //skids
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Skids)
    const cm1 = 9
    for (let i = 0; i < cm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Skids)
    const cm05 = 9
    for (let i = 0; i < cm05; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m1 = 7
    for (let i = 0; i < m1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm06 = 7
    for (let i = 0; i < cm06; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }


    await page.locator("(//button[@value='MM'])[1]").click()
    const mm1 = 5
    for (let i = 0; i < mm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm07 = 5
    for (let i = 0; i < cm07; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc1 = 3
    for (let i = 0; i < inc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm08 = 3
    for (let i = 0; i < cm08; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }

    //crates
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Crates)
    const cm2 = 9
    for (let i = 0; i < cm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Crates)
    const cm09 = 9
    for (let i = 0; i < cm09; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m2 = 7
    for (let i = 0; i < m2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm10 = 7
    for (let i = 0; i < cm10; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm2 = 5
    for (let i = 0; i < mm2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm11 = 5
    for (let i = 0; i < cm11; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc2 = 3
    for (let i = 0; i < inc2; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm12 = 3
    for (let i = 0; i < cm12; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }

    //cartons
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Cartons)
    const cm3 = 9
    for (let i = 0; i < cm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Cartons)
    const cm13 = 9
    for (let i = 0; i < cm13; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m3 = 7
    for (let i = 0; i < m3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm14 = 7
    for (let i = 0; i < cm14; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }
    
    await page.locator("(//button[@value='MM'])[1]").click()
    const mm3 = 5
    for (let i = 0; i < mm3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm15 = 5
    for (let i = 0; i < cm15; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc3 = 3
    for (let i = 0; i < inc3; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm16 = 3
    for (let i = 0; i < cm16; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }

    //bales
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Bales)
    const cm4 = 9
    for (let i = 0; i < cm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Bales)
    const cm17 = 9
    for (let i = 0; i < cm17; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m4 = 7
    for (let i = 0; i < m4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm18 = 7
    for (let i = 0; i < cm18; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm4 = 5
    for (let i = 0; i < mm4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm19 = 5
    for (let i = 0; i < cm19; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc4 = 3
    for (let i = 0; i < inc4; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm20 = 3
    for (let i = 0; i < cm20; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }
    //boxes
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Boxes)
    const cm5 = 9
    for (let i = 0; i < cm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Boxes)
    const cm21 = 9
    for (let i = 0; i < cm21; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    const m5 = 7
    for (let i = 0; i < m5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm22 = 7
    for (let i = 0; i < cm22; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    const mm5 = 5
    for (let i = 0; i < mm5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm23 = 5
    for (let i = 0; i < cm23; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    const inc5 = 3
    for (let i = 0; i < inc5; i++) {
      await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm24 = 3
    for (let i = 0; i < cm24; i++) {
      await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
      await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
      await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
    }

    //barrels    need to separate radius and height separately for barrels and rolls
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Barrels)
    const cm6 = 9
    for (let i = 0; i < cm6; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Barrels)
    const cm25 = 9
    for (let i = 0; i < cm25; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
    }


    await page.locator("(//button[@value='M'])[1]").click()
    // const m6 = 7
    // for (let i = 0; i < m6; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    // }
    // 
    // const cm26 = 7
    // for (let i = 0; i < cm26; i++) {
    //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    // }

    const rm = 8
    for (let i = 0; i < rm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm27 = 8
    for (let i = 0; i < cm27; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='MM'])[1]").click()
    // const mm6 = 5
    // for (let i = 0; i < mm6; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    // }
    // 
    // const cm28 = 5
    // for (let i = 0; i < cm28; i++) {
    //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    // }

    const rmm = 4
    for (let i = 0; i < rmm; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm29 = 4
    for (let i = 0; i < cm29; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    // const inc6 = 3
    // for (let i = 0; i < inc6; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    // }
    // 
    // const cm30 = 3
    // for (let i = 0; i < cm30; i++) {
    //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    // }

    const rinc = 6
    for (let i = 0; i < rinc; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm31 = 6
    for (let i = 0; i < cm31; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
    }

    //Rolls
    await page.reload()
    await adminpg.non_stackable()
    await adminpg.package_0(data.Rolls)
    const cm7 = 9
    for (let i = 0; i < cm7; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
    }
    await adminpg.Addpackage()
    await adminpg.non_stackable_two()
    await adminpg.package_1(data.Rolls)
    const cm32 = 9
    for (let i = 0; i < cm32; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='M'])[1]").click()
    // const m7 = 7
    // for (let i = 0; i < m7; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
    // }
    // 
    // const cm33 = 7
    // for (let i = 0; i < cm33; i++) {
    //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
    // }

    const rm1 = 8
    for (let i = 0; i < rm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='M'])[2]").click()
    const cm34 = 8
    for (let i = 0; i < cm34; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
    }
    

    await page.locator("(//button[@value='MM'])[1]").click()
    // const mm7 = 5
    // for (let i = 0; i < mm7; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
    // }
    // 
    // const cm35 = 5
    // for (let i = 0; i < cm35; i++) {
    //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
    // }

    const rmm1 = 4
    for (let i = 0; i < rmm1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='MM'])[2]").click()
    const cm36 = 4
    for (let i = 0; i < cm36; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
    }

    await page.locator("(//button[@value='IN'])[1]").click()
    // const inc7 = 3
    // for (let i = 0; i < inc7; i++) {
    //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
    // }
    // 
    // const cm37 = 3
    // for (let i = 0; i < cm37; i++) {
    //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
    //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
    // }

    const rinc1 = 6
    for (let i = 0; i < rinc1; i++) {
      await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
    }
    await page.locator("(//button[@value='IN'])[2]").click()
    const cm38 = 6
    for (let i = 0; i < cm38; i++) {
      await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
      await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
    }

  })
  test.only("CBM and weight allowance", async ({ page, adminpg }) => {
    test.setTimeout(180000);
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)

    // SPACE DATA
    await adminpg.package_0(data.Pallets)
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill(data.space_data)
    await expect(page.locator("(//p[text()='Only numbers are allowed'])[1]")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill(data.space_data)
    await expect(page.locator("(//p[text()='Only numbers are allowed'])[2]")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.space_data)
    await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()

    //SPL CHAR
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.splcharacter_data)
    await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.splcharacter_data)
    await expect(page.locator("(//p[text()='Only numbers are allowed'])[3]")).toBeVisible()

    //ALPHABETS
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.alphabets_data)
    await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.alphabets_data)
    await expect(page.locator("(//p[text()='Only numbers are allowed'])[3]")).toBeVisible()

    //zero value
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill(data.zero_data)
    await expect(page.locator("(//p[text()='Zero not allowed'])[1]")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill(data.zero_data)
    await expect(page.locator("(//p[text()='Zero not allowed'])[2]")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.zero_data)
    await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.zero_data)
    await expect(page.locator("//p[text()='Should have 8 numbers']")).toBeVisible()

    //zero with decimal value
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill(data.zerodecimal_data)
    await expect(page.locator("(//p[text()='Zero not allowed'])[1]")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill(data.zerodecimal_data)
    await expect(page.locator("(//p[text()='Zero not allowed'])[2]")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.zerodecimal_data)
    await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.zerodecimal_data)
    await expect(page.locator("(//p[text()='Only numbers are allowed'])[1]")).toBeVisible()

    //max weight and no. of. packages
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.2")
    await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("20002")
    await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.00")
    await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.02")
    await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.03")
    await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.04")
    await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.05")
    await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()

    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("22.")
    await expect(page.locator("//p[text()='Enter Valid Number']")).toBeVisible()
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("22.2")
    await expect(page.locator("(//p[text()='Only numbers are allowed'])[1]")).toBeVisible()

    //Maximum cbm and weight acceptance in cargo details
    //25.4 cbm
    await page.locator("//input[@name='cargoDetails.0.length']").fill("100")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("130")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("150")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("130")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("13")
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await expect(page.locator("//button[text()='Pre-Book Now']")).toBeDisabled()
// 26 cbm and 26013 kg
    await page.locator("//input[@name='cargoDetails.0.length']").fill("45")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("45")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("45")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2001")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("13")
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await expect(page.locator("//button[text()='Pre-Book Now']")).toBeDisabled()
// 24.8 cbm and 9200kg
    await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("23")
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await expect(page.locator("//button[text()='Pre-Book Now']")).toBeDisabled()

   // await page.locator("//button[text()='Place Booking']").click()
    //await page.pause()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)
    await adminpg.package_0(data.Pallets)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("4")
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await adminpg.continue_to_book()

  })
  test.only("All forwarder details and validations", async ({ page, adminpg, loginpg }) => {

      test.setTimeout(180000);
      await page.locator("//a[contains(text(),'AllMasters')]").click()
      //await page.locator("//button[text()='Place Booking']").click()

      //await expect(page.locator("//h1[text()='Welcome to']")).toBeVisible()
      //await expect(page.locator("//span[text()='All']")).toBeVisible()
      //await expect(page.locator("//h1[text()='Discover the revolutionary concept of']")).toBeVisible()
      await page.locator("(//h1[text()='AEJEA'])[1]").click()
      await page.locator("//button[text()='Continue to Book']").click()
      await page.waitForTimeout(2000)
      await adminpg.package_0(data.Pallets)
      await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
      await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
      await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
      await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("4")
      await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
      await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
      await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
      await adminpg.continue_to_book()

    // origin forwarder

        await adminpg.continue_to_book()
        await expect(page.locator("//p[text()='Please Upload GST File']")).toBeVisible()
        await page.locator("input[type='file']").setInputFiles("data-files/destination (2).xls")
        await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
        await page.reload()
        await page.locator("input[type='file']").setInputFiles("data-files/Works.docx")
        await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
        await page.reload()
        await page.locator("input[type='file']").setInputFiles("data-files/10 mb file.pdf")
        await expect(page.locator("//p[text()='Upload file under 5 MB']")).toBeVisible()
        await page.reload()
        
        await page.locator("input[type='file']").setInputFiles("data-files/ie.pdf")
        // await page.locator("//p[@title='ie.pdf']").click()

        await expect(page.locator("//p[text()='Upload only Pdf']")).toBeHidden()
        await expect(page.locator("//p[text()='Please Upload GST File']")).toBeHidden()
        await expect(page.locator("//p[text()='Upload file under 5 MB']")).toBeHidden()

        await page.locator("//input[@placeholder='Enter name']").clear()
        await page.locator("//input[@placeholder='Enter Email']").clear()
        await page.locator("input[name='mobile']").clear()
        await adminpg.continue_to_book()

        await expect(page.locator("//span[text()='Name is required']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter name']").fill(data.space_data)
        await expect(page.locator("//span[text()='Name is required']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter name']").fill(data.splcharacter_data)
        await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter name']").fill(data.numeric_data)
        await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter name']").fill("sanjai")
        await expect(page.locator("//span[text()='Name is required']")).toBeHidden()
        await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()


        await expect(page.locator("//span[text()='Email is required']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter Email']").fill("s")
        await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter Email']").fill("#")
        await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter Email']").fill("3")
        await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter Email']").fill("#%^&*()_")
        await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
        await page.locator("//input[@placeholder='Enter Email']").fill("sanjai.s")
        await expect(page.locator("//span[text()='Enter valid email']")).toBeHidden()
        await expect(page.locator("//span[text()='Email is required']")).toBeHidden()

    // doubt on disable field
        var phonecode = await page.locator("//span[text()='+91']")
        //await expect(phonecode).toBeDisabled()
        await expect(await page.locator("//span[text()='+91']")).toBeVisible()
        await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
        await page.locator("input[name='mobile']").fill("32")
        await expect(page.locator("//span[text()='Enter valid Mobile Number']")).toBeVisible()
        await page.locator("input[name='mobile']").fill("12345678901")
        await expect(page.locator("//span[text()='Enter valid Mobile Number']")).toBeVisible()
        await page.locator("input[name='mobile']").fill("8870050284")
        await expect(page.locator("//span[text()='Mobile Number is required']")).toBeHidden()
        await expect(page.locator("//span[text()='Enter valid Mobile Number']")).toBeHidden()
        await adminpg.Addforwarder_dis_companyname()

        await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
        await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
        await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
        await page.locator("input[name='doorNo']").fill(data.space_data)
        await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
        await page.locator("input[name='doorNo']").fill("dsdfsdss")
        await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
        await page.locator("input[name='doorNo']").fill("#")
        await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
        await page.locator("input[name='doorNo']").fill("/")
        await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
        await page.locator("input[name='doorNo']").fill("122")
        await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
        await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

        await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
        await page.locator("input[name='building']").fill("#@$%^$%&")
        await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
        await page.locator("input[name='building']").fill("43243")
        await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
        await page.locator("input[name='building']").fill("     ")
        await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
        await page.locator("input[name='building']").fill("Ispahani building")
        await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

        await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
        await page.locator("input[name='street']").fill(data.space_data)
        await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
        await page.locator("input[name='street']").fill("!@#$%^&*")
        await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
        await page.locator("input[name='street']").fill("2738273")
        await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
        await page.locator("input[name='street']").fill("uthaman gandhi street")
        await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

        await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
        await page.locator("input[name='area']").fill(data.space_data)
        await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
        await page.locator("input[name='area']").fill("#$%^&*")
        await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
        await page.locator("input[name='area']").fill("3523423")
        await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
        await page.locator("input[name='area']").fill("nungambakkam")
        await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
        await expect(page.locator("//span[text()='Area is required']")).toBeHidden()
        await adminpg.Addforwarder_country()
        // need to finout one way for india assertion
        await expect(page.locator("//option[text()='kndia']")).toBeHidden()//toHaveValue("India")
        
        await expect(page.locator("//span[text()='State is required']")).toBeVisible()
        var state = await page.locator("//select[@name='state']")
        await state.selectOption("Choose State")
        await expect(page.locator("//span[text()='State is required']")).toBeVisible()
        await adminpg.Addforwarder_sel_state()
        await expect(page.locator("//span[text()='State is required']")).toBeHidden()


        await expect(page.locator("//span[text()='City is required']")).toBeVisible()
        // const city =  await page.locator("//select[@name='city']")
        // await city.selectOption("Choose City")
        await expect(page.locator("//span[text()='City is required']")).toBeVisible()
        await adminpg.Addforwarder_sel_city()
        await expect(page.locator("//span[text()='City is required']")).toBeHidden()

        await expect(page.locator("//span[text()='Pincode is required']")).toBeVisible()
        await page.locator("input[placeholder='Enter pincode']").fill(data.space_data)
        await expect(page.locator("//span[text()='Pincode is required']")).toBeVisible()
        await page.locator("input[placeholder='Enter pincode']").fill(data.alphabets_data)
        await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible()
        await page.locator("input[placeholder='Enter pincode']").fill(data.splcharacter_data)
        await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible()
        await page.locator("input[placeholder='Enter pincode']").fill("12")
        await expect(page.locator("//span[text()='Should contain atleast 6 numbers']")).toBeVisible() 
        await page.locator("input[placeholder='Enter pincode']").fill("1232343")
        await expect(page.locator("//span[text()='Should contain atleast 6 numbers']")).toBeHidden() 
        await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeHidden()
        await expect(page.locator("//span[text()='Pincode is required']")).toBeHidden()

        await expect(page.locator("//span[text()='Shipper Name is required']")).toBeVisible()
        await page.locator("input[name='hblName']").fill(data.space_data)
        await expect(page.locator("//span[text()='Shipper Name is required']")).toBeVisible()
        await page.locator("input[name='hblName']").fill(data.numeric_data)
        await expect(page.locator("//span[text()='Shipper Name is required']")).toBeHidden()
        await page.locator("input[name='hblName']").fill(data.splcharacter_data)
        await expect(page.locator("//span[text()='Shipper Name is required']")).toBeHidden()
        await page.locator("input[name='hblName']").fill("jaison")
        await expect(page.locator("//span[text()='Shipper Name is required']")).toBeHidden()

        await expect(page.locator("//h1[text()='Additional Details']")).toBeVisible()
        await expect(page.locator("//label[text()='CHA Name']")).toBeVisible()
        await expect(page.locator("//label[text()='CHA License Number']")).toBeVisible()
        await expect(page.locator("//label[text()='Truck Number']")).toBeVisible()
        await expect(page.locator("//label[text()='Driver Name']")).toBeVisible()

        await page.locator("//input[@placeholder='Enter CHA Name']").fill("34234")
        await page.locator("//input[@placeholder='Enter CHA License Number']").fill("3243")
        await page.locator("//input[@placeholder='Enter Truck Number ']").fill("4324234")
        await page.locator("//input[@placeholder='Enter Driver Name']").fill("34234")
        await adminpg.continue_to_book()
        await page.locator("//button[text()='Back']").click()
        /*
        await page.locator("//input[@placeholder='Enter CHA Name']").fill("#$%^&")
        await page.locator("//input[@placeholder='Enter CHA License Number']").fill("$%^&*")
        await page.locator("//input[@placeholder='Enter Truck Number ']").fill("$%^&")
        await page.locator("//input[@placeholder='Enter Driver Name']").fill("$%^&")
        await adminpg.continue_to_book()
        await page.locator("//button[text()='Back']").click()

        await page.locator("//input[@placeholder='Enter CHA Name']").fill("    ")
        await page.locator("//input[@placeholder='Enter CHA License Number']").fill("   ")
        await page.locator("//input[@placeholder='Enter Truck Number ']").fill("   ")
        await page.locator("//input[@placeholder='Enter Driver Name']").fill("   ")
        await adminpg.continue_to_book()
        await page.locator("//button[text()='Back']").click()
        */
        await page.locator("//input[@placeholder='Enter CHA Name']").fill("JDU3982")
        await page.locator("//input[@placeholder='Enter Truck Number ']").fill("TN 30 AQ 9013")
        await page.locator("//input[@placeholder='Enter CHA License Number']").fill("MCfsJDojs382")
        await page.locator("//input[@placeholder='Enter Driver Name']").fill("adithiya")
        await adminpg.continue_to_book()
        await page.locator("//button[text()='Back']").click()


    //immediate


    // await page.locator("//input[@placeholder='Enter name']").fill("sanjai")
    // await page.locator("//input[@placeholder='Enter Email']").fill("sanjai.s")
    // await page.locator("input[name='mobile']").fill("8870050284")
    // await page.locator("input[name='doorNo']").fill("122")
    // await page.locator("input[name='building']").fill("Ispahani building")
    // await page.locator("input[name='street']").fill("uthaman gandhi street")
    // await page.locator("input[name='area']").fill("nungambakkam")
    // await adminpg.Addforwarder_sel_state()
    // await adminpg.Addforwarder_sel_city()
    // await page.locator("input[placeholder='Enter pincode']").fill("1232343")
    // await page.locator("input[type='file']").setInputFiles("data-files/gst2.pdf")
    // await page.locator("input[name='hblName']").fill("ship")
    // await adminpg.continue_to_book()

      await expect(page.locator("//input[@placeholder='Enter name']")).toHaveValue("sanjai")     //change
      await expect(page.locator("//input[@placeholder='Enter Email']")).toHaveValue("sanjai.s")  //change
      await expect(page.locator("input[name='mobile']")).toHaveValue("8870050284")
      await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
      await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
      await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
     // await expect(page.locator("//option[text()='India']")).toHaveValue("India")
      // await page.pause()
      // await expect(page.locator("//option[text()='Tamil Nadu']")).toHaveValue("Tamil Nadu")
      // await expect(page.locator("//option[text()='Nilgiris']")).toHaveValue("Nilgiris")

      await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
      await expect(page.locator("input[placeholder='Enter pincode']")).toHaveValue("123234")
      await expect(page.locator("//p[@title='ie.pdf']")).toBeVisible()
      await expect(page.locator("input[name='hblName']")).toHaveValue("jaison")
      await expect(page.locator("//input[@placeholder='Enter CHA Name']")).toHaveValue("JDU3982")
      await expect(page.locator("//input[@placeholder='Enter Truck Number ']")).toHaveValue("TN 30 AQ 9013")
      await expect(page.locator("//input[@placeholder='Enter CHA License Number']")).toHaveValue("MCfsJDojs382")
      await expect(page.locator("//input[@placeholder='Enter Driver Name']")).toHaveValue("adithiya")
      await adminpg.origin_forwarder_title_assert()
      // below this apply for already saved address alone 
      //await expect(page.locator("(//p[@title='sanjai.s@allmasters.ai'])[1]")).toBeVisible() //change
      await adminpg.continue_to_book()

    //destination forwarder
    await adminpg.continue_to_book()
    await expect(page.locator("//span[text()='Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill(data.space_data)
    await expect(page.locator("//span[text()='Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill(data.splcharacter_data)
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill(data.numeric_data)
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill("sanjai")
    await expect(page.locator("//span[text()='Name is required']")).toBeHidden()
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()

    await expect(page.locator("//span[text()='Email is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("   ")
    await expect(page.locator("//span[text()='Email is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("sdfdsfsd")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("#(**^^%%%")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("323212")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12(*@gmail.com")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail)(&).com")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail.879")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail.^*^")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    // const mail1 = 62
    // for (let i = 0; i < mail1; i++) {
    //   await adminpg.cfs_email(data.sample[i])
    //   await adminpg.cfs_offemailval()
    // } 
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail.com")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeHidden()
    await expect(page.locator("//span[text()='Email is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Company name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//span[text()='Company name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("*&**")
    await expect(page.locator("//span[text()='Company name is required']")).toBeHidden()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("39843")
    await expect(page.locator("//span[text()='Company name is required']")).toBeHidden()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("destination of cargo")
    await expect(page.locator("//span[text()='Company name is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("   ")
    await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("$%^&*(")
    await expect(page.locator("//span[text()='Enter valid mobile number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("83732932")
    await expect(page.locator("//span[text()='Enter valid mobile number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("sdiduia")
    await expect(page.locator("//span[text()='Enter valid mobile number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("+94583933233")
    await expect(page.locator("//span[text()='Mobile Number Format is not correct']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("+971")
    await expect(page.locator("//span[text()='Enter valid mobile number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("+97112345")
    await expect(page.locator("//span[text()='Mobile Number Format is not correct']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("+97112345678")
    await expect(page.locator("//span[text()='Mobile Number Format is not correct']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("+9711234567")
    await expect(page.locator("//span[text()='Mobile Number Format is not correct']")).toBeHidden()

    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
    //await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
    await expect(page.locator("//span[text()='Enter valid door number']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill(data.space_data)
    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("dsdfsdss")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("#")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("/")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("122")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("#@$%^$%&")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("43243")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("     ")
    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("Ispahani building")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill(data.space_data)
    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill("!@#$%^&*")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("2738273")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("uthaman gandhi street")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill(data.space_data)
    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("nungambakkam")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
    await expect(page.locator("//span[text()='Area is required']")).toBeHidden()

    await adminpg.Addforwarder_country()
    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill(data.space_data)
    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("New dest state")

    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill(data.space_data)
    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("New dest city")  
    await adminpg.continue_to_book()


    //p[text()='Receiving Party  ']
    //h2[text()='Receiving Party']
    //h1[text()='Receiving Party Details']
    //h1[text()='Receiving Party Address']
    //p[text()='Fill in your details']

    //notify party

    await page.locator("//input[@placeholder='Enter name']").clear()
    await page.locator("//input[@placeholder='Enter email']").clear()
    await page.locator("//input[@placeholder='Enter Company Name']").clear()
    await page.locator("//input[@placeholder='Enter Mobile Number']").clear()
    await page.locator("input[name='doorNo']").clear()
    await page.locator("input[name='building']").clear()
    await page.locator("input[name='street']").clear()
    await page.locator("input[name='area']").clear()
    await page.locator("//input[@placeholder='Enter country']").clear()
    await page.locator("//input[@placeholder='Enter state']").clear()
    await page.locator("//input[@placeholder='Enter city']").clear()
    await adminpg.continue_to_book()

    await expect(page.locator("//span[text()='Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill(data.space_data)
    await expect(page.locator("//span[text()='Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill(data.splcharacter_data)
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill(data.numeric_data)
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter name']").fill("sanjai")
    await expect(page.locator("//span[text()='Name is required']")).toBeHidden()
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()

    await expect(page.locator("//span[text()='Email is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("   ")
    await expect(page.locator("//span[text()='Email is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("sdfdsfsd")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("#(**^^%%%")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("323212")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12(*@gmail.com")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail)(&).com")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail.879")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail.^*^")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeVisible()
    // const dm = 62
    // for (let i = 0; i < dm; i++) {
    //   await adminpg.cfs_email(data.sample[i])
    //   await adminpg.cfs_offemailval()
    // }
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail.com")
    await expect(page.locator("//span[text()='Enter valid email']")).toBeHidden()
    await expect(page.locator("//span[text()='Email is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Company Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
    await expect(page.locator("//span[text()='Company Name is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("*&**")
    await expect(page.locator("//span[text()='Company Name is required']")).toBeHidden()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("39843")
    await expect(page.locator("//span[text()='Company Name is required']")).toBeHidden()
    await page.locator("//input[@placeholder='Enter Company Name']").fill("destination of cargo")
    await expect(page.locator("//span[text()='Company Name is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("   ")
    await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("$%^&*(")
    await expect(page.locator("//span[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("83732932")
    await expect(page.locator("//span[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("sdiduia")
    await expect(page.locator("//span[text()='Enter Valid Mobile Number']")).toBeVisible()

    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("+okofksdofk")
    await expect(page.locator("//span[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("+*&&*^^^%^%")
    await expect(page.locator("//span[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("+1")
    await expect(page.locator("//span[text()='Enter Valid Mobile Number']")).toBeHidden()
    await page.locator("//input[@placeholder='Enter Mobile Number']").fill("+9711234567")
    await expect(page.locator("//span[text()='Enter Valid Mobile Number']")).toBeHidden()
    await expect(page.locator("//span[text()='Mobile Number is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill(data.space_data)
    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("dsdfsdss")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("#")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("/")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("122")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("#@$%^$%&")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("43243")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("     ")
    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("Ispahani building")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill(data.space_data)
    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill("!@#$%^&*")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("2738273")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("uthaman gandhi street")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill(data.space_data)
    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("nungambakkam")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
    await expect(page.locator("//span[text()='Area is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Country is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter country']").fill(data.space_data)
    await expect(page.locator("//span[text()='Country is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter country']").fill(data.splcharacter_data)
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter country']").fill(data.numeric_data)
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter country']").fill("united arab emirates")
    await expect(page.locator("//span[text()='Country is required']")).toBeHidden()
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()


    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill(data.space_data)
    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill("dest state")
    await expect(page.locator("//span[text()='State is required']")).toBeHidden()
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()

    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill(data.space_data)
    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill("dest city")
    await expect(page.locator("//span[text()='State is required']")).toBeHidden()
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
    await adminpg.continue_to_book()
    

    //assert
    //p[text()='Notify Party']
    //h1[text()='Notify Party Details']
    //h1[text()='Notify Party Address']
    //p[text()='Fill in your details']
/*
    ///////
    await page.locator("//input[@placeholder='Search Forwarders']").fill("kochi")
    await expect(page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Forwarders']").fill("Kochi")
    await expect(page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Forwarders']").fill("koCHi")
    await expect(page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Forwarders']").fill("kod")
    await expect(page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]")).toBeHidden()


    //saved address, 
    // after add one address check that
    await expect(page.locator("//h1[text()='Saved Booking Party']")).toBeVisible()
    await expect(page.locator("//p[text()=' - Booking Party Added']")).toBeVisible()
    await expect(page.locator("//p[text()='3']")).toBeVisible()
    await adminpg.continue_to_book()


*/

  //packing list
  await adminpg.continue_to_book()
  //await page.pause()
  await expect(page.locator("//p[text()='Please Upload Packing List File']")).toBeVisible()
  await page.locator("//input[@id='Packaging']").setInputFiles("data-files/Works.docx")
  await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='Packaging']").setInputFiles("data-files/wrong date.xls")
  await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='Packaging']").setInputFiles("data-files/10 mb file.pdf")
  await page.waitForTimeout(2000)
  await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
  await page.reload()
  // await page.locator("//input[@id='Packaging']").setInputFiles("data-files/3mb.pdf,data-files/3mb(1).pdf")
  // await page.waitForTimeout(17000)
  // await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
  //await page.reload()
  await page.locator("//input[@id='Packaging']").setInputFiles("data-files/1mbcopy (1).pdf")
  await page.locator("//input[@id='Packaging1']").setInputFiles("data-files/1mbcopy (1).pdf")
  await expect(page.locator("//p[text()='File Already uploaded in Packing List']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/Gst.pdf")
  await page.waitForTimeout(1000)
  await page.locator("//input[@id='Packaging']").setInputFiles("data-files/Gst.pdf")
  await expect(page.locator("//p[text()='Please Upload Different File for Packing List']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='Packaging']").setInputFiles("data-files/ie.pdf")
  await page.locator("//input[@id='Packaging1']").setInputFiles("data-files/PANcard.pdf")
  await page.locator("//button[text()='View Files']").click()
  await expect(page.locator("//p[@title='ie.pdf']")).toBeVisible()
  await expect(page.locator("//p[@title='PANcard.pdf']")).toBeVisible()
  await page.locator("//button[text()='close']").click()
  await adminpg.continue_to_book()
  await page.locator("//h1[text()='Documents']/following-sibling::button").click()

  //shipping bill
  await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/Works.docx")
  await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/wrong date.xls")
  await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/10 mb file.pdf")
  await page.waitForTimeout(2000)
  await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
  await page.reload()
  // await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/3mb.pdf,data-files/3mb(1).pdf")
  // await page.waitForTimeout(17000)
  // await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
  //await page.reload()
  await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/1mbcopy (1).pdf")
  await page.locator("//input[@id='shippingbill1']").setInputFiles("data-files/1mbcopy (1).pdf")
  await expect(page.locator("//p[text()='File Already uploaded in Shipping List']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='Packaging1']").setInputFiles("data-files/1mbcopy (1).pdf")
  await page.waitForTimeout(1000)
  await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/1mbcopy (1).pdf")
  await expect(page.locator("//p[text()='Please Upload Different File for Shipping Bill']")).toBeVisible()
  await page.reload()
  await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/Gst.pdf")
  await page.locator("//input[@id='shippingbill1']").setInputFiles("data-files/gst2.pdf")
  await page.locator("(//button[text()='View Files'])[2]").click()
  await expect(page.locator("//p[@title='Gst.pdf']")).toBeVisible()
  await expect(page.locator("//p[@title='gst2.pdf']")).toBeVisible()

  // await page.locator("//button[text()='View Files']").click()
  // await expect(page.locator("//p[@title='ie.pdf']")).toBeVisible()
  // await expect(page.locator("//p[@title='PANcard.pdf']")).toBeVisible()
  await page.locator("//button[text()='close']").click()

  await adminpg.continue_to_book()
  await page.locator("//button[text()='Confirm Booking']").click()
  await page.locator("//button[text()='Yes']").click()
  await expect(page.locator("//div[text()='Booking Confirmed Successfully']")).toBeVisible()
  await page.locator("//button[text()='Close']").click()
  await loginpg.logout_dd()

  await loginpg.select_type(data.type3)
  await loginpg.emailID("admin@ams.com") //change
  await loginpg.password("Doko@2023")
  await loginpg.sign_in()
  await page.waitForTimeout(5000)
  const input = await page.isVisible("//h2[text()='User Already Logged In']")
  if (input) {
    console.log('Pop-up is visible.');
    await page.click("//button[text()='Yes']")
  }
  else {
    console.log('Pop-up is not visible.');
  }
  await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
  //await expect(page.locator("//p[text()='1']")).toBeVisible()
  await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
 //await expect(page.locator("(//h4[contains(.,'chittoor com made a Pre-Booking ID')])[1]")).toBeVisible()
 await expect(page.locator("(//h4[contains(.,'com made a Pre-Booking ID')])[1]")).toBeVisible()
  await page.reload()
  await page.locator("//li[text()='Sign Out']").click()


  await loginpg.select_type(data.type3)
  await loginpg.emailID("ot@ams.com") //change
  await loginpg.password("Doko@2023")
  await loginpg.sign_in()
  await page.waitForTimeout(5000)
  //const input = await page.isVisible("//h2[text()='User Already Logged In']")
  if (input) {
    console.log('Pop-up is visible.');
    await page.click("//button[text()='Yes']")
  }
  else {
    console.log('Pop-up is not visible.');
  }
  await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
  //await expect(page.locator("//p[text()='1']")).toBeVisible()
  await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
 //await expect(page.locator("(//h4[contains(.,'chittoor com made a Pre-Booking ID')])[1]")).toBeVisible()
 await expect(page.locator("(//h4[contains(.,'com made a Pre-Booking ID')])[1]")).toBeVisible()
  await page.reload()
  await page.locator("//li[text()='Sign Out']").click()

  }) 
  test("Check with dashboard and my bookings after done one booking ", async({page, adminpg })=>{
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Place Booking']").click()
    await expect(page.locator("//a[contains(text(),'AllMasters')]")).toBeVisible()
    await expect(page.locator("//h1[text()='Overview']")).toBeVisible()
    await expect(page.locator("//h5[text()='Active Orders']")).toBeVisible()
    await expect(page.locator("//h5[text()='Booking(s) Made']")).toBeVisible()
    await expect(page.locator("//h5[text()='PreBooking(s) Made']")).toBeVisible()
    await expect(page.locator("//h5[text()='Cargo Sent (CBM)']")).toBeVisible()
    await expect(page.locator("//h5[text()='$ Saved']")).toBeVisible()
    await expect(page.locator("//h2[text()='Experience Warehouse to Warehouse Controllidation like never before!']")).toBeVisible()
    await page.locator("//button[@value='inmaa']").click()
    await expect(page.locator("//p[contains(.,'Stay Tuned! Schedules will be Live shortly.')]")).toBeVisible()
    await expect(page.locator("//h5[text()='2023 ,Groupage technologies (s) pte.ltd.All Rights Reserved']")).toBeVisible()
// numbers in dashboard screen
    await expect(page.locator("(//h1[text()='0'])[1]")).toBeVisible()
    await expect(page.locator("//h1[text()='1']")).toBeVisible()
    await expect(page.locator("(//h1[text()='0'])[2]")).toBeVisible()
    await expect(page.locator("//h1[text()='4.3']")).toBeVisible()
    await expect(page.locator("//h1[text()='4']")).toBeVisible()
    await page.locator("//h5[text()='Active Orders']").click()
    await expect(page.locator("//h3[text()=' Active Orders']")).toBeVisible()
    await expect(page.locator("//h1[text()='No Active Orders made yet for you !']")).toBeVisible()
    await expect(page.locator("//p[contains(.,'What are you waiting for ? Go and make that first booking !')]")).toBeVisible()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
//numbers in my bookings page
    await page.locator("//h5[text()='Booking(s) Made']").click()
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("ambqa")
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("AMBQA")
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("   ambqa")
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("   amsqa")
    await expect(page.locator("//h1[text()='INNSA']")).toBeHidden()

    await page.locator("//button[text()='All']").click()
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("ambqa")
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("AMBQA")
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("   ambqa")
    await expect(page.locator("//h1[text()='INNSA']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Booking ID']").fill("   amsqa")
    await expect(page.locator("//h1[text()='INNSA']")).toBeHidden()

    await expect(page.locator("//h3[text()=' Bookings']")).toBeVisible()
    await expect(page.locator("//button[text()='All']")).toBeVisible()
    await expect(page.locator("//button[text()='Pre Booking']")).toBeVisible()
    await expect(page.locator("//button[text()='Draft']")).toBeVisible()
    await expect(page.locator("//button[text()='Booked']")).toBeVisible()
    await expect(page.locator("//button[text()='Payment Completed']")).toBeVisible()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//h5[text()='PreBooking(s) Made']").click()
    await expect(page.locator("//button[text()='All']")).toBeVisible()
    await expect(page.locator("//button[text()='Pre Booking']")).toBeVisible()
    await expect(page.locator("//button[text()='Draft']")).toBeVisible()
    await expect(page.locator("//button[text()='Booked']")).toBeVisible()
    await expect(page.locator("//button[text()='Payment Completed']")).toBeVisible()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    



  })
  test("Fast booking", async({page,adminpg})=>{
    test.setTimeout(180000);
    for (var book=0; book<3; book++){
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Place Booking']").click()
   
      await page.locator("(//h1[text()='AEJEA'])[1]").click()
      await page.locator("//button[text()='Continue to Book']").click()
      await page.waitForTimeout(2000)
      await adminpg.package_0(data.Pallets)
      await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
      await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
      await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
      await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
      await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("4")
      await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
      await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
      await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
      await adminpg.continue_to_book()

await page.locator("//input[@placeholder='Enter name']").fill("sanjai")
    await page.locator("//input[@placeholder='Enter Email']").fill("sanjai.s")
    await page.locator("input[name='mobile']").fill("8870050284")
    await page.locator("input[name='doorNo']").fill("122")
    await page.locator("input[name='building']").fill("Ispahani building")
    await page.locator("input[name='street']").fill("uthaman gandhi street")
    await page.locator("input[name='area']").fill("nungambakkam")
    await adminpg.Addforwarder_sel_state()
    await adminpg.Addforwarder_sel_city()
    await page.locator("input[placeholder='Enter pincode']").fill("1232343")
    await page.locator("input[type='file']").setInputFiles("data-files/gst2.pdf")
    await page.locator("input[name='hblName']").fill("ship")
    await adminpg.continue_to_book()

    await page.locator("//input[@placeholder='Enter name']").fill("sanjai")
    await page.locator("//input[@placeholder='Enter email']").fill("dest12@gmail.com")
    await page.locator("//input[@placeholder='Enter Company Name']").fill("destination of cargo")
    await page.locator("//input[@placeholder='Enter Mobile Number with country code']").fill("+9711234567")
    await page.locator("input[name='doorNo']").fill("122")
    await page.locator("input[name='building']").fill("Ispahani building")
    await page.locator("input[name='street']").fill("uthaman gandhi street")
    await page.locator("input[name='area']").fill("nungambakkam")
    await page.locator("//input[@placeholder='Enter State']").fill("New dest state")
    await page.locator("//input[@placeholder='Enter City']").fill("New dest city")
    await adminpg.continue_to_book()
    await adminpg.continue_to_book()
await page.locator("//input[@id='Packaging']").setInputFiles("data-files/Gst.pdf")
 await adminpg.continue_to_book()

  await page.locator("//button[text()='Confirm Booking']").click()
  
 
  await page.locator("//input[@type='checkbox']").click()
  await expect(page.locator("//p[text()='You must accept the terms and conditions']")).toBeVisible()
  await expect(page.locator("//p[text()='Confirm Booking']")).toBeVisible()
  await expect(page.locator("//li[text()='Booking once confirmed cannot be cancelled!']")).toBeVisible()
  await expect(page.locator("//li[text()='Final bill amount payable in full whether or not cargo tendered for shipment!']")).toBeVisible()
  
  await page.locator("//input[@type='checkbox']").click()
  await page.locator("//button[text()='Yes']").click()
  await expect(page.locator("//div[text()='Booking Confirmed Successfully']")).toBeVisible()

  await page.locator("(//span[text()='5'])[2]").click()
  await page.locator("//button[@type='submit']").click()
  await expect(page.locator("//p[text()='What could be made better?']")).toBeVisible()
  await expect(page.locator("//p[text()='Enter a value for this field.']")).toBeVisible()
  await page.locator("(//span[text()='*'])[2]/following::input").fill("good")
  await page.locator("//button[@type='submit']").click()
  await expect(page.locator("//div[text()='Thank you for your feedback – we appreciate your input!']")).toBeVisible()
}



  })
  test.skip("check with saved address", async({page, adminpg}) =>{
    test.setTimeout(180000);
   // await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)
    await adminpg.package_0(data.Pallets)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("4")
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await adminpg.continue_to_book()


    // origin forwarder
    await adminpg.continue_to_book()
    await expect(page.locator("//h2[text()='Receiving Party']")).toBeHidden()

    await expect(page.locator("//input[@placeholder='Enter name']")).toHaveValue("sanjai")
    await expect(page.locator("//input[@placeholder='Enter Email']")).toHaveValue("thomson")
    await expect(page.locator("//input[@placeholder='Enter Mobile Number']")).toHaveValue("8870050284")
    await expect(page.locator("//input[@placeholder='Enter legalName']")).toBeDisabled()

    await page.locator("(//h1[text()='nilgiris'])[1]").click()
    await expect(page.locator("//input[@placeholder='Enter name']")).toHaveValue("sanjai")
    await expect(page.locator("//input[@placeholder='Enter Email']")).toHaveValue("sanjai.s")
    await expect(page.locator("//input[@placeholder='Enter Mobile Number']")).toHaveValue("8870050284")
    await expect(page.locator("//input[@placeholder='Enter legalName']")).toBeDisabled()

    await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
    await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
    await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
    await expect(page.locator("//input[@name='countryName']")).toBeDisabled()
    // await expect(page.locator("//option[text()='India']")).toHaveValue("India")
    // await page.pause()
    // await expect(page.locator("//option[text()='Tamil Nadu']")).toHaveValue("Tamil Nadu")
    // await expect(page.locator("//option[text()='Nilgiris']")).toHaveValue("Nilgiris")
    await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
    await expect(page.locator("input[placeholder='Enter pincode']")).toHaveValue("123234")
    await expect(page.locator("//p[@title='fivemb.pdf']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Shipper Name']").fill("ds")
    await adminpg.continue_to_book()

    //destination
    await adminpg.continue_to_book()
    await expect(page.locator("//h2[text()='Notify Party']")).toBeHidden()
    await page.locator("//h1[text()='destination of cargo']").click()

    await expect(page.locator("//input[@placeholder='Enter name']")).toHaveValue("sanjai")
    await expect(page.locator("//input[@placeholder='Enter email']")).toHaveValue("dest12@gmail.com")
    await expect(page.locator("//input[@placeholder='Enter Mobile Number']")).toHaveValue("+9711234567")
    await expect(page.locator("//input[@placeholder='Enter Company Name']")).toHaveValue("destination of cargo")
    await expect(page.locator("//input[@placeholder='Enter Door No']")).toHaveValue("122")
    await expect(page.locator("//input[@placeholder='Enter Building']")).toHaveValue("ispahani centre")
    await expect(page.locator("//input[@placeholder='Enter Street']")).toHaveValue("uthaman gandhi street")
    await expect(page.locator("//input[@placeholder='Enter Area']")).toHaveValue("nungambakkam")
    await expect(page.locator("//select[@name='country']")).toBeDisabled()
    await expect(page.locator("//input[@placeholder='Enter State']")).toHaveValue("new dest state")
    await expect(page.locator("//input[@placeholder='Enter City']")).toHaveValue("new dest city")
    await adminpg.continue_to_book()

    //notify

    await page.locator("//label[text()='Same as Destination']").click()
    await adminpg.continue_to_book()
    await expect(page.locator("//h2[text()='Upload Documents']")).toBeHidden()
    await page.locator("//h1[text()='destination of cargo']").click()

    await expect(page.locator("//input[@placeholder='Enter name']")).toHaveValue("sanjai")
    await expect(page.locator("//input[@placeholder='Enter email']")).toHaveValue("dest12@gmail.com")
    await expect(page.locator("//input[@placeholder='Enter Mobile Number']")).toHaveValue("+9711234567")
    await expect(page.locator("//input[@placeholder='Enter Company Name']")).toHaveValue("destination of cargo")

    await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
    await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
    await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
    await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
    await expect(page.locator("//input[@name='country']")).toHaveValue("united arab emirates")
    await expect(page.locator("//input[@name='state']")).toHaveValue("New dest state")
    await expect(page.locator("//input[@name='city']")).toHaveValue("New dest city")
    await adminpg.continue_to_book()
    await expect(page.locator("//h2[text()='Upload Documents']")).toBeVisible()


  }) 
  test.skip("Draft booking", async({page, adminpg}) =>{
    //await expect(page.locator("//h5[text()='Active Orders']")).toBeVisible()
    //h5[text()='Booking(s) Made']
    //h5[text()='PreBooking(s) Made']
    //h1[text()='37']
    //h1[text()='42']
    //h1[text()='10']
    //h1[text()='127.9']
    //h1[text()='250']

    test.setTimeout(180000);
    // await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)
    await adminpg.package_0(data.Pallets)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("4")
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await adminpg.continue_to_book()
    //booking party
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
    
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Booking Party'])[1]")).toBeVisible()
    await page.locator("(//button[text()='Book Now '])[1]").click()

    await page.locator("(//span[text()='sanjai.s@allmasters.ai'])[1]").click()
    await page.locator("//input[@placeholder='Enter Shipper Name']").fill("shipper name")
    
    await page.locator("//button[text()='Continue to Book']").click()
    //await page.locator("//input[@placeholder='Enter name']").fill(data.space_data)
    await expect(page.locator("//h1[text()='Receiving Party Details']")).toBeVisible({ timeout: 10000 })
    // await page.waitForTimeout(5000)
    // await page.locator("//input[@placeholder='Enter name']").click()
    
    //receiving party
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Receiving Party'])[1]")).toBeVisible()
     await page.waitForTimeout(2000)
    await page.locator("(//button[text()='Book Now '])[1]").click()

    await page.waitForTimeout(2000)
    await page.locator("(//h1[text()='destination of cargo'])[1]").click()
    await adminpg.continue_to_book()
    await page.waitForTimeout(5000)
    await page.locator("//input[@placeholder='Enter name']").click()
    //notify party
    //await page.locator("//label[text()='Same as Destination']").click()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()

    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Notify Party'])[1]")).toBeVisible()
    await page.waitForTimeout(2000)
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await page.waitForTimeout(2000)
    await page.locator("(//h1[text()='destination of cargo'])[1]").click()
    await adminpg.continue_to_book()
    //upload docs
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Upload Docs'])[1]")).toBeVisible()
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/1mbcopy (1).pdf")
    await adminpg.continue_to_book()
    //checkout
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()

    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Checkout'])[1]")).toBeVisible()
    await page.waitForTimeout(2000)
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await page.waitForTimeout(2000)
/// click edit button in checkout page //book
    await page.locator("(//button[text()='Edit'])[1]").click()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()

    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Checkout'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()

    await page.locator("(//button[text()='Edit'])[1]").click()
    await adminpg.continue_to_book()
    
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()

    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Booking Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()
    await expect(page.locator("//h2[text()='Receiving Party']")).toBeVisible()
    await adminpg.continue_to_book()
    await adminpg.continue_to_book()
    await adminpg.continue_to_book()


/// click edit button in checkout page //receiving
    await page.locator("(//button[text()='Edit'])[1]").click()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Checkout'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()

    //note
//await page.locator("(//button[text()='Edit'])[1]").click()
    await adminpg.continue_to_book()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Booking Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()
    await expect(page.locator("//h2[text()='Receiving Party']")).toBeVisible()

      await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Receiving Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()
    await adminpg.continue_to_book()
    await adminpg.continue_to_book()
    /// click edit button in checkout page //notify
    await page.locator("(//button[text()='Edit'])[1]").click()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Checkout'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()

await page.locator("(//button[text()='Edit'])[1]").click()
    await adminpg.continue_to_book()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Booking Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Receiving Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Notify Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()
    await adminpg.continue_to_book()
    
    /// click edit button in checkout page //upload docs
    await page.locator("(//button[text()='Edit'])[1]").click()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Checkout'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()

//await page.locator("(//button[text()='Edit'])[1]").click()
    await adminpg.continue_to_book()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Booking Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()
    await expect(page.locator("//h2[text()='Receiving Party']")).toBeVisible()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Receiving Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Notify Party'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()

      await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Upload Docs'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await adminpg.continue_to_book()
    /// click edit button in checkout page //book
    await page.locator("(//button[text()='Edit'])[1]").click()

    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
await page.waitForTimeout(2000)
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Checkout'])[1]")).toBeVisible()//doubt
    await page.locator("(//button[text()='Book Now '])[1]").click()
  }) //issue
  test.skip("File upload and assert all details while made booking", async ({ page, adminpg }) => {
    //packing list
    await adminpg.continue_to_book()
    await expect(page.locator("//p[text()='Please Upload Packing List File']")).toBeVisible()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/wrong date.xls")
    await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(2000)
    await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/3mb.pdf,data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/1mbcopy (1).pdf")
    await expect(page.locator("//p[text()='File Already uploaded in Packing List']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/Gst.pdf")
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/Gst.pdf")
    await expect(page.locator("//p[text()='Please Upload Different File for Packing List']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/ie.pdf,data-files/PANcard.pdf")
    await page.locator("//button[text()='View Files']").click()
    await expect(page.locator("//p[@title='ie.pdf']")).toBeVisible()
    await expect(page.locator("//p[@title='PANcard.pdf']")).toBeVisible()
    await adminpg.continue_to_book()
    await page.locator("//button[text()='Back']").click()

    //shipping bill
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/Works.docx")
    await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/wrong date.xls")
    await expect(page.locator("//p[text()=' Upload only PDF']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/10 mb file.pdf")
    await page.waitForTimeout(2000)
    await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/3mb.pdf,data-files/3mb(1).pdf")
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[text()=' File size should not be more than 5 MB']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/1mbcopy (1).pdf")
    await expect(page.locator("//p[text()='File Already uploaded in Shipping List']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='Packaging']").setInputFiles("data-files/1mbcopy (1).pdf")
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/1mbcopy (1).pdf")
    await expect(page.locator("//p[text()='Please Upload Different File for Shipping Bill']")).toBeVisible()
    await page.reload()
    await page.locator("//input[@id='shippingbill']").setInputFiles("data-files/Gst.pdf,data-files/gst2.pdf")
    await page.locator("//button[text()='View Files']").click()
    await expect(page.locator("data-files/Gst.pdf")).toBeVisible()
    await expect(page.locator("data-files/gst2.pdf")).toBeVisible()

    await page.locator("//button[text()='View Files']").click()
    await expect(page.locator("//p[@title='ie.pdf']")).toBeVisible()
    await expect(page.locator("//p[@title='PANcard.pdf']")).toBeVisible()

    //p[text()='Upload Documents']
    //h1[text()='Documents']
    //p[text()='2 Required']
    //span[text()='Upload Packing List ']
    // (//p[text()='PDF (Recommended) Upto 5MB Allowed'])[1]
    //span[text()='Upload Shipping Bill ']
    //span[text()='(Optional)']
    // (//p[text()='PDF (Recommended) Upto 5MB Allowed'])[2]

    await adminpg.continue_to_book()



  })
  test.skip("verify that can able to complete full booking", async ({ adminpg, page }) => {
    await adminpg.inmaa()
    await adminpg.Inmaa_dash()
    await adminpg.inmaa_ratecard()
    await adminpg.savings_1_calc()
    await adminpg.savings_1()
    await adminpg.savings_2_calc()
    await adminpg.savings_2()
    await adminpg.savings_3_calc()
    await adminpg.savings_3()
    await adminpg.savings_4_calc()
    await adminpg.savings_4()
    await adminpg.savings_5_calc()
    await adminpg.savings_5()
    await adminpg.savings_6_calc()
    await adminpg.savings_6()
    await adminpg.savings_7_calc()
    await adminpg.savings_7()
    await adminpg.savings_8_calc()
    await adminpg.savings_8()
    await adminpg.savings_9_calc()
    await adminpg.savings_9()
    await adminpg.savings_10_calc()
    await adminpg.savings_10()
    await adminpg.savings_11_calc()
    await adminpg.savings_11()
    await adminpg.savings_12_calc()
    await adminpg.savings_12()
    await adminpg.inmaa_ratec()
    await adminpg.bookingjourney_ratecard()

    await adminpg.continue_to_book()
    await adminpg.cargo_details()

    await adminpg.package_0(data.Crates)
    await adminpg.length_0(data['0.90'])
    await adminpg.breadth_0(data['0.90'])
    await adminpg.height_0(data['0.90'])
    await adminpg.wpp_0(data['0.90'])
    await adminpg.nop_0(data.dest_break)
    await adminpg.commodity_0(data.commodity)
    await adminpg.hsn_0(data.hsncode)
    await adminpg.continue_to_book()

    await adminpg.Addforwarder_dis_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_sel_state()
    await adminpg.Addforwarder_sel_city()
    await adminpg.Addforwarder_pincode()
    await adminpg.Addforwarder_ori_fileupload()
    await adminpg.Addforwarder_hblname()
    await adminpg.continue_to_book()

    await adminpg.Addforwarder_name()
    await adminpg.Addforwarder_email()
    await adminpg.Addforwarder_ph()
    await adminpg.Addforwarder_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_inp_state()
    await adminpg.Addforwarder_inp_city()
    await adminpg.continue_to_book()

    await adminpg.continue_to_book()

    await adminpg.packinggfileupload()
    await adminpg.continue_to_book()
    await adminpg.confirm_booking()
    await adminpg.pop_up_yes()

  })
  test.only("verify that can able to do pre-booking", async ({ adminpg, page, loginpg }) => {
    test.setTimeout(180000);
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[3]").click()              /// change
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)
    await adminpg.package_0(data.Pallets)

    //Booking fee get changed based on maximum cbm and weight in cargo details
    //23.4 cbm and 1560 kgg
    await page.locator("//input[@name='cargoDetails.0.length']").fill("100")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("130")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("150")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("130")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("1")
    await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await page.locator("//button[text()='Pre-Book Now']").click()
    await page.locator("(//button[text()='Pre-Book Now'])[2]").click()
    await expect(page.locator("//div[text()='Prebooking placed successfully']")).toBeVisible()
    await expect(page.locator("(//p[text()='Booking Fees'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='50'])[1]")).toBeVisible()
    await page.waitForTimeout(4000)

    
    // 1.5 cbm and 1500 kg

    await page.locator("(//button[text()='Book Now'])[1]").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("35")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("56")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("67")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("300")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("5")
    // await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    // await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await page.locator("//button[text()='Pre-Book Now']").click()
    await page.locator("(//button[text()='Pre-Book Now'])[2]").click()
    await expect(page.locator("//div[text()='Prebooking placed successfully']")).toBeVisible()
    await expect(page.locator("(//p[text()='Booking Fees'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='25'])[1]")).toBeVisible()
    await page.waitForTimeout(4000)

    // 8.4 cbm and 8390 kg

    await page.locator("(//button[text()='Book Now'])[1]").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("35")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("56")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("67")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("1678")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("5")
    // await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    // await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    await page.locator("//button[text()='Pre-Book Now']").click()
    await page.locator("(//button[text()='Pre-Book Now'])[2]").click()
    await expect(page.locator("//div[text()='Prebooking placed successfully']")).toBeVisible()
    await expect(page.locator("(//p[text()='Booking Fees'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='50'])[1]")).toBeVisible()
    await page.waitForTimeout(4000)

    // 17.3 cbm and 6484 kg 

    await page.locator("(//button[text()='Book Now'])[1]").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='cargoDetails.0.length']").fill("190")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("190")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("1621")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("4")
    // await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
    // await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
    // await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
    await page.locator("//button[text()='Pre-Book Now']").click()
    await page.locator("(//button[text()='Pre-Book Now'])[2]").click()
    await expect(page.locator("//div[text()='Prebooking placed successfully']")).toBeVisible()
    await expect(page.locator("(//p[text()='Booking Fees'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='50'])[1]")).toBeVisible()

    await loginpg.logout_dd()
    
  await loginpg.select_type(data.type3)
  await loginpg.emailID("admin@ams.com") //change
  await loginpg.password("Doko@2023")
  await loginpg.sign_in()
  await page.waitForTimeout(5000)
  const input = await page.isVisible("//h2[text()='User Already Logged In']")
  if (input) {
    console.log('Pop-up is visible.');
    await page.click("//button[text()='Yes']")
  }
  else {
    console.log('Pop-up is not visible.');
  }
  await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
  //await expect(page.locator("//p[text()='1']")).toBeVisible()
  await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
  //await expect(page.locator("(//h4[contains(.,'chittoor com made a Pre-Booking ID')])[1]")).toBeVisible()
  await expect(page.locator("(//h4[contains(.,'com made a Pre-Booking ID')])[1]")).toBeVisible()
  await page.reload()
  await page.locator("//li[text()='Sign Out']").click()


  await loginpg.select_type(data.type3)
  await loginpg.emailID("ot@ams.com") //change
  await loginpg.password("Doko@2023")
  await loginpg.sign_in()
  await page.waitForTimeout(5000)

  //const input = await page.isVisible("//h2[text()='User Already Logged In']")
  if (input) {
    console.log('Pop-up is visible.');
    await page.click("//button[text()='Yes']")
  }
  else {
    console.log('Pop-up is not visible.');
  }
  await page.locator("(//div[@class='_notification_hmtms_139']//div)[1]").click()
  //await expect(page.locator("//p[text()='1']")).toBeVisible()
  await expect(page.locator("//h1[text()='Notifications']")).toBeVisible()
  //await expect(page.locator("(//h4[contains(.,'chittoor com made a Pre-Booking ID')])[1]")).toBeVisible()
  await expect(page.locator("(//h4[contains(.,'com made a Pre-Booking ID')])[1]")).toBeVisible()
  await page.reload()
  await page.locator("//li[text()='Sign Out']").click()

  })
  test.skip("Complete the booking from pre-booking", async ({ adminpg, page }) => {
    await adminpg.My_bookings()
    await adminpg.pre_booking_assert()
    await adminpg.book_now_from_pre_book()
    await adminpg.continue_to_book()
    await adminpg.Addforwarder_dis_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_sel_state()
    await adminpg.Addforwarder_sel_city()
    await adminpg.Addforwarder_pincode()
    await adminpg.Addforwarder_ori_fileupload()
    await adminpg.Addforwarder_hblname()
    await adminpg.continue_to_book()

    await adminpg.Addforwarder_name()
    await adminpg.Addforwarder_email()
    await adminpg.Addforwarder_ph()
    await adminpg.Addforwarder_companyname()
    await adminpg.Addforwarder_Doorno()
    await adminpg.Addforwarder_Building()
    await adminpg.Addforwarder_street()
    await adminpg.Addforwarder_area()
    await adminpg.Addforwarder_country()
    await adminpg.Addforwarder_inp_state()
    await adminpg.Addforwarder_inp_city()
    await adminpg.continue_to_book()

    await adminpg.continue_to_book()

    await adminpg.packinggfileupload()
    await adminpg.continue_to_book()
    await adminpg.confirm_booking()
    await adminpg.pop_up_yes()
    //    await adminpg.check_currentdate_and_destport()
  })

})

test.describe.skip("Place order", async()=>{
  test.beforeEach(async ({ page, baseURL, loginpg}) => {
    test.setTimeout(480000)
    await page.goto(`${baseURL}`)
    await loginpg.emailID("mohammed.navi@dokonaly.com")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
   test("cargo details", async ({ page, adminpg }) => { //delete bin icon need to check, required spelling mistake
    // await page.locator("//button[text()='Place Booking']").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Assign Order']").click()
    await page.locator("//select[@id='pod']").selectOption("AEJEA")   
    await page.locator("//select[@id='originCountry']").selectOption("india")     
    await page.locator("//button[text()='Search']").click()
    await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Place Order']").click()
 
     await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
     await page.locator("//button[text()='Continue to Book']").click()
     await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Height is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
     await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()
     await page.reload()
 
     await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
     await page.locator("//button[text()='Pre-Book Now']").click()
     await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Height is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
     await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()
 
     await page.locator("//button[text()='Continue to Book']").click()
     await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Height is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
     await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()
 
     await adminpg.non_stackable()
     await page.locator("//button[text()='Continue to Book']").click()
     await expect(page.locator("//p[text()='Package Type is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Length is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Breadth is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Height is required']")).toBeHidden()
     await expect(page.locator("//p[text()='Weight per packages is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Number of package is required']")).toBeVisible()
     await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
     await expect(page.locator("//p[text()='HSN Code is required']")).toBeVisible()
 
     await adminpg.stackable()
     await adminpg.package_0(data.Crates)
     await page.locator("//input[@name='cargoDetails.0.length']").fill("2212")
     await page.locator("//input[@name='cargoDetails.0.breadth']").fill("2212")
     await page.locator("//input[@name='cargoDetails.0.height']").fill("2212")
 
     await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     await page.locator("//button[@value='M']").click()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     await page.locator("//button[@value='MM']").click()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     await page.locator("//button[@value='IN']").click()
     await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
 
     await page.reload()
     await adminpg.package_0(data.Barrels)
     await page.locator("//input[@name='cargoDetails.0.radius']").fill("2212")
     await page.locator("//input[@name='cargoDetails.0.height']").fill("2212")
 
     await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
     await page.locator("//button[@value='M']").click()
 
     await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     await page.locator("//button[@value='MM']").click()
 
     await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     await page.locator("//button[@value='IN']").click()
 
     await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
     await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
 
     //length check
 
     await page.reload()
     await adminpg.package_0(data.Crates)
     await page.locator("//input[@name='cargoDetails.0.length']").fill("0")
     await expect(page.locator("(//p[text()='Zero not allowed'])[1]")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.length']").fill("2.")
     await expect(page.locator("//p[text()='Enter Valid Number']")).toBeVisible()
 
     await page.locator("//input[@name='cargoDetails.0.length']").fill("220.01")
     await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.length']").fill("2.20")
     await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.length']").fill("2200.01")
     await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.length']").fill("86.60")
     await expect(page.locator("//p[text()='Only Single Decimal is allowed']")).toBeVisible()
     await page.reload()
 
 
 
 
     //p[text()='Should have 8 numbers']
     //   (//p[text()='Only Single Decimal is allowed'])[1]
     221
     //button[@value='stackable']
     //button[@value="non-stackable"]
     //select[@id='packageType0']   Pallets,Skids,Crates,Cartons,Bales,Boxes,Barrels,Rolls
 
 
     //span[text()='1']
     //span[text()='4']
 
 
     //input[@name='cargoDetails.0.radius']  
 
     //input[@name='cargoDetails.1.length']
     //button[text()='Add Another Package']
 
 
   })
   test("checking on each package values on different metrics with Stackable", async ({ page, adminpg }) => {
     test.setTimeout(180000);
     //await page.locator("//button[text()='Place Booking']").click()
     await page.locator("//a[contains(text(),'AllMasters')]").click()
     await page.locator("//button[text()='Assign Order']").click()
     await page.locator("//select[@id='pod']").selectOption("AEJEA")   
    await page.locator("//select[@id='originCountry']").selectOption("india")     
    await page.locator("//button[text()='Search']").click()
    await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Place Order']").click()
     await page.waitForTimeout(2000)
 
     //pallet
     await adminpg.package_0(data.Pallets)
     const cm = 9
     for (let i = 0; i < cm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m = 7
     for (let i = 0; i < m; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm = 5
     for (let i = 0; i < mm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc = 3
     for (let i = 0; i < inc; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //skids
     await page.reload()
     await adminpg.package_0(data.Skids)
     const cm1 = 9
     for (let i = 0; i < cm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m1 = 7
     for (let i = 0; i < m1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm1 = 5
     for (let i = 0; i < mm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc1 = 3
     for (let i = 0; i < inc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //crates
     await page.reload()
     await adminpg.package_0(data.Crates)
     const cm2 = 9
     for (let i = 0; i < cm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m2 = 7
     for (let i = 0; i < m2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm2 = 5
     for (let i = 0; i < mm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc2 = 3
     for (let i = 0; i < inc2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //cartons
     await page.reload()
     await adminpg.package_0(data.Cartons)
     const cm3 = 9
     for (let i = 0; i < cm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m3 = 7
     for (let i = 0; i < m3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm3 = 5
     for (let i = 0; i < mm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc3 = 3
     for (let i = 0; i < inc3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //bales
     await page.reload()
     await adminpg.package_0(data.Bales)
     const cm4 = 9
     for (let i = 0; i < cm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m4 = 7
     for (let i = 0; i < m4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm4 = 5
     for (let i = 0; i < mm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc4 = 3
     for (let i = 0; i < inc4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //boxes
     await page.reload()
     await adminpg.package_0(data.Boxes)
     const cm5 = 9
     for (let i = 0; i < cm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m5 = 7
     for (let i = 0; i < m5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm5 = 5
     for (let i = 0; i < mm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc5 = 3
     for (let i = 0; i < inc5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //barrels    need to separate radius and height separately for barrels and rolls
     await page.reload()
     await adminpg.package_0(data.Barrels)
     const cm6 = 9
     for (let i = 0; i < cm6; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
     }
 
     await page.locator("//button[@value='M']").click()
     const m6 = 7
     for (let i = 0; i < m6; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     }
 
     const rm = 8
     for (let i = 0; i < rm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
     }
 
     await page.locator("//button[@value='MM']").click()
     const mm6 = 5
     for (let i = 0; i < mm6; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     }
     const rmm = 4
     for (let i = 0; i < rmm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
     }
 
     await page.locator("//button[@value='IN']").click()
     const inc6 = 3
     for (let i = 0; i < inc6; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     }
     const rinc = 6
     for (let i = 0; i < rinc; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
     }
 
     //Rolls
     await page.reload()
     await adminpg.package_0(data.Rolls)
     const cm7 = 9
     for (let i = 0; i < cm7; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
     }
 
     await page.locator("//button[@value='M']").click()
     const m7 = 7
     for (let i = 0; i < m7; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     }
 
     const rm1 = 8
     for (let i = 0; i < rm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
     }
 
     await page.locator("//button[@value='MM']").click()
     const mm7 = 5
     for (let i = 0; i < mm7; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     }
     const rmm1 = 4
     for (let i = 0; i < rmm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
     }
 
     await page.locator("//button[@value='IN']").click()
     const inc7 = 3
     for (let i = 0; i < inc7; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     }
     const rinc1 = 6
     for (let i = 0; i < rinc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
     }
 
 
   })
   test("checking on each package values on different metrics with Non-Stackable", async ({ page, adminpg }) => {
     test.setTimeout(180000);
    // await page.locator("//button[text()='Place Booking']").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Assign Order']").click()
    await page.locator("//select[@id='pod']").selectOption("AEJEA")   
   await page.locator("//select[@id='originCountry']").selectOption("india")     
   await page.locator("//button[text()='Search']").click()
   await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
   await page.locator("(//h1[text()='AEJEA'])[1]").click()
   await page.locator("//button[text()='Continue to Place Order']").click()
     await page.waitForTimeout(2000)
 
     //pallet
     await adminpg.non_stackable()
     await adminpg.package_0(data.Pallets)
     const cm = 9
     for (let i = 0; i < cm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m = 7
     for (let i = 0; i < m; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm = 5
     for (let i = 0; i < mm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc = 3
     for (let i = 0; i < inc; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     //skids
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Skids)
     const cm1 = 9
     for (let i = 0; i < cm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m1 = 7
     for (let i = 0; i < m1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm1 = 5
     for (let i = 0; i < mm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc1 = 3
     for (let i = 0; i < inc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     //crates
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Crates)
     const cm2 = 9
     for (let i = 0; i < cm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m2 = 7
     for (let i = 0; i < m2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm2 = 5
     for (let i = 0; i < mm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc2 = 3
     for (let i = 0; i < inc2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     //cartons
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Cartons)
     const cm3 = 9
     for (let i = 0; i < cm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m3 = 7
     for (let i = 0; i < m3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm3 = 5
     for (let i = 0; i < mm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc3 = 3
     for (let i = 0; i < inc3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     //bales
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Bales)
     const cm4 = 9
     for (let i = 0; i < cm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m4 = 7
     for (let i = 0; i < m4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm4 = 5
     for (let i = 0; i < mm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc4 = 3
     for (let i = 0; i < inc4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     //boxes
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Boxes)
     const cm5 = 9
     for (let i = 0; i < cm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='M']").click()
     const m5 = 7
     for (let i = 0; i < m5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='MM']").click()
     const mm5 = 5
     for (let i = 0; i < mm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("//button[@value='IN']").click()
     const inc5 = 3
     for (let i = 0; i < inc5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
   //    await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //barrels    need to separate radius and height separately for barrels and rolls
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Barrels)
     const cm6 = 9
     for (let i = 0; i < cm6; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
     }
 
     await page.locator("//button[@value='M']").click()
     // const m6 = 7
     // for (let i = 0; i < m6; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     // }
 
     const rm = 8
     for (let i = 0; i < rm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
     }
 
     await page.locator("//button[@value='MM']").click()
     // const mm6 = 5
     // for (let i = 0; i < mm6; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     // }
     const rmm = 4
     for (let i = 0; i < rmm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
     }
 
     await page.locator("//button[@value='IN']").click()
     // const inc6 = 3
     // for (let i = 0; i < inc6; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     // }
     const rinc = 6
     for (let i = 0; i < rinc; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
     }
 
     //Rolls
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Rolls)
     const cm7 = 9
     for (let i = 0; i < cm7; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 110 CM']")).toBeVisible()
     }
 
     await page.locator("//button[@value='M']").click()
     // const m7 = 7
     // for (let i = 0; i < m7; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     // }
 
     const rm1 = 8
     for (let i = 0; i < rm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1.1 M']")).toBeVisible()
     }
 
     await page.locator("//button[@value='MM']").click()
     // const mm7 = 5
     // for (let i = 0; i < mm7; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     // }
     const rmm1 = 4
     for (let i = 0; i < rmm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 1100 MM']")).toBeVisible()
     }
 
     await page.locator("//button[@value='IN']").click()
     // const inc7 = 3
     // for (let i = 0; i < inc7; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     // }
     const rinc1 = 6
     for (let i = 0; i < rinc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("//p[text()='Enter less than or equal to 43.3 IN']")).toBeVisible()
     }
 
   })
   test("checking on each package values on different metrics with Stackable + Adding Number of packages", async ({ page, adminpg }) => {
     test.setTimeout(180000);
     //await page.pause()
    // await page.locator("//button[text()='Place Booking']").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Assign Order']").click()
    await page.locator("//select[@id='pod']").selectOption("AEJEA")   
   await page.locator("//select[@id='originCountry']").selectOption("india")     
   await page.locator("//button[text()='Search']").click()
   await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
   await page.locator("(//h1[text()='AEJEA'])[1]").click()
   await page.locator("//button[text()='Continue to Place Order']").click()
     await page.waitForTimeout(2000)
     //1
     //pallet
     
     await adminpg.package_0(data.Pallets)
     const cm = 9
     for (let i = 0; i < cm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Pallets)
     const cm01 = 9
     for (let i = 0; i < cm01; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
     }
 
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m = 7
     for (let i = 0; i < m; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm02 = 7
     for (let i = 0; i < cm02; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
     }
 
 
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm = 5
     for (let i = 0; i < mm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm03 = 5
     for (let i = 0; i < cm03; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc = 3
     for (let i = 0; i < inc; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm04 = 3
     for (let i = 0; i < cm04; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
     }
 
 
     //skids
     await page.reload()
     await adminpg.package_0(data.Skids)
     const cm1 = 9
     for (let i = 0; i < cm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Skids)
     const cm05 = 9
     for (let i = 0; i < cm05; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m1 = 7
     for (let i = 0; i < m1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm06 = 7
     for (let i = 0; i < cm06; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
     }
 
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm1 = 5
     for (let i = 0; i < mm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm07 = 5
     for (let i = 0; i < cm07; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc1 = 3
     for (let i = 0; i < inc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm08 = 3
     for (let i = 0; i < cm08; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
     }
 
     //crates
     await page.reload()
     await adminpg.package_0(data.Crates)
     const cm2 = 9
     for (let i = 0; i < cm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Crates)
     const cm09 = 9
     for (let i = 0; i < cm09; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m2 = 7
     for (let i = 0; i < m2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm10 = 7
     for (let i = 0; i < cm10; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm2 = 5
     for (let i = 0; i < mm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm11 = 5
     for (let i = 0; i < cm11; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc2 = 3
     for (let i = 0; i < inc2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm12 = 3
     for (let i = 0; i < cm12; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
     }
 
     //cartons
     await page.reload()
     await adminpg.package_0(data.Cartons)
     const cm3 = 9
     for (let i = 0; i < cm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Cartons)
     const cm13 = 9
     for (let i = 0; i < cm13; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m3 = 7
     for (let i = 0; i < m3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm14 = 7
     for (let i = 0; i < cm14; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
     }
     
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm3 = 5
     for (let i = 0; i < mm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm15 = 5
     for (let i = 0; i < cm15; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc3 = 3
     for (let i = 0; i < inc3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm16 = 3
     for (let i = 0; i < cm16; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
     }
 
     //bales
     await page.reload()
     await adminpg.package_0(data.Bales)
     const cm4 = 9
     for (let i = 0; i < cm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Bales)
     const cm17 = 9
     for (let i = 0; i < cm17; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m4 = 7
     for (let i = 0; i < m4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm18 = 7
     for (let i = 0; i < cm18; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm4 = 5
     for (let i = 0; i < mm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm19 = 5
     for (let i = 0; i < cm19; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc4 = 3
     for (let i = 0; i < inc4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm20 = 3
     for (let i = 0; i < cm20; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
     }
     //boxes
     await page.reload()
     await adminpg.package_0(data.Boxes)
     const cm5 = 9
     for (let i = 0; i < cm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Boxes)
     const cm21 = 9
     for (let i = 0; i < cm21; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m5 = 7
     for (let i = 0; i < m5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm22 = 7
     for (let i = 0; i < cm22; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm5 = 5
     for (let i = 0; i < mm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm23 = 5
     for (let i = 0; i < cm23; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[6]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc5 = 3
     for (let i = 0; i < inc5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm24 = 3
     for (let i = 0; i < cm24; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[5]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[6]")).toBeVisible()
     }
 
     //barrels    need to separate radius and height separately for barrels and rolls
     await page.reload()
     await adminpg.package_0(data.Barrels)
     const cm6 = 9
     for (let i = 0; i < cm6; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Barrels)
     const cm25 = 9
     for (let i = 0; i < cm25; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
 
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m6 = 7
     for (let i = 0; i < m6; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm26 = 7
     for (let i = 0; i < cm26; i++) {
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
 
     const rm = 8
     for (let i = 0; i < rm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
     }
     const cm27 = 8
     for (let i = 0; i < cm27; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm6 = 5
     for (let i = 0; i < mm6; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm28 = 5
     for (let i = 0; i < cm28; i++) {
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
 
     const rmm = 4
     for (let i = 0; i < rmm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
     }
     const cm29 = 4
     for (let i = 0; i < cm29; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc6 = 3
     for (let i = 0; i < inc6; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm30 = 3
     for (let i = 0; i < cm30; i++) {
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
 
     const rinc = 6
     for (let i = 0; i < rinc; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
     }
     const cm31 = 6
     for (let i = 0; i < cm31; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
     }
 
     //Rolls
     await page.reload()
     await adminpg.package_0(data.Rolls)
     const cm7 = 9
     for (let i = 0; i < cm7; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.package_1(data.Rolls)
     const cm32 = 9
     for (let i = 0; i < cm32; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m7 = 7
     for (let i = 0; i < m7; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm33 = 7
     for (let i = 0; i < cm33; i++) {
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
 
     const rm1 = 8
     for (let i = 0; i < rm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
     }
     const cm34 = 8
     for (let i = 0; i < cm34; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
     }
     
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm7 = 5
     for (let i = 0; i < mm7; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm35 = 5
     for (let i = 0; i < cm35; i++) {
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
 
     const rmm1 = 4
     for (let i = 0; i < rmm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
     }
     const cm36 = 4
     for (let i = 0; i < cm36; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc7 = 3
     for (let i = 0; i < inc7; i++) {
       await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm37 = 3
     for (let i = 0; i < cm37; i++) {
       await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
 
     const rinc1 = 6
     for (let i = 0; i < rinc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
     }
     const cm38 = 6
     for (let i = 0; i < cm38; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
     }
 
   })
   test("checking on each package values on different metrics with Non-Stackable + Adding Number of packages", async ({ page, adminpg }) => {
     test.setTimeout(180000);
   
    // await page.locator("//button[text()='Place Booking']").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()
     await page.locator("//button[text()='Assign Order']").click()
     await page.locator("//select[@id='pod']").selectOption("AEJEA")   
    await page.locator("//select[@id='originCountry']").selectOption("india")     
    await page.locator("//button[text()='Search']").click()
    await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Place Order']").click()
     await page.waitForTimeout(2000)
     //1
     //pallet
     await adminpg.non_stackable()
     await adminpg.package_0(data.Pallets)
     const cm = 9
     for (let i = 0; i < cm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Pallets)
     const cm01 = 9
     for (let i = 0; i < cm01; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m = 7
     for (let i = 0; i < m; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm02 = 7
     for (let i = 0; i < cm02; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm = 5
     for (let i = 0; i < mm; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm03 = 5
     for (let i = 0; i < cm03; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc = 3
     for (let i = 0; i < inc; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm04 = 3
     for (let i = 0; i < cm04; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
 
 
     //skids
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Skids)
     const cm1 = 9
     for (let i = 0; i < cm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Skids)
     const cm05 = 9
     for (let i = 0; i < cm05; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m1 = 7
     for (let i = 0; i < m1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm06 = 7
     for (let i = 0; i < cm06; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
 
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm1 = 5
     for (let i = 0; i < mm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm07 = 5
     for (let i = 0; i < cm07; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc1 = 3
     for (let i = 0; i < inc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm08 = 3
     for (let i = 0; i < cm08; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
 
     //crates
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Crates)
     const cm2 = 9
     for (let i = 0; i < cm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Crates)
     const cm09 = 9
     for (let i = 0; i < cm09; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m2 = 7
     for (let i = 0; i < m2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm10 = 7
     for (let i = 0; i < cm10; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm2 = 5
     for (let i = 0; i < mm2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm11 = 5
     for (let i = 0; i < cm11; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc2 = 3
     for (let i = 0; i < inc2; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm12 = 3
     for (let i = 0; i < cm12; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
 
     //cartons
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Cartons)
     const cm3 = 9
     for (let i = 0; i < cm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Cartons)
     const cm13 = 9
     for (let i = 0; i < cm13; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m3 = 7
     for (let i = 0; i < m3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm14 = 7
     for (let i = 0; i < cm14; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
     
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm3 = 5
     for (let i = 0; i < mm3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm15 = 5
     for (let i = 0; i < cm15; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc3 = 3
     for (let i = 0; i < inc3; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm16 = 3
     for (let i = 0; i < cm16; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
 
     //bales
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Bales)
     const cm4 = 9
     for (let i = 0; i < cm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Bales)
     const cm17 = 9
     for (let i = 0; i < cm17; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m4 = 7
     for (let i = 0; i < m4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm18 = 7
     for (let i = 0; i < cm18; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm4 = 5
     for (let i = 0; i < mm4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm19 = 5
     for (let i = 0; i < cm19; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc4 = 3
     for (let i = 0; i < inc4; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm20 = 3
     for (let i = 0; i < cm20; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
     //boxes
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Boxes)
     const cm5 = 9
     for (let i = 0; i < cm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[2]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Boxes)
     const cm21 = 9
     for (let i = 0; i < cm21; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_cm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 220 CM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     const m5 = 7
     for (let i = 0; i < m5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm22 = 7
     for (let i = 0; i < cm22; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_m[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     const mm5 = 5
     for (let i = 0; i < mm5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm23 = 5
     for (let i = 0; i < cm23; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_mm[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[3]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     const inc5 = 3
     for (let i = 0; i < inc5; i++) {
       await page.locator("//input[@name='cargoDetails.0.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.0.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm24 = 3
     for (let i = 0; i < cm24; i++) {
       await page.locator("//input[@name='cargoDetails.1.length']").fill(data.length_in[i])
       await page.locator("//input[@name='cargoDetails.1.breadth']").fill(data.length_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[4]")).toBeVisible()
       await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[3]")).toBeVisible()
     }
 
     //barrels    need to separate radius and height separately for barrels and rolls
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Barrels)
     const cm6 = 9
     for (let i = 0; i < cm6; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Barrels)
     const cm25 = 9
     for (let i = 0; i < cm25; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
     }
 
 
     await page.locator("(//button[@value='M'])[1]").click()
     // const m6 = 7
     // for (let i = 0; i < m6; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     // }
     // 
     // const cm26 = 7
     // for (let i = 0; i < cm26; i++) {
     //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     // }
 
     const rm = 8
     for (let i = 0; i < rm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm27 = 8
     for (let i = 0; i < cm27; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='MM'])[1]").click()
     // const mm6 = 5
     // for (let i = 0; i < mm6; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     // }
     // 
     // const cm28 = 5
     // for (let i = 0; i < cm28; i++) {
     //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     // }
 
     const rmm = 4
     for (let i = 0; i < rmm; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm29 = 4
     for (let i = 0; i < cm29; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     // const inc6 = 3
     // for (let i = 0; i < inc6; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     // }
     // 
     // const cm30 = 3
     // for (let i = 0; i < cm30; i++) {
     //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     // }
 
     const rinc = 6
     for (let i = 0; i < rinc; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm31 = 6
     for (let i = 0; i < cm31; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
     }
 
     //Rolls
     await page.reload()
     await adminpg.non_stackable()
     await adminpg.package_0(data.Rolls)
     const cm7 = 9
     for (let i = 0; i < cm7; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[1]")).toBeVisible()
     }
     await adminpg.Addpackage()
     await adminpg.non_stackable_two()
     await adminpg.package_1(data.Rolls)
     const cm32 = 9
     for (let i = 0; i < cm32; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_cm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 110 CM'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='M'])[1]").click()
     // const m7 = 7
     // for (let i = 0; i < m7; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_m[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[1]")).toBeVisible()
     // }
     // 
     // const cm33 = 7
     // for (let i = 0; i < cm33; i++) {
     //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_m[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2.2 M'])[2]")).toBeVisible()
     // }
 
     const rm1 = 8
     for (let i = 0; i < rm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='M'])[2]").click()
     const cm34 = 8
     for (let i = 0; i < cm34; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_m[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1.1 M'])[2]")).toBeVisible()
     }
     
 
     await page.locator("(//button[@value='MM'])[1]").click()
     // const mm7 = 5
     // for (let i = 0; i < mm7; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_mm[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[1]")).toBeVisible()
     // }
     // 
     // const cm35 = 5
     // for (let i = 0; i < cm35; i++) {
     //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_mm[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 2200 MM'])[2]")).toBeVisible()
     // }
 
     const rmm1 = 4
     for (let i = 0; i < rmm1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='MM'])[2]").click()
     const cm36 = 4
     for (let i = 0; i < cm36; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_mm[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 1100 MM'])[2]")).toBeVisible()
     }
 
     await page.locator("(//button[@value='IN'])[1]").click()
     // const inc7 = 3
     // for (let i = 0; i < inc7; i++) {
     //   await page.locator("//input[@name='cargoDetails.0.height']").fill(data.length_in[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[1]")).toBeVisible()
     // }
     // 
     // const cm37 = 3
     // for (let i = 0; i < cm37; i++) {
     //   await page.locator("//input[@name='cargoDetails.1.height']").fill(data.length_in[i])
     //   await expect(page.locator("(//p[text()='Enter less than or equal to 86.6 IN'])[2]")).toBeVisible()
     // }
 
     const rinc1 = 6
     for (let i = 0; i < rinc1; i++) {
       await page.locator("//input[@name='cargoDetails.0.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[1]")).toBeVisible()
     }
     await page.locator("(//button[@value='IN'])[2]").click()
     const cm38 = 6
     for (let i = 0; i < cm38; i++) {
       await page.locator("//input[@name='cargoDetails.1.radius']").fill(data.radius_in[i])
       await expect(page.locator("(//p[text()='Enter less than or equal to 43.3 IN'])[2]")).toBeVisible()
     }
 
   })
   test("CBM and weight allowance", async ({ page, adminpg }) => {
     test.setTimeout(180000);
     //await page.locator("//button[text()='Place Booking']").click()
     await page.locator("//a[contains(text(),'AllMasters')]").click()
     await page.locator("//button[text()='Assign Order']").click()
     await page.locator("//select[@id='pod']").selectOption("AEJEA")   
     await page.locator("//select[@id='originCountry']").selectOption("india")     
     await page.locator("//button[text()='Search']").click()
     await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
     await page.locator("(//h1[text()='AEJEA'])[1]").click()
     await page.locator("//button[text()='Continue to Place Order']").click()
     await page.waitForTimeout(2000)
 
     // SPACE DATA
     await adminpg.package_0(data.Pallets)
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill(data.space_data)
     await expect(page.locator("(//p[text()='Only numbers are allowed'])[1]")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill(data.space_data)
     await expect(page.locator("(//p[text()='Only numbers are allowed'])[2]")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.space_data)
     await expect(page.locator("//p[text()='Commodity is required']")).toBeVisible()
 
     //SPL CHAR
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.splcharacter_data)
     await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.splcharacter_data)
     await expect(page.locator("(//p[text()='Only numbers are allowed'])[3]")).toBeVisible()
 
     //ALPHABETS
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.alphabets_data)
     await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.alphabets_data)
     await expect(page.locator("(//p[text()='Only numbers are allowed'])[3]")).toBeVisible()
 
     //zero value
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill(data.zero_data)
     await expect(page.locator("(//p[text()='Zero not allowed'])[1]")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill(data.zero_data)
     await expect(page.locator("(//p[text()='Zero not allowed'])[2]")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.zero_data)
     await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.zero_data)
     await expect(page.locator("//p[text()='Should have 8 numbers']")).toBeVisible()
 
     //zero with decimal value
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill(data.zerodecimal_data)
     await expect(page.locator("(//p[text()='Zero not allowed'])[1]")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill(data.zerodecimal_data)
     await expect(page.locator("(//p[text()='Zero not allowed'])[2]")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill(data.zerodecimal_data)
     await expect(page.locator("//p[text()='Commodity is required']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(data.zerodecimal_data)
     await expect(page.locator("(//p[text()='Only numbers are allowed'])[1]")).toBeVisible()
 
     //max weight and no. of. packages
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.2")
     await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("20002")
     await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.00")
     await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.02")
     await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.03")
     await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.04")
     await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2000.05")
     await expect(page.locator("//p[text()='Enter less than or equal to 2000 Kg']")).toBeHidden()
 
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("22.")
     await expect(page.locator("//p[text()='Enter Valid Number']")).toBeVisible()
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("22.2")
     await expect(page.locator("(//p[text()='Only numbers are allowed'])[1]")).toBeVisible()
 
     //Maximum cbm and weight acceptance in cargo details
     //25.4 cbm
     await page.locator("//input[@name='cargoDetails.0.length']").fill("100")
     await page.locator("//input[@name='cargoDetails.0.breadth']").fill("130")
     await page.locator("//input[@name='cargoDetails.0.height']").fill("150")
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("130")
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("13")
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
     await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
     //await expect(page.locator("//button[text()='Pre-Book Now']")).toBeDisabled()
 // 26 cbm and 26013 kg
     await page.locator("//input[@name='cargoDetails.0.length']").fill("45")
     await page.locator("//input[@name='cargoDetails.0.breadth']").fill("45")
     await page.locator("//input[@name='cargoDetails.0.height']").fill("45")
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("2001")
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("13")
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
     //await expect(page.locator("//button[text()='Pre-Book Now']")).toBeDisabled()
 // 24.8 cbm and 9200kg
     await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
     await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
     await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("23")
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
     //await expect(page.locator("//button[text()='Pre-Book Now']")).toBeDisabled()
 
    // await page.locator("//button[text()='Place Booking']").click()
     await page.locator("//a[contains(text(),'Dashboard')]").click()
     await page.locator("(//h1[text()='AEJEA'])[1]").click()
     await page.locator("//button[text()='Continue to Book']").click()
     await page.waitForTimeout(2000)
     await adminpg.package_0(data.Pallets)
     await page.locator("//input[@name='cargoDetails.0.length']").fill("90")
     await page.locator("//input[@name='cargoDetails.0.breadth']").fill("100")
     await page.locator("//input[@name='cargoDetails.0.height']").fill("120")
     await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("400")
     await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("4")
     await page.locator("//input[@name='cargoDetails.0.commodity']").fill("cardboard")
     await page.locator("//input[@name='cargoDetails.0.hsnCode']").fill("94843394")
     await page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]").click()
     await page.locator("//input[@placeholder='Booking Party Email ID']").fill("sanjai.s@allmasters.ai")
     await page.locator("//button[text()='Place Order']").click()
     await expect(page.locator("//div[text()='Order Placed Sucessfully']")).toBeVisible()
   })
   test("check for placing order", async({page, adminpg})=>{
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Assign Order']").click()
    /*await expect(page.locator("//h1[text()='Welcome to']")).toBeVisible()
    await expect(page.locator("//span[text()='All']")).toBeVisible()
    await expect(page.locator("//h1[text()='Masters']")).toBeVisible()
    await expect(page.locator("//h1[text()='Discover the revolutionary concept of']")).toBeVisible()
    await expect(page.locator("//b[text()='Controllidation']")).toBeVisible()
    await expect(page.locator("//h2[text()='Experience Warehouse to Warehouse Controllidation like never before!']")).toBeVisible()*/
    await expect(page.locator("//h5[text()='2023 ,Groupage technologies (s) pte.ltd.All Rights Reserved']")).toBeVisible()
    await expect(page.locator("//label[text()='POD']")).toBeVisible()
    await expect(page.locator("//label[text()='Origin Country']")).toBeVisible()
    await expect(page.locator("//button[text()='Search']")).toBeVisible()

   // await page.pause()
    await page.locator("//select[@id='pod']").click()   
    //await page.locator("#pod > option:nth-child(2)").click()
    await page.locator("AEJEA").click()

    await page.locator("//select[@id='originCountry']").click()
    //await page.locator("#originCountry > option:nth-child(2)").click()
    await page.locator("india").click()

    await page.locator("//button[text()='Search']").click()
    await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
    await page.locator("(//h1[text()='AEJEA'])[1]").click()
    await page.locator("//button[text()='Continue to Place Order']").click()
    await page.locator("//button[text()='Place Order']").click()
    await expect(page.locator("//span[text()='Email ID is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("    ")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("498549853")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("($(*@$&@")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("dfsfsdfd")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("dest12(*@gmail.com")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("dest12@gmail)(&).com")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("dest12@gmail.879")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("dest12@gmail.^*^")
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeVisible()
    
    await page.locator("//input[@placeholder='Booking Party Email ID']").fill("sanjai.s@allmasters.ai")
    await expect(page.locator("//span[text()='Email ID is required']")).toBeHidden()
    await expect(page.locator("//span[text()='Enter Valid Email ID']")).toBeHidden()

    await expect(page.locator("//h1[text()='Ordering Party Details']")).toBeVisible()
    await expect(page.locator("//label[text()='Assign To']")).toBeVisible()
    await expect(page.locator("//label[text()='Reference Number']")).toBeVisible()
    await expect(page.locator("//h1[text()='Cargo Dimensions']")).toBeVisible()
    await expect(page.locator("//p[text()='Fill in your details']")).toBeVisible()
    await expect(page.locator("//label[text()='Toggle for']")).toBeVisible()
    await expect(page.locator("//label[text()='approximate ']")).toBeVisible()
    await expect(page.locator("//label[text()='volume & weight:']")).toBeVisible()
    await expect(page.locator("//h1[text()='Forwarder Details']")).toBeVisible()

    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
    //await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
    await expect(page.locator("//span[text()='Enter valid door number']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill(data.space_data)
    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("dsdfsdss")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("#")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("/")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("122")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("#@$%^$%&")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("43243")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("     ")
    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("Ispahani building")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill(data.space_data)
    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill("!@#$%^&*")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("2738273")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("uthaman gandhi street")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill(data.space_data)
    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("nungambakkam")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
    await expect(page.locator("//span[text()='Area is required']")).toBeHidden()

    await adminpg.Addforwarder_country()
    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill(data.space_data)
    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("New dest state")

    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill(data.space_data)
    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("New dest city")
    await page.locator("//button[text()='Place Order']").click()
    await expect(page.locator("//div[text()='Order Placed Sucessfully']")).toBeVisible()

    for(var a=0; a<=3; a++){
     await page.locator("//select[@id='pod']").selectOption("AEJEA")   
     await page.locator("//select[@id='originCountry']").selectOption("india")     
     await page.locator("//button[text()='Search']").click()
     await page.locator("//div[contains(@class,'swiper-slide swiper-slide-active')]").click()
     await page.locator("(//h1[text()='AEJEA'])[1]").click()
     await page.locator("//button[text()='Continue to Place Order']").click()
      await page.locator("//input[@placeholder='Booking Party Email ID']").fill(data.mailid[a])
      await page.locator("//button[text()='Place Order']").click()
    await expect(page.locator("//div[text()='Order Placed Sucessfully']")).toBeVisible()
    }
   }) 
   
})

test.describe("Milestone", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg, adminpg }) => {
    test.setTimeout(4800000)
    var loop
    await page.goto(`${baseURL}`)
    await loginpg.emailID("sanjai.s@allmasters.ai")
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(2000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Place Booking']").click()
    // for (loop = 0; loop < 2; loop++) {
    //   // Full Complete Booking
    //   await page.locator("//button[text()='Place Booking']").click()
    //   await page.locator("//div[@class='vesseldiv']").click()
    //   await adminpg.continue_to_book()


    //   await adminpg.package_0(data.Crates)
    //   await adminpg.length_0("50")
    //   await adminpg.breadth_0("50")
    //   await adminpg.height_0("50")
    //   await adminpg.wpp_0("50")
    //   await adminpg.nop_0("12")
    //   await adminpg.commodity_0(data.commodity)
    //   await adminpg.hsn_0(data.hsncode)
    //   await page.locator("//input[@name='hazardCheck']").check()
    //   await adminpg.continue_to_book()

    //   // click on saved address card
    //   await page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]").click()
    //   await page.waitForTimeout(2000)
    //   await page.locator("input[name='hblName']").fill("3244323423")
    //   await adminpg.continue_to_book()

    //   await page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]").click()
    //   await adminpg.continue_to_book()

    //   await page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]").click()
    //   await adminpg.continue_to_book()

    //   await adminpg.packinggfileupload()
    //   await adminpg.continue_to_book()

    //   await adminpg.confirm_booking()
    //   await adminpg.pop_up_yes()
    //   await page.locator("//button[text()='Close']").click()

    //   // await page.locator("(//button[text()='View Details '])[1]").click()

    //   await page.locator("//a[contains(text(),'Dashboard')]").click()
    // }
    // await page.close()
  })
  test("Milestone with basic Flow and PDF check", async ({ loginpg, adminpg, page, baseURL }) => {

     test.setTimeout(480000);
     
     await loginpg.logout_mile()

    // SO RELEASED
    
    await adminpg.otlogin_mile()
    await expect(page.locator("//span[text()='SO Released']")).toHaveText("SO Released")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("(//button[text()='Confirm'])[2]")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()
    await loginpg.logout_mile_OT()
    
    ////CARGO RECEIVED AT CFS, SURVEY COMPLETED AND REVISED MEASUREMENTS
    await adminpg.oripartner_mile()

    await expect(page.locator("//span[text()='Cargo Received by CFS']")).toHaveText("Cargo Received by CFS")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await expect(page.locator("//span[text()='Survey Completed']")).toHaveText("Survey Completed")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await page.locator("//a[@class='dropdown-toggle nav-link']//p[1]").click()
    await page.locator("//a[contains(text(),'Logout')]").click()

    //CONTAINER AND SEAL NUMBER
    await adminpg.otlogin_mile()
    await page.click("//button[text()=' Back']")
    await page.click("//button[text()='Container Management']")
    await page.locator("//input[@placeholder='Enter Container Number']").fill("container number")
    await page.locator("//input[@placeholder='Enter Seal Number']").fill("seal number")
    await page.click("//button[@type='submit']")
    await page.click("//button[text()='Yes']")
    //await page.locator("//input[@placeholder='Search Company Name']").fill("sanjai pvt ltd")   // will change
    //await page.click("(//button[text()='View Info'])[8]")                      // WILL CHANGE

    await loginpg.logout_mile_OT()

    // STUFFING REPORT GENERATED
    await adminpg.oripartner_mile()

    await expect(page.locator("//span[text()='Stuffing Report Generated']")).toHaveText("Stuffing Report Generated")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await loginpg.logout_orimile()
 
    // SHIPPING INSTRUCTION UPLOADED
    await adminpg.fflogin_mile()

    await expect(page.locator("//span[text()='Shipping Instruction Uploaded']")).toHaveText("Shipping Instruction Uploaded")
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    //SHIPPING BILL UPLOADED

    await expect(page.locator("//span[text()='Shipping Bill Uploaded']")).toHaveText("Shipping Bill Uploaded")
    
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.locator("//input[@placeholder='Enter Shipping Bill Number']").fill("shipping bill")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await loginpg.logout_mile()

    //SEA WAYBILL DRAFT GENERATED

    await adminpg.otlogin_mile()

    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@placeholder='Enter Sea Waybill Number']").fill("Sea Waybill Number")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("(//button[text()='Confirm'])[2]")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()
    
    await page.locator("//input[@id='Invoice']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()


    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()


    await loginpg.logout_mile_OT()

    await adminpg.fflogin_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='forwarderHblNo']").fill("Forwarder HBL No")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[@type='submit']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    ///////////////////// Above payment complete steps

    await page.click("(//button[text()='Confirm'])[1]")
    await page.locator("//input[@placeholder='Enter UTR Number']").fill("UTR")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//button[text()='Confirm Details']")

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@type='submit']")             /// with document also
    await expect(page.locator("//div[text()='Updated Payment Details']")).toBeVisible()
    await page.reload()

    await loginpg.logout_mile()

    await adminpg.otlogin_mile()
    ////////////////// Above payment complete step
    await page.click("//button[text()='Confirm payment']")

    await page.click("//button[text()=' Back']")
    await page.click("//button[text()='Container Management']")
     // select the date from ATD
     await page.click("(//button[@aria-label='Choose date'])[2]")
     await page.click("//button[text()='7']")

    await page.click("//button[@type='submit']")
    await page.click("//button[text()='Yes']")
    await page.locator("(//button[text()='View Info'])[1]").click() //change

    
    // await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")   // WILL CHANGE
    // await page.click("(//button[text()='View Info'])[5]")             // WILL CHANGE


    await adminpg.otlogin_mile()                    /////////////////remove 
    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@placeholder='Enter Marks & Numbers']").fill("Marks and Numbers")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await page.click("//button[text()=' Back']")
    await page.click("//button[text()='Container Management']")
     // select the date from ATA
     await page.click("(//button[@aria-label='Choose date'])[2]")
     await page.click("//button[text()='11']")

    await page.click("//button[@type='submit']")
    await page.click("//button[text()='Yes']")
    // await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")     // WILL CHANGE
    // await page.click("(//button[text()='View Info'])[8]")            // WILL CHANGE


    await loginpg.logout_mile_OT()

    await adminpg.destpartner_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await page.click("//div[@id='currentStep']//button[1]")
    await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await loginpg.logout_orimile()

    await adminpg.otlogin_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await loginpg.logout_mile_OT()

    await adminpg.destpartner_mile()
    await page.click("//div[@id='currentStep']//button[1]")
    await page.click("//input[@aria-label='Choose date']")
    await page.click("//button[text()='24']")
    await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
    await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
    await page.click("//button[text()='OK']")

    await page.click("//button[text()='Confirm']")
    await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
    await page.reload()

    await loginpg.logout_orimile()
    await page.close()
  
  }) //toast msg, sometimes landing page
  test("Milestone with amendment and upload all document ", async ({ loginpg, adminpg, page}) => {
    test.setTimeout(480000);
    
    await loginpg.logout_mile()

   // SO RELEASED
   
   await adminpg.ottwologin_mile()
   await expect(page.locator("//span[text()='SO Released']")).toHaveText("SO Released")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("(//button[text()='Confirm'])[2]")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   await loginpg.logout_mile_OT()
   
   ////CARGO RECEIVED AT CFS, SURVEY COMPLETED AND REVISED MEASUREMENTS
   await adminpg.oritwopartner_mile()

   await expect(page.locator("//span[text()='Cargo Received by CFS']")).toHaveText("Cargo Received by CFS")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await expect(page.locator("//span[text()='Survey Completed']")).toHaveText("Survey Completed")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.waitForTimeout(2000)
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   // STUFFING REPORT GENERATED

   await expect(page.locator("//span[text()='Stuffing Report Generated']")).toHaveText("Stuffing Report Generated")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_orimile()

   // SHIPPING INSTRUCTION UPLOADED
   await adminpg.fftwologin_mile()

   await expect(page.locator("//span[text()='Shipping Instruction Uploaded']")).toHaveText("Shipping Instruction Uploaded")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   //SHIPPING BILL UPLOADED

   await expect(page.locator("//span[text()='Shipping Bill Uploaded']")).toHaveText("Shipping Bill Uploaded")
   
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[@aria-label='Choose date']")
   await page.click("//button[text()='24']")
   await page.locator("//input[@placeholder='Enter Shipping Bill Number']").fill("shipping bill")
  // await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf") if already document is there dont use
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_mile()

   //SEA WAYBILL DRAFT GENERATED

   await adminpg.ottwologin_mile()

   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@placeholder='Enter Sea Waybill Number']").fill("Sea Waybill Number")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("(//button[text()='Confirm'])[2]")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   
   await page.locator("//input[@id='Invoice']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Updated Payment Details']")).toBeVisible()
   await page.reload()


   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()


   await loginpg.logout_mile_OT()

   await adminpg.fftwologin_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@id='forwarderHblNo']").fill("Forwarder HBL No")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[@type='submit']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   ///////////////////// Above payment complete steps

   await page.click("(//button[text()='Confirm'])[1]")
   await page.locator("//input[@placeholder='Enter UTR Number']").fill("UTR")
   await page.click("//button[@aria-label='Choose date']")
   await page.click("//button[text()='24']")
   await page.click("//button[text()='Confirm Details']")
   await expect(page.locator("//div[text()='Updated Payment Details']")).toBeVisible()

   await page.reload()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[@type='submit']")             /// with document also
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_mile()

   await adminpg.ottwologin_mile()
   ////////////////// Above payment complete step
   await page.click("//button[text()='Confirm payment']")
   await expect(page.locator("//div[text()='Updated Payment Details']")).toBeVisible()
   await page.reload()
    
   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@placeholder='Enter Marks & Numbers']").fill("Marks and Numbers")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   await loginpg.logout_mile_OT()

   await adminpg.desttwopartner_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_orimile()

   await adminpg.ottwologin_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_mile_OT()

   await adminpg.desttwopartner_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//input[@aria-label='Choose date']")
   await page.click("//button[text()='24']")
   await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
   await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
   await page.click("//button[text()='OK']")

   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_orimile()
   await page.close()
  })
  test("Milestone with cargo not received ", async ({ loginpg, adminpg, page}) => {
    test.setTimeout(480000);
    await loginpg.logout_mile()

   // SO RELEASED
   
   await adminpg.otthreelogin_mile()
   await expect(page.locator("//span[text()='SO Released']")).toHaveText("SO Released")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("(//button[text()='Confirm'])[2]")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   await loginpg.logout_mile_OT()
   
   ////CARGO RECEIVED AT CFS, SURVEY COMPLETED AND REVISED MEASUREMENTS
   await adminpg.orithreepartner_mile()

   await expect(page.locator("//span[text()='Cargo Received by CFS']")).toHaveText("Cargo Received by CFS")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Not Received']")
   await expect(page.locator("//h1[text()='Cargo Not Received']")).toBeVisible()
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await loginpg.logout_orimile()

   await adminpg.ffthreelogin_mile()
   await expect(page.locator("//h1[text()='Cargo Not Received By OCFS']")).toBeVisible()
   await loginpg.logout_mile()

   await adminpg.destthreepartner_mile()
   await expect(page.locator("//h1[text()='Cargo Not Received By OCFS']")).toBeVisible()
await loginpg.logout_orimile()

await adminpg.otthreelogin_mile()
await expect(page.locator("//h1[text()='Cargo Not Received By OCFS']")).toBeVisible()
await loginpg.logout_mile_OT()
   await page.close()
  })
  test("Check with validation msg in Milestone ", async ({ loginpg, adminpg, page}) => {
    test.setTimeout(480000);
    
    await loginpg.logout_mile()

   // SO RELEASED
   
   await adminpg.otfourlogin_mile()
   await expect(page.locator("//span[text()='SO Released']")).toHaveText("SO Released")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("(//button[text()='Confirm'])[2]")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   await loginpg.logout_mile_OT()
   
   ////CARGO RECEIVED AT CFS, SURVEY COMPLETED AND REVISED MEASUREMENTS
   await adminpg.orifourpartner_mile()

   await expect(page.locator("//span[text()='Cargo Received by CFS']")).toHaveText("Cargo Received by CFS")
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()
   await expect(page.locator("//span[text()='Survey Completed']")).toHaveText("Survey Completed")
   
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.waitForTimeout(2000)
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   // STUFFING REPORT GENERATED
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()
   await expect(page.locator("//span[text()='Stuffing Report Generated']")).toHaveText("Stuffing Report Generated")
   
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_orimile()

   // SHIPPING INSTRUCTION UPLOADED
   await adminpg.fffourlogin_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()
   await expect(page.locator("//span[text()='Shipping Instruction Uploaded']")).toHaveText("Shipping Instruction Uploaded")
   
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   //SHIPPING BILL UPLOADED

   await expect(page.locator("//span[text()='Shipping Bill Uploaded']")).toHaveText("Shipping Bill Uploaded")
   
   //view files
   await page.locator("//button[text()='View files']").click()
   await expect(page.locator("//h2[text()='Multiple files']")).toBeVisible()
   await page.locator("//button[text()='close']").click()

   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Shipping Bill Date is Required']")).toBeVisible()
   await expect(page.locator("//p[text()='Shipping Bill Number is Required']")).toBeVisible()

   
   await page.click("//button[@aria-label='Choose date']")
   await page.click("//button[text()='24']")
   await page.locator("//input[@placeholder='Enter Shipping Bill Number']").fill("shipping bill")
  // await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf") if already document is there dont use
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_mile()

   //SEA WAYBILL DRAFT GENERATED

   await adminpg.otfourlogin_mile()
   await expect(page.locator("//span[text()='Sea Waybill Draft Generated']")).toHaveText("Sea Waybill Draft Generated")

   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Sea Waybill Number is Required']")).toBeVisible()
   await expect(page.locator("//p[text()='Please Upload File']")).toBeHidden()
   await page.locator("//input[@placeholder='Enter Sea Waybill Number']").fill("Sea Waybill Number")

   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("(//button[text()='Confirm'])[2]")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   
   await expect(page.locator("//div[text()='Please upload the invoice.']")).toBeVisible()
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Upload file first']")).toBeVisible()

   await page.locator("//input[@id='Invoice']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Updated Payment Details']")).toBeVisible()
   await page.reload()

///payment advice
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()
   await page.click("//button[text()='Skip']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()

  //  await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
  //  await page.click("//button[text()='Confirm']")
  //  await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()


   await loginpg.logout_mile_OT()

   await adminpg.fffourlogin_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[@type='submit']")
   await expect(page.locator("//input[@id='forwarderHblNo']/following-sibling::p[1]")).toBeVisible()
   await expect(page.locator("//p[text()='Please Upload File']")).toBeHidden()
   await page.locator("//input[@id='forwarderHblNo']").fill("Forwarder HBL No")

   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()

   await page.locator("//input[@id='forwarderHblNo']").fill("Forwarder HBL No")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[@type='submit']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   ///////////////////// Above payment complete steps

  //  await page.click("(//button[text()='Confirm'])[1]")
  //  await page.locator("//input[@placeholder='Enter UTR Number']").fill("UTR")
  //  await page.click("//button[@aria-label='Choose date']")
  //  await page.click("//button[text()='24']")
  //  await page.click("//button[text()='Confirm Details']")
  //  await expect(page.locator("//div[text()='Updated Payment Details']")).toBeVisible()

   await page.reload()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.locator("//input[@type='checkbox']").click()
   await page.click("//button[@type='submit']") 
   await expect(page.locator("//p[text()='You must accept the terms and conditions']")).toBeVisible()
   await page.locator("//input[@type='checkbox']").click()
   await page.click("//button[@type='submit']") 
               /// with document also
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_mile()

   await adminpg.otfourlogin_mile()
   ////////////////// Above payment complete step
  //  await page.click("//button[text()='Confirm payment']")
  //  await expect(page.locator("//div[text()='Updated Payment Details']")).toBeVisible()
  //  await page.reload()
    
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()

   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Marks & Numbers is Required']")).toBeVisible()

   await page.locator("//input[@placeholder='Enter Marks & Numbers']").fill("Marks and Numbers")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   await loginpg.logout_mile_OT()

   await adminpg.destfourpartner_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//p[text()='Please Upload File']")).toBeVisible()
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_orimile()

   await adminpg.otfourlogin_mile()
   await expect(page.locator("//div[text()='Please complete all the steps to proceed this milestone']")).toBeVisible()
   await page.click("(//div[contains(@class,'MuiStep-root MuiStep-horizontal')]//button)[2]")
   await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await loginpg.logout_mile_OT()

   await adminpg.fffourlogin_mile() 
   await page.locator("//input[@type='checkbox']").click()
      await loginpg.logout_mile()
   
      await adminpg.otfourlogin_mile()
      await expect(page.locator("//div[text()='Cargo on hold due to incomplete payment.']")).toBeVisible()
      await loginpg.logout_mile_OT()

      await adminpg.fffourlogin_mile() 
   await page.locator("//input[@type='checkbox']").click()
      await loginpg.logout_mile()

      await adminpg.otfourlogin_mile()
   await page.click("//div[@id='currentStep']//button[1]")
   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()
   await loginpg.logout_mile_OT()

   await adminpg.destfourpartner_mile()
   await page.click("//div[@id='currentStep']//button[1]")

   await page.click("//input[@aria-label='Choose date']")
   await page.click("//button[text()='24']")
   await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
   await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
   await page.click("//button[text()='OK']")

   await page.click("//button[text()='Confirm']")
   await expect(page.locator("//div[text()='Milestone Updated Successfully']")).toBeVisible()
   await page.reload()

   await loginpg.logout_orimile()
   await page.close()
  })
  test("check with OCFS filter",async({loginpg, page, adminpg})=>{
    await loginpg.logout_mile()
    const type = await page.locator("//select[@type='number']")
    await type.selectOption("I am a Partner")
    await page.locator("//input[@id='InputEmail1']").fill("subham@dokonaly.com") //change
    await page.locator("//input[@id='InputPassword1']").fill("Doko@2023")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000);
    const listen = await page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
    
    if(listen){
     console.log('Pop-up is visible by partner.');
    await page.click("//button[text()='Yes']")
    }
    else {
     console.log('Pop-up is not visible by partner.');
    }

    await expect(page.locator("//a[contains(text(),'AllMasters')]")).toBeVisible()
    await expect(page.locator("//h1[text()='My Bookings']")).toBeVisible()
    await page.locator("//a[@class='dropdown-toggle nav-link']//div[1]").click()
    await page.locator("//a[contains(text(),'My Account')]").click()
    await expect(page.locator("//h1[text()='My Account']")).toBeVisible()
    await expect(page.locator("//h2[text()='Personal Details']")).toBeVisible()
    await expect(page.locator("//label[text()='Name']")).toBeVisible()
    await expect(page.locator("//label[text()='Email']")).toBeVisible()
    await expect(page.locator("//label[text()='Cfs Name']")).toBeVisible()
    await expect(page.locator("//label[text()='Cfs Branch Name']")).toBeVisible()
    await expect(page.locator("//label[text()='Country']")).toBeVisible()
    await expect(page.locator("//label[text()='Mobile Number']")).toBeVisible()
    await page.locator("//button[text()='Back']").click()

    await page.locator("//a[@class='dropdown-toggle nav-link']//div[1]").click()
    await page.locator("//a[contains(text(),'My Account')]").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()

    await page.locator("(//button[@type='button'])[2]").click() 
    await expect(page.locator("//div[text()='Filters']")).toBeVisible()
    await expect(page.locator("//div[text()='Lanes']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Destination']")).toBeVisible()
    await expect(page.locator("//div[text()='Dates']")).toBeVisible()
    await expect(page.locator("//label[text()='ETD']")).toBeVisible()
    await expect(page.locator("//label[text()='ETA']")).toBeVisible()
    await expect(page.locator("//div[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//label[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//button[text()='Apply Filters']")).toBeVisible()
    await expect(page.locator("//button[text()='Clear All']")).toBeVisible()
    await expect(page.locator("//button[@aria-label='close']")).toBeVisible()
//////////////
    await page.locator("(//input[@role='combobox'])[1]").fill("aejea")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');          // will change

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='15']").click()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='23']").click()
    await page.locator("//label[text()='Week Number']/following::input").fill("7")

    await page.locator("//button[text()='Apply Filters']").click()  
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click()
    await page.locator("(//button[text()='Clear'])[3]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[2]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[1]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
    await page.reload()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  ////////////////  
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(2000)
  await page.locator("//button[text()='15']").click()

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(2000)
  await page.locator("//button[text()='23']").click()
  await page.locator("//label[text()='Week Number']/following::input").fill("7")

  await page.locator("//button[text()='Apply Filters']").click()  
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click()
  await page.locator("//label[text()='Week Number']/following::input").clear()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("//input[@role='combobox']").click()
  await page.locator("//button[@title='Clear']").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.reload()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
//////////
await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("aejea")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[@aria-label='close']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("aejea")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[text()='Clear All']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  })
  test("check with DCFS filter",async({loginpg, page, adminpg})=>{
    await loginpg.logout_mile()
    const type = await page.locator("//select[@type='number']")
    await type.selectOption("I am a Partner")
    await page.locator("//input[@id='InputEmail1']").fill("balaji.rr@dokonaly.com") //change
    await page.locator("//input[@id='InputPassword1']").fill("Doko@2023")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000);
    const listen = await page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
    
    if(listen){
     console.log('Pop-up is visible by partner.');
    await page.click("//button[text()='Yes']")
    }
    else {
     console.log('Pop-up is not visible by partner.');
    }

    await expect(page.locator("//a[contains(text(),'AllMasters')]")).toBeVisible()
    await expect(page.locator("//h1[text()='My Bookings']")).toBeVisible()
    await page.locator("//a[@class='dropdown-toggle nav-link']//div[1]").click()
    await page.locator("//a[contains(text(),'My Account')]").click()
    await expect(page.locator("//h1[text()='My Account']")).toBeVisible()
    await expect(page.locator("//h2[text()='Personal Details']")).toBeVisible()
    await expect(page.locator("//label[text()='Name']")).toBeVisible()
    await expect(page.locator("//label[text()='Email']")).toBeVisible()
    await expect(page.locator("//label[text()='Cfs Name']")).toBeVisible()
    await expect(page.locator("//label[text()='Cfs Branch Name']")).toBeVisible()
    await expect(page.locator("//label[text()='Country']")).toBeVisible()
    await expect(page.locator("//label[text()='Mobile Number']")).toBeVisible()
    await page.locator("//button[text()='Back']").click()

    await page.locator("//a[@class='dropdown-toggle nav-link']//div[1]").click()
    await page.locator("//a[contains(text(),'My Account')]").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()

    await page.locator("(//button[@type='button'])[2]").click() 
    await expect(page.locator("//div[text()='Filters']")).toBeVisible()
    await expect(page.locator("//div[text()='Lanes']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Loading']")).toBeVisible()
    await expect(page.locator("//div[text()='Dates']")).toBeVisible()
    await expect(page.locator("//label[text()='ETD']")).toBeVisible()
    await expect(page.locator("//label[text()='ETA']")).toBeVisible()
    await expect(page.locator("//div[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//label[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//button[text()='Apply Filters']")).toBeVisible()
    await expect(page.locator("//button[text()='Clear All']")).toBeVisible()
    await expect(page.locator("//button[@aria-label='close']")).toBeVisible()
//////////////
    await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');          // will change

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='15']").click()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='23']").click()
    await page.locator("//label[text()='Week Number']/following::input").fill("7")

    await page.locator("//button[text()='Apply Filters']").click()  
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click()
    await page.locator("(//button[text()='Clear'])[3]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[2]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[1]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
    await page.reload()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  ////////////////  
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(2000)
  await page.locator("//button[text()='15']").click()

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(3000)
  await page.locator("//button[text()='23']").click()
  await page.locator("//label[text()='Week Number']/following::input").fill("7")

  await page.locator("//button[text()='Apply Filters']").click()  
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click()
  await page.locator("//label[text()='Week Number']/following::input").clear()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("//input[@role='combobox']").click()
  await page.locator("//button[@title='Clear']").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.reload()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
//////////
await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@aria-label='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[@aria-label='close']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[text()='Clear All']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

  })
  test("check with OT filter",async({loginpg, page, adminpg})=>{
    await loginpg.logout_mile()
    await loginpg.select_type(data.type3)
    await page.locator("//input[@id='InputEmail1']").fill("ot@ams.com") //change
    await page.locator("//input[@id='InputPassword1']").fill("Doko@2023")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000);
    const listen = await page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
    
    if(listen){
     console.log('Pop-up is visible by partner.');
    await page.click("//button[text()='Yes']")
    }
    else {
     console.log('Pop-up is not visible by partner.');
    }

    await page.locator("//a[contains(text(),'Booking')]").click()

    await page.locator("(//button[@type='button'])[2]").click() 
    await expect(page.locator("//div[text()='Filters']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()
    await expect(page.locator("//label[text()='Status']")).toBeVisible()
    await expect(page.locator("//div[text()='Lanes']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Loading']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Destination']")).toBeVisible()
    await expect(page.locator("//div[text()='Dates']")).toBeVisible()
    await expect(page.locator("//label[text()='ETD']")).toBeVisible()
    await expect(page.locator("//label[text()='ETA']")).toBeVisible()
    await expect(page.locator("//div[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//label[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//button[text()='Apply Filters']")).toBeVisible()
    await expect(page.locator("//button[text()='Clear All']")).toBeVisible()
    await expect(page.locator("//button[@aria-label='close']")).toBeVisible()
//////////////
    await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');          // will change
    await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='15']").click()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='23']").click()
    await page.locator("//label[text()='Week Number']/following::input").fill("7")

    await page.locator("//button[text()='Apply Filters']").click()  
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click()
    await page.locator("(//button[text()='Clear'])[4]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[3]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[2]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
    await page.reload()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  ////////////////  
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change
  await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(2000)
  await page.locator("//button[text()='15']").click()

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(3000)
  await page.locator("//button[text()='23']").click()
  await page.locator("//label[text()='Week Number']/following::input").fill("7")

  await page.locator("//button[text()='Apply Filters']").click()  
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click()
  await page.locator("//label[text()='Week Number']/following::input").clear()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[2]").click()
  await page.locator("(//button[@title='Clear'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").click()
  await page.locator("(//button[@title='Clear'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change
  await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 
  await page.locator("//button[text()='Apply Filters']").click()

  await page.reload()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
//////////
await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change
await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@aria-label='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[@aria-label='close']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change
await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[text()='Clear All']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='All']").click()
    await page.locator("//li[text()='All']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='All']").click()
    await page.locator("//li[text()='Inactive']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='Inactive']").click()
    await page.locator("//li[text()='Active']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("//h5[text()='Looks Empty']")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeHidden()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='Active']").click()
    await page.locator("//li[text()='Completed']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  })
  test("check with ADMIN filter",async({loginpg, page, adminpg})=>{
    await loginpg.logout_mile()
    await loginpg.select_type(data.type3)
    await page.locator("//input[@id='InputEmail1']").fill("admin@ams.com") //change
    await page.locator("//input[@id='InputPassword1']").fill("Doko@2023")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000);
    const listen = await page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
    
    if(listen){
     console.log('Pop-up is visible by partner.');
    await page.click("//button[text()='Yes']")
    }
    else {
     console.log('Pop-up is not visible by partner.');
    }

    await page.locator("//a[contains(text(),'Booking')]").click()

    await page.locator("(//button[@type='button'])[2]").click() 
    await expect(page.locator("//div[text()='Filters']")).toBeVisible()
    await expect(page.locator("//div[text()='Status']")).toBeVisible()
    await expect(page.locator("//label[text()='Status']")).toBeVisible()
    await expect(page.locator("//div[text()='Lanes']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Loading']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Destination']")).toBeVisible()
    await expect(page.locator("//div[text()='Dates']")).toBeVisible()
    await expect(page.locator("//label[text()='ETD']")).toBeVisible()
    await expect(page.locator("//label[text()='ETA']")).toBeVisible()
    await expect(page.locator("//div[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//label[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//button[text()='Apply Filters']")).toBeVisible()
    await expect(page.locator("//button[text()='Clear All']")).toBeVisible()
    await expect(page.locator("//button[@aria-label='close']")).toBeVisible()
//////////////
    await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');          // will change
    await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='15']").click()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='23']").click()
    await page.locator("//label[text()='Week Number']/following::input").fill("7")

    await page.locator("//button[text()='Apply Filters']").click()  
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click()
    await page.locator("(//button[text()='Clear'])[4]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[3]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[2]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
    await page.reload()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  ////////////////  
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change
  await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(2000)
  await page.locator("//button[text()='15']").click()

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(3000)
  await page.locator("//button[text()='23']").click()
  await page.locator("//label[text()='Week Number']/following::input").fill("7")

  await page.locator("//button[text()='Apply Filters']").click()  
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click()
  await page.locator("//label[text()='Week Number']/following::input").clear()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[2]").click()
  await page.locator("(//button[@title='Clear'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").click()
  await page.locator("(//button[@title='Clear'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change
  await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 
  await page.locator("//button[text()='Apply Filters']").click()

  await page.reload()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
//////////
await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change
await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@aria-label='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[@aria-label='close']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change
await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[text()='Clear All']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='All']").click()
    await page.locator("//li[text()='All']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='All']").click()
    await page.locator("//li[text()='Inactive']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='Inactive']").click()
    await page.locator("//li[text()='Active']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("//h5[text()='Looks Empty']")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeHidden()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//div[text()='Active']").click()
    await page.locator("//li[text()='Completed']").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  })
  test("check with customer filter",async({loginpg, page, adminpg})=>{
    await loginpg.logout_mile()
    await loginpg.select_type(data.type1)
    await page.locator("//input[@id='InputEmail1']").fill("sanjai.s@allmasters.ai") //change
    await page.locator("//input[@id='InputPassword1']").fill("Doko@2023")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000);
    const listen = await page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
    
    if(listen){
     console.log('Pop-up is visible by partner.');
    await page.click("//button[text()='Yes']")
    }
    else {
     console.log('Pop-up is not visible by partner.');
    }
    await page.locator("//button[text()='Place Booking']").click()
    await page.locator("//a[contains(text(),'Shipments')]").click()
    await page.locator("//a[contains(text(),'Bookings')]").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await expect(page.locator("//div[text()='Filters']")).toBeVisible()
    await expect(page.locator("//div[text()='Lanes']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Loading']")).toBeVisible()
    await expect(page.locator("//label[text()='Port of Destination']")).toBeVisible()
    await expect(page.locator("//div[text()='Dates']")).toBeVisible()
    await expect(page.locator("//label[text()='ETD']")).toBeVisible()
    await expect(page.locator("//label[text()='ETA']")).toBeVisible()
    await expect(page.locator("//div[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//label[text()='Week Number']")).toBeVisible()
    await expect(page.locator("//button[text()='Apply Filters']")).toBeVisible()
    await expect(page.locator("//button[text()='Clear All']")).toBeVisible()
    await expect(page.locator("//button[@aria-label='close']")).toBeVisible()
//////////////
    await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');          // will change
    await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='15']").click()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("(//button[@aria-label='Next month'])[1]").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='23']").click()
    await page.locator("//label[text()='Week Number']/following::input").fill("7")

    await page.locator("//button[text()='Apply Filters']").click()  
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click()
    await page.locator("(//button[text()='Clear'])[3]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
    await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
    //await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[3]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("(//button[text()='Clear'])[1]").click()
    await page.locator("//button[text()='Apply Filters']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
    await page.reload()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  ////////////////  
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change
  await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(2000)
  await page.locator("//button[text()='15']").click()

  await page.locator("(//button[@aria-label='Choose date'])[1]").click()
  await page.locator("//button[@title='Next month']").click()
  await page.waitForTimeout(3000)
  await page.locator("//button[text()='23']").click()
  await page.locator("//label[text()='Week Number']/following::input").fill("7")

  await page.locator("//button[text()='Apply Filters']").click()  
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  //await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click()
  await page.locator("//label[text()='Week Number']/following::input").clear()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//button[text()='View'])[2]")).toBeVisible()
  await expect(page.locator("(//button[text()='View'])[1]")).toBeVisible()
  //await expect(page.locator("(//button[text()='View'])[3]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//button[@title='Clear value'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeHidden()

  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[2]").click()
  await page.locator("(//button[@title='Clear'])[2]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").click()
  await page.locator("(//button[@title='Clear'])[1]").click()
  await page.locator("//button[text()='Apply Filters']").click()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
  await page.locator("(//button[@type='button'])[2]").click() 
  await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');          // will change
  await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 
  await page.locator("//button[text()='Apply Filters']").click()

  await page.reload()
  await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
  await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
  await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()
//////////
await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change
await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@aria-label='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[@aria-label='close']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

    await page.locator("(//button[@type='button'])[2]").click() 
await page.locator("(//input[@role='combobox'])[1]").fill("innsa")
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');          // will change
await page.locator("(//input[@role='combobox'])[2]").fill("aejea")
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter'); 

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(2000)
await page.locator("//button[text()='15']").click()
await page.waitForTimeout(2000)

await page.locator("(//button[@aria-label='Choose date'])[1]").click()
await page.locator("//button[@title='Next month']").click()
await page.waitForTimeout(3000)
await page.locator("//button[text()='23']").click()
await page.locator("//label[text()='Week Number']/following::input").fill("7")
    await page.locator("//button[text()='Apply Filters']").click()
    await page.locator("(//button[@type='button'])[2]").click() 
    await page.locator("//button[text()='Clear All']").click()
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()   //doubt
    await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    await expect(page.locator("(//h1[text()='FRANC'])[1]")).toBeVisible()

  })//one check need 
})

test.describe("My account for place order", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(180000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.s@allmasters.ai") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  
  test("Assert in Landing page", async ({ adminpg, page, loginpg }) => {

    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await expect(page.locator("//p[text()='Assign an order for an LCL shipment to any of your partners from an origin country of your choice']")).toBeVisible()
    await expect(page.locator("//p[text()='Book an LCL export shipment from your subscribed gateways to any of our serviceable destinations']")).toBeVisible()
    await expect(page.locator("//button[text()='Assign Order']")).toBeVisible()
    await expect(page.locator("//button[text()='Place Booking']")).toBeVisible()
    await expect(page.locator("//a[contains(text(),'AllMasters')]")).toBeVisible()
    await expect(page.locator("//p[text()='Logout']")).toBeVisible()
    await page.locator("//button[text()='Assign Order']").click()

    await adminpg.ff_name()
    await adminpg.my_account()
    await expect(page.locator("//label[text()='Customer Id']")).toBeVisible()
    await expect(page.locator("//input[@value='SHP872']")).toBeVisible()

    await adminpg.edit_details()
    await page.locator("//input[@id='fullName']").clear()
    await page.locator("//input[@id='Mobile']").clear()
    await adminpg.edit_submit()

    await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()

    await adminpg.edit_fullname(data.numeric_data)
    await adminpg.full_name_val1()
    await adminpg.edit_fullname(data.splcharacter_data)
    await adminpg.full_name_val1()
    await adminpg.edit_fullname(data.space_data)
    await adminpg.full_name_val()

    await adminpg.edit_fullname(data.full_name)

    await adminpg.edit_mobile("12345678901")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
    await adminpg.edit_mobile(data.phone)
    await adminpg.edit_submit()

    await page.reload
    await adminpg.assert_fullname()
    await adminpg.assert_phonenumb()
    await expect(page.locator("//div[text()='Profile Updated Successfully']")).toBeVisible()
    await expect(page.locator("//input[@id='email']")).toHaveValue("sanjai.s@allmasters.ai")// change
    await expect(page.locator("//input[@id='Company Name']")).toHaveValue("chittoor comp")// change

   
    await expect(page.locator("//h5[text()='No Sub Users']")).toBeVisible()
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//p[text()='Name is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Email is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()
    await expect(page.locator("//input[@name='legalName']")).toBeDisabled()

    await page.locator("//input[@id='fullName']").fill("#@$#$%#$")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@id='fullName']").fill("837878291")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@id='fullName']").fill("      ")
    await expect(page.locator("//p[text()='Name is required']")).toBeVisible()
    await page.locator("//input[@id='fullName']").fill("darwin c")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeHidden()

    await page.locator("//input[@name='email']").fill("#@$#$%#$")
    await expect(page.locator("//p[text()='Enter Valid Email']")).toBeVisible()
    await page.locator("//input[@name='email']").fill("sanjai.s")
    await expect(page.locator("//p[text()='Email already exist']")).toBeVisible()
    await page.locator("//input[@name='email']").fill("darwin.c")   
    await expect(page.locator("//p[text()='Enter Valid Email']")).toBeHidden()

    await page.locator("//input[@name='mobileNumber']").fill("88700502844")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@name='mobileNumber']").fill("887005028")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@name='mobileNumber']").fill("8870050284")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeHidden()
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()
    await page.reload()
   
    await expect(page.locator("//h1[text()='darwin c']")).toBeVisible()
    await expect(page.locator("//span[text()='darwin.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870050284']")).toBeVisible()
    //2
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//input[@id='fullName']").fill("wilson")
    await page.locator("//input[@name='email']").fill("wilson.c")
    await page.locator("//input[@name='mobileNumber']").fill("8870050282")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()

    await page.reload()
    await expect(page.locator("//h1[text()='wilson']")).toBeVisible()
    await expect(page.locator("//span[text()='wilson.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870050282']")).toBeVisible()
    //3
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//input[@id='fullName']").fill("bush")
    await page.locator("//input[@name='email']").fill("bush.c")
    await page.locator("//input[@name='mobileNumber']").fill("8870050289")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()
    await page.reload()

    await expect(page.locator("//h1[text()='bush']")).toBeVisible()
    await expect(page.locator("//span[text()='bush.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870050289']")).toBeVisible()
    //4
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//input[@id='fullName']").fill("yung")
    await page.locator("//input[@name='email']").fill("yung.c")
    await page.locator("//input[@name='mobileNumber']").fill("8870040282")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()
    await page.reload()

    await expect(page.locator("//h1[text()='yung']")).toBeVisible()
    await expect(page.locator("//span[text()='yung.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870040282']")).toBeVisible()
   

/////////////
    await adminpg.ff_name()
    await page.locator("//a[contains(text(),'Change Password')]").click()
    await expect(page.locator("//h1[text()='Change Password']")).toBeVisible()
    await expect(page.locator("//label[text()='Current Password']")).toBeVisible()
    await expect(page.locator("//label[text()='Confirm Password']")).toBeVisible()
    await expect(page.locator("//label[text()='New Password']")).toBeVisible()
    await expect(page.locator("//button[text()='Continue']")).toBeVisible()

    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
    await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible()
  
    await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
    await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
    await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("     ")
    await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible() ///doic
  
    await page.locator("//input[@placeholder='Enter current Password']").fill("    ")
    await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")
  
      await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
      await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("3233222")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("fsddsfdfdf")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("%#^&*###")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("Doko2023")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")
  
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("    ")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("doko@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("dOko@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("doKo@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("dokO@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("Doko@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeHidden()
      await page.locator("//button[text()='Continue']").click()
  
      await expect(page.locator("//div[text()=' Invalid Password']")).toBeVisible()
  
      await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
      await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2022")
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("Doko@2022")
      await page.locator("//button[text()='Continue']").click()
      await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
      await adminpg.ff_name()
      await page.locator("//a[contains(text(),'Logout')]").click()
  
      await loginpg.select_type(data.type1)
      await loginpg.emailID("sanjai.s@allmasters.ai") //change
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()
      await loginpg.password("Doko@2022")
      await loginpg.sign_in()
      await page.waitForTimeout(5000)
      const input = await page.isVisible("//h2[text()='User Already Logged In']")
      if (input) {
        console.log('Pop-up is visible.');
        await page.click("//button[text()='Yes']")
      }
      else {
        console.log('Pop-up is not visible.');
      }
      await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Assign Order']").click()
    await adminpg.ff_name()
    await page.locator("//a[contains(text(),'Change Password')]").click()
    await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")
    await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")
    await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("Doko@2023")
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
    await adminpg.ff_name()
      await page.locator("//a[contains(text(),'Logout')]").click()

    await loginpg.select_type(data.type1)
      await loginpg.emailID("sanjai.s@allmasters.ai") //change
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await page.waitForTimeout(5000)
      const input1 = await page.isVisible("//h2[text()='User Already Logged In']")
      if (input1) {
        console.log('Pop-up is visible.');
        await page.click("//button[text()='Yes']")
      }
      else {
        console.log('Pop-up is not visible.');
      }
      await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Assign Order']").click()
    await adminpg.ff_name()
    await page.locator("//a[contains(text(),'Logout')]").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()

  })
}) //Done 

test.describe("My account for place booking", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(180000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.s@allmasters.ai") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("verify able to change the details and switch the port ", async ({ adminpg, page, loginpg }) => {

    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Place Booking']").click()
    await adminpg.ff_name()
    await adminpg.my_account()
    await adminpg.edit_details()
    await page.locator("//input[@id='fullName']").clear()
    await page.locator("//input[@id='Mobile']").clear()
    await adminpg.edit_submit()

    await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()

    await adminpg.edit_fullname(data.numeric_data)
    await adminpg.full_name_val1()
    await adminpg.edit_fullname(data.splcharacter_data)
    await adminpg.full_name_val1()
    await adminpg.edit_fullname(data.space_data)
    await adminpg.full_name_val()

    await adminpg.edit_fullname(data.full_name)

    await adminpg.edit_mobile("12345678901")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
    await adminpg.edit_mobile(data.phone)
    await adminpg.edit_submit()

    await page.reload
    await adminpg.assert_fullname()
    await adminpg.assert_phonenumb()
    await expect(page.locator("//input[@id='email']")).toHaveValue("sanjai.s@allmasters.ai")// change
    await expect(page.locator("//input[@id='Company Name']")).toHaveValue("chittoor comp")// change
    await expect(page.locator("//label[text()='Customer Id']")).toBeVisible()// change
    await expect(page.locator("//input[@value='SHP872']")).toBeVisible()// change
    
    await page.locator("//button[@value='inmaa']").click()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    // schedule name assert need to add
    await expect(page.locator("(//h1[text()='INMAA'])[1]")).toBeVisible()
    // await expect(page.locator("(//h1[text()='INMAA'])[2]")).toBeVisible()
    // await expect(page.locator("(//h1[text()='INMAA'])[3]")).toBeVisible()
    // await expect(page.locator("(//h1[text()='INMAA'])[4]")).toBeVisible()

    await adminpg.ff_name()
    await adminpg.my_account()
    await page.locator("//button[@value='innsa']").click()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    // schedule name assert need to add
    await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
    // await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
    // await expect(page.locator("(//h1[text()='INNSA'])[3]")).toBeVisible()
    // await expect(page.locator("(//h1[text()='INNSA'])[4]")).toBeVisible()

    

    //BOOKING PARTY SAVED ADDRESS MY ACCOUNT 
      
    await adminpg.ff_name()
    await adminpg.my_account()
    await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
    await expect(page.locator("//span[text()='sanjai.s@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+918870050284']")).toBeVisible()
    await expect(page.locator("//p[text()='Name']")).toBeVisible()
    await expect(page.locator("//h4[text()='sanjai']")).toBeVisible()
    await expect(page.locator("//p[text()='in']")).toBeVisible()

    await expect(page.locator("//h1[text()='Saved Booking Party']")).toBeVisible()
    await expect(page.locator("(//p[text()='1'])[4]")).toBeVisible()
    await expect(page.locator("//p[text()=' - Booking Parties Added']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By City']").fill("nilgiris")
    await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By City']").fill("NilGiris")
    await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By City']").fill("    NilGiris")
    await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By City']").fill("NIGIRIS")
    await page.locator("//input[@placeholder='Search By City']").fill(data.space_data)
    await page.locator("//h1[text()='nilgiris']").click()

    // check values

    await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
    await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
    await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
    await expect(page.locator("//input[@name='countryName']")).toBeDisabled()
    // await expect(page.locator("//option[text()='India']")).toHaveValue("India")
    // await page.pause()
    // await expect(page.locator("//option[text()='Tamil Nadu']")).toHaveValue("Tamil Nadu")
    // await expect(page.locator("//option[text()='Nilgiris']")).toHaveValue("Nilgiris")
    await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
    await expect(page.locator("input[placeholder='Enter pincode']")).toHaveValue("123234")
    await expect(page.locator("//p[text()='ie.pdf']")).toBeVisible()  //chnage
    await page.locator("//button[text()='Close']").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("//div[text()='Updated Successfully']")).toBeHidden()

    
    await page.locator("//h1[text()='nilgiris']").click()
    await page.locator("//input[@placeholder='Enter pincode']").fill("123222")    
    await page.locator("//button[text()='Save Changes']").click()
    await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
    await page.waitForTimeout(2000)
    
    
    await expect(page.locator("(//p[text()='2'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='2'])[2]")).toBeVisible()

    await page.locator("(//h1[text()='nilgiris'])[2]").click()
    // check values

    await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
    await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
    await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
    await expect(page.locator("//input[@name='countryName']")).toBeDisabled()
    // await expect(page.locator("//option[text()='India']")).toHaveValue("India")
    // await page.pause()
    // await expect(page.locator("//option[text()='Tamil Nadu']")).toHaveValue("Tamil Nadu")
    // await expect(page.locator("//option[text()='Nilgiris']")).toHaveValue("Nilgiris")
    await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
    await expect(page.locator("input[placeholder='Enter pincode']")).toHaveValue("123222")
    await expect(page.locator("//p[text()='ie.pdf']")).toBeVisible()  //chnage


    await page.locator("input[name='doorNo']").clear()
    await page.locator("input[name='building']").clear()
    await page.locator("input[name='street']").clear()
    await page.locator("input[name='area']").clear()
    await page.locator("input[placeholder='Enter pincode']").clear()
    await page.waitForTimeout(2000)
    //await page.locator("//button[text()='Remove']").click()


    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill(data.space_data)
    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("dsdfsdss")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("#")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("/")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("122/12")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("#@$%^$%&")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("43243")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("     ")
    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("Ispahani centre")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill(data.space_data)
    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill("!@#$%^&*")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("2738273")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("uthaman's gandhi street")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill(data.space_data)
    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("Nungambakkam")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
    await expect(page.locator("//span[text()='Area is required']")).toBeHidden()
    
    // need to findout one way for india assertion
    await expect(page.locator("//option[text()='kndia']")).toBeHidden()//toHaveValue("India")

    // await expect(page.locator("//span[text()='State is required']")).toBeHidden()
    // var state = await page.locator("//select[@name='state']")
    // await state.selectOption("Choose State")
    // await page.locator("//h4[text()='Uploaded GST Certificate']").click()
    // await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await adminpg.Addforwarder_sel_jstate()
    await expect(page.locator("//span[text()='State is required']")).toBeHidden()

    //await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    //const city =  await page.locator("//select[@name='city']")
    //await city.selectOption("Choose City")
   // await page.locator("//button[text()='Save Changes']").click()
   // await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await adminpg.Addforwarder_sel_jcity()
    await expect(page.locator("//span[text()='City is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Pincode is required']")).toBeVisible()
    await page.locator("input[placeholder='Enter pincode']").fill(data.space_data)
    await expect(page.locator("//span[text()='Pincode is required']")).toBeVisible()
    await page.locator("input[placeholder='Enter pincode']").fill(data.alphabets_data)
    await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible()
    await page.locator("input[placeholder='Enter pincode']").fill(data.splcharacter_data)
    await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible()
    await page.locator("input[placeholder='Enter pincode']").fill("12")
    await expect(page.locator("//span[text()='Should have atleast 6 numbers']")).toBeVisible() 
    await page.locator("input[placeholder='Enter pincode']").fill("123222")
    await expect(page.locator("//span[text()='Should have atleast 6 numbers']")).toBeHidden() 
    await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeHidden()
    await expect(page.locator("//span[text()='Pincode is required']")).toBeHidden()

    //await page.locator("//input[@id='Packaging']").setInputFiles("data-files/Gst.pdf")
    await page.locator("//button[text()='Save Changes']").click()
    await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
    await page.waitForTimeout(2000)

    await page.locator("//h1[text()='jammu']").click()
    // check values

    await expect(page.locator("input[name='doorNo']")).toHaveValue("122/12")
    await expect(page.locator("input[name='building']")).toHaveValue("Ispahani centre")
    await expect(page.locator("input[name='street']")).toHaveValue("uthaman's gandhi street")
    await expect(page.locator("//input[@name='countryName']")).toBeDisabled()
    // await expect(page.locator("//option[text()='India']")).toHaveValue("India")
    // await page.pause()
    // await expect(page.locator("//option[text()='Tamil Nadu']")).toHaveValue("Tamil Nadu")
    // await expect(page.locator("//option[text()='Nilgiris']")).toHaveValue("Nilgiris")
    await expect(page.locator("input[name='area']")).toHaveValue("Nungambakkam")
    await expect(page.locator("input[placeholder='Enter pincode']")).toHaveValue("123222")
    //await expect(page.locator("//p[text()='Gst.pdf']")).toBeVisible()  //chnage
     
    //receiving party saved address in my account
    await page.locator("//button[text()='Receiving Party']").click()
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await expect(page.locator("//span[text()='dest12@gmail.com']")).toBeVisible()
    await expect(page.locator("//p[@title='+9711234567']")).toBeVisible()
    await expect(page.locator("//p[text()='Name']")).toBeVisible()
    await expect(page.locator("//h4[text()='sanjai']")).toBeVisible()
    await expect(page.locator("//p[text()='ae']")).toBeVisible()

    await page.locator("//button[text()='Receiving Party']").click()
    await expect(page.locator("//h1[text()='Saved Receiving Party']")).toBeVisible()
    await expect(page.locator("(//p[text()='1'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='1'])[2]")).toBeVisible()
    await expect(page.locator("(//p[text()='1'])[3]")).toBeVisible()
    await expect(page.locator("//p[text()=' - Receiving Parties Added']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("destination") //change
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("Destination")    //chnage
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("    DesTination") //change
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("DESTINATION")   //change
    await page.locator("//input[@placeholder='Search By Company']").fill(data.space_data)
    await page.locator("//h1[text()='destination of cargo']").click()
// check values

    await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
    await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
    await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
    await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
    await adminpg.Addforwarder_country()
    await expect(page.locator("//input[@name='state']")).toHaveValue("New dest state")
    await expect(page.locator("//input[@name='city']")).toHaveValue("New dest city")
    await page.locator("//button[text()='Close']").click()
    await expect(page.locator("//div[text()='Updated Successfully']")).toBeHidden()
    await page.waitForTimeout(2000)


    await page.locator("//h1[text()='destination of cargo']").click()
    await page.locator("input[name='doorNo']").clear()
    await page.locator("input[name='building']").clear()
    await page.locator("input[name='street']").clear()
    await page.locator("input[name='area']").clear()
    await page.locator("//input[@name='state']").clear()
    await page.locator("//input[@name='city']").clear()
    await page.locator("//button[text()='Save Changes']").click()

    await expect(page.locator("//span[text()='Door number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
    //await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
    await expect(page.locator("//span[text()='Enter valid door number']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill(data.space_data)
    await expect(page.locator("//span[text()='Door number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("dsdfsdss")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("#")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("/")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("122")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await expect(page.locator("//span[text()='Door number is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("#@$%^$%&")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("43243")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("     ")
    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("Ispahani building")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill(data.space_data)
    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill("!@#$%^&*")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("2738273")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("uthaman gandhi street")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill(data.space_data)
    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("nungambakkam")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
    await expect(page.locator("//span[text()='Area is required']")).toBeHidden()

    await adminpg.Addforwarder_country()
    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill(data.space_data)
    await expect(page.locator("//span[text()='State is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter State']").fill("New dest state")

    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill(data.space_data)
    await expect(page.locator("//span[text()='City is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("3523423")
    await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter City']").fill("New dest city")  

    await page.locator("//button[text()='Save Changes']").click()
    await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
    await page.waitForTimeout(2000)
    
    //notify party saved address in my account
    await page.locator("//button[text()='Notify Party']").click()
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await expect(page.locator("//span[text()='dest12@gmail.com']")).toBeVisible()
    await expect(page.locator("//p[@title='+9711234567']")).toBeVisible()
    await expect(page.locator("//p[text()='Name']")).toBeVisible()
    await expect(page.locator("//h4[text()='sanjai']")).toBeVisible()
    await expect(page.locator("//p[text()='united arab emirates']")).toBeVisible()

    await page.locator("//button[text()='Notify Party']").click()
    await expect(page.locator("//h1[text()='Saved Notify Party']")).toBeVisible()
    await expect(page.locator("(//p[text()='1'])[1]")).toBeVisible()
    await expect(page.locator("(//p[text()='1'])[2]")).toBeVisible()
    await expect(page.locator("(//p[text()='1'])[3]")).toBeVisible()
    await expect(page.locator("//p[text()=' - Notify Parties Added']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("destination") //change
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("Destination")    //chnage
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("    DesTination") //change
    await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
    await page.locator("//input[@placeholder='Search By Company']").fill("DESTINATION")   //change
    await page.locator("//input[@placeholder='Search By Company']").fill(data.space_data)
    await page.locator("//h1[text()='destination of cargo']").click()
    
    // check values

    await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
    await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
    await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
    await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
    await expect(page.locator("//input[@name='country']")).toHaveValue("united arab emirates")
    await expect(page.locator("//input[@name='state']")).toHaveValue("dest state")
    await expect(page.locator("//input[@name='city']")).toHaveValue("dest city")
    await page.locator("//button[text()='Close']").click()
    await expect(page.locator("//div[text()='Updated Successfully']")).toBeHidden()
    await page.waitForTimeout(2000)

    await page.locator("//h1[text()='destination of cargo']").click()
    await page.locator("input[name='doorNo']").clear()
    await page.locator("input[name='building']").clear()
    await page.locator("input[name='street']").clear()
    await page.locator("input[name='area']").clear()
    await page.locator("//input[@name='country']").clear()
    await page.locator("//input[@name='state']").clear()
    await page.locator("//input[@name='city']").clear()
    await page.locator("//button[text()='Save Changes']").click()

    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
    //await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
    await expect(page.locator("//span[text()='Enter valid door number']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill(data.space_data)
    await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
    await page.locator("input[name='doorNo']").fill("dsdfsdss")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("#")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("/")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await page.locator("input[name='doorNo']").fill("122")
    await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
    await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("#@$%^$%&")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("43243")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
    await page.locator("input[name='building']").fill("     ")
    await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
    await page.locator("input[name='building']").fill("Ispahani building")
    await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill(data.space_data)
    await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
    await page.locator("input[name='street']").fill("!@#$%^&*")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("2738273")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
    await page.locator("input[name='street']").fill("uthaman gandhi street")
    await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill(data.space_data)
    await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
    await page.locator("input[name='area']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("3523423")
    await expect(page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
    await page.locator("input[name='area']").fill("nungambakkam")
    await expect(page.locator("//span[text()='Only Alphabets are allowed']")).toBeHidden()
    await expect(page.locator("//span[text()='Area is required']")).toBeHidden()

    await expect(page.locator("//span[text()='Country is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter country']").fill("united arab emirates")
    await expect(page.locator("//span[text()='State is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill(data.space_data)
    await expect(page.locator("//span[text()='State is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill("3523423")
    await expect(page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter state']").fill("dest state")

    await expect(page.locator("//span[text()='City is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill(data.space_data)
    await expect(page.locator("//span[text()='City is Required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill("#$%^&*")
    await expect(page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill("3523423")
    await expect(page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter city']").fill("dest city")  

    await page.locator("//button[text()='Save Changes']").click()
    await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='Booking Party']").click()
    
    ////////////////// sub users
// if sub user delete manually means shows popup and toast message
//1
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//p[text()='Name is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Email is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()
    await expect(page.locator("//input[@name='legalName']")).toBeDisabled()

    await page.locator("//input[@id='fullName']").fill("#@$#$%#$")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@id='fullName']").fill("837878291")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    await page.locator("//input[@id='fullName']").fill("      ")
    await expect(page.locator("//p[text()='Name is required']")).toBeVisible()
    await page.locator("//input[@id='fullName']").fill("darwina c")
    await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeHidden()

    await page.locator("//input[@name='email']").fill("#@$#$%#$")
    await expect(page.locator("//p[text()='Enter Valid Email']")).toBeVisible()
    await page.locator("//input[@name='email']").fill("sanjai.s")
    await expect(page.locator("//p[text()='Email already exist']")).toBeVisible()
    await page.locator("//input[@name='email']").fill("darwina.c")   
    await expect(page.locator("//p[text()='Enter Valid Email']")).toBeHidden()

    await page.locator("//input[@name='mobileNumber']").fill("88700502844")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@name='mobileNumber']").fill("887005028")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
    await page.locator("//input[@name='mobileNumber']").fill("8870050284")
    await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeHidden()
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()
   
    await page.reload()
    await expect(page.locator("//h1[text()='darwina c']")).toBeVisible()
    await expect(page.locator("//span[text()='darwina.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870050284']")).toBeVisible()
    //2
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//input[@id='fullName']").fill("wilsona")
    await page.locator("//input[@name='email']").fill("wilsona.c")
    await page.locator("//input[@name='mobileNumber']").fill("8870050282")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()

    await page.reload()
    await expect(page.locator("//h1[text()='wilsona']")).toBeVisible()
    await expect(page.locator("//span[text()='wilsona.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870050282']")).toBeVisible()
    //3
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//input[@id='fullName']").fill("busha")
    await page.locator("//input[@name='email']").fill("busha.c")
    await page.locator("//input[@name='mobileNumber']").fill("8870050289")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()

    await page.reload()
    await expect(page.locator("//h1[text()='busha']")).toBeVisible()
    await expect(page.locator("//span[text()='busha.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870050289']")).toBeVisible()
    //4
    await page.locator("//button[text()='Add Member']").click()
    await page.locator("//input[@id='fullName']").fill("yunga")
    await page.locator("//input[@name='email']").fill("yunga.c")
    await page.locator("//input[@name='mobileNumber']").fill("8870040282")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()

    await page.reload()
    await expect(page.locator("//h1[text()='yunga']")).toBeVisible()
    await expect(page.locator("//span[text()='yunga.c@allmasters.ai']")).toBeVisible()
    await expect(page.locator("//p[text()='+91 8870040282']")).toBeVisible()
    
    await adminpg.ff_name()
    await page.locator("//a[contains(text(),'Change Password')]").click()
    await expect(page.locator("//h1[text()='Change Password']")).toBeVisible()
    await expect(page.locator("//label[text()='Current Password']")).toBeVisible()
    await expect(page.locator("//label[text()='Confirm Password']")).toBeVisible()
    await expect(page.locator("//label[text()='New Password']")).toBeVisible()
    await expect(page.locator("//button[text()='Continue']")).toBeVisible()

    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
    await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
    await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible()
  
    await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
    await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
    await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("     ")
    await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible() ///doic
  
    await page.locator("//input[@placeholder='Enter current Password']").fill("    ")
    await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")
  
      await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
      await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("3233222")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("fsddsfdfdf")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("%#^&*###")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("Doko2023")
      await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")
  
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("    ")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("doko@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("dOko@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("doKo@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("dokO@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("Doko@2023")
      await expect(page.locator("//p[text()='Password does not match']")).toBeHidden()
      await page.locator("//button[text()='Continue']").click()
  
      await expect(page.locator("//div[text()=' Invalid Password']")).toBeVisible()
  
      await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
      await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2022")
      await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("Doko@2022")
      await page.locator("//button[text()='Continue']").click()
      await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
      await adminpg.ff_name()
      await page.locator("//a[contains(text(),'Logout')]").click()
  
      await loginpg.select_type(data.type1)
      await loginpg.emailID("sanjai.s@allmasters.ai") //change
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()
      await loginpg.password("Doko@2022")
      await loginpg.sign_in()
      await page.waitForTimeout(5000)
      const input = await page.isVisible("//h2[text()='User Already Logged In']")
      if (input) {
        console.log('Pop-up is visible.');
        await page.click("//button[text()='Yes']")
      }
      else {
        console.log('Pop-up is not visible.');
      }
      await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Place Booking']").click()
    await adminpg.ff_name()
    await page.locator("//a[contains(text(),'Change Password')]").click()
    await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")
    await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")
    await page.locator("//input[@placeholder='Enter Confirm New Password']").fill("Doko@2023")
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
    await adminpg.ff_name()
      await page.locator("//a[contains(text(),'Logout')]").click()

    await loginpg.select_type(data.type1)
      await loginpg.emailID("sanjai.s@allmasters.ai") //change
      await loginpg.password("Doko@2023")
      await loginpg.sign_in()
      await page.waitForTimeout(5000)
      const input1 = await page.isVisible("//h2[text()='User Already Logged In']")
      if (input1) {
        console.log('Pop-up is visible.');
        await page.click("//button[text()='Yes']")
      }
      else {
        console.log('Pop-up is not visible.');
      }
      await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//button[text()='Place Booking']").click()
    await adminpg.ff_name()
    await page.locator("//a[contains(text(),'Logout')]").click()
    await expect(page.locator("//h5[text()='Welcome back !']")).toBeVisible()

  })
}) //Done

test.describe.skip("Pop Up in landing page", async()=>{
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(180000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type1)
    await loginpg.emailID("sanjai.s@allmasters.ai") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("Assert with pop up message in landing page", async({adminpg, page, loginpg})=>{
    await expect(page.locator("")).toBeVisible()
    await expect(page.locator("")).toBeVisible()
    await expect(page.locator("")).toBeVisible()
    await expect(page.locator("")).toBeVisible()
    await expect(page.locator("")).toBeVisible()
    await expect(page.locator("")).toBeVisible()
    await page.locator("//button[text()='Assign Order']").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//p[text()='Logout']").click()
    
    for (var tp=0; tp<2; tp++){
    await loginpg.emailID("sanjai.s@allmasters.ai") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if(input){
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await expect(page.locator("")).toBeHidden()
    await expect(page.locator("")).toBeHidden()
    await expect(page.locator("")).toBeHidden()
    await expect(page.locator("")).toBeHidden()
    await expect(page.locator("")).toBeHidden()
    await expect(page.locator("")).toBeHidden()
    await expect(page.locator("")).toBeHidden()
    await page.locator("//button[text()='Assign Order']").click()
    await page.locator("//a[contains(text(),'AllMasters')]").click()
    await page.locator("//p[text()='Logout']").click()
  }
  })
})
 
test.describe("change password",async()=>{
  test("check change password on each internals login credentails", async({page, adminpg, loginpg, baseURL})=>{

    test.setTimeout(180000)
    await page.goto(`${baseURL}`)
    
    for(let pass=0; pass<=3; pass++){
    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.cred[pass]) //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input2 = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input2) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
 
// obt
  await page.locator("//span[text()='Change Password']").click()
  await expect(page.locator("//h5[text()='Change Password']")).toBeVisible()
  await expect(page.locator("//label[text()='Current Password']")).toBeVisible()
  await expect(page.locator("//label[text()='New Password']")).toBeVisible()
  await expect(page.locator("//label[text()='Confirm Password']")).toBeVisible()

  await page.locator("//button[text()='Continue']").click()
  await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
  await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
  await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible()

  await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
  await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
  await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
  await page.locator("//input[@placeholder='Confirm New Password']").fill("     ")
  await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible() ///doic

  
  await page.locator("//input[@placeholder='Enter current Password']").fill("    ")
  await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
  await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")

    await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
    await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter New Password']").fill("3233222")
    await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter New Password']").fill("fsddsfdfdf")
    await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter New Password']").fill("%#^&*###")
    await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter New Password']").fill("Doko2023")
    await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
    await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")

    await page.locator("//input[@placeholder='Confirm New Password']").fill("    ")
    await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
    await page.locator("//input[@placeholder='Confirm New Password']").fill("doko@2023")
    await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
    await page.locator("//input[@placeholder='Confirm New Password']").fill("dOko@2023")
    await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
    await page.locator("//input[@placeholder='Confirm New Password']").fill("doKo@2023")
    await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
    await page.locator("//input[@placeholder='Confirm New Password']").fill("dokO@2023")
    await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
    await page.locator("//input[@placeholder='Confirm New Password']").fill("Doko@2023")
    await expect(page.locator("//p[text()='Password does not match']")).toBeHidden()
    await page.locator("//button[text()='Continue']").click()

    await expect(page.locator("//div[text()=' Invalid Password']")).toBeVisible()

    await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
    await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2022")
    await page.locator("//input[@placeholder='Confirm New Password']").fill("Doko@2022")
    await page.locator("//button[text()='Continue']").click()
    await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
    await page.locator("//li[text()='Sign Out']").click()

    await loginpg.select_type(data.type3)
    await loginpg.emailID(data.cred[pass]) //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()
    await loginpg.password("Doko@2022")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  await page.locator("//span[text()='Change Password']").click()
  await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")
  await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")
  await page.locator("//input[@placeholder='Confirm New Password']").fill("Doko@2023")
  await page.locator("//button[text()='Continue']").click()
  await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
  await page.locator("//li[text()='Sign Out']").click()

  await loginpg.select_type(data.type3)
    await loginpg.emailID(data.cred[pass]) //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input1 = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input1) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
    await page.locator("//li[text()='Sign Out']").click()
  }
})  //done
})

test.describe("Feedback", async() => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(180000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("checking on feedback management", async({page})=>{

  await page.locator("//span[text()='Feedback']").click()
  await expect(page.locator("//h3[text()='Feedback Management']")).toBeVisible()
  
  await page.locator("//div[text()='All']").click()
  await page.locator("//li[text()='All']").click()
  
  await expect(page.locator("//div[text()='Booking ID']")).toBeVisible()
  await expect(page.locator("//div[text()='Category']")).toBeVisible()
  await expect(page.locator("//div[text()='Company Name']")).toBeVisible()
  await expect(page.locator("//div[text()='Rating']")).toBeVisible()
  await expect(page.locator("//div[text()='Comments']")).toBeVisible()

  await page.locator("//div[text()='All']").click()
  await page.locator("//li[text()='Service Feedback']").click()
  await expect(page.locator("//div[text()='Booking ID']")).toBeVisible()
  await expect(page.locator("//div[text()='Category']")).toBeVisible()
  await expect(page.locator("//div[text()='Company Name']")).toBeVisible()
  await expect(page.locator("//div[text()='Rating']")).toBeVisible()
  await expect(page.locator("//div[text()='Comments']")).toBeVisible()

  await page.locator("//div[text()='Service Feedback']").click()
  await page.locator("//li[text()='Product Feedback']").click()
  await expect(page.locator("//div[text()='Booking ID']")).toBeVisible()
  await expect(page.locator("//div[text()='Category']")).toBeVisible()
  await expect(page.locator("//div[text()='Company Name']")).toBeVisible()
  await expect(page.locator("//div[text()='Rating']")).toBeVisible()
  await expect(page.locator("//div[text()='Comments']")).toBeVisible()
  // doubt
  // await expect(page.locator("(//span[text()='Product Feedback'])[1]")).toBeVisible()
  // await expect(page.locator("(//span[text()='legal xompany'])[1]")).toBeVisible()
  // await expect(page.locator("//span[text()='8']")).toBeVisible()
  // await expect(page.locator("//span[text()='kio']")).toBeVisible()
  
  await page.reload()
  await page.locator("//div[text()='All']").click()
  await page.locator("//li[text()='Service Feedback']").click()
  await expect(page.locator("(//span[text()='Product Feedback'])[1]")).toBeHidden()
  await expect(page.locator("(//span[text()='chittoor comp'])[1]")).toBeHidden()
  await expect(page.locator("(//span[text()='5'])[1]")).toBeHidden()
  await expect(page.locator("(//span[text()='good'])[1]")).toBeHidden()

  await page.reload()
  await page.locator("//div[text()='All']").click()
  await page.locator("//li[text()='All']").click()
  await expect(page.locator("(//span[text()='Product Feedback'])[1]")).toBeVisible()
  await expect(page.locator("(//span[text()='chittoor comp'])[1]")).toBeVisible()
  await expect(page.locator("(//span[text()='5'])[1]")).toBeVisible()
  await expect(page.locator("(//span[text()='good'])[1]")).toBeVisible()

  await page.reload()
  await page.locator("//div[text()='All']").click()
  await page.locator("//li[text()='Product Feedback']").click()
  await expect(page.locator("(//span[text()='Product Feedback'])[1]")).toBeVisible()
  await expect(page.locator("(//span[text()='chittoor comp'])[1]")).toBeVisible()
  await expect(page.locator("(//span[text()='5'])[1]")).toBeVisible()
  await expect(page.locator("(//span[text()='good'])[1]")).toBeVisible()

  })

})

test.describe("Audit Logs", async()=>{
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(90000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("checking with audit ", async({page })=>{

    await page.locator("//a[contains(text(),'Audit Log')]").click()
    await expect(page.locator("//h3[text()='Audit Log']")).toBeVisible()
    await expect(page.locator("//div[text()='Full Name']")).toBeVisible()
    await expect(page.locator("//div[text()='Legal Name']")).toBeVisible()
    await expect(page.locator("//div[text()='Action Log']")).toBeVisible()
    await expect(page.locator("//div[text()='Time']")).toBeVisible()
    await expect(page.locator("//div[text()='sanjai']")).toBeVisible()
    await expect(page.locator("(//div[text()='chittoor comp'])[1]")).toBeVisible()
    await page.locator("//div[@aria-label='Without label']").click()
    await page.locator("(//li[@role='option'])[2]").click()
    await expect(page.locator("//div[text()='Full Name']")).toBeVisible()
    await expect(page.locator("//div[text()='Legal Name']")).toBeVisible()
    await expect(page.locator("//div[text()='Action Log']")).toBeVisible()
    await expect(page.locator("//div[text()='Time']")).toBeVisible()
    await expect(page.locator("//div[text()='sanjai']")).toBeVisible()
    await expect(page.locator("(//div[text()='chittoor comp'])[1]")).toBeVisible()
    await page.locator("//div[@aria-label='Without label']").click()
    await page.locator("(//li[@role='option'])[3]").click()
    await expect(page.locator("//div[text()='Full Name']")).toBeVisible()
    await expect(page.locator("//div[text()='Legal Name']")).toBeVisible()
    await expect(page.locator("//div[text()='Action Log']")).toBeVisible()
    await expect(page.locator("//div[text()='Time']")).toBeVisible()
    await expect(page.locator("//div[text()='sanjai']")).toBeVisible()
    await expect(page.locator("(//div[text()='chittoor comp'])[1]")).toBeVisible()

    await page.locator("//li[text()='Sign Out']").click()
  })
})

test.describe("About", async() =>{
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    test.setTimeout(180000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }
  })
  test("checking on version history", async({page})=>{
    await page.locator("//span[text()='About']").click() 
    await expect(page.locator("//h3[text()='AllMasters Version History']")).toBeVisible()
    await page.locator("//div[text()='Select Version']").click() 
    await page.locator("//li[text()='V.1.0.0']").click()
    await page.locator("//div[text()='V.1.0.0']").click()

    await page.locator("//li[text()='V.1.0.1']").click()
    await page.locator("//div[text()='V.1.0.1']").click()
    
    await page.locator("//li[text()='V.1.1.0']").click()
    await page.locator("//div[text()='V.1.1.0']").click()

    await page.locator("//li[text()='V.1.1.1']").click()
    await page.locator("//div[text()='V.1.1.1']").click()

    await page.locator("//li[text()='V.1.1.2']").click()
    await page.locator("//div[text()='V.1.1.2']").click()

    await page.locator("//li[text()='V.1.1.3']").click()
    await page.locator("//div[text()='V.1.1.3']").click()

    await page.locator("//li[text()='V.1.1.4']").click()
    await page.locator("//div[text()='V.1.1.4']").click()

    await page.locator("//li[text()='V.1.1.5']").click()
    await page.locator("//div[text()='V.1.1.5']").click()

    await page.locator("//li[text()='V.1.1.6']").click()
    await page.locator("//div[text()='V.1.1.6']").click()

    await page.locator("//li[text()='V.1.1.7']").click()
    await page.locator("//div[text()='V.1.1.7']").click()

    await page.locator("//li[text()='V.1.1.8']").click()
    await page.locator("//div[text()='V.1.1.8']").click()

    await page.locator("//li[text()='V.1.1.9']").click()
    await page.locator("//div[text()='V.1.1.9']").click()

    await page.locator("//li[text()='V.1.2.0']").click()
    await expect(page.locator("//div[text()='V.1.2.0']")).toBeVisible()

    await page.locator("//li[text()='Sign Out']").click()
  })
})

test.describe("All management search box and filter", async()=>{
  test("check with search box", async({page, loginpg, baseURL})=>{
    test.setTimeout(3600000)
    await page.goto(`${baseURL}`)
    await loginpg.select_type(data.type3)
    await loginpg.emailID("admin@ams.com") //change
    await loginpg.password("Doko@2023")
    await loginpg.sign_in()
    await page.waitForTimeout(5000)
    const input = await page.isVisible("//h2[text()='User Already Logged In']")
    if (input) {
      console.log('Pop-up is visible.');
      await page.click("//button[text()='Yes']")
    }
    else {
      console.log('Pop-up is not visible.');
    }

    //country
    await page.locator("//a[contains(text(),'Country')]").click()
    await expect(page.locator("//h3[text()='Countries']")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("INDIA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("india")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("inDIA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("INdia")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("inDia")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("     INDIA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("     india")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("   inDIA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("   INdia")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("   inDia")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Country']").fill("   ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    //Lane 
    await page.locator("//a[contains(text(),'Lane')]").click()
    await expect(page.locator("//h3[text()='Lane Management']")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("nhava sheva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("NHAVA SHEVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("NHava")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("nhAVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("nHAva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("   nhava sheva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("   NHAVA SHEVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("   NHava")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("    nhAVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("   nHAva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Port Name']").fill("    ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    //cost heading
    await page.locator("//a[contains(text(),'Cost Heading')]").click()
    await expect(page.locator("//h3[text()='Cost Heading']")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("ams")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("AMS")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("aMs")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("Ams")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("amS")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("  ams")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("  AMS")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("  aMs")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("  Ams")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("  amS")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Cost Heading']").fill("  ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    //CFS
    
    await page.locator("//a[contains(text(),'Vendor (CFS)')]").click()
    await expect(page.locator("//h3[text()='CFS Management']")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MUMBAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumBAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MUMbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("muMBai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("  mumbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("  MUMBAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("  mumBAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("  MUMbai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("  muMBai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("nhava sheva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("NHAVA SHEVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("NHava")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("nhAVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("nHAva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("   nhava sheva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("   NHAVA SHEVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("   NHava")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("   nhAVA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("   nHAva")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("    ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    //holiday
    await page.locator("//a[contains(text(),'Holiday')]").click()
    await expect(page.locator("//h3[text()='Port Holiday Management']")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("innsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("INNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("INnsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("inNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("inNSa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   innsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   INNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   INnsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   inNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   inNSa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("qa holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("QA HOLIDAY")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("QA holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("qa HOLIDAY")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("qA HOliday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   qa holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   QA HOLIDAY")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   QA holiday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   qa HOLIDAY")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("   qA HOliday")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill("    ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    //schedule
    await page.locator("//a[contains(text(),'Schedule')]").click()
    await expect(page.locator("//h3[text()='Schedules']")).toBeVisible()
    await page.locator("//div[text()='Active']").click()
    await page.locator("//li[text()='All']").click()

    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("innsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("INNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("INnsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("inNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("inNSa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   innsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   INNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   INnsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   inNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   inNSa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("aeJEa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   aeJEa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("innsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("INNSA/AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("INNsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("innsa/aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("innSA/AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   innsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   INNSA/AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   INNsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   innsa/aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("   innSA/AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='By Schedule ID, POL, POD']").fill("  ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.locator("//button[text()='19']").click()
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.locator("//button[text()='20']").click()
    await expect(page.locator("//div[text()='No rows']")).toBeVisible()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.locator("//button[text()='12']").click()
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[@title='Next month']").click()
    await page.locator("//button[text()='8']").click()
    await expect(page.locator("//div[text()='No rows']")).toBeVisible()

    //rates
    await page.locator("//a[contains(text(),'Rate')]").click()
    await expect(page.locator("//h3[text()='Rate Management']")).toBeVisible()
    await page.locator("//div[text()='Active']").click()
    await page.locator("//li[text()='All']").click()

    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("innsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("INNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("INnsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("inNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("inNSa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   innsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   INNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   INnsa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   inNSA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   inNSa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("aeJEa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   aeJEa")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("innsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("INNSA/AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("INNsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("innsa/aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("innSA/AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   innsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   INNSA/AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   INNsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   innsa/aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("   innSA/AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("  ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='9']").click()
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("(//button[@aria-label='Choose date'])[1]").click()
    await page.locator("//button[text()='13']").click()
    await expect(page.locator("//div[text()='No rows']")).toBeVisible()

    //booking
    await page.locator("//a[contains(text(),'Booking')]").click()
    await expect(page.locator("//h3[text()='Booking Management']")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("innsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("INNSA/AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("INNsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("innsa/aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("innSA/AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("   innsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("   INNSA/AEJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("   INNsa/aejea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("   innsa/aeJEA")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search Schedule ID']").fill("   innSA/AEjea")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("(//button[text()='View'])[1]").click()
    await page.locator("//input[@placeholder='Search Company Name']").fill("") // need to add
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//button[text()='Pre Booking']").click()
    await page.locator("//input[@placeholder='Search Company Name']").fill("")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//button[text()='Booked']").click()
    await page.locator("//input[@placeholder='Search Company Name']").fill("")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search Schedule ID']").fill("  ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    //audit
    await page.locator("//a[contains(text(),'Audit Log')]").click()
    await expect(page.locator("//h3[text()='Audit Log']")).toBeVisible()
    
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//div[@aria-label='Without label']").click()
    await page.locator("(//li[@role='option'])[2]").click()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//div[@aria-label='Without label']").click()
    await page.locator("(//li[@role='option'])[3]").click()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Full Name / Legal Name']").fill("   CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
   //user
    //
    await page.locator("//a[contains(text(),'Users')]").click()
    await expect(page.locator("//h3[text()='User Management']")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   chittoor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   CHITToor comp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   chittoor COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   chittOOR COmp")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   CHITTOOR COMP")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   SANJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   sanjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   SANjai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   saNJai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   sanJAI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()

    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   8870050284")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("8870050284  ")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("8870050184  ")
    await expect(page.locator("//div[text()='No rows']")).toBeVisible()

    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("SANJAI.S@ALLMASTERS.AI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("sanjai.s@allmasters.ai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("SANjai.s@allmasters.ai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("sanjai.S@ALLmasters.ai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("sanjai.s@allmastERS.AI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   SANJAI.S@ALLMASTERS.AI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   sanjai.s@allmasters.ai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("   SANjai.s@allmasters.ai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("    sanjai.S@ALLmasters.ai")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
    await page.locator("//input[@placeholder='Search by Company Name, Full Name, Email Id, Mobile Number']").fill("    sanjai.s@allmastERS.AI")
    await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
  })
})