import { Page , expect} from "@playwright/test";
const date_1 = new Date()
let date = date_1.getDate()
let month = date_1.getMonth() + 1
let year = date_1.getFullYear()
const currentdate = (`${date}-${month}-${year}`)
export default class{
       constructor ( public page:Page){}
       async country_head(){
        await expect(this.page.locator("//h3[text()='Countries']")).toHaveText("Countries")    
       }
       //li[text()='Sign Out']
       async search_country(searchcoun:string){
        await this.page.locator("//input[@placeholder='Search Country']").fill(searchcoun)
       }//div[text()='India']
       async search_country_one(){
        await expect(this.page.locator("(//div[@data-field='countryName'])[2]")).toBeVisible()
       }
       async country(coun:string){
        const save = await this.page.locator("//input[@id='Country']")
        await save.scrollIntoViewIfNeeded()
        await save.fill(coun)
       }
       async countrycode(searchcoun:string){
        const save = await this.page.locator("//input[@id='InputEmail1']")
        await save.scrollIntoViewIfNeeded()
        await save.fill(searchcoun)
       }
       async region(rg:string){
        const reg = await this.page.locator("//select[@id='Region']")
        await reg.selectOption(rg)
       }
       async currency(searchcoun:string){
        await this.page.locator("//input[@id='Currency']").fill(searchcoun)
       }
       async rate(searchcoun:string){
        await this.page.locator("//input[@id='ExchangeRate']").fill(searchcoun)
       }
       async phonecode(searchcoun:string){
        await this.page.locator("//input[@id='phonecode']").fill(searchcoun)
       }
       async numberformat(searchcoun:string){
        await this.page.locator("//input[@id='numberFormat']").fill(searchcoun)
       }

      async edit_country(){
       await this.page.locator("(//div[contains(@class,'MuiDataGrid-cell--withRenderer MuiDataGrid-cell')]//div)[3]").click()
      }
      async filters(){
       await this.page.locator("//div[@role='button']").click()
      }
      async filter_asia(){
       await this.page.locator("//li[text()='Asia']").click()
      }
      async filter_Africa(){
       await this.page.locator("//li[text()='Africa']").click()
      }
      async filter_Australia(){
       await this.page.locator("//li[text()='Australia']").click()
      }
      async filter_NorthAmerica(){
       await this.page.locator("//li[text()='North America']").click()
      }
      async filter_SouthAmerica(){
       await this.page.locator("//li[text()='South America']").click()
      }
      async filter_CentralAmerica(){
       await this.page.locator("//li[text()='Central America']").click()
      }
      async filter_Europe(){
       await this.page.locator("//li[text()='Europe']").click()
      }
       async active(){
        await this.page.locator("//button[text()='Active']").click()
       }
       async Inactive(){
        await this.page.locator("//button[text()='Deactive']").click()
       }
       async pop_up_yes(){
        await this.page.locator("//button[text()='Yes']").click()
       }
       async pop_up_No(){
        await this.page.locator("//button[text()='No']").click()
       }
       async errortoast(){
        await expect(this.page.locator("//div[text()=' Country Already Exists']")).toBeVisible()
       }
       async duptoast(){
              await expect(this.page.locator("//div[text()=' Duplicates found']")).toBeVisible()
       }//div[text()=' Currency Only accept 3 char.']
       async add_country(){
        await this.page.locator("//button[text()='Add Country']").click()
       }
       async save_country(){
        const save =await this.page.locator("//button[text()='Save Country']")
        await save.scrollIntoViewIfNeeded()
        await save.click()
       }

       async no_rows(){
        await expect(this.page.locator("//div[text()='No rows']")).toBeVisible()    
       }
       async coun_name_req(){
        await expect(this.page.locator("//span[text()='Country Name is required']")).toBeVisible()
       }
       async coun_code_req(){
        await expect(this.page.locator("//span[text()='Country Code is required']")).toBeVisible()
       }
       async curr_code_req(){
       await expect(this.page.locator("//span[text()='Should have atleast three letters']")).toBeVisible()
       }
       async coun_region_req(){
        await expect(this.page.locator("//span[text()='Region is required']")).toBeVisible()
       }
       async coun_currency_req(){
        await expect(this.page.locator("//span[text()='Currency is required']")).toBeVisible()
       }      
       async coun_rate_req(){
        await expect(this.page.locator("//span[text()='Exchange Rate is required']")).toBeVisible()
       }
       async coun_phonecode_req(){
        await expect(this.page.locator("//span[text()='Phone Code is required']")).toBeVisible()
       }
       async coun_phoneformat_req(){
        await expect(this.page.locator("//span[text()='Phone Number Format is required']")).toBeVisible()
       }


