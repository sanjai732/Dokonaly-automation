import { test, expect } from '../Allmaster pom_fixture/all_pom_fixture'
import * as data from "../Allmaster data/Datas.json"

// test.describe("login funtionality", async () => {
//   test.beforeEach(async ({ baseURL, page }) => {
//     await page.goto(`${baseURL}`)
//   })

//   test.describe('login functionality with mulitple logins as customer', async () => {
//     test("login with valid username and password as customer", async ({ loginpg, page }) => {

//       await page.waitForTimeout(6000)
//       await loginpg.select_type(data.type1)
//       await loginpg.emailID(data.mailID_ff)
//       await loginpg.password(data.password_ff)

//       await loginpg.sign_in()
//       await loginpg.logout_dd()
//       await page.close()
//     })

//     test("login with Invalid username and valid password as customer", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type1)
//       await loginpg.emailID(data.InvmailID_ff)
//       await loginpg.password(data.password_ff)
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()
//     })

//     test("login with valid username and Invalid password as customer and check that wrong toast message for first three times after should have different toast message", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type1)
//       await loginpg.emailID(data.mailID_ff)
//       await loginpg.password(data.Invpassword_ff)
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await loginpg.emailID(data.mailID_ff)
//       await loginpg.password(data.Invpassword_ff)
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await loginpg.emailID(data.mailID_ff)
//       await loginpg.password(data.Invpassword_ff)
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast2()
//       await page.close()

//     })

//     test("login with Invalid username and Invalid password as customer", async ({ loginpg, page }) => {
//       await loginpg.select_type(data.type1)
//       await loginpg.emailID(data.InvmailID_ff)
//       await loginpg.password(data.password_ff)
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()

//     })

//     test("login with valid credentials of customer but as partner and adminstrator", async ({ loginpg, page }) => {
//       await loginpg.select_type(data.type1)
//       await loginpg.emailID(data.InvmailID_ff)
//       await loginpg.password(data.password_ff)
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()

//     })

//   })

//   test.describe('login functionality with mulitple logins as partner', async () => {
//     test("login with valid username and password as partner", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type2)
//       await loginpg.emailID("chennai@ocfs.com")
//       await loginpg.password("Doko@2023")
//       await loginpg.sign_in()
//       await loginpg.logout_dd()
//       await page.close()
//     })

//     test("login with valid username and Invalid password as partner", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type2)
//       await loginpg.emailID("chennai@ocfs.com")
//       await loginpg.password("Doko2023")
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()
//     })

//     test("login with Invalid username and valid password as partner", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type2)
//       await loginpg.emailID("chennaiocfs.com")
//       await loginpg.password("Doko@2023")
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()
//     })

//     test("login with Invalid credentials as partner", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type2)
//       await loginpg.emailID("chennaiocfs.com")
//       await loginpg.password("Doko2023")
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()
//     })


//   })

//   test.describe('login functionality with mulitple logins as administrator', async () => {
//     test("login with valid username and password as administrator", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type3)
//       await loginpg.emailID("admin@ams.com")
//       await loginpg.password("Doko@2023")
//       await loginpg.sign_in()
//       await loginpg.logout_dd()
//       await page.close()
//     })

//     test("login with valid username and Invalid password as administrator", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type3)
//       await loginpg.emailID("admin@ams.com")
//       await loginpg.password("Doko2023")
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()
//     })

//     test("login with Invalid username and valid password as administrator", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type3)
//       await loginpg.emailID("adminams.com")
//       await loginpg.password("Doko@2023")
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()
//     })

//     test("login with Invalid credentials as administrator", async ({ loginpg, page }) => {

//       await loginpg.select_type(data.type3)
//       await loginpg.emailID("adminams.com")
//       await loginpg.password("Doko2023")
//       await loginpg.sign_in()
//       await loginpg.login_wrgtoast()
//       await page.close()
//     })
//   })


//   test("checking the login functionality with validation msg ", async ({ loginpg, page }) => {

//     await loginpg.sign_in()
//     await loginpg.email_toast()
//     await loginpg.password_toast()
//     await loginpg.emailID(data.numeric_data)
//     await loginpg.email_toast1()
//     await loginpg.emailID(data.alphabets_data)
//     await loginpg.email_toast1()
//     await loginpg.emailID(data.splcharacter_data)
//     await loginpg.email_toast1()
//     await loginpg.emailID(data.space_data)
//     await loginpg.email_toast1()
//     await loginpg.password(data.space_data)
//     await loginpg.password_toast()
//     await page.close()
//   })
// })

// test.describe("Register personal details", async () => {// already registered mail id need to implement and official mail ID
//   test.beforeEach(async ({ baseURL, page }) => {
//     await page.goto(`${baseURL}`)
//   })
//   test("checking the register personal details with validation message", async ({ page, loginpg }) => {

//     await page.locator("//button[text()='Register']").click()
//     await page.locator("//input[@type='checkbox']").click()
//     await page.locator("//button[text()='Get Started']").click()

//     await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("   ")
//     await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("#$%^&")
//     await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("32132")
//     await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='ex. John Lin Doe']").fill("kevin")

//     const till = await page.locator("//select[@name='designation']")
//     await till.selectOption("IT")

//     const tils = await page.locator("//select[@name='mobileCode']")
//     await tils.selectOption("+971")               /// change
//     await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Mobile Number']").fill("67657")
//     await expect(page.locator("//p[text()='Mobile Number format is not correct']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Mobile Number']").fill("3233222")

//     await expect(page.locator("//p[text()='Email is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Email Address']").fill("492389")
//     await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Email Address']").fill("efsdfd")
//     await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Email Address']").fill("#$@#$%$")
//     await expect(page.locator("//p[text()='Enter valid email address']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@gmail.com")
//     await expect(page.locator("//p[text()='Enter your official email']")).toBeVisible()


//     await expect(page.locator("//p[text()='Password is required']")).toBeVisible()
//     await page.locator("(//input[@type='password'])[1]").fill("3233222")
//     await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
//     await page.locator("(//input[@type='password'])[1]").fill("fsddsfdfdf")
//     await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
//     await page.locator("(//input[@type='password'])[1]").fill("%#^&*###")
//     await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
//     await page.locator("(//input[@type='password'])[1]").fill("Doko2023")
//     await expect(page.locator("//p[text()='Invalid Password format']")).toBeVisible()
//     await page.locator("(//input[@type='password'])[1]").fill("Doko@2023")

//     await expect(page.locator("//p[text()='Confirm Password is required']")).toBeVisible()
//     await page.locator("(//input[@type='password'])[2]").fill("3233222")
//     await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
//     await page.locator("(//input[@type='password'])[2]").fill("Doko@2023")

//     await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.s@dokonaly.com")
//     await page.locator("//button[text()='Get Started']").click()
//     await expect(page.locator("//div[text()='Email Already Exists']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Email Address']").fill("sanjai.rajan@dokonaly.com") /// change email everytime
//     await page.locator("//button[text()='Get Started']").click()

//     await page.pause()

//     // otp need to put 

//     await loginpg.select_type(data.type1)
//     await loginpg.emailID("sanjai.rajan@dokonaly.com") // change mail id everytime
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }

//     await page.locator("//button[text()='Continue']").click()
//     await page.locator("//input[@id='ci']").setInputFiles("data-files/Works.docx")
//     await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
//     await page.reload()
//     await page.locator("//input[@id='ci']").setInputFiles("data-files/3mb(1).pdf")
//     await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
//     await page.reload()

//     await page.locator("//input[@id='bl']").setInputFiles("data-files/Works.docx")
//     await expect(page.locator("//p[text()='Upload only Pdf']")).toBeVisible()
//     await page.reload()
//     await page.locator("//input[@id='bl']").setInputFiles("data-files/3mb(1).pdf")
//     await expect(page.locator("//p[text()='Upload file under 1 MB']")).toBeVisible()
//     await page.reload()

//     await page.locator("//input[@id='ci']").setInputFiles("data-files/1mbcopy (1).pdf")
//     await page.locator("//input[@id='bl']").setInputFiles("data-files/1mbcopy (1).pdf")
//     await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
//     await page.reload()

//     await page.locator("//input[@id='bl']").setInputFiles("data-files/1mbcopy (1).pdf")
//     await page.locator("//input[@id='ci']").setInputFiles("data-files/1mbcopy (1).pdf")
//     await expect(page.locator("//p[text()='Upload a different file']")).toBeVisible()
//     await page.reload()
//     await page.locator("//button[text()='Continue']").click()
//     await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
//     await expect(page.locator("//select[@name='country']")).toBeDisabled()
//     //await expect(page.locator("//*[text()='United Arab Emirates']")).toBeVisible()   need to check manually
//     await expect(page.locator("//p[text()='State is required']")).toBeVisible()
//     await expect(page.locator("//p[text()='City is required']")).toBeVisible()
//     await expect(page.locator("//p[text()='Please Upload COI File']")).toBeVisible()
//     await expect(page.locator("//p[text()='MTO is Required']")).toBeVisible()
//     await expect(page.locator("//p[text()='Please Upload BL File']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Company Name']").fill("   ")
//     await expect(page.locator("//p[text()='Legal Entity Name is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Company Name']").fill("Robert cargo pvt ltd")

//     const state = await page.locator("//select[@name='state']")
//     await state.selectOption("Dnipropetrovska Oblast")

//     const city = await page.locator("//select[@name='city']")
//     await city.selectOption("Novomoskovsk")
//     await page.locator("//input[@id='bl']").setInputFiles("data-files/1mbcopy (1).pdf")
//     await page.locator("//input[@id='ci']").setInputFiles("data-files/ie.pdf")
//     await expect(page.locator("//p[text()='MTO is Required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter MTO / Trade License']").fill("    ")
//     await expect(page.locator("//p[text()='MTO is Required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter MTO / Trade License']").fill("Robert tl")
//     await page.locator("//input[@placeholder='Enter Name']").fill("robi group")


//     await page.locator("//button[text()='Continue']").click()
//     await page.pause()


//   })
// })
// test("Ran", async({ page})=>{
//   await page.goto("https://www.hdfcbank.com/")
//   const drop = await page.locator("//input[@id='search-chatInput']").click()
//   await page.locator("//div[text()='HDFC Merger']").dblclick()
//   await page.close()

// })

// EXTRA ALL THINGS NEED TO INACTIVE

