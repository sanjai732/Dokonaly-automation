import {Page, expect} from "@playwright/test";
 export default class{
    constructor(public page:Page){}
// LOGIN 
    async emailID(id:string){
        await this.page.locator("//input[@id='InputEmail1']").fill(id)
    }
    async select_type(tp:string){
       const type = await this.page.locator("//select[@type='number']")
       await type.selectOption(tp)
    }
    async password(password:string){
        await this.page.locator("//input[@id='InputPassword1']").fill(password)
    }
    async forgot_password(){
       await this.page.locator("//a[contains(text(),'Forgot Password?')]").click()
    }
    async eyeicon(){
        await this.page.locator("icons").click()
    }
    async register_clk(){
        await this.page.locator("//button[text()='Register']").click()
    }
    async login_wrgtoast(){
        await expect(this.page.locator("//div[text()='User Name or Password is Invalid']")).toBeVisible()
    }
    async login_wrgtoast2(){
        await expect(this.page.locator("//div[contains(@class,'Toastify__toast-icon Toastify--animate-icon')]/following-sibling::div[1]")).toBeVisible()
    }
    async sign_in(){
        await this.page.locator("//button[@id='Signin']").click()
    }
    async logout_dd(){
       // await this.page.waitForNavigation({waitUntil:"networkidle"})
        await expect(this.page.locator("//a[text()='AllMasters']")).toBeVisible()
        await this.page.locator("(//a[@class='dropdown-toggle nav-link'])[2]").click()
        await this.page.locator("//a[contains(text(),'Logout')]").click()
        await expect(this.page.locator("//h5[text()='Welcome back !']")).toBeVisible()
    }

    async logout_mile_OT(){
        
        await this.page.locator("//li[text()='Sign Out']").click()
    }
    async logout_mile(){
        await this.page.locator("(//a[@class='dropdown-toggle nav-link'])[2]").click()
        await this.page.locator("//a[contains(text(),'Logout')]").click()
    }
    async logout_orimile(){
        await this.page.locator("//a[@class='dropdown-toggle nav-link']//p[1]").click()
        await this.page.locator("//a[contains(text(),'Logout')]").click()
    }
    async email_toast(){
        await expect(this.page.locator("//p[text()='Email is required']")).toBeVisible()
    }
    async email_toast1(){
        await expect(this.page.locator("//p[text()='Enter valid email']")).toBeVisible()
    }
    async password_toast(){
        await expect(this.page.locator("//p[text()='Password is required']")).toBeVisible()
    }




// register

    async fullname_val(){
        await expect(this.page.locator("//p[text()='Full Name is required']")).toBeVisible()
    }
    async fullname_val1(){
        await expect(this.page.locator("//p[text()='Only alphabets are allowed']")).toBeVisible()
    }
    async designation_val(){
        await expect(this.page.locator("//p[text()='Department is required']")).toBeVisible()
    }
    async phone_code_val(){
        await expect(this.page.locator("//p[text()='Mobile Number is required']")).toBeVisible()
    }
    async phone_code_val1(){
        await expect(this.page.locator("//p[text()='Should have atleast 10 numbers']")).toBeVisible()
    }//
    async email_val(){
        await expect(this.page.locator("//p[text()='Email is required']")).toBeVisible()
    }
    async email_val1(){
        await expect(this.page.locator("//p[text()='Enter your official email']")).toBeVisible()
    }
    async email_val2(){
        await expect(this.page.locator("//p[text()='Enter valid email address']")).toBeVisible()
    }
    async Regis_password_val1(){
        await expect(this.page.locator("//p[text()='Invalid Password format']")).toBeVisible()
    }
    async Regis_password_val(){
        await expect(this.page.locator("//p[text()='Password is required']")).toBeVisible()
    }
    async Regis_cpassword_val(){
        await expect(this.page.locator("//p[text()='Confirm Password is required']")).toBeVisible()
    }
    async Regis_cpassword1_val1(){
        await expect(this.page.locator("//p[text()='Password does not match']")).toBeVisible()
    }

    async login_clk(){
        await this.page.locator("//a[contains(text(),'Login')]").click()
    }
    async fullname(name:string){
        await this.page.locator("//input[@id='fullname']").type(name)
    }
    async designation(design:string){
      const designation =  await this.page.locator("//select[@id='designation']")
      await designation.selectOption(design)
    }
    async phone_code(ph_code:string){
        await this.page.locator("//input[@id='phoneCode']").type(ph_code)
    }
    async email(mail:string){
        await this.page.locator("//input[@id='email']").type(mail)
    }
    async Regis_password(rpassword:string){
        await this.page.locator("//input[@id='Password']").type(rpassword)
    }
    async Regis_cpassword(rcpassword:string){
        await this.page.locator("//input[@id='ConfirmPassword']").type(rcpassword)
    }
    async get_start(){
        await this.page.locator("//button[text()='Get Started']").click()
    }
    async reg_yes(){
        await this.page.locator("//button[text()='Yes']").click()
    }
    async reg_no(){
        await this.page.locator("   ").click()
    }
    async terms_condition_clk(){
        const term = await this.page.locator("//input[@name='termsconditions']")
        await term.scrollIntoViewIfNeeded()
        await term.click()
    }

// Reset password
      
    async Reset_mail(id:string){
        await this.page.locator("//input[@id='InputEmail']").type('Sanjai.s@dokonaly.com')
    }
    async Reset_btn(){
        await this.page.locator("//button[text()='Reset Password']")
    }
    async Reset_goback(){
        await this.page.locator("//a[contains(text(),'Go back')]")
    }
    async Reset_register(){
        await this.page.locator("//a[contains(text(),'Register')]")
    } 
    
    
}