       async coun_name_req1(){
        await expect(this.page.locator("//span[text()='Country Name should be letters']")).toBeVisible()
       }
       async coun_code_req1(){
        await expect(this.page.locator("//span[text()='Country Code should be letters']")).toBeVisible()
       }
       async coun_currency_req1(){
        await expect(this.page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
       }
       async coun_rate_req1(){
        await expect(this.page.locator("//span[text()='Only Numbers and Decimals are allowed']")).toBeVisible()
       }
       async coun_rate_req2(){
        await expect(this.page.locator("(//label[text()='Exchange Rate']/following-sibling::span)[2]")).toBeVisible()
       }
       async coun_phonecode_req1(){
        await expect(this.page.locator("//span[text()='Only Numbers accepted that are based on the format like +11']")).toBeVisible()
       }
       async coun_phoneformat_req1(){
        await expect(this.page.locator("//span[text()='Only Numbers are allowed']")).toBeVisible()
       }

//////Lane Management    
       async search_lane_one(){
              await expect(this.page.locator("(//div[@data-field='country'])[2]")).toBeVisible()
      }
       async lane_filter1(){
              await this.page.locator("(//div[@role='button'])[1]").click()
       }
       async lane_filter2(){
              await this.page.locator("(//div[@role='button'])[2]").click()
       }
       async lane_filter3(){
              await this.page.locator("(//div[@role='button'])[3]").click()
       }
       async lane_filter_dum1(){
              await this.page.locator("//li[text()='dummycountryfortesting']").click()
       }
       async lane_filter_dum2(){
              await this.page.locator("//li[text()='dummycountry']").click()
       }
       async lane_filter_act(){
              await this.page.locator("//li[text()='Active']").click()
       }
       async lane_filter_inact(){
              await this.page.locator("//li[text()='InActive']").click()
       }
       async lane_filter_gate(){
              await this.page.locator("//li[text()='Gateway']").click()
       }
       async lane_filter_dest(){
              await this.page.locator("//li[text()='Destination']").click()
       }  
       async laneheading(){
        await this.page.locator("//a[contains(text(),'Lane')]").click()
       }
       async lane_country(dum:string){
        const sum = await this.page.locator("//select[@name='country']")
        await sum.selectOption(dum)
       }
       async lane_type(dum:string){
        const sum = await this.page.locator("//select[@name='type']")
        await sum.selectOption(dum)
       }  
       async lane_coun_val(){
        await expect(this.page.locator("//span[text()='Country is required']")).toBeVisible()
       }    
       async lane_portname_val(){
        await expect(this.page.locator("//span[text()='Port Name is required']")).toBeVisible()
       } 
       async lane_portcode_val(){
        await expect(this.page.locator("//span[text()='Port Code is required']")).toBeVisible()
       }
       async lane_portname_val1(){
        await expect(this.page.locator("//span[text()='Only Alphabets are allowed']")).toBeVisible()
       }
       async lane_portcode_val1(){
        await expect(this.page.locator("(//span[text()='Enter only alphabets'])[2]")).toBeVisible()
       }
       async lane_gatefee_val(){
        await expect(this.page.locator("//span[text()='Enter Valid Gateway Fee']")).toBeVisible()
       }
       async lane_gatewaycode_val(){
              await expect(this.page.locator("//span[text()='Gateway Code is required']")).toBeVisible()
             }
       async lane_portname(rum:string){
              await this.page.locator("//input[@name='portName']").fill(rum)
       }
       async lane_portcode(rum:string){
              await this.page.locator("//input[@name='portCode']").fill(rum)
       }
       async lane_gateway_fee(rum:string){
              await this.page.locator("//input[@name='fee']").fill(rum)
       }
       async addlane(){
              await this.page.locator("//button[text()='Add Lane']").click()
       }
       async savelane(){
              await this.page.locator("//button[text()='Save Lane']").click()
       }//div[text()=' Lane Already Exists']
       async updatelane(){
              await this.page.locator("//button[text()='Update Lane']").click()
       }
       async lane_error(){
              await expect(this.page.locator("//div[text()=' Lane Already Exists']")).toBeVisible()
       }
       async edit_first(){
              await this.page.locator("(//div[@data-field='Options'])[2]").click()
       }
       async edit_second(){
              await this.page.locator("(//div[@data-field='Options'])[3]").click()
       }
       async lane_search(s:string){
              await this.page.locator("//input[@placeholder='Search Port Name']").fill(s)
       }
       // async lane_filter(){
       //        await this.page.locator("(//div[@role='button'])[3]").click()
       // }
       // async lane_filter_gate(){
       //        await this.page.locator("//li[text()='Gateway']").click()
       // }
       // async edit_second(){
       //        await this.page.locator("//li[text()='Destination']").click()
       // }
       
       

//////////////cost heading
       async costheading(){
        await this.page.locator("//a[contains(text(),'Cost Heading')]").click()
       }
       async add_costheading(){
       await this.page.locator("//button[text()='Add Cost Heading']").click()
       }
       async save_costheading(){
       await this.page.locator("//button[text()='Save Cost Heading']").click()
       }
       async costheading_sac_val(){
       await expect(this.page.locator("//p[text()='SAC Code is required']")).toBeVisible()
       }
       async costheading_sac_val1(){
       await expect(this.page.locator("//p[text()='Only numbers are allowed']")).toBeVisible()
       }
       async costheading_ch_val(){
       await expect(this.page.locator("//p[text()='Cost Heading is required']")).toBeVisible()
       }
       async costheading_ch_val1(){
       await expect(this.page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
       }
       async costheading_countries_val(){
       await expect(this.page.locator("//p[text()='Choose atleast one Country']")).toBeVisible()
       }
       async costheading_sac(sac:string){
       await this.page.locator("//input[@name='sacCode']").fill(sac)
       }
       async costheading_ch(sac:string){
       await this.page.locator("//input[@name='costHeading']").fill(sac)
       }
       async costheading_countries(){
       await this.page.locator("//div[@id='applicableCountries']").click()
       }
       async costheading_countries_dum(){
       await this.page.locator("//span[text()='united arab emirates']").click()
       }
       async costheading_countries_dum1(){
              await this.page.locator("//span[text()='sample country for testing']").click()
       }
       async click_out(){
              await this.page.locator("//div[contains(@class,'MuiBackdrop-root MuiBackdrop-invisible')]").click()
       }
       async Addedcostheading_toast(){ 
              await expect(this.page.locator("//div[text()='Cost Heading Added Successfully']")).toBeVisible()
       }
       async costheading_error(){
              await expect(this.page.locator("//div[text()=' Cost Heading Already Exists']")).toBeVisible()
       }
       async cost_searchbox(f:string){
              await this.page.locator("//input[@placeholder='Search Cost Heading']").fill(f)
       }
       async cost_norows(){
              await expect(this.page.locator("//div[text()='No rows']")).toBeVisible()
       }
       async cost_awsnew(){
              await expect(this.page.locator("//div[text()='ams new']")).toBeVisible()
       }
/////////////////CFS Management    

       async cfsmanagement(){
       await this.page.locator("//a[contains(text(),'Vendor (CFS)')]").click()
       }
       async add_cfs(){
       await this.page.locator("//button[text()='Add CFS']").click()
       }
       async save_cfs(){
       await this.page.locator("//button[text()='Save CFS']").click()
       }
       async cfs_country_val(){
       await expect(this.page.locator("//span[text()='Country Name is required']")).toBeVisible()       
       }
       async cfs_type_val(){
           await expect(this.page.locator("//span[text()='Type is required']")).toBeVisible()       
       }
       async cfs_gateway_val(){
           await expect(this.page.locator("//span[text()='Gateway is required']")).toBeVisible()       
       }
       async cfs_destination_val(){
              await expect(this.page.locator("//span[text()='Destination is required']")).toBeVisible()       
          }
       async cfs_cfsname_val(){
       await expect(this.page.locator("//span[text()='CFS Name is required']")).toBeVisible()       
       }
       async cfs_cfsbranch_val(){
       await expect(this.page.locator("//span[text()='CFS Branch is required']")).toBeVisible()       
       }
       async cfs_fullname_val(){
       await expect(this.page.locator("//span[text()='Full Name is required']")).toBeVisible()       
       }
       async cfs_fullname_1_val(){
       await expect(this.page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()       
       }
       async cfs_email_val(){
       await expect(this.page.locator("//span[text()='Email is required']")).toBeVisible()       
       }
       async cfs_email_1_val(){
       await expect(this.page.locator("//span[text()='Enter valid email address']")).toBeVisible()       
       }
       async cfs_address_val(){
       await expect(this.page.locator("//span[text()='Address is required']")).toBeVisible()
       }
       async cfs_phonecode_val(){
       await expect(this.page.locator("//span[text()='Mobile Number is required']")).toBeVisible()
       }
       async cfs_phonecode_1_val(){
       await expect(this.page.locator("//span[text()='Only numbers are allowed']")).toBeVisible()
       }
       async cfs_countryname(s:string){
              const sec = await this.page.locator("//select[@name='countryName']")
              await sec.selectOption(s)
       }
       async cfs_type(s:string){
              const sec = await this.page.locator("//select[@name='type']")
              await sec.selectOption(s)
       }
       async cfs_gateway(s:string){
              const sec = await this.page.locator("//select[@name='gateway']")
              await sec.selectOption(s)
       }
       async cfs_destination(s:string){
              const sec = await this.page.locator("//select[@name='destination']")
              await sec.selectOption(s)
       }
       async cfs_fullname(s:string){
              await this.page.locator("//input[@name='fullName']").fill(s)
       }
       async cfs_address(s:string){
              await this.page.locator("//input[@name='address']").fill(s)
       }
       async cfs_email(s:string){
              await this.page.locator("//input[@name='email']").fill(s)
       }
       async cfs_phonecode(s:string){
              await this.page.locator("//input[@name='mobileNo']").fill(s)
       }
       async cfs_cfsname(s:string){
              await this.page.locator("//input[@name='cfsName']").fill(s)
       }
       async cfs_cfsbranch(s:string){
              await this.page.locator("//input[@name='cfsBranch']").fill(s)
       }
       async cfs_duplicatemailval(){
              await expect(this.page.locator("//span[text()='This email already exists']")).toBeVisible()
       }
       async cfs_offemailval(){
              await expect(this.page.locator("//span[text()='Enter your official email']")).toBeVisible()
       }

////////////////schedule

      //div[text()='Updated successfully']
       async edi_sch_toast(){
              await expect(this.page.locator("//div[text()='Updated successfully']")).toBeVisible()
       }
       async add_sch_toast(){
              await expect(this.page.locator("//div[text()='Schedule Added Successfully']")).toBeVisible()
       }
       async schedule(){
              await this.page.locator("//a[contains(text(),'Schedule')]").click()  
       }
       async schedule_search(sch:string){
              await this.page.locator("//input[@placeholder='Search Schedule ID, POL, POD']").fill(sch)  
       }
       async schedule_norows(){
              await expect(this.page.locator("//div[text()='No rows']")).toBeVisible()
       }
       async schedule_onerow(){
              await expect(this.page.locator("(//div[@data-field='pol'])[2]")).toBeVisible()
       }
       async sch_pol(s:string){
              const sec = await this.page.locator("//select[@name='pol']")
              await sec.selectOption(s)
       }
       async sch_pod(s:string){
              const sec = await this.page.locator("//select[@name='pod']")
              await sec.selectOption(s)
       }
       async sch_container(s:string){
              const sec = await this.page.locator("//select[@name='container']")
              await sec.selectOption(s)
       }
       async schedule_vessel(sch:string){
              await this.page.locator("//input[@name='vessel']").fill(sch)  
       }
       async schedule_voyage(sch:string){
              await this.page.locator("//input[@name='voyage']").fill(sch)  
       }
       async schedule_service(sch:string){
              await this.page.locator("//input[@name='serviceName']").fill(sch)  
       }
       async sch_oricfsname(s:string){
              const sec = await this.page.locator("//select[@name='originCfsName']")
              await sec.selectOption(s)
       }
       async sch_oricfsbranch(s:string){
              const sec = await this.page.locator("//select[@name='originCfsBranch']")
              await sec.selectOption(s)
       }
       async sch_destcfsname(s:string){
              const sec = await this.page.locator("//select[@name='destinationCfsName']")
              await sec.selectOption(s)
       }
       async sch_destcfsbranch(s:string){
              const sec = await this.page.locator("//select[@name='destinationCfsBranch']")
              await sec.selectOption(s)
       }
       async save_schedule(){
              await this.page.locator("//button[text()='Save Schedule']").click()  
       }
       async add_schedule(){
              await this.page.locator("//button[text()='Add Schedule']").click()  
       }
       async datepicker(){
              await this.page.locator("(//button[@aria-label='Choose date'])[1]").click()
       }
       async ETD_date(){
              await this.page.locator("//button[text()='24']").click()
       }
       async book_date(){
              await this.page.locator("//button[text()='19']").click()
       }
       async ocfs_date(){
              await this.page.locator("//button[text()='17']").click()
       }
       async ETA_date(){
              await this.page.locator("//button[text()='30']").click()
       }
       async dcfs_date(){
              await this.page.locator("//button[text()='31']").click()
       }
       async nextmonth_date(){
              await this.page.locator("//button[@title='Next month']").click()
       }
       async ct(){
              await this.page.locator("(//input[@aria-label='Choose time'])[1]").click()
       }
       async ct_select(){
              await this.page.locator("//div[@class='MuiClock-squareMask css-1umqo6f']").click()
       }
       async ct_ok(){
              await this.page.locator("//button[text()='OK']").click()
       }

       

//////////////// Rates

       async ratemgmtheading(){
              await expect(this.page.locator("//h3[text()='Rate Management']")).not.toBeVisible()
       }
       async rates(){
              await this.page.locator("//a[contains(text(),'Rate')]").click()
       }
       async add_rates(){
              await this.page.locator("//button[text()='Add Rate']").click()
       }
       async select_ScheduleID(s:string){
              const imp = await this.page.locator("//input[@placeholder='Select Schedule ID']").fill(s)
       
       }
       async search_ScheduleID(){
              await this.page.locator("//input[@placeholder='Search Schedule ID']").click()
       }
       async select_hover_ScheduleID(){

             const hover = await this.page.locator("//input[@placeholder='Select Schedule ID']")
             await hover.scrollIntoViewIfNeeded()
             await hover.hover()
       }
       async ocfscl(){
              await this.page.locator("//input[@name='OCFS']").clear()
       }
       async ocfs(s:string){
              await this.page.locator("//input[@name='OCFS']").fill(s)
       }
       async odoc(s:string){
              await this.page.locator("//input[@name='ODOC']").fill(s)
       }
       async ori_break(s:string){
              await this.page.locator("//input[@name='OGBECBM']").fill(s)
       }
       async comp_ocfs(s:string){
              await this.page.locator("//input[@name='MROCFS']").fill(s)
       }
       async comp_odoc(s:string){
              await this.page.locator("//input[@name='MRODOC']").fill(s)
       }
       async freight(s:string){
              await this.page.locator("//input[@name='F']").fill(s)
       }
       async fri_break(s:string){
              await this.page.locator("//input[@name='FGBECBM']").fill(s)
       }
       async comp_fri(s:string){
              await this.page.locator("//input[@name='MRF']").fill(s)
       }
       async dcfs(s:string){
              await this.page.locator("//input[@name='DCFS']").fill(s)
       }
       async ddo(s:string){
              await this.page.locator("//input[@name='DDO']").fill(s)
       }
       async dest_break(s:string){
              await this.page.locator("//input[@name='DGBECBM']").fill(s)
       }
       async comp_dcfs(s:string){
              await this.page.locator("//input[@name='MRDCFS']").fill(s)
       }
       async comp_ddo(s:string){
              await this.page.locator("//input[@name='MRDDO']").fill(s)
       }
       async Ch_cost(s:string){
              await this.page.locator("//input[@name='OR']").fill(s)
       }
       async Ch_comp(s:string){
              await this.page.locator("//input[@name='OCOMMR']").fill(s)
       }
       async rates_confirm(){
              await this.page.locator("//button[text()='Confirm']").click()
       }
       async rates_clear(){
              await this.page.locator("//button[@title='Clear']").click()
       }
       async _28(){
              await expect (this.page.locator("//h3[text()='28']")).toBeVisible()
       }
       async _20ft(){
              await expect (this.page.locator("//h3[text()='20 ft']")).toBeVisible()
       }
       async _24000(){
              await expect (this.page.locator("//h3[text()='24000']")).toBeVisible()
       }
       async _62(){
              await expect (this.page.locator("//h3[text()='62']")).toBeVisible()
       }
       async _40ft(){
              await expect (this.page.locator("//h3[text()='40 hc']")).toBeVisible()
       }
       async _28000(){
              await expect (this.page.locator("//h3[text()='28000']")).toBeVisible()
       }
//////////////////// Holiday

       async holiday_headingname(){
              await expect(this.page.locator("//h3[text()='Port Holiday Management']")).toBeVisible()
       }      
       async holiday(){
              await this.page.locator("//a[contains(text(),'Holiday')]").click()
       }
       async holiday_add(){
              await this.page.locator("//button[text()='Add Holiday']").click()
       }
       async holiday_upload(s:string){
              await this.page.locator("//input[@type='file']").setInputFiles(s)
       }
       async holiday_submit(){
              await this.page.locator("//button[text()='Submit']").click()
       }
       async holiday_save(){
              await this.page.locator("//button[text()='Save Holiday']").click()
       }
       async holiday_update(){
              await this.page.locator("//button[text()='Update Holiday']").click()
       }
       async holiday_validationmsg(){
              await expect(this.page.locator("//span[text()='Port code is required']")).toBeVisible()
              await expect(this.page.locator("//span[text()='Date is required']")).toBeVisible()
              await expect(this.page.locator("//span[text()='Holiday name is required']")).toBeVisible()
       }
       async holiday_space_validationmsg(){
              await expect(this.page.locator("//span[text()='Holiday name is required']")).toBeVisible()
       }
       async holiday_name_validationmsg(){
              await expect(this.page.locator("//span[text()='Only alphabets are allowed']")).toBeVisible()
       }
       async holiday_yes(){
              await this.page.locator("//button[text()='Yes']").click()
       }
       async holiday_sampleexcel(){
              await this.page.locator("//a[contains(text(),'Sample-Excel')]").click()
       }
       async holiday_search(s:string){
              await this.page.locator("//input[@placeholder='Search Holiday Name , Port Code ']").fill(s)
       }
       async holiday_portcode(s:string){
             const port = await this.page.locator("//select[@name='portCode']")
             await port.selectOption(s)
       }
       async holiday_name(s:string){
              await this.page.locator("//input[@name='name']").fill(s)
       }
       async holiday_dateclk(){
              await this.page.locator("//button[@aria-label='Choose date']").click()
       }
       async holiday_date_choose(){
              await this.page.locator("//button[text()='28']").click()
       }
       async holiday_date_choose1(){
              await this.page.locator("//button[text()='27']").click()
       }
       async asser_holiday(){
              await expect(this.page.locator("div[data-colindex='1']")).toBeVisible()
       }
       async add_holiday_toast(){
              await expect(this.page.locator("//div[text()='Holiday Added Successfully']")).toBeVisible()
       }
       async edit_holiday_toast(){
              await expect(this.page.locator("//div[text()='Updated successfully']")).toBeVisible()
       }
       async file_upload_toast(){
              await expect(this.page.locator("//div[text()='File Uploaded']")).toBeVisible()
       }
       async submit_button_file(){
              await this.page.click("//button[text()='Submit']")
       }
       async invalidportcode_toast(){
              await expect(this.page.locator("//div[text()='Invalid Port code']")).toBeVisible()
       }
       async invaliddate_toast(){
              await expect(this.page.locator("//div[text()='Holiday Dates must be Today or Future Dates']")).toBeVisible()
       }
       async invalidholidayname_toast(){
              await expect(this.page.locator("//div[text()='Invalid Holiday name']")).toBeVisible()
       }
       async otherdoc_toast(){
              await expect(this.page.locator("//div[text()='Upload Only xls & xlsx file']")).toBeVisible()
       }




//////////////////// Dashboard

     async innsa(){
       await this.page.locator("//div[@aria-label='text alignment']//button[1]").click()
     }
     async inmaa(){
       await this.page.locator("//div[@aria-label='text alignment']//button[2]").click()
     }
     async inmaa_ratecard(){
       await this.page.locator("//h1[text()='INMAA']").click()
     }
     async savings_1_calc(){
       await this.page.locator("(//span[text()='1'])[1]").click()
     }
     async savings_2_calc(){
       await this.page.locator("(//span[text()='2'])[1]").click()
     }
     async savings_3_calc(){
       await this.page.locator("(//span[text()='3'])[1]").click()
     }
     async savings_4_calc(){
       await this.page.locator("(//span[text()='4'])[1]").click()
     }
     async savings_5_calc(){
       await this.page.locator("(//span[text()='5'])[1]").click()
     }
     async savings_6_calc(){
       await this.page.locator("(//span[text()='6'])[1]").click()
     }
     async savings_7_calc(){
       await this.page.locator("(//span[text()='7'])[1]").click()
     }
     async savings_8_calc(){
       await this.page.locator("(//span[text()='8'])[1]").click()
     }
     async savings_9_calc(){
       await this.page.locator("(//span[text()='9'])[1]").click()
     }
     async savings_10_calc(){
       await this.page.locator("(//span[text()='10'])[1]").click()
     }
     async savings_11_calc(){
       await this.page.locator("(//span[text()='11'])[1]").click()
     }
     async savings_12_calc(){
       await this.page.locator("(//span[text()='12'])[1]").click()
     }
     async continue_to_book(){
      await this.page.locator("//button[text()='Continue to Book']").click()
      await this.page.waitForTimeout(3000)
     } 
     async Pre_book(){
       await this.page.locator("//button[text()='Pre-Book Now']").click()
       await this.page.waitForTimeout(2000)
     }
     async Pre_book1(){
       await this.page.locator("(//button[text()='Pre-Book Now'])[2]").click()
       await this.page.waitForTimeout(2000)
     }
     async stackable(){
       await this.page.locator("//button[text()='Stackable']").click()
     }
     async non_stackable(){
       await this.page.locator("//button[text()='Non Stackable']").click()
     }
     async non_stackable_two(){
       await this.page.locator("(//button[text()='Non Stackable'])[2]").click()
     }
     async package_0(s:string){
       const imp =await this.page.locator("//select[@id='packageType0']")
       await imp.selectOption(s)
     }
     async package_1(s:string){
       const imp =await this.page.locator("//select[@id='packageType1']")
       await imp.selectOption(s)
     }
     async Addpackage(){
       const imp =await this.page.locator("//button[text()='Add Another Package']").click()
     }
     async length_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.length']").fill(s)
     }
     async breadth_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.breadth']").fill(s)
     }
     async height_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.height']").fill(s)
     }
     async radius_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.radius']").fill(s)
     }
     async wpp_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.weightPerPackage']").fill(s)
     }
     async nop_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.noOfPackage']").fill(s)
     }
     async hsn_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.hsnCode']").fill(s)
     }
     async commodity_0(s:string){
       await this.page.locator("//input[@name='cargoDetails.0.commodity']").fill(s)
     }