// test.describe("Country", async () => {
  
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("rdt@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }

//   })
//   test("check all the fields with validation and add one country (INDIA -> ACTIVE)", async ({ page, adminpg, loginpg, baseURL }) => {

//     await adminpg.country_head()
//     await adminpg.search_country(data.countryname)   //change
//     await adminpg.search_country("India")   //change
//     await adminpg.no_rows()
//     await adminpg.add_country()
//     await adminpg.save_country()
//     await adminpg.coun_name_req()
//     await adminpg.coun_code_req()
//     await adminpg.coun_region_req()
//     await adminpg.coun_currency_req()
//     await adminpg.coun_rate_req()
//     await adminpg.coun_phonecode_req()
//     await adminpg.coun_phoneformat_req()
//     await expect(page.locator("//p[text()='Time Zone is required']")).toBeVisible()

//     await adminpg.country(data.splcharacter_data)
//     await adminpg.coun_name_req1()
//     await adminpg.country(data.numeric_data)
//     await adminpg.coun_name_req1()
//     await adminpg.country(data.space_data)
//     await adminpg.coun_name_req()
//     await adminpg.country(data.countryname)

//     await adminpg.countrycode(data.splcharacter_data)
//     await adminpg.coun_code_req1()
//     await adminpg.countrycode(data.numeric_data)
//     await adminpg.coun_code_req1()
//     await adminpg.countrycode(data.space_data)
//     await adminpg.coun_code_req()
//     //  await adminpg.countrycode(data.countrycode)
//     //  await adminpg.coun_code_req()
//     //  await adminpg.countrycode(data.countrycode_tr)
//     //  await adminpg.coun_code_req()
//     await adminpg.countrycode(data.countrycode)  //change

//     await adminpg.region(data.australia)
//     await adminpg.region(data.africa)
//     await adminpg.region(data.Namerica)
//     await adminpg.region(data.Samerica)
//     await adminpg.region(data.Camerica)
//     await adminpg.region(data.Europe)
//     await adminpg.region(data.asia)


//     await adminpg.currency(data.splcharacter_data)
//     await adminpg.coun_currency_req1()
//     await adminpg.currency("093")
//     await adminpg.coun_currency_req1()
//     await adminpg.currency(data.space_data)
//     await adminpg.coun_currency_req()
//     await adminpg.currency(data.countrycode_s)
//     await adminpg.curr_code_req()
//     await adminpg.currency(data.countrycode_db)
//     await adminpg.curr_code_req()
//     await adminpg.currency(data.currency)

//     await adminpg.rate(data.splcharacter_data)
//     await adminpg.coun_rate_req1()
//     await adminpg.rate(data.space_data)
//     await adminpg.coun_rate_req()
//     await adminpg.rate(data.alphabets_data)
//     await adminpg.coun_rate_req1()
//     await adminpg.rate(data.zero_data)
//     await adminpg.coun_rate_req2()// rate zero validation msg was here chce
//     await adminpg.rate(data.rate)

//     await adminpg.phonecode(data.splcharacter_data)
//     await adminpg.coun_phonecode_req1()   /// validation msg need to change
//     await adminpg.phonecode(data.numeric_data)
//     await adminpg.coun_phonecode_req1()
//     await adminpg.phonecode(data.space_data)
//     await adminpg.coun_phonecode_req()
//     await adminpg.phonecode(data.apl_phonecode)
//     await adminpg.coun_phonecode_req1()
//     await adminpg.phonecode(data.spl_phonecode)
//     await adminpg.coun_phonecode_req1()
//     await adminpg.phonecode(data.phonecode)

//     await adminpg.numberformat(data.splcharacter_data)
//     await adminpg.coun_phoneformat_req1()
//     await adminpg.numberformat(data.space_data)
//     await adminpg.coun_phoneformat_req()
//     await adminpg.numberformat(data.alphabets_data)
//     await adminpg.coun_phoneformat_req1()
//     await adminpg.numberformat(data.numeric_data)
//     const tz = await page.locator("//select[@name='timezone']")
//     await tz.selectOption("Asia/Kolkata")
//     //  await adminpg.Inactive()
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
//     await page.waitForTimeout(1000)
//     await adminpg.search_country(data.countryname)
//     await adminpg.search_country("India")   //change
//     await adminpg.search_country_one()  
//     await page.locator("(//div[contains(@class,'MuiDataGrid-cell--withRenderer MuiDataGrid-cell')]//div)[3]").click()
//     await expect(page.locator("//input[@value='india']")).toHaveValue("India")
//     await expect(page.locator("//select[@name='region']")).toHaveValue("Asia")//disabled fiedl can't able to assert
//     await expect(page.locator("//input[@value='inr']")).toHaveValue("INR")
//     await expect(page.locator("//input[@placeholder='Enter Exchange Rate']")).toHaveValue("1")
//     await expect(page.locator("//input[@placeholder='Enter Phone Code']")).toHaveValue("+91")
//     await expect(page.locator("//input[@placeholder='Enter Phone Number']")).toHaveValue("1234567890")
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()


//   })
//   test("check that able to add country with same details like same country name and code (NOT ADDED)", async ({ page, baseURL, adminpg, loginpg }) => {

//     await adminpg.country_head()
//     await adminpg.add_country()
//     await adminpg.country(data.countryname)
//     await adminpg.countrycode(data.countrycode)
//     await adminpg.region(data.asia)
//     await adminpg.currency(data.currency)
//     await adminpg.rate(data.rate)
//     await adminpg.phonecode(data.phonecode)
//     await adminpg.numberformat(data.numeric_data)
//     const tz = await page.locator("//select[@name='timezone']")
//     await tz.selectOption("Asia/Kolkata")
//     await adminpg.Inactive()
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()
//     await adminpg.errortoast()
//   })
//   test("check that able to add country with same details with different country name and code (UAE -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

//     await adminpg.country_head()
//     await adminpg.add_country()
//     await adminpg.country(data.countryname1)
//     await adminpg.countrycode(data.countrycode1)
//     await adminpg.region(data.asia)
//     await adminpg.currency("aed")
//     await adminpg.rate("0.044")
//     await adminpg.phonecode("+971")
//     await adminpg.numberformat("1234567")
//     const tz = await page.locator("//select[@name='timezone']")
//     await tz.selectOption("Asia/Dubai")
//     await adminpg.active()
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
//     await adminpg.search_country(data.countryname1)
//     await adminpg.search_country("United Arab Emirates")
//     await adminpg.search_country_one()

//   })
//   test("Add one country edit each and every field and check for duplicates also (USA -> ACTIVE)", async ({ page, baseURL, adminpg, loginpg }) => {

//     await adminpg.country_head()
//     await adminpg.add_country()
//     await adminpg.country("united states of america")
//     await adminpg.countrycode("us")
//     await adminpg.region(data.Namerica)
//     await adminpg.currency("usd")
//     await adminpg.rate("83.18")
//     await adminpg.phonecode("+1")
//     await adminpg.numberformat("1234567809")
//     const tz = await page.locator("//select[@name='timezone']")
//     await tz.selectOption("America/Chicago")
//     await expect(page.locator("//div[text()='Country Added Successfully']")).toBeVisible()
//     await adminpg.active()
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()

//     await adminpg.search_country("United States Of America")
//     await adminpg.search_country("united states of america")
//     await adminpg.search_country_one()
//     await adminpg.edit_country()


//     await adminpg.Inactive()
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()

//     await adminpg.search_country("united states of america")
//     await adminpg.search_country_one()
//     await adminpg.edit_country()

//     await adminpg.country("india")
//     await adminpg.active()
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()
//     await adminpg.duptoast()
//     await page.waitForTimeout(2000)

//     // await adminpg.countrycode("in")
//     // //await adminpg.Inactive()
//     // await adminpg.save_country()
//     // await adminpg.pop_up_yes()
//     // await adminpg.duptoast()
//     await adminpg.country("united states of america")
// //    await adminpg.countrycode("us")
//     await adminpg.region(data.Europe)
//     await adminpg.currency("dfr")
//     await adminpg.rate("8")
//     await adminpg.phonecode("+102")
//     await adminpg.numberformat("123456789")
//     await adminpg.active()
//     await adminpg.save_country()
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()
//   })
//   test("search the country in another country filter (SEARCH INDIA IN AFRICA FILTER)", async ({ adminpg }) => {
//     await adminpg.filters()
//     await adminpg.filter_Africa()
//     await adminpg.search_country(data.countryname)
//     await adminpg.no_rows()
//   })
//   test("search the country in same country filter (SEARCH USA IN EUROPE FILTER)", async ({ adminpg, page }) => {
//     await adminpg.filters()
//     await adminpg.filter_Europe()
//     await adminpg.search_country("united states of america")
//     await adminpg.search_country_one()
//   })
// })//done

// test.describe("Lane Management", async () => {
// // port code is unique
//   ///////// Don't add extra active lane, it will shows in dashboard

//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("rdt@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }

//   })
//   test("check all the fields with validation and add one lane (INNSA -> ACTIVE)", async ({ adminpg, page }) => {
//     await adminpg.laneheading()
//     await adminpg.addlane()
//     await adminpg.savelane()
//     await adminpg.lane_coun_val()
//     await adminpg.lane_portname_val()
//     await adminpg.lane_portcode_val()
//     await adminpg.lane_gatefee_val()
//     await adminpg.lane_gatewaycode_val()

//     await adminpg.lane_country(data.countryname)   //change
//     await adminpg.lane_type(data.gateway)

//     await adminpg.lane_portname(data.splcharacter_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portname(data.numeric_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portname(data.space_data)
//     await adminpg.lane_portname_val()
//     await adminpg.lane_portname(data.portname)  //change

//     await adminpg.lane_portcode(data.splcharacter_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portcode(data.numeric_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portcode(data.space_data)
//     await adminpg.lane_portcode_val()
//     await adminpg.lane_portcode(data.portcode)   //change

//     await adminpg.lane_gateway_fee(data.zero_data)
//     await adminpg.lane_gatefee_val()
//     await adminpg.lane_gateway_fee(data.fee)

//     await page.locator("//input[@placeholder='Enter Gateway Code']").fill("   ")
//     await expect(page.locator("//span[text()='Gateway Code is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Gateway Code']").fill("Q#$%^")
//     await expect(page.locator("//span[text()='Only Numbers are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Gateway Code']").fill("sdsds")
//     await expect(page.locator("//span[text()='Only Numbers are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Gateway Code']").fill("100")

//     await adminpg.savelane()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

//   })
//   test("check that can able to add INNSA as destination port and search in filter",async({page, adminpg})=>{ 
//     await adminpg.laneheading()
//     await adminpg.addlane()
//     await adminpg.lane_country(data.countryname)   //change
//     await adminpg.lane_type(data.destination)
//     await adminpg.lane_portname(data.portname)  //change
//     await adminpg.lane_portcode(data.portcode)   //change
//     await adminpg.savelane()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()
//     await adminpg.lane_search("nhava")
//     await expect(page.locator("(//div[@data-field='country'])[2]")).toBeVisible()
//     await expect(page.locator("(//div[@data-field='country'])[3]")).toBeVisible()
    

//   })
//   test("check that able to add lane with same details like same port name and code (NOT ADDED)", async ({ adminpg, page }) => {
//     await adminpg.laneheading()
//     await adminpg.addlane()
//     await adminpg.lane_country(data.countryname) //change
//     await adminpg.lane_type(data.gateway)
//     await adminpg.lane_portname(data.portname)  //change
//     await adminpg.lane_portcode(data.portcode)  //change
//     await adminpg.lane_gateway_fee(data.fee)
//     await page.locator("//input[@placeholder='Enter Gateway Code']").fill("100")
//     await adminpg.savelane()
//     await adminpg.pop_up_yes()
//     await adminpg.lane_error()

//   })
//   test("check that able to add lane with different details for another gateway(INMAA -> ACTIVE)", async ({ page, adminpg }) => {
//     await adminpg.laneheading()
//     await adminpg.addlane()
//     await adminpg.lane_country(data.countryname) //change
//     await adminpg.lane_type(data.gateway)
//     await adminpg.lane_portname("chennai port")  //change
//     await adminpg.lane_portcode("inmaa")  //change
//     await adminpg.lane_gateway_fee(data.fee)
//     await page.locator("//input[@placeholder='Enter Gateway Code']").fill("101")
//     await adminpg.savelane()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

//   })
//   test("check that able to add lane with same details with different port name and code(AEJEA -> ACTIVE)", async ({ page, adminpg }) => {
//     await adminpg.laneheading()
//     await adminpg.addlane()
//     await adminpg.lane_type(data.destination)
//     await adminpg.savelane()

//     await adminpg.lane_coun_val()
//     await adminpg.lane_portname_val()
//     await adminpg.lane_portcode_val()
//     await adminpg.lane_country(data.countrynamee)   //change

//     await adminpg.lane_portname(data.splcharacter_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portname(data.numeric_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portname(data.space_data)
//     await adminpg.lane_portname_val()
//     await adminpg.lane_portname(data.ano_portname)//change

//     await adminpg.lane_portcode(data.splcharacter_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portcode(data.numeric_data)
//     await adminpg.lane_portname_val1()
//     await adminpg.lane_portcode(data.space_data)
//     await adminpg.lane_portcode_val()
//     await adminpg.lane_portcode(data.ano_portcode)//change
    
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()
//   })
//   test("Add one country edit each and every field and check duplicates also(SMPLA -> ACTIVE)", async ({ page, adminpg }) => {
//     await adminpg.laneheading()
//     await adminpg.addlane()
//     await adminpg.lane_country(data.countryname) //change
//     await adminpg.lane_type(data.gateway)
//     await adminpg.lane_portname("sample port")  //change
//     await adminpg.lane_portcode("smpla")  //change
//     await adminpg.lane_gateway_fee("20")
//     await page.locator("//input[@placeholder='Enter Gateway Code']").fill("103")
//     await adminpg.savelane()
//     await adminpg.pop_up_yes()
//     await expect(page.locator("//div[text()='Lane Added Successfully']")).toBeVisible()

//     await adminpg.lane_search("sample port")
//     await adminpg.edit_first()
//     await adminpg.lane_country("dummy coun")
//     await adminpg.lane_type(data.destination)
//     await adminpg.lane_portname("us port")  //change
//     await adminpg.lane_portcode("usprt")
//     await adminpg.Inactive()
//     await adminpg.updatelane()
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()

//     await adminpg.laneheading()
//     await adminpg.lane_search("us port")
//     await adminpg.edit_first()
//     await adminpg.active()
//     await adminpg.updatelane()
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()

//     await adminpg.laneheading()
//     await adminpg.lane_search("us port")
//     await adminpg.edit_first()
//     await adminpg.lane_portcode(data.portcode)
//     await adminpg.updatelane()
//     await adminpg.pop_up_yes()
//     await adminpg.duptoast()
//     await page.waitForTimeout(7000)
//     await adminpg.lane_portname(data.portname)
//     await adminpg.updatelane()
//     await adminpg.pop_up_yes()
//     await adminpg.duptoast()

//   })
//   test("search the lane in different filter (SEARCH JEBEL ALI IN GATEWAY AND SEARCH NHAVA SHEVA IN DESTINATION)", async ({ adminpg }) => {
//     await adminpg.laneheading()
//     await adminpg.lane_filter3()
//     await adminpg.lane_filter_gate()
//     await adminpg.lane_search(data.ano_portname)
//     await adminpg.no_rows()
//     await adminpg.lane_filter3()
//     await adminpg.lane_filter_dest()
//     await adminpg.lane_search(data.portname)
//     await adminpg.no_rows()

//   })
//   test("search the lane in correct filter (SEARCH NHAVA SHEVA IN DESTINATION AND SEARCH JEBEL ALI IN GATEWAY)", async ({ adminpg }) => {
//     await adminpg.laneheading()
//     await adminpg.lane_filter3()
//     await adminpg.lane_filter_gate()
//     await adminpg.lane_search(data.portname)
//     await adminpg.search_lane_one()
//     await adminpg.lane_filter3()
//     await adminpg.lane_filter_dest()
//     await adminpg.lane_search(data.ano_portname)
//     await adminpg.search_lane_one()
//   })
// })//done

// test.describe("Cost Heading Management", async () => {

//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("rdt@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }

//   })
//   test("check all the fields with validation and add one cost heading (UAE COUNTRY -> ACTIVE)", async ({ adminpg, page }) => {
//     await expect(page.locator("//h3[text()='Cost Heading']")).toHaveValue("Cost Heading")

//     await adminpg.costheading()
//     await adminpg.add_costheading()
//     await adminpg.save_costheading()
//     await adminpg.costheading_sac_val()
//     await adminpg.costheading_ch_val()
//     await adminpg.costheading_countries_val()

//     await adminpg.costheading_sac(data.splcharacter_data)
//     await adminpg.costheading_sac_val1()
//     await adminpg.costheading_sac(data.alphabets_data)
//     await adminpg.costheading_sac_val1()
//     await adminpg.costheading_sac(data.space_data)
//     await adminpg.costheading_sac_val()
//     await adminpg.costheading_sac(data.sac)

//     await adminpg.costheading_ch(data.splcharacter_data)
//     await adminpg.costheading_ch_val1()
//     await adminpg.costheading_ch(data.numeric_data)
//     await adminpg.costheading_ch_val1()
//     await adminpg.costheading_ch(data.space_data)
//     await adminpg.costheading_ch_val()
//     await adminpg.costheading_ch(data.costheading)

//     await adminpg.costheading_countries()
//     await adminpg.costheading_countries_dum()  //change
//     await adminpg.click_out()

//     await adminpg.save_costheading()
//     await adminpg.pop_up_yes()
//     await adminpg.Addedcostheading_toast()

//   })
//   test("check add same cost heading for added country (NO ADDED)", async ({ adminpg }) => {
//     await adminpg.costheading()
//     await adminpg.add_costheading()
//     await adminpg.costheading_sac(data.sac1)
//     await adminpg.costheading_ch(data.costheading1)
//     await adminpg.costheading_countries()
//     await adminpg.costheading_countries_dum()
//     await adminpg.click_out()

//     await adminpg.save_costheading()
//     await adminpg.pop_up_yes()
//     await adminpg.costheading_error()
//   })
//   test("check add another cost heading for already added country (DUMMY COUN -> ACTIVE)", async ({ page, adminpg }) => {
//     await adminpg.costheading()
//     await adminpg.add_costheading()
//     await adminpg.costheading_sac(data.sac1)
//     await adminpg.costheading_ch(data.costheading1)
//     await adminpg.costheading_countries()
//     await adminpg.costheading_countries_dum()  //change
//     await adminpg.click_out()
//     await adminpg.save_costheading()
//     await adminpg.pop_up_yes()
//     await adminpg.costheading_error()

//     await page.reload()

//     await adminpg.costheading()
//     await adminpg.add_costheading()
//     await adminpg.costheading_sac(data.sac1)
//     await adminpg.costheading_ch(data.costheading1)
//     await adminpg.costheading_countries()
//     await page.locator("//span[text()='united states of america']").click()
//     await adminpg.click_out()

//     await adminpg.save_costheading()
//     await adminpg.pop_up_yes()
//     await adminpg.Addedcostheading_toast()

//     await adminpg.cost_searchbox("ams new")
//     await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
//     await adminpg.Inactive()
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()

//     await adminpg.cost_searchbox("ams new")
//     await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
//     await adminpg.active()
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()

//     await adminpg.cost_searchbox("ams new")
//     await expect(page.locator("(//div[@data-field='sacCode'])[2]")).toBeVisible()
//     await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
//     await adminpg.costheading_sac("901321")
//     await adminpg.costheading_ch("chs")
//     await page.click("//button[text()='Update Cost Heading']")
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()

//   })
//   test("search with valid cost heading", async ({ page, adminpg }) => {
//     await adminpg.costheading()
//     await adminpg.cost_searchbox("chs")
//     await expect(page.locator("(//div[@data-field='sacCode'])[2]")).toBeVisible()

//   })
//   test("search with Invalid cost heading", async ({ adminpg }) => {
//     await adminpg.costheading()
//     await adminpg.cost_searchbox("382911")
//     await adminpg.cost_norows()

//   })
// })//done 

// test.describe("Cfs Management", async () => {
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("rdt@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })
//   //div[text()='No rows']
//   test("check all the fields with validation and add one cfs (NHAVA SHEVA CFS -> ACTIVE, MAIL->SUBHAM)", async ({ adminpg, page }) => {
//     await adminpg.cfsmanagement()
//     await adminpg.add_cfs()
//     await adminpg.save_cfs()
//     await adminpg.cfs_country_val()
//     await adminpg.cfs_type_val()
//     await adminpg.cfs_cfsname_val()
//     await adminpg.cfs_cfsbranch_val()
//     await adminpg.cfs_fullname_val()
//     await adminpg.cfs_email_val()
//     await adminpg.cfs_address_val()
//     await adminpg.cfs_phonecode_val()

//     await adminpg.cfs_countryname(data.countryname)
//     await adminpg.cfs_type(data.typedes)
//     await adminpg.cfs_destination_val()
//     await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible() 
//     await page.locator("//input[@placeholder='Enter Storage Free days']").fill("0000")
//     await expect(page.locator("//span[text()='Only positive numbers are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Storage Free days']").fill("5")
//     //await expect(page.locator("(//span[text()='Only numbers are allowed'])[1]")).toBeHidden()

//     await adminpg.cfs_countryname(data.countryname)
//     await adminpg.cfs_type(data.typeori)
//     await adminpg.save_cfs()
//     await adminpg.cfs_gateway_val()
//     await expect(page.locator("//span[text()='Shed Number is Required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter Shed Number']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Shed Number is Required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Allmasters Account Code is Required']")).toBeVisible()
//     await page.locator("//input[@placeholder='AllMasters Account Code']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Allmasters Account Code is Required']")).toBeVisible()
  
//     await page.locator("//input[@placeholder='Enter Shed Number']").fill("SHDN01")
//     await page.locator("//input[@placeholder='AllMasters Account Code']").fill("ALMSX91")

//     // await adminpg.cfs_type(data.typeori)
//     // await adminpg.save_cfs()
//     // await adminpg.cfs_gateway_val()
//     await adminpg.cfs_gateway(data.cfs_orilane)

//     await adminpg.cfs_cfsname(data.space_data)
//     await adminpg.cfs_cfsname_val()
//     await adminpg.cfs_cfsbranch(data.space_data)
//     await adminpg.cfs_cfsbranch_val()

//     await adminpg.cfs_cfsname(data.cfsname)
//     await adminpg.cfs_cfsbranch(data.cfsbranch)

//     await adminpg.cfs_fullname(data.splcharacter_data)
//     await adminpg.cfs_fullname_1_val()
//     await adminpg.cfs_fullname(data.numeric_data)
//     await adminpg.cfs_fullname_1_val()
//     await adminpg.cfs_fullname(data.space_data)
//     await adminpg.cfs_fullname_val()
//     await adminpg.cfs_fullname(data.name)

//     await adminpg.cfs_email(data.splcharacter_data)
//     await adminpg.cfs_email_1_val()
//     await adminpg.cfs_email(data.numeric_data)
//     await adminpg.cfs_email_1_val()
//     await adminpg.cfs_email(data.space_data)
//     await adminpg.cfs_email_val()
//     await adminpg.cfs_email(data.cfs_email)

//     await adminpg.cfs_address(data.space_data)
//     await adminpg.cfs_address_val()
//     await adminpg.cfs_address(data.cfs_Address)

//     await adminpg.cfs_phonecode(data.splcharacter_data)
//     await adminpg.cfs_phonecode_1_val()
//     await adminpg.cfs_phonecode(data.numeric_data)
//     await expect(page.locator("//span[text()='Mobile Number format is not correct']")).toBeVisible()
//     await adminpg.cfs_phonecode(data.space_data)
//     await adminpg.cfs_phonecode_1_val()
//     await adminpg.cfs_phonecode(data.alphabets_data)
//     await adminpg.cfs_phonecode_1_val()
//     // await adminpg.cfs_phonecode("")
//     // await expect(page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
//     await adminpg.cfs_phonecode(data['mobilecode&number'])

//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
//     await page.waitForTimeout(5000)
//     await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
//     await page.waitForTimeout(3000)
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
//     await page.waitForTimeout(3000)
//     await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
//     await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/destination (2).xls")
//     await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/sample.png")
//     await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

//     await adminpg.save_cfs()
//     await adminpg.pop_up_yes()
//     await page.waitForTimeout(4000)
//     await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

//   })
//   test("check all the fields with validation and add one cfs (CHENNAI CFS -> ACTIVE, MAIL->BALREDDY)", async ({ adminpg, page }) => {

//     await adminpg.cfsmanagement()
//     await adminpg.add_cfs()
//     await adminpg.cfs_countryname(data.countryname)
//     await adminpg.cfs_type(data.typeori)
//     await adminpg.cfs_gateway("chennai port")
//     await adminpg.cfs_cfsname("chennai")
//     await adminpg.cfs_cfsbranch("branch 1")
//     await adminpg.cfs_fullname("balreddy")
//     await adminpg.cfs_email("balreddy.mahendra@dokonaly.com")
//     await adminpg.cfs_address("balreddy address")
//     await adminpg.cfs_phonecode(data.mobilecode_number)
//     await page.locator("//input[@placeholder='Enter Shed Number']").fill("SHDN03")
//     await page.locator("//input[@placeholder='AllMasters Account Code']").fill("ALMSX94")

//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
//     await page.waitForTimeout(5000)
//     await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
//     await page.waitForTimeout(3000)
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
//     await page.waitForTimeout(3000)
//     await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()

//     await page.locator("(//p[text()='3mb(1).pdf']/following-sibling::div)[1]").click()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/1mbcopy (1).pdf")
//     await page.waitForTimeout(5000)

//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
//     await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

//     await adminpg.save_cfs()
//     await adminpg.pop_up_yes()
//     await page.waitForTimeout(4000)
//     await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

//   })
//   test("check all the fields with validation and add one cfs (JEBEL ALI CFS -> ACTIVE, MAIL->VIJAY RAGHAV)", async ({ adminpg, page }) => {
//     await adminpg.cfsmanagement()
//     await adminpg.add_cfs()
//     await adminpg.cfs_countryname(data.countrynamee)
//     await adminpg.cfs_type(data.typedes)
//     await adminpg.cfs_destination("jebel ali")
//     await page.locator("//input[@placeholder='Enter Storage Free days']").fill("5")
//     await adminpg.cfs_cfsname("jebel ali cfs")
//     await adminpg.cfs_cfsbranch("branch 1")
//     await adminpg.cfs_fullname("vijay")
//     await adminpg.cfs_email("vijayaragavan.s@dokonaly.com")
//     await adminpg.cfs_address("vijay address")
//     await adminpg.cfs_phonecode("+9711234567")

//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/10 mb file.pdf")
//     await page.waitForTimeout(5000)
//     await page.locator("(//p[text()='10 mb file.pdf']/following-sibling::div)[1]").click()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
//     await page.waitForTimeout(3000)
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/3mb(1).pdf")
//     await page.waitForTimeout(3000)
//     await expect(page.locator("//div[text()='File already uploaded']")).toBeVisible()
//     await page.locator("//input[@id='fileupload']").setInputFiles("data-files/Works.docx")
//     await expect(page.locator("//div[text()='Upload only Pdf']")).toBeVisible()

//     await adminpg.save_cfs()
//     await adminpg.pop_up_yes()
//     await page.waitForTimeout(4000)
//     await expect(page.locator("//div[text()='CFS Added Successfully']")).toBeVisible()

//   })
//   test("check mail validations ", async ({ adminpg, page }) => {
//     await adminpg.cfsmanagement()
//     await adminpg.add_cfs()
//     await adminpg.save_cfs()
//     await adminpg.cfs_email(data.cfs_email)
//     await adminpg.cfs_duplicatemailval()

//     const dm = 62
//     for (let i = 0; i < dm; i++) {
//       await adminpg.cfs_email(data.sample[i])
//       await adminpg.cfs_offemailval()
//     }
//     await page.close()
//   })
// // after create password
//   test("check that edit functionality and save as inactive", async({adminpg, page, baseURL, loginpg})=>{
    
//     await adminpg.cfsmanagement()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumbai")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MUMBAI")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MumBai")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("     mumbai")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("(//div[@data-colindex='6']//div)[1]").click()
//     await expect(page.locator("//select[@name='countryName']")).toBeDisabled()
//     await expect(page.locator("//select[@name='type']")).toBeDisabled()
//     await expect(page.locator("//select[@name='gateway']")).toBeDisabled()
//     await expect(page.locator("//input[@name='email']")).toBeDisabled()
//     await expect(page.locator("//span[text()='+']")).toBeDisabled()
//     await expect(page.locator("//p[text()='3mb(1).pdf']")).toBeVisible()
//     await page.locator("(//div[@data-colindex='6']//div)[1]").click()
//     await page.locator("(//p[@title='3mb(1).pdf']/following-sibling::div)[1]").click()
//     await page.locator("//button[text()='Save CFS']").click()
//     await page.locator("//button[text()='Yes']").click()
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
    
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("MumBai")
//     await page.locator("(//div[@data-colindex='6']//div)[1]").click()
//     await expect(page.locator("//p[text()='3mb(1).pdf']")).toBeHidden()
//     await page.locator("//button[text()='Save CFS']").click()
//     await page.locator("//button[text()='Yes']").click()
//     await page.waitForTimeout(4000)
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
//     await page.locator("//li[text()='Sign Out']").click()
//     // go with admin login and change the status into inactive

//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("admin@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }

//     await adminpg.cfsmanagement()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumbai")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("//input[@type='checkbox']").click()
//     await page.locator("//button[text()='Yes']").click()
//     await page.waitForTimeout(6000)
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("jebel ali cfs")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("//input[@type='checkbox']").click()
//     await page.locator("//button[text()='Yes']").click()
//     await page.waitForTimeout(6000)
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
//     await page.locator("//li[text()='Sign Out']").click()

//     await loginpg.select_type(data.type2)
//     await loginpg.emailID("subham.sidhartha@dokonaly.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()

//     await loginpg.select_type(data.type2)
//     await loginpg.emailID("vijayaragavan.s@dokonaly.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()

//     // after chnage the status into active
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("admin@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input1 = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input1) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }

//     await adminpg.cfsmanagement()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("mumbai")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("//input[@type='checkbox']").click()
//     await page.locator("//button[text()='Yes']").click()
//     await page.waitForTimeout(6000)
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search CFS by Name, Gateway, Destination']").fill("jebel ali cfs")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await page.locator("//input[@type='checkbox']").click()
//     await page.locator("//button[text()='Yes']").click()
//     await page.waitForTimeout(6000)
//     await expect(page.locator("//div[text()='Updated successfully']")).toBeVisible()
//     await page.locator("//li[text()='Sign Out']").click()

//     await loginpg.select_type(data.type2)
//     await loginpg.emailID("subham.sidhartha@dokonaly.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await loginpg.logout_dd()

//     await loginpg.select_type(data.type2)
//     await loginpg.emailID("vijayaragavan.s@dokonaly.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await loginpg.logout_dd()

//   })
//   test.skip("check add same name and branch", async ({ page, adminpg }) => {
//     await adminpg.costheading()
//     await adminpg.add_cfs()
//     await adminpg.cfs_countryname(data.countryname)
//     await adminpg.cfs_type(data.typeori)
//     await adminpg.cfs_gateway(data.cfs_orilane)
//     await adminpg.cfs_cfsname(data.cfsname)
//     await adminpg.cfs_cfsbranch(data.cfsbranch)
//     await adminpg.cfs_fullname("balreddy")
//     await adminpg.cfs_email("balreddy.mahendra@dokonaly.com")
//     await adminpg.cfs_address("balreddy address")
//     await adminpg.cfs_phonecode(data['mobilecode&number'])
//     await expect(page.locator("//div[text()=' CFS Already Exists']")).toBeVisible()
//     await adminpg.save_cfs()
//     await adminpg.pop_up_yes()

//   })
//   test.skip("check add same name and diff branch", async ({ adminpg }) => {
//     await adminpg.costheading()
//     await adminpg.add_cfs()
//     await adminpg.cfs_countryname(data.countryname)
//     await adminpg.cfs_type(data.typeori)
//     await adminpg.cfs_gateway(data.cfs_orilane)
//     await adminpg.cfs_cfsname(data.cfsname)
//     await adminpg.cfs_cfsbranch(data.cfsbranch_vel)
//     await adminpg.cfs_fullname("balreddy")
//     await adminpg.cfs_email("balreddy.mahendra@dokonaly.com")
//     await adminpg.cfs_address("balreddy address")
//     await adminpg.cfs_phonecode(data['mobilecode&number'])
//     await adminpg.save_cfs()
//     await adminpg.pop_up_yes()

//   })
//   test.skip("check add different cfs name and same branch name", async ({ adminpg }) => {
//     await adminpg.costheading()
//     await adminpg.add_cfs()
//     await adminpg.cfs_countryname(data.countrynamee)
//     await adminpg.cfs_type(data.typedes)
//     await adminpg.cfs_gateway(data.ano_portname)
//     await adminpg.cfs_cfsname(data.cfsname_another)
//     await adminpg.cfs_cfsbranch(data.cfsbranch)
//     await adminpg.cfs_fullname("vijay")
//     await adminpg.cfs_email("vijayaragavan.s@dokonaly.com")
//     await adminpg.cfs_address("vijay address")
//     await adminpg.cfs_phonecode(data['mobilecode&number'])
//     await adminpg.save_cfs()
//     await adminpg.pop_up_yes()

//   })
//   test("login with ocfs and dcfs credentials", async ({ page, baseURL, loginpg }) => {
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type2)
//     await loginpg.emailID("subham.sidhartha@dokonaly.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await loginpg.logout_dd()

//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type2)
//     await loginpg.emailID("balreddy.mahendra@dokonaly.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await loginpg.logout_dd()

//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type2)
//     await loginpg.emailID("vijayaragavan.s@dokonaly.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await loginpg.logout_dd()
//     await page.close()
//   })


//   // check mail, check add same name and branch, add same name and diff branch, add diff name with same branch
//   // Add one for dummy countrt an edit for it (toast msg also), In edit each and every field & change from ocfs to dcfs
//   // set password and login with those credientails
//   // search

// })// skip

// test.describe("Schedule", async () => {

//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("rdt@ams.com")
//     await loginpg.password(data.password_Ad)
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })

