const {init} = require("../dbConfig")



class Leader {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.score = data.score;
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                const leaderBoardData = await db
                .collection("highScores")
                .find()
                .toArray();
                const leaders = leaderBoardData.map(
                    (l) => new Leader({...l, id:l._id})
                );
                console.log(leaders); 
                resolve(leaders);
            } 
            catch (err) {
                reject("could not retrieve")
            } 
        })
        
    }

    static create(newLeader) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(newLeader)
                const db = await init();
                const createLeader = await db
                .collection("highScores")
                .insertOne(newLeader);
                resolve(createLeader);


            } catch (err){
                reject("Error creating player");
            }
        } )

    }

}

module.exports = Leader;