// dashboard
     async Inmaa_dash(){
        await expect(this.page.locator("(//h1[text()='INMAA'])")).toBeVisible()
        await expect(this.page.locator("(//h1[text()='AEJEA'])")).toBeVisible()
        await expect(this.page.locator("(//span[text()='62'])[1]")).toBeVisible()
        await expect(this.page.locator("(//h1[text()='158'])[1]")).toBeVisible()
        await expect(this.page.locator("(//h1[text()='158'])[2]")).toBeVisible()
        await expect(this.page.locator("(//h1[text()='137'])")).toBeVisible()
        await expect(this.page.locator("(//h1[text()='120'])")).toBeVisible()
        await expect(this.page.locator("(//h1[text()='$25'])")).toBeVisible()
        await expect(this.page.locator("(//h5[text()='Start'])")).toBeVisible()
        await expect(this.page.locator("(//h5[text()='Current'])")).toBeVisible()
        await expect(this.page.locator("(//h5[text()='Predicted'])")).toBeVisible()
        await expect(this.page.locator("(//div[text()='29-05-2023'])")).toBeVisible()
        await expect(this.page.locator("(//p[text()='Capacity Available'])")).toBeVisible()
        await expect(this.page.locator("(//h5[text()='Container Filled so far'])")).toBeVisible()  
        await expect(this.page.locator("(//p[text()='Rates mentioned are per CBM'])")).toBeVisible()
        await expect(this.page.locator("(//p[text()='Origin + Freight + Destination charges included'])")).toBeVisible()
        await expect(this.page.locator("(//h5[text()='test cost heading'])")).toBeVisible()
        await expect(this.page.locator("(//h5[text()='Booking Fee'])")).toBeVisible() 
     }
