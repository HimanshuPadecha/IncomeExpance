import React from "react";
import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf"

class AppwriteServices{
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteApiEndpoint)
        .setProject(conf.appWriteProjectId)

        this.account = new Account(this.client)
    }

    async signup(email,password){
        try {
            const user = await this.account.create(ID.unique(),email,password)
            if(user)
                return this.login(email,password)
        } catch (error) {
          console.log("Error in signup : " + error);
            throw error
        }
    }

    async login(email,password){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("Error in login: " + login);    
            throw error
        }
    }

    async getUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Error in getUser: "+ error );
            throw error
        }
    }


    async logout(){
        try {
        
             await this.account.deleteSession("current")
        } catch (error) {
            console.log("Error in logout : "+ error);
            throw error
        }
    }
}

const services = new AppwriteServices()
export default services