//   test("Adding a new schedule with status as Active (INNSA-AEJEA -> ACTIVE)", async ({ adminpg, page }) => {//only
//     //await page.locator("div.add_div-heading > svg").click()     close icon in schedule
//     await adminpg.schedule()
//     await adminpg.add_schedule()

//     await adminpg.sch_pol(data.ori_portcode)
//     await adminpg.sch_pod("AEJEA")
//     await adminpg.sch_container("40HC")
//     await adminpg.schedule_vessel("hyundai")
//     await adminpg.schedule_voyage("V. 128")
//     await adminpg.schedule_service("IEX21")
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='28']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='27']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='27']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='29']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='30']").click()

//     await adminpg.sch_oricfsname("mumbai")
//     await adminpg.sch_oricfsbranch("branch 1")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()

//     await adminpg.sch_destcfsname("jebel ali cfs")
//     await adminpg.sch_destcfsbranch("branch 1")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()
//     await adminpg.save_schedule()
//     await adminpg.pop_up_yes()
//     await adminpg.add_sch_toast()

//   })
//   test("Adding a new schedule with status as Active (INMAA-AEJEA -> ACTIVE)", async ({ adminpg, page }) => {//only
//     //await page.locator("div.add_div-heading > svg").click()     close icon in schedule
//     await adminpg.schedule()
//     await adminpg.add_schedule()