//      async Aejea_dash(){
//        await expect(this.page.locator("(//h1[text()='AEJEA'])")).toBeVisible()
//      }
//      async cbmavail_dash(){
//        await expect(this.page.locator("(//span[text()='62'])[1]")).toBeVisible()
//      }
//      async startp_dash(){
//        await expect(this.page.locator("(//h1[text()='157'])[1]")).toBeVisible()
//      }
//      async currentp_dash(){
//        await expect(this.page.locator("(//h1[text()='157'])[2]")).toBeVisible()
//      }
//      async predictedp_dash(){
//        await expect(this.page.locator("(//h1[text()='136'])")).toBeVisible()
//      }
//      async testchp_dash(){
//        await expect(this.page.locator("(//h1[text()='120'])")).toBeVisible()
//      }
//      async bookingfeep_dash(){
//        await expect(this.page.locator("(//h1[text()='$25'])")).toBeVisible()
//      }
//      async start_dash(){
//        await expect(this.page.locator("(//h5[text()='Start'])")).toBeVisible()
//      }
//      async current_dash(){
//        await expect(this.page.locator("(//h5[text()='Current'])")).toBeVisible()
//      }
//      async predicted_dash(){
//        await expect(this.page.locator("(//h5[text()='Predicted'])")).toBeVisible()
//      }
//      async expdate_dash(){
//        await expect(this.page.locator("//div[text()='09-05-2023']")).toBeVisible()
//      }
//      async capavail_dash(){
//        await expect(this.page.locator("(//p[text()='Capacity Available'])")).toBeVisible()
//      }
//      async containerfilled_dash(){
//        await expect(this.page.locator("(//h5[text()='Container Filled so far'])")).toBeVisible()
//      }
//      async ratesmention_dash(){
//        await expect(this.page.locator("(//p[text()='Rates mentioned are per CBM '])")).toBeVisible()
//      }
//      async allinclued_dash(){
//        await expect(this.page.locator("(//p[text()='Origin + Freight + Destination charges included'])")).toBeVisible()
//      }
//      async testch_dash(){
//        await expect(this.page.locator("(//h5[text()='test cost heading'])")).toBeVisible()
//      }
//      async bookingfee_dash(){
//        await expect(this.page.locator("(//h5[text()='Booking Fee'])")).toBeVisible()
//      }
// Ratecard
     async inmaa_ratec(){
       await expect(this.page.locator("(//h1[text()='INMAA'])[2]")).toBeVisible()
       await expect(this.page.locator("(//h1[text()='AEJEA'])[2]")).toBeVisible()
       await expect(this.page.locator("(//p[text()='29-05-2023'])[1]")).toBeVisible()
       await expect(this.page.locator("(//h3[text()='158'])[1]")).toBeVisible()
       await expect(this.page.locator("(//h3[text()='158'])[2]")).toBeVisible()
       await expect(this.page.locator("//h3[text()='137']")).toBeVisible()
       await expect(this.page.locator("(//span[text()='62.00'])")).toBeVisible()
       await expect(this.page.locator("(//p[text()='Capacity Available'])[2]")).toBeVisible()
       await expect(this.page.locator("//p[text()='Container Filled so far']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Rates mentioned are per CBM ']")).toBeVisible()
       await expect(this.page.locator("(//p[text()='Start'])[1]")).toBeVisible()
       await expect(this.page.locator("(//p[text()='Current'])[1]")).toBeVisible()
       await expect(this.page.locator("(//p[text()='Predicted'])[1]")).toBeVisible()
       await expect(this.page.locator("//p[text()='Origin CFS']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Ocean Freight']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Destination CFS']")).toBeVisible()
       await expect(this.page.locator("(//p[text()='27'])[1]")).toBeVisible()
       await expect(this.page.locator("(//p[text()='27'])[2]")).toBeVisible()
       await expect(this.page.locator("//p[text()='24']")).toBeVisible()
       await expect(this.page.locator("(//p[text()='63'])[1]")).toBeVisible()
       await expect(this.page.locator("(//p[text()='63'])[2]")).toBeVisible()
       await expect(this.page.locator("//p[text()='50']")).toBeVisible()
       await expect(this.page.locator("(//p[text()='68'])[1]")).toBeVisible()
       await expect(this.page.locator("(//p[text()='68'])[2]")).toBeVisible()
       await expect(this.page.locator("(//p[text()='63'])[3]")).toBeVisible()
       await expect(this.page.locator("//p[text()='Per Document Charges']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Current Rate']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Origin DOC']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Destination DO']")).toBeVisible()
       await expect(this.page.locator("//p[text()='TEST COST HEADING']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Booking Fee']")).toBeVisible()
       await expect(this.page.locator("//p[text()='41']")).toBeVisible()
       await expect(this.page.locator("//p[text()='680']")).toBeVisible()
       await expect(this.page.locator("//p[text()='120']")).toBeVisible()
       await expect(this.page.locator("//p[text()='$ 25']")).toBeVisible()
     }
