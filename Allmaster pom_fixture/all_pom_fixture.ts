import login from '../Allmasters pom/login'
import admin_man from '../Allmasters pom/admin_man'
import {test as basetest} from "@playwright/test"

type pages = {
    loginpg : login
    adminpg: admin_man
}
const allpages = basetest.extend<pages>({
    loginpg: async({page},use)=>{
        await use(new login(page))
    },
    adminpg: async({page},use)=>{
        await use(new admin_man(page))
    },
  
})

export const test = allpages
export const expect = allpages.expect