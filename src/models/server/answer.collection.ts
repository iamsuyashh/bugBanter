import { IndexType, Permission } from 'node-appwrite'
import { answerCollection, db, questionCollection } from "@/models/name"
import { databases } from './config'

export async function createAnswerCollection() {
    await databases.createCollection(db, questionCollection, answerCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Answer collection created");


    await Promise.all([
        databases.createStringAttribute(db,answerCollection,"content",10000,true),
        databases.createStringAttribute(db,answerCollection,"questionId",50,true),
        databases.createStringAttribute(db,answerCollection,"authorId",50,true),

    ]);
    console.log("Answer collection attributes");
}