//      async Aejea_ratec(){
//        await expect(this.page.locator("//h4[text()='AEJEA']")).toBeVisible()
//      }
//      async etd_ratec(){
//        await expect(this.page.locator("(//p[text()='16-05-2023'])[1]")).toBeVisible()
//      }
//      async startp_ratec(){
//        await expect(this.page.locator("(//h3[text()='157'])[1]")).toBeVisible()
//      }
//      async currentp_ratec(){
//        await expect(this.page.locator("(//h3[text()='157'])[2]")).toBeVisible()
//      }
//      async predictedp_ratec(){
//        await expect(this.page.locator("//h3[text()='136']")).toBeVisible()
//      }
//      async cbmavail_ratec(){
//        await expect(this.page.locator("(//span[text()='62.00'])")).toBeVisible()
//      }
//      async capavail_ratec(){
//        await expect(this.page.locator("(//p[text()='Capacity Available'])[2]")).toBeVisible()
//      }
//      async containerfilled_ratec(){
//        await expect(this.page.locator("//p[text()='Container Filled so far']")).toBeVisible()
//      }
//      async ratesmentioned_ratecard(){
//        await expect(this.page.locator("(//p[text()='Rates mentioned are per CBM '])[2]")).toBeVisible()
//      }
//      async start_ratecard(){
//        await expect(this.page.locator("(//p[text()='Start'])[1]")).toBeVisible()
//      }
//      async current_ratecard(){
//        await expect(this.page.locator("(//p[text()='Current'])[1]")).toBeVisible()
//      }
//      async predicted_ratecard(){
//        await expect(this.page.locator("(//p[text()='Predicted'])[1]")).toBeVisible()
//      }
//      async origincfs_ratecard(){
//        await expect(this.page.locator("//p[text()='Origin CFS']")).toBeVisible()
//      }
//      async oceanfreight_ratecard(){
//        await expect(this.page.locator("//p[text()='Ocean Freight']")).toBeVisible()
//      }
//      async Destinationcfs_ratecard(){
//        await expect(this.page.locator("//p[text()='Destination CFS']")).toBeVisible()
//      }
//      async startp1_ratecard(){
//        await expect(this.page.locator("(//p[text()='27'])[1]")).toBeVisible()
//      }
//      async currentp1_ratecard(){
//        await expect(this.page.locator("(//p[text()='27'])[2]")).toBeVisible()
//      }
//      async predictedp1_ratecard(){
//        await expect(this.page.locator("//p[text()='24']")).toBeVisible()
//      }
//      async startp2_ratecard(){
//        await expect(this.page.locator("(//p[text()='63'])[1]")).toBeVisible()
//      }
//      async currentp2_ratecard(){
//        await expect(this.page.locator("(//p[text()='63'])[2]")).toBeVisible()
//      }
//      async predictedp2_ratecard(){
//        await expect(this.page.locator("//p[text()='50']")).toBeVisible()
//      }
//      async startp3_ratecard(){
//        await expect(this.page.locator("(//p[text()='67'])[1]")).toBeVisible()
//      }
//      async currentp3_ratecard(){
//        await expect(this.page.locator("(//p[text()='67'])[2]")).toBeVisible()/////////@#$@#$#
//      }
//      async predictedp3_ratecard(){
//        await expect(this.page.locator("//p[text()='62']")).toBeVisible()
//      }
     async savings_1(){
       await expect(this.page.locator("//span[text()='143']")).toBeVisible()
     }
     async savings_2(){
       await expect(this.page.locator("//span[text()='138']")).toBeVisible()
     }
     async savings_3(){
       await expect(this.page.locator("//span[text()='133']")).toBeVisible()
     }
     async savings_4(){
       await expect(this.page.locator("//span[text()='128']")).toBeVisible()
     }
     async savings_5(){
       await expect(this.page.locator("//span[text()='123']")).toBeVisible()
     }
     async savings_6(){
       await expect(this.page.locator("//span[text()='118']")).toBeVisible()
     }
     async savings_7(){
       await expect(this.page.locator("//span[text()='113']")).toBeVisible()
     }
     async savings_8(){
       await expect(this.page.locator("//span[text()='108']")).toBeVisible()
     }
     async savings_9(){
       await expect(this.page.locator("//span[text()='103']")).toBeVisible()
     }
     async savings_10(){
       await expect(this.page.locator("//span[text()='98']")).toBeVisible()
     }
     async savings_11(){
       await expect(this.page.locator("//span[text()='93']")).toBeVisible()
     }
     async savings_12(){
       await expect(this.page.locator("//span[text()='88']")).toBeVisible()
     }
     async PDCha_ratecard(){
       await expect(this.page.locator("//p[text()='Per Document Charges']")).toBeVisible()
     }
     async rate_ratecard(){
       await expect(this.page.locator("//p[text()='Rate']")).toBeVisible()
     }
     async origindoc_ratecard(){
       await expect(this.page.locator("//p[text()='Origin DOC']")).toBeVisible()
     }
     async destinationDo_ratecard(){
       await expect(this.page.locator("//p[text()='Destination DO']")).toBeVisible()
     }
     async testch_ratecard(){
       await expect(this.page.locator("//p[text()='TEST COST HEADING']")).toBeVisible()
     }
     async bookingfee_ratecard(){
       await expect(this.page.locator("//p[text()='Booking Fee']")).toBeVisible()
     }
     async origindocp_ratecard(){
       await expect(this.page.locator("//p[text()='41']")).toBeVisible()
     }
     async destinationDop_ratecard(){
       await expect(this.page.locator("//p[text()='669']")).toBeVisible()
     }
     async testchp_ratecard(){
       await expect(this.page.locator("//p[text()='120']")).toBeVisible()
     }
     async bookingfeep_ratecard(){
       await expect(this.page.locator("//p[text()='$ 25']")).toBeVisible()
     }
     async bookingjourney_ratecard(){
       await expect(this.page.locator("//p[text()='Journey Details']")).toBeVisible()
       await expect(this.page.locator("//h5[text()='Booking Cutoff']")).toBeVisible()
       await expect(this.page.locator("//h5[text()='Origin CFS Cutoff']")).toBeVisible()
      await expect(this.page.locator("//p[text()='vijay ragav port']")).toBeVisible()
      await expect(this.page.locator("//p[text()='nungambakkam']")).toBeVisible()
       await expect(this.page.locator("//div[text()='16-06-2023 | 23:00']")).toBeVisible()
       await expect(this.page.locator("//h5[text()='ETD']")).toBeVisible()
       await expect(this.page.locator("//h5[text()='Transit Time']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Evergreen Teresa']")).toBeVisible()
       await expect(this.page.locator("//p[text()='V.284']")).toBeVisible()
       await expect(this.page.locator("//h5[text()='ETA']")).toBeVisible()
       await expect(this.page.locator("//h5[text()='Expected Delivery Date']")).toBeVisible()
       await expect(this.page.locator("//p[text()='jabel ali cfs']")).toBeVisible()
       await expect(this.page.locator("//p[text()='jabel ali branch']")).toBeVisible()
       await expect(this.page.locator("//p[text()='29-05-2023']")).toBeVisible()
       await expect(this.page.locator("//div[text()='31-05-2023 | 16:10']")).toBeVisible()
       await expect(this.page.locator("//div[text()='03-06-2023']")).toBeVisible()
       await expect(this.page.locator("//div[text()='11 Days']")).toBeVisible()
       await expect(this.page.locator("//div[text()='14-06-2023']")).toBeVisible()
       await expect(this.page.locator("//div[text()='16-06-2023 | 23:00']")).toBeVisible()
   
     }
     async cargo_details(){
       await expect(this.page.locator("(//h1[text()='INMAA'])")).toBeVisible()
       await expect(this.page.locator("(//h1[text()='AEJEA'])")).toBeVisible()
       await expect(this.page.locator("(//span[text()='62'])[1]")).toBeVisible()
       await expect(this.page.locator("(//h1[text()='158'])[1]")).toBeVisible()
       await expect(this.page.locator("(//h1[text()='158'])[2]")).toBeVisible()
       await expect(this.page.locator("(//h1[text()='137'])")).toBeVisible()
       await expect(this.page.locator("(//p[text()='Capacity Available'])")).toBeVisible()
       await expect(this.page.locator("(//h5[text()='Container Filled so far'])")).toBeVisible()  
       await expect(this.page.locator("(//p[text()='Rates mentioned are per CBM'])")).toBeVisible()
       await expect(this.page.locator("//h4[text()='Evergreen Teresa V.284']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Vessel']")).toBeVisible()
       await expect(this.page.locator("//p[text()='Cut Off']")).toBeVisible()
       await expect(this.page.locator("//p[text()='ETD']")).toBeVisible()
       await expect(this.page.locator("//h4[text()='29-05-2023']")).toBeVisible()
       await expect(this.page.locator("//h4[text()='03-06-2023']")).toBeVisible()

     }
     /////// data  value need to add

     async originforwarder(){
       await expect(this.page.locator("//h2[text()='Origin Forwarder']")).toBeVisible()
     }
     async destinationforwarder(){
       await expect(this.page.locator("//h2[text()='Destination Forwarder']")).toBeVisible()
     }
     async notifyparty(){
       await expect(this.page.locator("//h2[text()='Notify Party']")).toBeVisible()
     }

     async Addforwarder_name(){
       await this.page.locator("input[name='name']").fill("sample name")
     }
     async Addforwarder_email(){
       await this.page.locator("input[name='email']").fill("sanjai777@gmail.com")
     }
     async Addforwarder_ph(){
       await this.page.locator("input[name='mobile']").fill("+3244323423")
     }
     async Addforwarder_companyname(){
       await this.page.locator("input[name='companyName']").fill("sample company")  // disable one
     }
     async Addforwarder_dis_companyname(){
       await expect(this.page.locator("input[name='companyName']")).toBeDisabled()
     }
     async Addforwarder_Doorno(){
       await this.page.locator("input[name='doorNo']").fill("91")
     }
     async Addforwarder_Building(){
       await this.page.locator("input[name='building']").fill("sample building")
     }
     async Addforwarder_street(){
       await this.page.locator("input[name='street']").fill("sample street")
     }
     async Addforwarder_area(){
       await this.page.locator("input[name='area']").fill("sample area")
     }
     async Addforwarder_country(){
       await expect(this.page.locator("select[name='country']")).toBeDisabled()
     }//select[@name='country']
     async Addforwarder_sel_state(){
       var state = await this.page.locator("select[name='state']")
       await state.selectOption("Tamil Nadu") 
     }
     async Addforwarder_sel_jstate(){
       var state = await this.page.locator("select[name='state']")
       await state.selectOption("Jammu And Kashmir") 
     }
     async Addforwarder_sel_jcity(){
       const city =  await this.page.locator("select[name='city']")
       await city.selectOption("Jammu")    
     }
     async Addforwarder_sel_city(){
       const city =  await this.page.locator("select[name='city']")
       await city.selectOption("Nilgiris")    
     }
     async Addforwarder_inp_state(){
       await this.page.locator("input[name='state']").fill("sample state")  
     }
     async Addforwarder_inp_city(){
       await this.page.locator("input[name='city']").fill("sample city")    
     }
     async Addforwarder_pincode(){
       await this.page.locator("input[name='pincode']").fill("098763")
     }
     async Addforwarder_ori_fileupload(){
       await this.page.locator("input[type='file']").setInputFiles("data-files/Gst.pdf")
     }
     async  Addforwarder_hblname(){
       await this.page.locator("input[name='hblName']").fill("3244323423")
     }
     async search_forwarder(){
       await this.page.locator("//input[@placeholder='Search Forwarders']").click()
     }
     async address_card(){
       await expect(this.page.locator("(//div[@class='_AddressCard_163sz_1'])[1]")).toBeVisible()
     }
     async packinggfileupload(){
       await this.page.locator("//input[@id='Packaging']").setInputFiles("data-files/Gst.pdf")
     }//input[@id='shippingbill']
     async confirm_booking(){
       await this.page.locator("//button[text()='Confirm Booking']").click()
     }
     async pre_booking_assert(){
       await expect(this.page.locator("(//p[text()=' Pre-Booking'])[1]")).toBeVisible()
     }
     async check_currentdate_and_destport(){
       await expect(this.page.locator("(//h1[text()='AEJEA'])[3]")).toBeVisible()
       await expect(this.page.locator("(//span[@class='_bookingdate_f9wgm_283'])[1]")).toHaveText((currentdate))
     }
     async all_button(){
       await this.page.locator("//button[text()='All']").click()
     }
     async Pre_book_button(){
       await this.page.locator("//button[text()='Pre Booking']").click()
     }
     async Booked_button(){
       await this.page.locator("//button[text()='Booked']").click()
     }
     async Payment_completed_button(){
       await this.page.locator("//button[text()='Payment Completed']").click()
     }
     async My_bookings(){
       
       await this.page.waitForNavigation({waitUntil:"networkidle"})
       await this.page.locator("//a[contains(text(),'My Bookings')]").click()
     }
     async book_now_from_pre_book(){
       await this.page.locator("(//button[text()='Book Now '])[1]").click()
     }