//     await adminpg.sch_pol("INMAA")
//     await adminpg.sch_pod("AEJEA")
//     await adminpg.sch_container("40HC")
//     await adminpg.schedule_vessel("evergreen")
//     await adminpg.schedule_voyage("V. 19WIO")
//     await adminpg.schedule_service("LVS2")
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='28']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='27']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='27']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='29']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='30']").click()

//     await adminpg.sch_oricfsname("chennai")
//     await adminpg.sch_oricfsbranch("branch 1")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()

//     await adminpg.sch_destcfsname("jebel ali cfs")
//     await adminpg.sch_destcfsbranch("branch 1")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()
//     await adminpg.save_schedule()
//     await adminpg.pop_up_yes()
//     await adminpg.add_sch_toast()

//   })
//   test.skip("Adding a new schedule with status as Inactive", async ({ page, adminpg }) => {
//     await adminpg.schedule()
//     await adminpg.add_schedule()

//     await adminpg.sch_pol(data.ori_portcode)
//     await adminpg.sch_pod("AEJEA")
//     await adminpg.sch_container("40HC")
//     await adminpg.schedule_vessel("vess")
//     await adminpg.schedule_voyage("voyage")
//     await adminpg.schedule_service("service")

//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='27']").click()


//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='27']").click()


//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='27']").click()


//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='30']").click()


//     await page.locator("(//button[@aria-label='Choose date'])[1]").click()
//     await page.locator("//button[text()='31']").click()

//     await adminpg.sch_oricfsname("INsAa")
//     await adminpg.sch_oricfsbranch("BRancH")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()

//     await adminpg.sch_destcfsname("EmiRaTes")
//     await adminpg.sch_destcfsbranch("BrAnch1")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()
//     await page.click("//button[text()='Inactive']")
//     await adminpg.save_schedule()
//     await adminpg.pop_up_yes()
//     await adminpg.add_sch_toast()
//   })
//   test("check all validation message (INNSA-AEJEA -> ACTIVE)", async ({ page, adminpg }) => {

//     await adminpg.schedule()
//     await adminpg.add_schedule()
//     await adminpg.save_schedule()

//     await expect(page.locator("//input[@name='volume']")).toBeDisabled()
//     await expect(page.locator("//span[text()='CBM']")).toBeDisabled()
//     await expect(page.locator("//input[@name='weight']")).toBeDisabled()
//     await expect(page.locator("//span[text()='Kg']")).toBeDisabled()
//     await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[3]")).toBeDisabled()
//     await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[4]")).toBeDisabled()
//     await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[5]")).toBeDisabled()
//     await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[6]")).toBeDisabled()
//     await expect(page.locator("(//input[@placeholder='DD-MM-YYYY'])[7]")).toBeDisabled()

//     await expect(page.locator("//span[text()='POL is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='POD is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Container type is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Volume is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Weight is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Vessel is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Voyage is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Service Name is required']")).toBeVisible()

//     await expect(page.locator("//span[text()='ETD is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Booking CutOff Date is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Origin CFS CutOff Date is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='ETA is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Destination CFS Cargo Delivery Date is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Origin CFS Name is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Origin CFS Closing Time is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Destination CFS Name is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Destination Available Time is required']")).toBeVisible()
    
//     await adminpg.sch_pol(data.ori_portcode)
//     await adminpg.sch_pod("AEJEA")
//     await adminpg.save_schedule()
//     await expect(page.locator("//span[text()='Origin CFS Branch is required']")).toBeVisible()
//     await expect(page.locator("//span[text()='Destination CFS Branch is required']")).toBeVisible()
//     await adminpg.sch_container("40HC")
//     await adminpg.schedule_vessel("!@#$%")
//     await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
//     await adminpg.schedule_vessel("78728")
//     await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
//     await adminpg.schedule_vessel("kdjs")
//     await expect(page.locator("//span[text()='Vessel is required']")).toBeHidden()
//     await adminpg.schedule_vessel("   ")
//     await expect(page.locator("//span[text()='Vessel is required']")).toBeVisible()
//     await adminpg.schedule_vessel("Evergreen")

//     await adminpg.schedule_voyage("!@#$%")
//     await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
//     await adminpg.schedule_voyage("78728")
//     await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
//     await adminpg.schedule_voyage("kdjs")
//     await expect(page.locator("//span[text()='Voyage is required']")).toBeHidden()
//     await adminpg.schedule_voyage("   ")
//     await expect(page.locator("//span[text()='Voyage is required']")).toBeVisible()
//     await adminpg.schedule_voyage("V.3982")


//     await adminpg.schedule_service("*&^&*&(")
//     await expect(page.locator("//span[text()='Only alphabets & numbers are allowed']")).toBeVisible()
//     await adminpg.schedule_service("    ")
//     await expect(page.locator("//span[text()='Service Name is required']")).toBeVisible()
//     await adminpg.schedule_service("324333")
//     await expect(page.locator("//span[text()='Only alphabets & numbers are allowed']")).toBeHidden()
//     await adminpg.schedule_service("IEMS")
//     await expect(page.locator("//span[text()='Service Name is required']")).toBeHidden()

//     ///after verified with msg adding a new schedule
//     // await adminpg.sch_pol(data.ori_portcode)
//     // await adminpg.sch_pod("AEJEA")
//     // await adminpg.sch_container("40HC")
//     // await adminpg.schedule_vessel("evergreen")
//     // await adminpg.schedule_voyage("V. 120")
//     // await adminpg.schedule_service("IEX0")
//     await page.locator("(//button[@aria-label='Choose date'])[3]").click()
//     await page.locator("//button[@title='Next month']")
//     await page.locator("//button[text()='28']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[4]").click()
//     await page.locator("//button[@title='Next month']")
//     await page.locator("//button[text()='27']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[5]").click()
//     await page.locator("//button[@title='Next month']")
//     await page.locator("//button[text()='27']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[6]").click()
//     await page.locator("//button[@title='Next month']")
//     await page.locator("//button[text()='29']").click()

//     await page.waitForTimeout(1000)
//     await page.locator("(//button[@aria-label='Choose date'])[7]").click()
//     await page.locator("//button[@title='Next month']")
//     await page.locator("//button[text()='30']").click()

//     await adminpg.sch_oricfsname("mumbai")
//     await adminpg.sch_oricfsbranch("branch 1")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()

//     await adminpg.sch_destcfsname("jebel ali cfs")
//     await adminpg.sch_destcfsbranch("branch 1")
//     await adminpg.ct()
//     await adminpg.ct_select()
//     await adminpg.ct_ok()
//     await adminpg.save_schedule()
//     await adminpg.pop_up_yes()
//     await adminpg.add_sch_toast()

//     await page.locator("(//div[contains(@class,'MuiDataGrid-cell--withRenderer MuiDataGrid-cell')]//div)[3]").click()


//   })
//   test.skip("Editing the schedule", async ({ page, adminpg }) => {

//     await adminpg.schedule()
//     await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
//     await adminpg.schedule_vessel("edit vessel")
//     await adminpg.schedule_voyage("edit voyage")
//     await adminpg.schedule_service("edit service")
//     await adminpg.save_schedule()
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()

//     await page.reload()
//     await adminpg.schedule()
//     await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
//     await adminpg.schedule_vessel("edit vessel again")
//     await adminpg.schedule_voyage("edit voyage again")
//     await adminpg.schedule_service("edit service again")
//     await page.click("//button[text()='Inactive']")
//     await adminpg.save_schedule()
//     await adminpg.pop_up_yes()
//     await adminpg.edi_sch_toast()


//   })
//   test.skip("Searching the schedule with pol, pod and schedule ID", async ({ page, adminpg }) => {
//     //search schedule while changed the status from active to inactive
//     await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill(" ")     //need to check weeknumber and enter correct schedule ID
//     await expect(page.locator("//div[@data-colindex='1']")).toBeVisible()
//     await expect(page.locator("//span[text()='Inactive']")).toBeVisible()
//     // check with schedule as inactive
//     await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill(" ")      //need to check weeknumber and enter correct schedule ID
//     await expect(page.locator("//div[@data-colindex='1']")).toBeVisible()
//     await expect(page.locator("//span[text()='Inactive']")).toBeVisible()
//     // check with schedule as active
//     await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill(" ")      //need to check weeknumber and enter correct schedule ID
//     await expect(page.locator("//div[@data-colindex='1']")).toBeVisible()
//     await expect(page.locator("//span[text()='Active']")).toBeVisible()
//     // search with pol 
//     await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("INNSA")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await expect(page.locator("(//div[@data-colindex='0'])[2]")).toBeVisible()
//     await expect(page.locator("(//div[@data-colindex='0'])[3]")).toBeVisible()
//     // search with pod
//     await page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill("AEJEA")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await expect(page.locator("(//div[@data-colindex='0'])[2]")).toBeVisible()
//     await expect(page.locator("(//div[@data-colindex='0'])[3]")).toBeVisible()

//   })
//   //schedule ID
//   //shouldn;t able to select holiday date in ocfs and dcfs
//   //based on pol and pod cfs should get display in dropdown
//   //edit the schedule with each and every field and change status also

// })

