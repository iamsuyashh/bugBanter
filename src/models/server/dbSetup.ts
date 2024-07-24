import { db } from "../name";

import { createAnswerCollection } from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createStorage from "./storage.collection";
import createVoteCollection from "./vote.collection";
import { databases } from "./config";

export default async function getOrCreateDB() {
    try {
        await databases.get(db)
        console.log("Database Connected");

    } catch (error) {
        try {
            await databases.create(db, db)
            console.log("Database Created");
            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),
                createStorage()
            ])
            console.log("Collection Created");
            console.log("Database Connected");

        } catch (error) {
            console.error("Error creating database:", error);
        }
    }

    return databases
}