//button[text()='Add Another Package']
//input[@placeholder='Search Destination Port']
//cargo details page validation in both

   // my account page
     async ff_name(){
       await this.page.locator("//a[@role='button']//p[1]").click()
     }
     async my_account(){
       await this.page.locator("//a[contains(text(),'My Account')]").click()
     }
     async logout(){
       await this.page.locator("//a[contains(text(),'Logout')]").click()
     }
     async Dashboard(){
       await this.page.locator("//a[contains(text(),'Dashboard')]").click()
     }
     async my_bookings(){
       await this.page.locator("//a[contains(text(),'My Bookings')]").click()
     }
     async port_nhava(){
       await this.page.locator("(//button[@type='button'])[2]").click()
     }
     async port_chennai(){
       await this.page.locator("(//button[@type='button'])[3]").click()
     }
     async edit_details(){
       await this.page.locator("//button[text()='Edit']").click()
     }
     async edit_fullname(s:string){
       await this.page.locator("//input[@id='fullName']").fill(s)
     }
     async assert_fullname(){
       await expect(this.page.locator("//input[@id='fullName']")).toHaveValue("sanjai")
     }
     async assert_phonenumb(){
       await expect(this.page.locator("//input[@id='Mobile']")).toHaveValue("8870050284")
     }
     async edit_mobile(s:string){
       await this.page.locator("//input[@id='Mobile']").fill(s)
     }
     async edit_submit(){
       await this.page.locator("//button[@type='submit']").click()
     }

     async full_name_val(){
       await this.page.locator("//p[text()='Full Name is required']").click()
     }
     async phone_val(){
       await this.page.locator("//p[text()='Mobile Number is required']").click()
     }
     async full_name_val1(){
       await this.page.locator("//p[text()='Only alphabets are allowed']").click()
     }
     async phone_val1(){
       await this.page.locator("//p[text()='Enter Valid Phone Number']").click()
     }

   
   