// test.describe("Rates", async () => {
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("rdt@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })
//   test.skip("verify that can able to add space in rates", async ({ adminpg, page }) => {//only
//     await adminpg.rates()
//     await adminpg.add_rates()
//     await adminpg.select_ScheduleID(data.scheduleID)
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')
//     await adminpg.ocfs(data.space_data)
//     await adminpg.odoc(data.space_data)
//     await adminpg.ori_break(data.space_data)
//     await adminpg.comp_ocfs(data.space_data)
//     await adminpg.comp_odoc(data.space_data)
//     await adminpg.freight(data.space_data)
//     await adminpg.fri_break(data.space_data)
//     await adminpg.comp_fri(data.space_data)
//     await adminpg.dcfs(data.space_data)
//     await adminpg.ddo(data.space_data)
//     await adminpg.dest_break(data.space_data)
//     await adminpg.comp_dcfs(data.space_data)
//     await adminpg.comp_ddo(data.space_data)
//     await adminpg.Ch_cost(data.space_data)
//     await adminpg.Ch_comp(data.space_data)

//     await adminpg.rates_confirm()
//     await adminpg.ratemgmtheading()
//   })
//   test.skip("verify that can able to add alphabets in rates", async ({ adminpg, page }) => {
//     await adminpg.rates()
//     await adminpg.add_rates()
//     await adminpg.select_ScheduleID(data.scheduleID)
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')

//     await adminpg.ocfs(data.alphabets_data)
//     await adminpg.odoc(data.alphabets_data)
//     await adminpg.ori_break(data.alphabets_data)
//     await adminpg.comp_ocfs(data.alphabets_data)
//     await adminpg.comp_ddo(data.alphabets_data)
//     await adminpg.freight(data.alphabets_data)
//     await adminpg.fri_break(data.alphabets_data)
//     await adminpg.comp_fri(data.alphabets_data)
//     await adminpg.dcfs(data.alphabets_data)
//     await adminpg.ddo(data.alphabets_data)
//     await adminpg.dest_break(data.alphabets_data)
//     await adminpg.comp_dcfs(data.alphabets_data)
//     await adminpg.comp_ddo(data.alphabets_data)
//     await adminpg.Ch_cost(data.alphabets_data)
//     await adminpg.Ch_comp(data.alphabets_data)

//     await adminpg.rates_confirm()
//     await adminpg.ratemgmtheading()

//   })
//   test.skip("verify that can able to add spl char in rates", async ({ adminpg, page }) => {
//     await adminpg.rates()
//     await adminpg.add_rates()
//     await adminpg.select_ScheduleID(data.scheduleID)
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')

//     await adminpg.ocfs(data.splcharacter_data)
//     await adminpg.odoc(data.splcharacter_data)
//     await adminpg.ori_break(data.splcharacter_data)
//     await adminpg.comp_ocfs(data.splcharacter_data)
//     await adminpg.comp_ddo(data.splcharacter_data)
//     await adminpg.freight(data.splcharacter_data)
//     await adminpg.fri_break(data.splcharacter_data)
//     await adminpg.comp_fri(data.splcharacter_data)
//     await adminpg.dcfs(data.splcharacter_data)
//     await adminpg.ddo(data.splcharacter_data)
//     await adminpg.dest_break(data.splcharacter_data)
//     await adminpg.comp_dcfs(data.splcharacter_data)
//     await adminpg.comp_ddo(data.splcharacter_data)
//     await adminpg.Ch_cost(data.splcharacter_data)
//     await adminpg.Ch_comp(data.splcharacter_data)

//     await adminpg.rates_confirm()
//     await adminpg.ratemgmtheading()

//   })
//   test("verify that can able to add zero in rates", async ({ adminpg, page }) => {

//     await adminpg.rates()
//     await adminpg.add_rates()
//     await adminpg.select_ScheduleID(data.scheduleID)
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')

//     await adminpg.ocfs(data.zero_data)
//     await adminpg.odoc(data.zero_data)
//     await adminpg.ori_break(data.zero_data)
//     await adminpg.comp_ocfs(data.zero_data)
//     await adminpg.comp_odoc(data.zero_data)
//     await adminpg.freight(data.zero_data)
//     await adminpg.fri_break(data.zero_data)
//     await adminpg.comp_fri(data.zero_data)
//     await adminpg.dcfs(data.zero_data)
//     await adminpg.ddo(data.zero_data)
//     await adminpg.dest_break(data.zero_data)
//     await adminpg.comp_dcfs(data.zero_data)
//     await adminpg.comp_ddo(data.zero_data)
//     await adminpg.Ch_cost(data.zero_data)
//     await adminpg.Ch_comp(data.zero_data)

//     await adminpg.rates_confirm()
//     await adminpg.ratemgmtheading()
//   })
//   test("check the rates should get add", async ({ adminpg, page }) => {

//     await adminpg.rates()
//     await adminpg.add_rates()
//     await adminpg.select_ScheduleID("INNSA/AEJEA/43-01")
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')

//     await adminpg.ocfs(data.ocfs)
//     await adminpg.odoc(data.odoc)
//     await adminpg.ori_break(data.ori_break)
//     await adminpg.comp_ocfs(data.comp_ocfs)
//     await adminpg.comp_odoc(data.comp_odoc)
//     await adminpg.freight(data.freight)
//     await adminpg.fri_break(data.fri_break)
//     await adminpg.comp_fri(data.comp_fri)
//     await adminpg.dcfs(data.dcfs)
//     await adminpg.ddo(data.ddo)
//     await adminpg.dest_break(data.dest_break)
//     await adminpg.comp_dcfs(data.comp_dcfs)
//     await adminpg.comp_ddo(data.comp_ddo)
//     await adminpg.Ch_cost(data.Ch_cost)
//     await adminpg.Ch_comp(data.Ch_comp)

//     //1  with costheading
//     await adminpg.select_hover_ScheduleID()
//     await adminpg.rates_clear()
//     await adminpg.select_ScheduleID("INMAA/AEJEA/43-01")        // need to change
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')

//     await adminpg.ocfs(data.ocfs)
//     await adminpg.odoc(data.odoc)
//     await adminpg.ori_break(data.ori_break)
//     await adminpg.comp_ocfs(data.comp_ocfs)
//     await adminpg.comp_odoc("3500")
//     await adminpg.freight(data.freight)
//     await adminpg.fri_break(data.fri_break)
//     await adminpg.comp_fri(data.comp_fri)
//     await adminpg.dcfs(data.dcfs)
//     await adminpg.ddo(data.ddo)
//     await adminpg.dest_break(data.dest_break)
//     await adminpg.comp_dcfs(data.comp_dcfs)
//     await adminpg.comp_ddo("3000")
//     await adminpg.Ch_cost(data.Ch_cost)
//     await adminpg.Ch_comp("300")
//     await expect(page.locator("//h3[text()='41']")).toBeVisible()
//     await expect(page.locator("//h3[text()='681']")).toBeVisible()
//     await expect(page.locator("//h3[text()='220']")).toBeVisible()

//     await adminpg.rates_confirm()
//     await adminpg.pop_up_yes()
//     await adminpg.ratemgmtheading()


//     //2
//     await adminpg.select_hover_ScheduleID()
//     await adminpg.rates_clear()
//     await adminpg.select_ScheduleID("INNSA/AEJEA/43-02")      // need to change
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')

//     await adminpg.ocfs(data.ocfs)
//     await adminpg.odoc(data.odoc)
//     await adminpg.ori_break(data.ori_break)
//     await adminpg.comp_ocfs(data.comp_ocfs)
//     await adminpg.comp_odoc("2600")
//     await adminpg.freight(data.freight)
//     await adminpg.fri_break(data.fri_break)
//     await adminpg.comp_fri(data.comp_fri)
//     await adminpg.dcfs(data.dcfs)
//     await adminpg.ddo(data.ddo)
//     await adminpg.dest_break(data.dest_break)
//     await adminpg.comp_dcfs(data.comp_dcfs)
//     await adminpg.comp_ddo("2400")
//     await adminpg.Ch_cost(data.Ch_cost)
//     await adminpg.Ch_comp("100")

//     await expect(page.locator("//h3[text()='32']")).toBeVisible()
//     await expect(page.locator("//h3[text()='654']")).toBeVisible()
//     await expect(page.locator("//h3[text()='100']")).toBeVisible()

//     await adminpg.rates_confirm()
//     await adminpg.pop_up_yes()
//     await adminpg.ratemgmtheading()

//     //3 
//     /*await adminpg.select_hover_ScheduleID()
//     await adminpg.rates_clear()
//     await adminpg.select_ScheduleID(data.scheduleID)
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')

//     await adminpg.ocfs(data.ocfs)
//     await adminpg.odoc(data.odoc)
//     await adminpg.ori_break(data.ori_break)
//     await adminpg.comp_ocfs(data.comp_ocfs)
//     await adminpg.comp_odoc("2000")
//     await adminpg.freight(data.freight)
//     await adminpg.fri_break(data.fri_break)
//     await adminpg.comp_fri(data.comp_fri)
//     await adminpg.dcfs(data.dcfs)
//     await adminpg.ddo(data.ddo)
//     await adminpg.dest_break(data.dest_break)
//     await adminpg.comp_dcfs(data.comp_dcfs)
//     await adminpg.comp_ddo("2000")
//     await adminpg.Ch_cost(data.Ch_cost)
//     await adminpg.Ch_comp("70") 

//     await expect(page.locator("//h3[text()='24']")).toBeVisible()
//     await expect(page.locator("//h3[text()='545']")).toBeVisible()
//     await expect(page.locator("//h3[text()='70']")).toBeVisible()*/


//     // await adminpg.rates_confirm()
//     // await adminpg.pop_up_yes()
//     // await adminpg.ratemgmtheading()
//   })
//   test("check the schedule without getting approved by admin & when the schedule was inactive shouldn't get display in Dashboard", async ({ adminpg, page }) => {






//   })



//   // rates calculation need to check start, predicted and alos can use in dashboard, but schedule need to be automate
//   // search with scheudle ID
//   // view the rates and not to change anymore
//   // write three predefined rates to check every time coming correctly or not
// })

// test.describe("Holiday", async () => {
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(340000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("rdt@ams.com")
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })

//   test("Check validation & add holiday and search with holiday name", async ({ adminpg, page }) => {
//     /*await adminpg.holiday()
//     await adminpg.holiday_add()
//     await adminpg.holiday_save()
//     await adminpg.holiday_validationmsg()
//     await adminpg.holiday_portcode(data.portcode_holi)
//     await adminpg.holiday_dateclk()
//     await adminpg.holiday_date_choose()
//     await adminpg.holiday_name(data.space_data)
//     await adminpg.holiday_space_validationmsg()
//     await adminpg.holiday_name(data.numeric_data)
//     await adminpg.holiday_name_validationmsg()
//     await adminpg.holiday_name(data.splcharacter_data)
//     await adminpg.holiday_name_validationmsg()

//     await adminpg.holiday_name(data.name_holi)
//     await adminpg.holiday_save()
//     await adminpg.holiday_yes()
//     await adminpg.holiday_search(data.name_holi)
//     await adminpg.asser_holiday()*/

//     await adminpg.holiday()
//     await adminpg.holiday_headingname()
//     await adminpg.holiday_add()
//     await adminpg.holiday_save()
//     await adminpg.holiday_validationmsg()
//     await adminpg.holiday_portcode("INNSA")
//     await adminpg.holiday_name("@#@#!@")
//     await adminpg.holiday_name_validationmsg()
//     await adminpg.holiday_name("34234234")
//     await adminpg.holiday_name_validationmsg()
//     await adminpg.holiday_name("     ")
//     await adminpg.holiday_space_validationmsg()
//     await adminpg.holiday_name("test holiday")
//     await adminpg.holiday_dateclk()
//     await adminpg.holiday_date_choose()

//     await adminpg.holiday_save()
//     await adminpg.holiday_yes()
//     await adminpg.add_holiday_toast()

//     await adminpg.holiday_search("test holiday")
//     await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()
//     await expect(page.locator("//span[text()='Active']")).toBeVisible()
//     await page.reload()

//     await adminpg.holiday()
//     await adminpg.holiday_add()
//     await adminpg.holiday_save()
//     await adminpg.holiday_validationmsg()
//     await adminpg.holiday_portcode("AEJEA")
//     await adminpg.holiday_name("@#@#!@")
//     await adminpg.holiday_name_validationmsg()
//     await adminpg.holiday_name("34234234")
//     await adminpg.holiday_name_validationmsg()
//     await adminpg.holiday_name("     ")
//     await adminpg.holiday_space_validationmsg()
//     await adminpg.holiday_name("test holiday")
//     await adminpg.holiday_dateclk()
//     await adminpg.holiday_date_choose1()
//     await adminpg.holiday_save()
//     await adminpg.holiday_yes()
//     await adminpg.add_holiday_toast()

//     await adminpg.holiday_search("test holiday")
//     await expect(page.locator("(//div[@data-colindex='0'])[1]")).toBeVisible()
//     await expect(page.locator("(//div[@data-colindex='0'])[2]")).toBeVisible()
//     await expect(page.locator("(//span[text()='Active'])[1]")).toBeVisible()
//     await expect(page.locator("(//span[text()='Active'])[2]")).toBeVisible()


//     await page.click("(//div[@style='display: flex; gap: 10px;'])[1]")
//     await adminpg.holiday_name("edit holiday")
//     await page.click("(//button[@name='status'])[2]")
//     await adminpg.holiday_update()
//     await adminpg.holiday_yes()
//     await adminpg.edit_holiday_toast()
//     await page.reload()

//     await adminpg.holiday_search("edit holiday")
//     await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()
//     await expect(page.locator("//span[text()='Inactive']")).toBeVisible()

//   })

//   test("Upload different types of data in Xls file and check validation and search also", async ({ adminpg, page }) => {

//     await adminpg.holiday()
//     await adminpg.holiday_upload("data-files/Works.docx")
//     await adminpg.otherdoc_toast()
//     await page.reload()
//     await adminpg.holiday_upload("data-files/test.pdf")
//     await adminpg.otherdoc_toast()
//     await page.reload()
//     await adminpg.holiday_upload("data-files/sample.png")
//     await adminpg.otherdoc_toast()
//     await page.reload()

//     await adminpg.holiday_upload("data-files/wrong portcode.xls")
//     await adminpg.file_upload_toast()
//     await adminpg.submit_button_file()
//     await adminpg.holiday_yes()
//     await adminpg.invalidportcode_toast()
//     await page.reload()

//     await adminpg.holiday_upload("data-files/wrong date.xls")
//     await adminpg.file_upload_toast()
//     await adminpg.submit_button_file()
//     await adminpg.holiday_yes()
//     await adminpg.invaliddate_toast()
//     await page.reload()

