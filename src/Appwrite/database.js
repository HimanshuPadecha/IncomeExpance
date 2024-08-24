import React from "react";
import conf from "../conf/conf";
import { ID,Databases,Client, Query } from "appwrite";

const client = new Client().setEndpoint(conf.appWriteApiEndpoint).setProject(conf.appWriteProjectId)

    const databases = new Databases(client)

const addDatabaseTransaction = async(userId,name,amount)=>{  
    
    try {      
        const post = await databases.createDocument(conf.appWriteDatabseId,conf.appWriteCollectionId,ID.unique(),{
           name,
           amount,
           userId
        })
        if(post)
            return post
    } catch (error) {
        console.log("Error in addTransaction :" + error );
        throw error   
    }
}
export default addDatabaseTransaction

export const getTransactions = async(userId)=>{
    try {
        const response = await databases.listDocuments(conf.appWriteDatabseId,conf.appWriteCollectionId,[Query.equal('userId',userId)])
        return response
    } catch (error) {
        console.log("Error occoured in getTransaction : " + error);
        throw error
    }

}