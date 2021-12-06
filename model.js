//model

let h1 = "LOG IN";
let foundName = '-';
let friendTable = '';
let leaderboard = '';
let selectedFriend = '';
let selectedName = '';
let avatars = ['pog.jpg', 'minesweeper.jpg', 'giraf.jpg' ];
model = {
        people: [
            {id: '0', userName: 'Stigh', password: '123', score: 1250, avatar: avatars[0],},
            {id: '1', userName: 'Anders', password: '321', score: 6900, avatar: avatars[1],},
            {id: '2', userName: 'Fredrik', password: '321', score: 200, avatar: 'something2.jpg',},
            {id: '3', userName: 'Ronny', password: '321', score: 7500, avatar: 'something3.jpg',},
            {id: '4', userName: 'Rebecca', password: '321', score: 10900, avatar: 'something4.jpg',},
            {id: '5', userName: 'Janne', password: '321', score: 4390, avatar: 'something5.jpg',},
            {id: '6', userName: 'Johnny', password: '321', score: 9350, avatar: 'something6.jpg',},
            {id: '007', userName: 'cLuMsY', password: 'Ringnes', score: -666, avatar: avatars[2],},
        ],
        myFriends: [
        ],
        

        // me: {id: '000', userName: 'Stigh', password: '123', score: 1250, avatar: 'model.avatars[0]',},
}