//     await page.pause()
//     await adminpg.holiday_upload("data-files/wrong holiday name.xls")
//     await adminpg.file_upload_toast()
//     await adminpg.submit_button_file()
//     await adminpg.holiday_yes()
//     await adminpg.invalidholidayname_toast()
//     await page.reload()

//     await adminpg.holiday_upload("data-files/valid holiday.xls")
//     await adminpg.file_upload_toast()
//     await adminpg.submit_button_file()
//     await adminpg.holiday_yes()
//     await adminpg.add_holiday_toast()
//     await page.reload()

//     await adminpg.holiday_search("Upload Test One")
//     await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()

//     await adminpg.holiday_search("Upload Test Two")
//     await expect(page.locator("//div[@data-colindex='0']")).toBeVisible()


//   })
// })//done

test.describe("Full Booking", async () => {
  test.beforeEach(async ({ page, baseURL, loginpg }) => {
    await page.goto(`${baseURL}`)
    await loginpg.emailID("thomson@doko.com")
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
  test("checking on each package values on different metrics with Stackable", async ({ page, adminpg }) => {
    test.setTimeout(180000);
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
  test("checking on each package values on different metrics with Non-Stackable", async ({ page, adminpg }) => {
    test.setTimeout(180000);
   // await page.locator("//button[text()='Place Booking']").click()
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
  test("checking on each package values on different metrics with Stackable + Adding Number of packages", async ({ page, adminpg }) => {
    test.setTimeout(180000);
    //await page.pause()
   // await page.locator("//button[text()='Place Booking']").click()
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
  test("checking on each package values on different metrics with Non-Stackable + Adding Number of packages", async ({ page, adminpg }) => {
    test.setTimeout(180000);
  
   // await page.locator("//button[text()='Place Booking']").click()
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
  test("CBM and weight allowance", async ({ page, adminpg }) => {
    test.setTimeout(180000);
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
    await page.pause()
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
  test("All forwarder details and validations", async ({ page, adminpg }) => {

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
        const city =  await page.locator("//select[@name='city']")
        //await city.selectOption("Choose City")
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
    // await page.locator("input[name='hblName']").fill("jaison")
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
      await expect(page.locator("(//p[@title='sanjai.s@doko.com'])[1]")).toBeVisible() //chnage
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

  })  // do one
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


  })  //need check
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
    await page.pause()
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Booking Party'])[1]")).toBeVisible()
    await page.locator("(//button[text()='Book Now '])[1]").click()

    await page.locator("(//h1[text()='nilgiris'])[1]").click()
    await page.locator("//input[@placeholder='Enter Shipper Name']").fill("shipper name")
    await adminpg.continue_to_book()
    await page.waitForSelector("//h2[text()='Receiving Party']")
    
    //receiving party
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()
    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Receiving Party'])[1]")).toBeVisible()
    await page.locator("(//button[text()='Book Now '])[1]").click()

    await page.locator("//h1[text()='destination of cargo']").click()
    await adminpg.continue_to_book()
    //notify party
    //await page.locator("//label[text()='Same as Destination']").click()
    await page.locator("//a[contains(text(),'Dashboard')]").click()
    await page.locator("//a[contains(text(),'Shipments')]").click() 
    await page.locator("//a[contains(text(),'Bookings')]").click()

    await expect(page.locator("(//p[text()='Left at'])[1]")).toBeVisible()
    await expect(page.locator("(//h4[text()='Notify Party'])[1]")).toBeVisible()
    await page.locator("(//button[text()='Book Now '])[1]").click()
    await page.locator("//h1[text()='destination of cargo']").click()
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
    await page.locator("(//button[text()='Book Now '])[1]").click()
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
  test("verify that can able to do pre-booking", async ({ adminpg, page }) => {
    test.setTimeout(180000);
    //await page.locator("//button[text()='Place Booking']").click()
    await page.locator("(//h1[text()='AEJEA'])[2]").click()              /// change
    await page.locator("//button[text()='Continue to Book']").click()
    await page.waitForTimeout(2000)
    await adminpg.package_0(data.Pallets)

    //Booking fee get changed based on maximum cbm and weight in cargo details
    //23.4 cbm and 1560 kgg
    await page.locator("//input[@name='cargoDetails.0.length']").fill("100")
    await page.locator("//input[@name='cargoDetails.0.breadth']").fill("130")
    await page.locator("//input[@name='cargoDetails.0.height']").fill("150")
    await page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill("130")
    await page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill("12")
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
    await page.waitForTimeout(4000)

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
  })//hold

})

// test.describe("Milestone", async () => {
//   test.beforeEach(async ({ page, baseURL, loginpg, adminpg }) => {
//     test.setTimeout(180000);
//     var loop

//     await page.goto(`${baseURL}`)
//     await loginpg.emailID(data.mail)

//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(2000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//     for (loop = 0; loop < 2; loop++) {
//       // Full Complete Booking
//       await page.locator("//button[text()='Place Booking']").click()
//       await page.locator("//div[@class='vesseldiv']").click()
//       await adminpg.continue_to_book()


//       await adminpg.package_0(data.Crates)
//       await adminpg.length_0("50")
//       await adminpg.breadth_0("50")
//       await adminpg.height_0("50")
//       await adminpg.wpp_0("50")
//       await adminpg.nop_0("12")
//       await adminpg.commodity_0(data.commodity)
//       await adminpg.hsn_0(data.hsncode)
//       await page.locator("//input[@name='hazardCheck']").check()
//       await adminpg.continue_to_book()

//       // click on saved address card
//       await page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]").click()
//       await page.waitForTimeout(2000)
//       await page.locator("input[name='hblName']").fill("3244323423")
//       await adminpg.continue_to_book()

//       await page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]").click()
//       await adminpg.continue_to_book()

//       await page.locator("(//div[@class='_AddressCard_h3f7w_1'])[1]").click()
//       await adminpg.continue_to_book()

//       await adminpg.packinggfileupload()
//       await adminpg.continue_to_book()

//       await adminpg.confirm_booking()
//       await adminpg.pop_up_yes()
//       await page.locator("//button[text()='Close']").click()

//       // await page.locator("(//button[text()='View Details '])[1]").click()

//       await page.locator("//a[contains(text(),'Dashboard')]").click()
//     }
//     await page.close()
//   })
//   test("Milestone with basic Flow and PDF check", async ({ loginpg, adminpg, page, baseURL }) => {

//     test.setTimeout(180000);
//     await loginpg.logout_mile()
//     await page.goto(`${baseURL}`)
//     // SO RELEASED

//     await adminpg.otlogin_mile()

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("(//button[text()='Confirm'])[2]")
//     await loginpg.logout_mile_OT()

//     ////CARGO RECEIVED AT CFS, SURVEY COMPLETED AND REVISED MEASUREMENTS
//     await adminpg.oripartner_mile()

//     await expect(page.locator("//span[text()='Cargo Received by CFS']")).toHaveText("Cargo Received by CFS")
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//button[text()='Confirm']")

//     await expect(page.locator("//span[text()='Survey Completed']")).toHaveText("Survey Completed")
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     await loginpg.logout_mile()

//     //CONTAINER AND SEAL NUMBER
//     await adminpg.otlogin_mile()
//     await page.click("//button[text()=' Back']")
//     await page.click("//button[text()='Container Management']")
//     await page.locator("//input[@placeholder='Enter Container Number']").type("conone")
//     await page.locator("//input[@placeholder='Enter Seal Number']").type("seaone")
//     await page.click("//button[@type='submit']")
//     await page.click("//button[text()='Yes']")
//     await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")   // will change
//     await page.click("(//button[text()='View Info'])[8]")                      // WILL CHANGE


//     await loginpg.logout_mile_OT()

//     // STUFFING REPORT GENERATED
//     await adminpg.oripartner_mile()

//     await expect(page.locator("//span[text()='Stuffing Report Generated']")).toHaveText("Stuffing Report Generated")
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     await loginpg.logout_mile()

//     // SHIPPING INSTRUCTION UPLOADED
//     await adminpg.fflogin_mile()

//     await expect(page.locator("//span[text()='Shipping Instruction Uploaded']")).toHaveText("Shipping Instruction Uploaded")
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     //SHIPPING BILL UPLOADED

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//button[@aria-label='Choose date']")
//     await page.click("//button[text()='24']")
//     await page.locator("//input[@placeholder='Enter Shipping Bill']").fill("shipping bill")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     await loginpg.logout_mile()

//     //SEA WAYBILL DRAFT GENERATED

//     await adminpg.otlogin_mile()

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@placeholder='Enter Sea Waybill Number']").fill("Sea Waybill Number")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("(//button[text()='Confirm'])[2]")

//     await page.locator("//input[@id='Invoice']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     await loginpg.logout_mile_OT()

//     await adminpg.fflogin_mile()
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@id='forwarderHblNo']").fill("Forwarder HBL No")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[@type='submit']")

//     ///////////////////// Above payment complete steps

//     await page.click("(//button[text()='Confirm'])[1]")
//     await page.locator("//input[@placeholder='Enter UTR Number']").fill("UTR")
//     await page.click("//button[@aria-label='Choose date']")
//     await page.click("//button[text()='24']")
//     await page.click("//button[text()='Confirm Details']")

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//button[@type='submit']")             /// with document also

//     await loginpg.logout_mile()

//     await adminpg.otlogin_mile()
//     ////////////////// Above payment complete step
//     await page.click("//button[text()='Confirm payment']")

//     // await page.click("//button[text()=' Back']")
//     // await page.click("//button[text()='Container Management']")
//     //  // select the date from ATD
//     //  await page.click("(//button[@aria-label='Choose date'])[2]")
//     //  await page.click("//button[text()='18']")

//     // await page.click("//button[@type='submit']")
//     // await page.click("//button[text()='Yes']")
//     // await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")   // WILL CHANGE
//     await page.click("(//button[text()='View Info'])[5]")             // WILL CHANGE


//     await adminpg.otlogin_mile()                    /////////////////remove 
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@placeholder='Enter Marks & Numbers']").fill("Marks and Numbers")
//     await page.click("//button[text()='Confirm']")

//     // await page.click("//button[text()=' Back']")
//     // await page.click("//button[text()='Container Management']")
//     //  // select the date from ATA
//     //  await page.click("(//button[@aria-label='Choose date'])[2]")
//     //  await page.click("//button[text()='26']")

//     // await page.click("//button[@type='submit']")
//     // await page.click("//button[text()='Yes']")
//     // await page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")     // WILL CHANGE
//     // await page.click("(//button[text()='View Info'])[8]")            // WILL CHANGE


//     await loginpg.logout_mile_OT()

//     await adminpg.destpartner_mile()
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//button[text()='Confirm']")

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//button[@aria-label='Choose date']")
//     await page.click("//button[text()='24']")
//     await page.click("//button[text()='Confirm']")

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
//     await page.click("//button[text()='Confirm']")

//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//button[@aria-label='Choose date']")
//     await page.click("//button[text()='24']")
//     await page.click("//button[text()='Confirm']")

//     await loginpg.logout_mile()

//     await adminpg.otlogin_mile()
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//button[text()='Confirm']")

//     await loginpg.logout_mile_OT()

//     await adminpg.destpartner_mile()
//     await page.click("//div[@id='currentStep']//button[1]")
//     await page.click("//input[@aria-label='Choose date']")
//     await page.click("//button[text()='24']")
//     await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
//     await page.click("//div[@class='MuiClock-squareMask css-1umqo6f']")
//     await page.click("//button[text()='OK']")

//     await page.click("//button[text()='Confirm']")

//     await loginpg.logout_mile()
//     await page.close()

//   })
//   test("Milestone with basic Flow and PDF checkcc", async ({ loginpg, adminpg, page, baseURL }) => {
//     test.setTimeout(180000);
//     await page.goto(`${baseURL}`)
//     // await page.pause()  
//     await adminpg.oripartner_mile()
//     await adminpg.fileupload()

//     await loginpg.logout_mile()
//   })
// })

// test.describe("My account", async () => {
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type1)
//     await loginpg.emailID("thomson@doko.com") //change
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(5000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })
//   test("verify able to change the details and switch the port ", async ({ adminpg, page }) => {

//     //await page.locator("//button[text()='Place Booking']").click()
//     await adminpg.ff_name()
//     await adminpg.my_account()
//     await adminpg.edit_details()
//     await page.locator("//input[@id='fullName']").clear()
//     await page.locator("//input[@id='Mobile']").clear()
//     await adminpg.edit_submit()

//     await expect(page.locator("//p[text()='Full Name is required']")).toBeVisible()
//     await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()

//     await adminpg.edit_fullname(data.numeric_data)
//     await adminpg.full_name_val1()
//     await adminpg.edit_fullname(data.splcharacter_data)
//     await adminpg.full_name_val1()
//     await adminpg.edit_fullname(data.space_data)
//     await adminpg.full_name_val()

//     await adminpg.edit_fullname(data.full_name)

//     await adminpg.edit_mobile("12345678901")
//     await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
//     await adminpg.edit_mobile(data.phone)
//     await adminpg.edit_submit()

//     await page.reload
//     await adminpg.assert_fullname()
//     await adminpg.assert_phonenumb()
//     await expect(page.locator("//input[@id='email']")).toHaveValue("thomson@doko.com")// change
//     await expect(page.locator("//input[@id='Company Name']")).toHaveValue("fvp")

//     await page.locator("//button[@value='innsa']").click()
//     await page.locator("//a[contains(text(),'Dashboard')]").click()
//     // schedule name assert need to add
//     await expect(page.locator("(//h1[text()='INNSA'])[1]")).toBeVisible()
//     await expect(page.locator("(//h1[text()='INNSA'])[2]")).toBeVisible()
//     await expect(page.locator("(//h1[text()='INNSA'])[3]")).toBeVisible()
//     await expect(page.locator("(//h1[text()='INNSA'])[4]")).toBeVisible()

//     await adminpg.ff_name()
//     await adminpg.my_account()
//     await page.locator("//button[@value='inmaa']").click()
//     await page.locator("//a[contains(text(),'Dashboard')]").click()
//     // schedule name assert need to add
//     await expect(page.locator("(//h1[text()='INMAA'])[1]")).toBeVisible()
//     await expect(page.locator("(//h1[text()='INMAA'])[2]")).toBeVisible()
//     await expect(page.locator("(//h1[text()='INMAA'])[3]")).toBeVisible()
//     await expect(page.locator("(//h1[text()='INMAA'])[4]")).toBeVisible()

//     //BOOKING PARTY SAVED ADDRESS MY ACCOUNT 
//     await adminpg.ff_name()
//     await adminpg.my_account()
//     await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
//     await expect(page.locator("//span[text()='sanjai.s@doko.com']")).toBeVisible()
//     await expect(page.locator("//p[text()='+918870050284']")).toBeVisible()
//     await expect(page.locator("//p[text()='Name']")).toBeVisible()
//     await expect(page.locator("//h4[text()='sanjai']")).toBeVisible()
//     await expect(page.locator("//p[text()='in']")).toBeVisible()

//     await expect(page.locator("//h1[text()='Saved Booking Party']")).toBeVisible()
//     await expect(page.locator("(//p[text()='1'])[4]")).toBeVisible()
//     await expect(page.locator("//p[text()=' - Booking Parties Added']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("nilgiris")
//     await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("NilGiris")
//     await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("    NilGiris")
//     await expect(page.locator("//h1[text()='nilgiris']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("NIGIRIS")
//     await page.locator("//input[@placeholder='Search Forwarders']").fill(data.space_data)
//     await page.locator("//h1[text()='nilgiris']").click()

//     // check values

//     await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
//     await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
//     await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
//     await expect(page.locator("//input[@name='countryName']")).toBeDisabled()
//     // await expect(page.locator("//option[text()='India']")).toHaveValue("India")
//     // await page.pause()
//     // await expect(page.locator("//option[text()='Tamil Nadu']")).toHaveValue("Tamil Nadu")
//     // await expect(page.locator("//option[text()='Nilgiris']")).toHaveValue("Nilgiris")
//     await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
//     await expect(page.locator("input[placeholder='Enter pincode']")).toHaveValue("123234")
//     await expect(page.locator("//p[text()='fivemb.pdf']")).toBeVisible()
//     await page.locator("//button[text()='Close']").click()
//     await page.waitForTimeout(2000)
//     await expect(page.locator("//div[text()='Updated Successfully']")).toBeHidden()

    
//     await page.locator("//h1[text()='nilgiris']").click()
//     await page.locator("//input[@placeholder='Enter pincode']").fill("123222")    
//     await page.locator("//button[text()='Save Changes']").click()
//     await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
//     await page.waitForTimeout(2000)
//     await expect(page.locator("//p[text()='2']")).toBeVisible()

//     await page.locator("(//h1[text()='Nilgiris'])[2]").click()
//     // check values

//     await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
//     await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
//     await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
//     await expect(page.locator("//input[@name='countryName']")).toBeDisabled()
//     // await expect(page.locator("//option[text()='India']")).toHaveValue("India")
//     // await page.pause()
//     // await expect(page.locator("//option[text()='Tamil Nadu']")).toHaveValue("Tamil Nadu")
//     // await expect(page.locator("//option[text()='Nilgiris']")).toHaveValue("Nilgiris")
//     await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
//     await expect(page.locator("input[placeholder='Enter pincode']")).toHaveValue("123222")
//     await expect(page.locator("//p[@title='fivemb.pdf']")).toBeVisible()


//     await page.locator("input[name='doorNo']").clear()
//     await page.locator("input[name='building']").clear()
//     await page.locator("input[name='street']").clear()
//     await page.locator("input[name='area']").clear()
//     await page.locator("input[placeholder='Enter pincode']").clear()
//     await page.locator("//button[text()='Remove']").click()


//     await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill("dsdfsdss")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("#")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("/")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("122")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
//     await page.locator("input[name='building']").fill("#@$%^$%&")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
//     await page.locator("input[name='building']").fill("43243")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
//     await page.locator("input[name='building']").fill("     ")
//     await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
//     await page.locator("input[name='building']").fill("Ispahani building")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
//     await page.locator("input[name='street']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
//     await page.locator("input[name='street']").fill("!@#$%^&*")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
//     await page.locator("input[name='street']").fill("2738273")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
//     await page.locator("input[name='street']").fill("uthaman gandhi street")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
//     await page.locator("input[name='area']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
//     await page.locator("input[name='area']").fill("#$%^&*")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("input[name='area']").fill("3523423")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("input[name='area']").fill("nungambakkam")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
//     await expect(page.locator("//span[text()='Area is required']")).toBeHidden()
    
//     // need to finout one way for india assertion
//     await expect(page.locator("//option[text()='kndia']")).toBeHidden()//toHaveValue("India")

//     await expect(page.locator("//span[text()='State is required']")).toBeVisible()
//     var state = await page.locator("//select[@name='state']")
//     await state.selectOption("Choose State")
//     await expect(page.locator("//span[text()='State is required']")).toBeVisible()
//     await adminpg.Addforwarder_sel_jstate()
//     await expect(page.locator("//span[text()='State is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='City is required']")).toBeVisible()
//     const city =  await page.locator("//select[@name='city']")
//     //await city.selectOption("Choose City")
//     await expect(page.locator("//span[text()='City is required']")).toBeVisible()
//     await adminpg.Addforwarder_sel_jcity()
//     await expect(page.locator("//span[text()='City is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Pincode is required']")).toBeVisible()
//     await page.locator("input[placeholder='Enter pincode']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Pincode is required']")).toBeVisible()
//     await page.locator("input[placeholder='Enter pincode']").fill(data.alphabets_data)
//     await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible()
//     await page.locator("input[placeholder='Enter pincode']").fill(data.splcharacter_data)
//     await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeVisible()
//     await page.locator("input[placeholder='Enter pincode']").fill("12")
//     await expect(page.locator("//span[text()='Should contain atleast 6 numbers']")).toBeVisible() 
//     await page.locator("input[placeholder='Enter pincode']").fill("123222")
//     await expect(page.locator("//span[text()='Should contain atleast 6 numbers']")).toBeHidden() 
//     await expect(page.locator("//span[text()='Only numbers are allowed']")).toBeHidden()
//     await expect(page.locator("//span[text()='Pincode is required']")).toBeHidden()
//     await page.locator("//button[text()='Save Changes']").click()
//     await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
//     await page.waitForTimeout(2000)
     
//     //receiving party saved address in my account

//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await expect(page.locator("//span[text()='dest12@gmail.com']")).toBeVisible()
//     await expect(page.locator("//p[@title='+9711234567']")).toBeVisible()
//     await expect(page.locator("//p[text()='Name']")).toBeVisible()
//     await expect(page.locator("//h4[text()='sanjai']")).toBeVisible()
//     await expect(page.locator("//p[text()='ae']")).toBeVisible()

//     await page.locator("//button[text()='Destination Handling']").click()
//     await expect(page.locator("//h1[text()='Saved Receiving Party']")).toBeVisible()
//     await expect(page.locator("(//p[text()='1'])[4]")).toBeVisible()
//     await expect(page.locator("//p[text()=' - Receiving Parties Added']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("destination") //change
//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("Destination")    //chnage
//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("    DesTination") //change
//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("DESTINATION")   //change
//     await page.locator("//input[@placeholder='Search Forwarders']").fill(data.space_data)
//     await page.locator("//h1[text()='destination of cargo']").click()
// // check values

// await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
// await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
// await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
// await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
// await adminpg.Addforwarder_country()
// await expect(page.locator("//input[@name='state']")).toHaveValue("New dest state")
// await expect(page.locator("//input[@name='city']")).toHaveValue("New dest city")
// await page.locator("//button[text()='Close']").click()
// await expect(page.locator("//div[text()='Updated Successfully']")).toBeHidden()
// await page.waitForTimeout(2000)


//     await page.locator("//h1[text()='destination of cargo']").click()
//     await page.locator("input[name='doorNo']").clear()
//     await page.locator("input[name='building']").clear()
//     await page.locator("input[name='street']").clear()
//     await page.locator("input[name='area']").clear()
//     await page.locator("//input[@name='state']").clear()
//     await page.locator("//input[@name='city']").clear()

//     await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
//     //await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
//     await expect(page.locator("//span[text()='Enter valid door number']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill("dsdfsdss")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("#")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("/")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("122")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
//     await page.locator("input[name='building']").fill("#@$%^$%&")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
//     await page.locator("input[name='building']").fill("43243")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
//     await page.locator("input[name='building']").fill("     ")
//     await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
//     await page.locator("input[name='building']").fill("Ispahani building")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
//     await page.locator("input[name='street']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
//     await page.locator("input[name='street']").fill("!@#$%^&*")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
//     await page.locator("input[name='street']").fill("2738273")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
//     await page.locator("input[name='street']").fill("uthaman gandhi street")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
//     await page.locator("input[name='area']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
//     await page.locator("input[name='area']").fill("#$%^&*")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("input[name='area']").fill("3523423")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("input[name='area']").fill("nungambakkam")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
//     await expect(page.locator("//span[text()='Area is required']")).toBeHidden()

//     await adminpg.Addforwarder_country()
//     await expect(page.locator("//span[text()='State is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill(data.space_data)
//     await expect(page.locator("//span[text()='State is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill("#$%^&*")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill("3523423")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill("New dest state")

//     await expect(page.locator("//span[text()='City is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill(data.space_data)
//     await expect(page.locator("//span[text()='City is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill("#$%^&*")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill("3523423")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill("New dest city")  

//     await page.locator("//button[text()='Save Changes']").click()
//     await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
//     await page.waitForTimeout(2000)

//     //notify party saved address in my account

//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await expect(page.locator("//span[text()='dest12@gmail.com']")).toBeVisible()
//     await expect(page.locator("//p[@title='+9711234567']")).toBeVisible()
//     await expect(page.locator("//p[text()='Name']")).toBeVisible()
//     await expect(page.locator("//h4[text()='sanjai']")).toBeVisible()
//     await expect(page.locator("//p[text()='united arab emirates']")).toBeVisible()

//     await page.locator("//button[text()='Notify Party']").click()
//     await expect(page.locator("//h1[text()='Saved Notify Party']")).toBeVisible()
//     await expect(page.locator("(//p[text()='1'])[4]")).toBeVisible()
//     await expect(page.locator("//p[text()=' - Notify Parties Added']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("destination") //change
//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("Destination")    //chnage
//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("    DesTination") //change
//     await expect(page.locator("//h1[text()='destination of cargo']")).toBeVisible()
//     await page.locator("//input[@placeholder='Search Forwarders']").fill("DESTINATION")   //change
//     await page.locator("//input[@placeholder='Search Forwarders']").fill(data.space_data)
//     await page.locator("//h1[text()='destination of cargo']").click()
    
// // check values

// await expect(page.locator("input[name='doorNo']")).toHaveValue("122")
// await expect(page.locator("input[name='building']")).toHaveValue("Ispahani building")
// await expect(page.locator("input[name='street']")).toHaveValue("uthaman gandhi street")
// await expect(page.locator("input[name='area']")).toHaveValue("nungambakkam")
// await expect(page.locator("//input[@name='country']")).toHaveValue("united arab emirates")
// await expect(page.locator("//input[@name='state']")).toHaveValue("New dest state")
// await expect(page.locator("//input[@name='city']")).toHaveValue("New dest city")
// await page.locator("//button[text()='Close']").click()
// await expect(page.locator("//div[text()='Updated Successfully']")).toBeHidden()
// await page.waitForTimeout(2000)

//     await page.locator("//h1[text()='destination of cargo']").click()
//     await page.locator("input[name='doorNo']").clear()
//     await page.locator("input[name='building']").clear()
//     await page.locator("input[name='street']").clear()
//     await page.locator("input[name='area']").clear()
//     await page.locator("//input[@name='country']").clear()
//     await page.locator("//input[@name='state']").clear()
//     await page.locator("//input[@name='city']").clear()

//     await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill("#@$%^$&^%$")
//     //await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeVisible()
//     await expect(page.locator("//span[text()='Enter valid door number']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Door Number is required']")).toBeVisible()
//     await page.locator("input[name='doorNo']").fill("dsdfsdss")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("#")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("/")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await page.locator("input[name='doorNo']").fill("122")
//     await expect(page.locator("//span[text()='Enter valid Door Number']")).toBeHidden()
//     await expect(page.locator("//span[text()='Door Number is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
//     await page.locator("input[name='building']").fill("#@$%^$%&")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
//     await page.locator("input[name='building']").fill("43243")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()
//     await page.locator("input[name='building']").fill("     ")
//     await expect(page.locator("//span[text()='Building is required']")).toBeVisible()
//     await page.locator("input[name='building']").fill("Ispahani building")
//     await expect(page.locator("//span[text()='Building is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
//     await page.locator("input[name='street']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Street is required']")).toBeVisible()
//     await page.locator("input[name='street']").fill("!@#$%^&*")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
//     await page.locator("input[name='street']").fill("2738273")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()
//     await page.locator("input[name='street']").fill("uthaman gandhi street")
//     await expect(page.locator("//span[text()='Street is required']")).toBeHidden()

//     await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
//     await page.locator("input[name='area']").fill(data.space_data)
//     await expect(page.locator("//span[text()='Area is required']")).toBeVisible()
//     await page.locator("input[name='area']").fill("#$%^&*")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("input[name='area']").fill("3523423")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("input[name='area']").fill("nungambakkam")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeHidden()
//     await expect(page.locator("//span[text()='Area is required']")).toBeHidden()

//     await adminpg.Addforwarder_country()
//     await expect(page.locator("//span[text()='State is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill(data.space_data)
//     await expect(page.locator("//span[text()='State is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill("#$%^&*")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill("3523423")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter State']").fill("New dest state")

//     await expect(page.locator("//span[text()='City is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill(data.space_data)
//     await expect(page.locator("//span[text()='City is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill("#$%^&*")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill("3523423")
//     await expect(page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter City']").fill("New dest city")  

//     await page.locator("//button[text()='Save Changes']").click()
//     await expect(page.locator("//div[text()='Updated Successfully']")).toBeVisible()
//     await page.waitForTimeout(2000)
//     await page.locator("//button[text()='Origin Handling']").click()

//     ////////////////// sub users
// // if sub user delete manually means shows popup and toast message
// //1
//     await page.locator("//button[text()='Add Member']").click()
//     await page.locator("//button[@type='submit']").click()
//     await expect(page.locator("//p[text()='Name is required']")).toBeVisible()
//     await expect(page.locator("//p[text()='Email is required']")).toBeVisible()
//     await expect(page.locator("//p[text()='Mobile Number is required']")).toBeVisible()
//     await expect(page.locator("//input[@name='legalName']")).toBeDisabled()

//     await page.locator("//input[@id='fullName']").fill("#@$#$%#$")
//     await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@id='fullName']").fill("837878291")
//     await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
//     await page.locator("//input[@id='fullName']").fill("      ")
//     await expect(page.locator("//p[text()='Name is required']")).toBeVisible()
//     await page.locator("//input[@id='fullName']").fill("darwin c")
//     await expect(page.locator("//p[text()='Only alphabets are allowed']")).toBeHidden()

//     await page.locator("//input[@name='email']").fill("#@$#$%#$")
//     await expect(page.locator("//p[text()='Enter Valid Email']")).toBeVisible()
//     await page.locator("//input[@name='email']").fill("thomson")
//     await expect(page.locator("//p[text()='Email already exist']")).toBeVisible()
//     await page.locator("//input[@name='email']").fill("darwin.c")   
//     await expect(page.locator("//p[text()='Enter Valid Email']")).toBeHidden()

//     await page.locator("//input[@name='mobileNumber']").fill("88700502844")
//     await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
//     await page.locator("//input[@name='mobileNumber']").fill("887005028")
//     await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeVisible()
//     await page.locator("//input[@name='mobileNumber']").fill("8870050284")
//     await expect(page.locator("//p[text()='Enter Valid Mobile Number']")).toBeHidden()
//     await page.locator("//button[@type='submit']").click()
//     await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()
   
//     await expect(page.locator("//h1[text()='darwin c']")).toBeVisible()
//     await expect(page.locator("//span[text()='darwin.c@doko.com']")).toBeVisible()
//     await expect(page.locator("//p[text()='+91 8870050284']")).toBeVisible()
//     //2
//     await page.locator("//button[text()='Add Member']").click()
//     await page.locator("//input[@id='fullName']").fill("wilson")
//     await page.locator("//input[@name='email']").fill("wilson.c")
//     await page.locator("//input[@name='mobileNumber']").fill("8870050282")
//     await page.locator("//button[@type='submit']").click()
//     await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()

//     await expect(page.locator("//h1[text()='wilson']")).toBeVisible()
//     await expect(page.locator("//span[text()='wilson.c@doko.com']")).toBeVisible()
//     await expect(page.locator("//p[text()='+91 8870050282']")).toBeVisible()
//     //3
//     await page.locator("//button[text()='Add Member']").click()
//     await page.locator("//input[@id='fullName']").fill("bush")
//     await page.locator("//input[@name='email']").fill("bush.c")
//     await page.locator("//input[@name='mobileNumber']").fill("8870050289")
//     await page.locator("//button[@type='submit']").click()
//     await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()

//     await expect(page.locator("//h1[text()='bush']")).toBeVisible()
//     await expect(page.locator("//span[text()='bush.c@doko.com']")).toBeVisible()
//     await expect(page.locator("//p[text()='+91 8870050289']")).toBeVisible()
//     //4
//     await page.locator("//button[text()='Add Member']").click()
//     await page.locator("//input[@id='fullName']").fill("yung")
//     await page.locator("//input[@name='email']").fill("yung.c")
//     await page.locator("//input[@name='mobileNumber']").fill("8870040282")
//     await page.locator("//button[@type='submit']").click()
//     await expect(page.locator("//div[text()='User Added Successfully']")).toBeVisible()

//     await expect(page.locator("//h1[text()='yung']")).toBeVisible()
//     await expect(page.locator("//span[text()='yung.c@doko.com']")).toBeVisible()
//     await expect(page.locator("//p[text()='+91 8870040282']")).toBeVisible()
    
    
    






//   })
//   // test.only("urgent", async({adminpg, page})=>{
//   //    //await page.pause()
//   //   await page.waitForTimeout(4000)
//   //   await page.locator("//button[text()='Confirm My Choices']").click()
//   //   await page.locator("//a[text()='Close']").click()

//   //   await page.locator("//span[text()='Log in']").click()
//   //   await page.waitForTimeout(2000)
//   //   await page.locator("#signInName").type("opex@dokonaly.com")
//   //   await page.locator("#password").type("Hapag@2021")
//   //   await page.locator("//button[@id='next']").click()

//   //   await page.waitForTimeout(2000)
//   //   await expect(page.locator("hal-navigation-top-login-text-headline")).toBeVisible()



//   // })
// }) //need check

// test.describe("user management", async () => {
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("obt@ams.com") //change
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(5000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })
//   test("t ", async ({ adminpg, page }) => {//button[text()='Approve']//button[text()='Reject']//button[text()='Revalidate']
//     //p[text()='Registration']
//     //p[text()='New']
//     //h3[text()='Team Details']
//     //div[text()='sanjai.s@allmaters.ai']   /// update mail id //div[text()='sanjai.s@allmaters.ai'] clikc
//     //h4[text()='compan']
//     //p[text()='Country']
//     //p[text()='State']
//     //p[text()='City']
//     //p[text()='PAN']
//     //p[text()='Trader License']
//     //p[text()='Documents']
//     //div[text()='FULL NAME']
//     //div[text()='MOBILE']
//     //div[text()='EMAIL']
//     //div[text()='Status']

//     //p[text()='india']
//     //p[text()='Gujarat']
//     //p[text()='Idar']
//     //p[text()='SOIAS9382K']
//     //p[text()='Cx']
//     //a[contains(text(),'33OEIRS9382AWZO')]
//     //a[contains(text(),'BL file')]
//     //div[@title='Yiug']
//     //div[@title='3873829833']
//     //div[@title='sanjai.s@allmaters.ai']
//     //span[text()='Inactive']





//     //div[text()='Revalidate Reasons']
//     //label[@for='legalEntity']
//     //label[@for='gstinCerti']
//     //label[@for='panNumber']
//     //label[@for='mtoTrador']
//     //label[@for='blCopy']
//     //label[@for='coiCopy']
//     //label[@for='other']
//     //(//div[@class='Toastify__toast-body']//div)[2]
//     //div[text()='Status Updated Successfully']
//     //h3[text()='Re-Validated Users']


//     //button[text()='Close']

//     //label[text()='SHIPMNTS Customer ID']
//     //input[@placeholder='SHIPMNTS Customer ID']

//   })
// })

// test("change password", async({page, adminpg, loginpg, baseURL})=>{

//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
    
//     for(let pass=0; pass<=3; pass++){
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID(data.cred[pass]) //change
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(5000)
//     const input2 = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input2) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
 
// // obt
//   await page.locator("//span[text()='Change Password']").click()
//   await expect(page.locator("//h5[text()='Change Password']")).toBeVisible()
//   await expect(page.locator("//label[text()='Current Password']")).toBeVisible()
//   await expect(page.locator("//label[text()='New Password']")).toBeVisible()
//   await expect(page.locator("//label[text()='Confirm Password']")).toBeVisible()

//   await page.locator("//button[text()='Continue']").click()
//   await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
//   await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
//   await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible()

//   await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
//   await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
//   await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
//   await page.locator("//input[@placeholder='Confirm New Password']").fill("     ")
//   await expect(page.locator("//p[text()='Confirm password is required']")).toBeVisible() ///doic

  
//   await page.locator("//input[@placeholder='Enter current Password']").fill("    ")
//   await expect(page.locator("//p[text()='Current Password is required']")).toBeVisible()
//   await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")

//     await page.locator("//input[@placeholder='Enter New Password']").fill("    ")
//     await expect(page.locator("//p[text()='New Password is required']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter New Password']").fill("3233222")
//     await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter New Password']").fill("fsddsfdfdf")
//     await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter New Password']").fill("%#^&*###")
//     await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter New Password']").fill("Doko2023")
//     await expect(page.locator("//p[text()='Invalid password format']")).toBeVisible()
//     await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")

//     await page.locator("//input[@placeholder='Confirm New Password']").fill("    ")
//     await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
//     await page.locator("//input[@placeholder='Confirm New Password']").fill("doko@2023")
//     await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
//     await page.locator("//input[@placeholder='Confirm New Password']").fill("dOko@2023")
//     await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
//     await page.locator("//input[@placeholder='Confirm New Password']").fill("doKo@2023")
//     await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
//     await page.locator("//input[@placeholder='Confirm New Password']").fill("dokO@2023")
//     await expect(page.locator("//p[text()='Password does not match']")).toBeVisible()
//     await page.locator("//input[@placeholder='Confirm New Password']").fill("Doko@2023")
//     await expect(page.locator("//p[text()='Password does not match']")).toBeHidden()
//     await page.locator("//button[text()='Continue']").click()

//     await expect(page.locator("//div[text()=' Invalid Password']")).toBeVisible()

//     await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2023")
//     await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2022")
//     await page.locator("//input[@placeholder='Confirm New Password']").fill("Doko@2022")
//     await page.locator("//button[text()='Continue']").click()
//     await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
//     await page.locator("//li[text()='Sign Out']").click()

//     await loginpg.select_type(data.type3)
//     await loginpg.emailID(data.cred[pass]) //change
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await expect(page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()
//     await loginpg.password("Doko@2022")
//     await loginpg.sign_in()
//     await page.waitForTimeout(5000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   await page.locator("//span[text()='Change Password']").click()
//   await page.locator("//input[@placeholder='Enter current Password']").fill("Doko@2022")
//   await page.locator("//input[@placeholder='Enter New Password']").fill("Doko@2023")
//   await page.locator("//input[@placeholder='Confirm New Password']").fill("Doko@2023")
//   await page.locator("//button[text()='Continue']").click()
//   await expect(page.locator("//div[text()='Password changed Successfully']")).toBeVisible()
//   await page.locator("//li[text()='Sign Out']").click()

//   await loginpg.select_type(data.type3)
//     await loginpg.emailID(data.cred[pass]) //change
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(5000)
//     const input1 = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input1) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//     await page.locator("//li[text()='Sign Out']").click()
//   }
// })  //done
// test.describe("Feedback", async() => {
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("admin@ams.com") //change
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(5000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })
//   test("feed", async({page})=>{

//   await page.locator("//span[text()='Feedback']").click()
//   await expect(page.locator("//h3[text()='Feedback Management']")).toBeVisible()
//   for(let i=1; i<=3; i++){
//     await page.locator("//div[text()='All']").click()
//   for(let co=1; co<=3; co++){
//   await page.locator(data.loc[co]).click()
  
//   await expect(page.locator("//div[text()='Booking ID']")).toBeVisible()
//   await expect(page.locator("//div[text()='Category']")).toBeVisible()
//   await expect(page.locator("//div[text()='Company Name']")).toBeVisible()
//   await expect(page.locator("//div[text()='Rating']")).toBeVisible()
//   await expect(page.locator("//div[text()='Comments']")).toBeVisible()
//   }}
//   await page.locator("//div[text()='All']").click()
//   await page.locator("//li[text()='Product Feedback']").click()
//   await expect(page.locator("(//span[text()='Product Feedback'])[1]")).toBeVisible()
//   await expect(page.locator("//span[text()='legal xompany']")).toBeVisible()
//   await expect(page.locator("//span[text()='8']")).toBeVisible()
//   await expect(page.locator("//span[text()='kio']")).toBeVisible()
  
//   await page.locator("//div[text()='All']").click()
//   await page.locator("//li[text()='Service Feedback']").click()
//   await expect(page.locator("(//span[text()='Product Feedback'])[1]")).toBeHidden()
//   await expect(page.locator("//span[text()='legal xompany']")).toBeHidden()
//   await expect(page.locator("//span[text()='8']")).toBeHidden()
//   await expect(page.locator("//span[text()='kio']")).toBeHidden() 
  
//   await page.locator("//div[text()='All']").click()
//   await page.locator("//li[text()='All']").click()
//   await expect(page.locator("(//span[text()='Product Feedback'])[1]")).toBeHidden()
//   await expect(page.locator("//span[text()='legal xompany']")).toBeHidden()
//   await expect(page.locator("//span[text()='8']")).toBeHidden()
//   await expect(page.locator("//span[text()='kio']")).toBeHidden()

//   })

//   // (//span[@data-index='8'])[2]
//   // (//span[@data-index='0'])[2]
//   // //p[text()='Zero is not allowed']
//   // (//span[@data-index='3'])[2]
//   // //p[text()='What did you not like about the Product ?']
//   // (//span[@data-index='6'])[2]
//   // //p[text()='What could be made better?']
//   // (//span[@data-index='8'])[2]
//   // //p[text()='What did you like the most about the Product?']
//   // //p[text()='Enter a value for this field.']
  

// })
// test.describe("About", async() =>{
//   test.beforeEach(async ({ page, baseURL, loginpg }) => {
//     test.setTimeout(3600000)
//     await page.goto(`${baseURL}`)
//     await loginpg.select_type(data.type3)
//     await loginpg.emailID("admin@ams.com") //change
//     await loginpg.password("Doko@2023")
//     await loginpg.sign_in()
//     await page.waitForTimeout(5000)
//     const input = await page.isVisible("//h2[text()='User Already Logged In']")
//     if (input) {
//       console.log('Pop-up is visible.');
//       await page.click("//button[text()='Yes']")
//     }
//     else {
//       console.log('Pop-up is not visible.');
//     }
//   })
// })
