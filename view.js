//view

function logIn() {
    let appDiv = document.getElementById('app');
    let html = '';
    
    html += `<h1>LOG IN</h1>
    <div>USERNAME</div>
    <input class="logIn" id="username" type="text"></input>
    <br>
    </br>

    <div class="passwordTxt">PASSWORD</div>
    
    <input class="logIn" id="password" type="text"></input> </br>
    <div id="" class="welcomeMenu wm1 confirm" onclick="checkUser()">Confirm</div> 
    <div id="" class="welcomeMenu wm5 newUser" onclick="newUser()">New user</div>
    `;
            
appDiv.innerHTML = html;
}


function newUser() {
    let appDiv = document.getElementById('app');
    let html = '';
    
    html += `<h1>NEW USER</h1>
    <div class=""></div>
    <div>USERNAME</div>
    <input class="logIn" id="newUsername" type="text"></input></br>
    <div>PASSWORD</div>
    <input class="logIn" id="newPassword" type="text"></input></br>
    <div>REPEAT PASSWORD</div>
    <input class="logIn" id="newPasswordChk" type="text"></input>
    
    <div id="" class="welcomeMenu wm1 confirm" onclick="createUser()">Confirm</div>
    
    <div class="back" onclick="logIn();">⇦</div>
    `;
appDiv.innerHTML = html;
}

welcome();
function welcome() {
let appDiv = document.getElementById('app');
let html = '';
// ${model.me.userName}
html += `<h1>Welcome</h1>
    <div id="" class="menuContainer">
        <div id="" class="welcomeMenu wm1" onclick="opt1()">My Page</div>
        <div id="" class="welcomeMenu wm2" onclick="opt2()">Friends</div>
        <div id="" class="welcomeMenu wm3" onclick="opt3()">Games</div>
        <div id="" class="welcomeMenu wm4 wm4Clip" onclick="opt4()">Leaderboard</div>
        <div id="" class="welcomeMenu wm5" onclick="opt5()">Options Menu</div>
        <div class="back" onclick="logIn();">⇦></div><div>Log out</div
    </div>

`        ; 
appDiv.innerHTML = html;
}


function optionView1() {
let appDiv = document.getElementById('app');
let html = '';

html += `<h1>${h1}</h1>
    <div id="" class="optionView1">
        <div id="" class="animateContainer">
            <div class="userContainer">
                <div class="user userAvatar"><img src="${model.me.avatar}"/></div>
                <div class="user userName">${model.me.userName}</div>
                <div class="user userId">User Id: ${model.me.id}</div>

                <div class="user userScore">Score: ${model.me.score}</div>
            </div>
        </div>
        <div class="back" onclick="wlcPg()">⇦</div>    
    </div>

`   ;       
appDiv.innerHTML = html;
}


function optionView2() {
    let appDiv = document.getElementById('app');
    let html = '';
    
    html += `<h1>${h1}</h1>
        <div class="optionView2">
            <input id="search" type="text" onchange="searchFriend(this)" placeholder="Search..">
            
            <div class="found">Found: ${foundName.userName}</div>
            <div class="friendbtn" onclick="addFriend()">ADD</div>

           

            </br>
            <div class="listContainer"> 
            <table id="friendTable" class="friendTable">
                <tr>
                    ${friendTable}
                </tr>
            </table>    
            </div>
            <div class="found">Selected: ${selectedName.userName}</div>
            <div class="msgFriend" onclick="msgFriend()">📧</div>
            <div class="removeFriend" onclick="removeFriend()">🚫</div>
        </div>
        <div class="back" onclick="wlcPg()">⇦</div> 
    `;

appDiv.innerHTML = html;
}






function optionView4() {
    let appDiv = document.getElementById('app');
    let html = '';
    
    html += `<h1>${h1}</h1>
    <div id="" class="welcomeMenu wm1" onclick="leadersFriends()">Friends</div>
        <div id="" class="welcomeMenu wm2" onclick="leadersAll()">All</div>
        <div class="leaderboard">${leaderboard}</div>
    
    <div class="back" onclick="wlcPg()">⇦</div>`;

appDiv.innerHTML = html;
}

function optionView5() {
    let appDiv = document.getElementById('app');
    let html = '';
    
    html += `<h1>${h1}</h1>
            <div id="" class="optionsContainer">
            <hr>
                <div id="" class="menuHeader">Sound:</div>  </br>
                
                    <input class="chkBox" id="" type="checkbox" name="" value="">
                        <label for="">Music</label> </br>
                    <input class="chkBox" id="" type="checkbox" name="" value="">
                        <label for="">FX</label>
                        
                        <br></br>
                    <input class="slider" type="range" min="1" max="100" value="50" class="slider">volume</input>
                    <br></br>
                <hr>
                    <div id="" class="menuHeader">Color:</div> </br>
                        <select class="selectMenu" id="" onchange="themeChooser(value)">
                            <option value="colors">Colors</option>
                            <option value="purple">Purple</option>
                            <option value="green">Green</option>
                            <option value="blue"selected>Blue</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                            <option value="gray" >Gray</option>
                        </select>
                        <br></br>
                <hr>
                <div id="" class="menuHeader">Language:</div> </br>
                <select class="selectMenu" id="">
                    <option value="no">Norwegian</option>
                    <option value="eng" selected>English</option>
                </select>
                <br></br>
        <hr>

            </div>
     <div class="back" onclick="wlcPg()">⇦</div> 
    `;
                
appDiv.innerHTML = html;
}

    
   