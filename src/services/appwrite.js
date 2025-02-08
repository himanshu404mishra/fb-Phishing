import { Client, Databases, ID, Query } from 'appwrite';
import {envs} from "../config"



class Users {
    client;
    database;
    constructor(){
        this.client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(envs.projectId)
        this.database = new Databases(this.client);
    }


    async loginUser({username,password, date}){
        try {
            let userData = await this.database.createDocument(
                envs.dbId,
                envs.collectionId,
                ID.unique(),
                { username, password, loggedInDate: date }
            )
            if(userData) return true
            
        } catch (error) {
            console.log("Error on login user function::", error);
            
        }
    }

    async getData() {
        try {
            let userData = await this.database.listDocuments(
                envs.dbId,
                envs.collectionId,
                [
                    Query.orderDesc('loggedInDate'),
                ]
            );
            if(userData) return userData

            return false

        } catch (error) {
            console.log("Error on getData function::", error);

        }
    }

}

const users = new Users()

export default users