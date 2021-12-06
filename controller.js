window.addEventListener('resize', function() {
    app.width = window.innerWidth;     
    app.height = window.innerHeight;
    welcomeMenu = max-width

    document.documentElement.style.setProperty('--buttonWidth', '10vw')
});
// Controller
// var element = document.documentElement.style.setPropert
// document.documentElement.style.setProperty('--divBackgroundColor', '#333'); Endrer variabel i css.
function wlcPg() {
    h1 = "WELCOME PAGE";  
welcome();
}
function opt1() {
    h1 = "MY PAGE";
optionView1()
}
function opt2() {
    h1 = "FRIENDS";  
optionView2()
}
function opt4() {
    h1 = "LEADERBOARD";
optionView4();
}
function opt5() {
    h1 = "OPTIONS"; 
optionView5()
}

function createUser() {
    let verifyUser = model.people.find( ({ userName }) => userName === newUsername.value);
    if (verifyUser === undefined) {   
        if ((newPassword.value === newPasswordChk.value)) {
            let newId = 0;
            let newPasswordFinal = newPassword.value;
            for (let i = 0; i < model.people.length; i++ ) {
                if (i > newId) newId++;
            }
      
            let object = {
                id: newId+1,
                userName: newUsername.value,
                password: newPasswordFinal,
                score: 0,
                avatar: "something.jpg",
            }
            
            model.people.push(object);
            logIn();
        }
    }
}


function checkUser() {
    let verifyUser = model.people.find( ({ userName }) => userName === username.value);
        if (verifyUser.password === password.value) {
            console.log(verifyUser);
            model.me = verifyUser;
            h1 = model.me.userName;
            welcome();
        } else alert("Feil brukernavn eller passord");
}

//legg inn omgjøring til små/store bokstaver
    function searchFriend() {   
        foundName = model.people.find( ({ userName }) => userName === search.value);
        addFriend(foundName)
    // optionView2();   
    }


    function addFriend(foundName) {
        let checkName = model.myFriends.find( ({ userName }) => userName === search.value);
        if (checkName === foundName) {
            alert("Finnes allerede i venner")
            return;
        }
        if ((foundName != undefined) && (foundName != '-')) {
           
            const count = model.myFriends.push(foundName);
       
                friendTable += `
                <div id="${foundName.id}" class="friendTable" onclick="selectFriend(this)">             
                    ${foundName.userName}
                    ${foundName.score}
                   </div>
                    

                    `
        } else alert("Finner ikke person")
        foundName = '-';        
    optionView2();    
    }

    function selectFriend(element) {
       selectedFriend = element;
       selectedName = model.myFriends.find( ({ id }) => id === selectedFriend.id);
        console.log(selectedName.userName)
        
    optionView2(); 
    }

    function removeFriend() {
        let thisFindUser = model.myFriends.find( ({ id }) => id === selectedFriend.id);
        model.myFriends.splice(thisFindUser);
        selectedFriend.remove();
        remove(selectedFriend);
    optionView2(); 
    }

    function msgFriend() {
     console.log("kjører");
    // messages();
    }


function leadersAll() {
    var highScore ='';
        // for (let i = 0; i < model.people.length; i++) { 
        //     if (model.people[i].score > highScore) highScore = model.people[i].score;
        //     console.log(model.people[i].score)
        // }
       
   
       
}
        
function leadersFriends() {
    
    
}


    function themeChooser(value) {
        let root = document.documentElement.style;
        if (value === "purple") {
            valueGrad = "linear-gradient(45deg, rgba(166,101,217,1) 4%, rgba(142,92,182,1) 43%, rgba(109,75,136,1) 64%, rgba(54,38,66,1) 86%)";
            valueMenuButton1 = "hsl(275, 60%, 50%)"
            valueMenuButton2 = "hsl(275, 60%, 45%)"
            valueMenuButton3 = "hsl(275, 60%, 40%)"
            valueMenuButton4 = "hsl(275, 60%, 35%)"
            valueMenuButton5 = "hsl(275, 60%, 30%)"
        }
        if (value === "green") {
            valueGrad = "linear-gradient(45deg, rgba(98,170,118,1) 4%, rgba(75,131,91,1) 43%, rgba(56,98,68,1) 64%, rgba(38,66,46,1) 86%)";
            valueMenuButton1 = "hsl(145, 30%, 50%)"
            valueMenuButton2 = "hsl(145, 30%, 45%)"
            valueMenuButton3 = "hsl(145, 30%, 40%)"
            valueMenuButton4 = "hsl(145, 30%, 35%)"
            valueMenuButton5 = "hsl(145, 30%, 30%)"
        }
        if (value === "blue") {
            valueGrad = "linear-gradient(45deg, rgba(101,142,217,1) 4%, rgba(92,124,182,1) 43%, rgba(75,96,136,1) 64%, rgba(38,48,66,1) 86%)";
            valueMenuButton1 = "hsl(220, 60%, 50%)"
            valueMenuButton2 = "hsl(220, 60%, 45%)"
            valueMenuButton3 = "hsl(220, 60%, 40%)"
            valueMenuButton4 = "hsl(220, 60%, 35%)"
            valueMenuButton5 = "hsl(220, 60%, 30%)"
        }
        if (value === "red") {
            valueGrad = "linear-gradient(45deg, rgba(217,101,101,1) 4%, rgba(182,92,92,1) 43%, rgba(136,75,75,1) 64%, rgba(66,38,38,1) 86%)";
            valueMenuButton1 = "hsl(0, 60%, 70%)"
            valueMenuButton2 = "hsl(0, 60%, 65%)"
            valueMenuButton3 = "hsl(0, 60%, 60%)"
            valueMenuButton4 = "hsl(0, 60%, 55%)"
            valueMenuButton5 = "hsl(0, 60%, 52%)"
        }
        if (value === "gray") {
            valueGrad = "linear-gradient(45deg, rgba(162,162,162,1) 4%, rgba(128,128,128,1) 43%, rgba(84,84,84,1) 64%, rgba(47,47,47,1) 86%)";
            valueMenuButton1 = "hsl(0, 0%, 50%)"
            valueMenuButton2 = "hsl(0, 0%, 45%)"
            valueMenuButton3 = "hsl(0, 0%, 40%)"
            valueMenuButton4 = "hsl(0, 0%, 35%)"
            valueMenuButton5 = "hsl(0, 0%, 30%)"
        }
        if (value === "yellow") {
            valueGrad = "linear-gradient(45deg, rgba(213,217,101,1) 4%, rgba(179,182,92,1) 43%, rgba(135,136,75,1) 64%, rgba(65,66,38,1) 86%)";
            valueMenuButton1 = "hsl(60, 60%, 60%)"
            valueMenuButton2 = "hsl(60, 60%, 55%)"
            valueMenuButton3 = "hsl(60, 60%, 50%)"
            valueMenuButton4 = "hsl(60, 60%, 45%)"
            valueMenuButton5 = "hsl(60, 60%, 40%)"
        }
        root.setProperty('--backgroundGrad', valueGrad)
        root.setProperty('--menuButton1', valueMenuButton1)
        root.setProperty('--menuButton2', valueMenuButton2)
        root.setProperty('--menuButton3', valueMenuButton3)
        root.setProperty('--menuButton4', valueMenuButton4)
        root.setProperty('--menuButton5', valueMenuButton5)
    }