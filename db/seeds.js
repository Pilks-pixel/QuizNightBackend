const db = connect("mongodb://localhost:27017/quizNight22");

db.highScores.drop();

db.highScores.insertMany([
    { name: 'SpongeBob', score: 3 },
    { name: 'Rambo', score: 10 },
    { name: 'Pikachu', score: 7 },
    { name: 'Gandolf', score: 9 },
    { name: 'Barbie', score: 5 },
    
]);