// MILESTONES

async fflogin_mile (){
       const type = await this.page.locator("//select[@type='number']")
       await type.selectOption("I am a Customer")
       await this.page.locator("//input[@id='InputEmail1']").type("sanjai.s@dokonaly.com")
       await this.page.locator("//input[@id='InputPassword1']").type("Doko@2023")
       // await this.page.click("//button[@id='Signin']")
       await this.page.keyboard.press('Enter')


       await this.page.waitForTimeout(2000);
       const listen = await this.page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
         
       if(listen){
        console.log('Pop-up is visible by FF.');
        await this.page.click("//button[text()='Yes']")
       }
       else {
       console.log('Pop-up is not visible by FF.');
       }

       await this.page.click("//a[text()='My Bookings']")
       await this.page.locator("//input[@placeholder='Search Bookings']").fill("AMBQA-102-23-0073")   // will change 
       await this.page.locator("(//button[text()='View Details '])[1]").click()     // will change


    
}

 async otlogin_mile (){
       const type = await this.page.locator("//select[@type='number']")
       await type.selectOption("I am an Administrator")
       await this.page.locator("//input[@id='InputEmail1']").type("ot@ams.com")
       await this.page.locator("//input[@id='InputPassword1']").type("Doko@2023")
       // await this.page.click("//button[@id='Signin']")
       await this.page.keyboard.press('Enter')

     
       await this.page.waitForTimeout(2000);
       const listen = await this.page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
         
       if(listen){
        console.log('Pop-up is visible by OT.');
        await this.page.click("//button[text()='Yes']")
       }
       else {
       console.log('Pop-up is not visible by OT.');
       }
       await this.page.locator("//input[@placeholder='Search Schedule ID']").type("INNSA/AEJEA/35-01") // will change
       await this.page.click("//button[text()='View']")
       await this.page.locator("//input[@placeholder='Search Company Name']").type("sanjai pvt ltd")   // will change

       await this.page.click("//button[text()='Booked']")
       await this.page.click("(//button[text()='View Info'])[5]")   //will change
    
}
async oripartner_mile(){
       const type = await this.page.locator("//select[@type='number']")
       await type.selectOption("I am a Partner")
       await this.page.locator("//input[@id='InputEmail1']").type("chennai@ocfs.com")
       await this.page.locator("//input[@id='InputPassword1']").type("Doko@2023")
       await this.page.keyboard.press('Enter')

       
       await this.page.waitForTimeout(2000);
       const listen = await this.page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
       
       if(listen){
        console.log('Pop-up is visible by partner.');
       await this.page.click("//button[text()='Yes']")
       }
       else {
        console.log('Pop-up is not visible by partner.');
       }
       await this.page.click("(//button[text()='View'])[8]")                   // will change
       await this.page.click("(//button[text()='View Info'])[5]")              // will change
}
async destpartner_mile(){
       const type = await this.page.locator("//select[@type='number']")
       await type.selectOption("I am a Partner")
       await this.page.locator("//input[@id='InputEmail1']").type("uae@dcfs.com")
       await this.page.locator("//input[@id='InputPassword1']").type("Doko@2023")
       // await this.page.click("//button[@id='Signin']")
       await this.page.keyboard.press('Enter')

       await this.page.waitForTimeout(2000);
       const listen = await this.page.isVisible("//p[text()='The user is already logged in, do you want to log out all users?']")
       
       if(listen){
        console.log('Pop-up is visible.');
       await this.page.click("//button[text()='Yes']")
       }
       else {
        console.log('Pop-up is not visible.');
       }
       await this.page.click("(//button[text()='View'])[8]")                      // will change
       await this.page.click("(//button[text()='View Info'])[5]")                 // will change
}
     
     
     async fileupload(){
       await this.page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
    //   await this.page.click("(//div[@class='_filediv_vtv8j_105']//span)[2]")         /////// file view
      
       await this.page.click("._fileContainer_boizn_39 > svg")
       await this.page.locator("//input[@id='file']").setInputFiles("data-files/Gst.pdf")
       await this.page.click("._fileContainer_boizn_39 > svg")

       await this.page.locator("//input[@id='file']").setInputFiles("data-files/fivemb.pdf")
       await this.page.waitForTimeout(3000)
       await this.page.click("._fileContainer_boizn_39 > svg")
       //10 mb
       await this.page.locator("//input[@id='file']").setInputFiles("data-files/tenmb.pdf")
       await this.page.waitForTimeout(3000)
       await expect(this.page.locator("//p[text()='File size should not be more than 5 MB']")).toBeVisible()
       
       // xls file
       await this.page.locator("//input[@id='file']").setInputFiles("data-files/destination.xls")
       await this.page.waitForTimeout(3000)
       await expect(this.page.locator("//p[text()='Upload only PDF']")).toBeVisible()
       
       // word file
       await this.page.locator("//input[@id='file']").setInputFiles("data-files/Works.docx")
       await this.page.waitForTimeout(3000)
       await expect(this.page.locator("//p[text()='Upload only PDF']")).toBeVisible()
       
       // image
       await this.page.locator("//input[@id='file']").setInputFiles("data-files/sample.png")
       await this.page.waitForTimeout(3000)
       await expect(this.page.locator("//p[text()='Upload only PDF']")).toBeVisible()
       

}

async fileupload_invoice(){
       await this.page.locator("//input[@id='Invoice']").setInputFiles("data-files/Gst.pdf")
    //   await this.page.click("(//div[@class='_filediv_vtv8j_105']//span)[2]")         /////// file view
      
       await this.page.click("._fileContainer_boizn_39 > svg")
       await this.page.locator("//input[@id='Invoice']").setInputFiles("data-files/Gst.pdf")
       await this.page.click("._fileContainer_boizn_39 > svg")
       await this.page.locator("//input[@id='Invoice']").setInputFiles("data-files/5mbb.pdf")
       await this.page.click("._fileContainer_boizn_39 > svg")
       //10 mb
       await this.page.locator("//input[@id='Invoice']").setInputFiles("data-files/10 mb file.pdf")
       await expect(this.page.locator("//p[text()='File size should not be more than 5 MB']")).toBeVisible()
       await this.page.click("._fileContainer_boizn_39 > svg")
       // xls file
       await this.page.locator("//input[@id='Invoice']").setInputFiles("data-files/destination (2).xls")
       await expect(this.page.locator("//p[text()='File size should not be more than 5 MB']")).toBeVisible()
       await this.page.click("._fileContainer_boizn_39 > svg")
       // word file
       await this.page.locator("//input[@id='Invoice']").setInputFiles("data-files/Works.docx")
       await expect(this.page.locator("//p[text()='File size should not be more than 5 MB']")).toBeVisible()
       await this.page.click("._fileContainer_boizn_39 > svg")
       // image
       await this.page.locator("//input[@id='Invoice']").setInputFiles("data-files/sample.png")
       await expect(this.page.locator("//p[text()='File size should not be more than 5 MB']")).toBeVisible()
       await this.page.click("._fileContainer_boizn_39 > svg")

}
async origin_forwarder_title_assert(){
       await expect(this.page.locator("//h2[text()='Booking Party']")).toBeVisible() 
       await expect(this.page.locator("//h1[text()='Booking Party Details']")).toBeVisible() 
       await expect(this.page.locator("//h1[text()='Booking Party Address']")).toBeVisible() 
       await expect(this.page.locator("//p[text()='Fill in your details']")).toBeVisible() 
       await expect(this.page.locator("//h1[text()='Additional Details']")).toBeVisible() 
       await expect(this.page.locator("//p[text()='Booking Party ']")).toBeVisible() 

       await expect(this.page.locator("//label[text()='Name']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Email']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Mobile Number']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Company Name']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Door No.']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Building']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Street']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Area / Locality']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Country']")).toBeVisible()
       await expect(this.page.locator("//label[text()='State']")).toBeVisible()
       await expect(this.page.locator("//label[text()='City']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Pincode']")).toBeVisible()
       await expect(this.page.locator("//h4[text()='Uploaded GST Certificate']")).toBeVisible()
       await expect(this.page.locator("//p[text()='PDF (Recommended) Upto 5MB Allowed'] ")).toBeVisible()
       await expect(this.page.locator("//label[text()='Actual Shipper Name']")).toBeVisible()
       await expect(this.page.locator("//span[text()='(as per HBL)']")).toBeVisible()
       await expect(this.page.locator("//label[text()='CHA Name']")).toBeVisible()
       await expect(this.page.locator("//label[text()='CHA License Number']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Truck Number']")).toBeVisible()
       await expect(this.page.locator("//label[text()='Driver Name']")).toBeVisible()

}

}
