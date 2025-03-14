const divContent = document.getElementById('bodyStuff');

document.getElementById('homeButton').addEventListener('click', home);
document.getElementById('studentButton').addEventListener('click', student);
document.getElementById('giveUserInfoButton').addEventListener('click', giveUserInfo);

const viewed = new Map();
let value = 1;



function home(){
    //check if exists
    if (document.getElementById('homePageContent')){
        return;
    }

    const homePage = document.createElement('div');
    homePage.id = 'homePageContent';
    const newBody = `
    <div id = "bodyStuff">
        <div class="bodyContainer">
                <div class = bodyItem>
                    <img src= "photos/584688.jpg" alt="blackboard" width="200" height="200">
                    <div class = "bodyText"> Student Records</div>
                    <div class = "extra-text"> View my Courses</div>
                </div>
            </div>
            <div class="bodyContainer" onclick = "window.location.href='https://uic.blackboard.com/';">
                <div class = bodyItem>
                    <img src= "photos/blackboardlearn_logo.jpg" alt="blackboard">
                    <div class = "bodyText"> Registration</div>
                    <div class = "extra-text"> View my Courses</div>
                </div>    
            </div>
            <div class="bodyContainer" onclick = "window.location.href= 'https://paymybill.uillinois.edu/Access/';">
                <div class = bodyItem>
                    <img src= "photos/my-leave-record8.webp" alt="blackboard"  width="200" height="200">
                    <div class = "bodyText"> Bursar</div>
                    <div class = "extra-text"> View Payment Deadlines</div>
                </div>    
                
            </div>
        </div>
    </div>
  `;
    homePage.innerHTML = newBody;
    const divContent = document.getElementById('bodyStuff');
    divContent.innerHTML = '';
    divContent.append(homePage); 
    
    // Attach an event listener to the dynamically created button    
}

function student(){
    if (document.getElementById('studentPageContent')){
        return;
    }
    const divContent = document.getElementById('bodyStuff');
    const homePage = document.createElement('div');
    homePage.id = 'studentPageContent';
    const newBody = `
    <div id = "bodyStuff">
        <div class="bodyContainer">
                <div class = bodyItem>
                    <img src= "photos/registration8.png" alt="register" width="200" height="200">
                    <div class = "bodyText"> Registration</div>
                    <div class = "extra-text"> View Registration Information</div>
                </div> 

        </div>
        
        <div class="bodyContainer" onclick = "window.location.href='https://login.uillinois.edu/auth/SystemLogin/sm_login.fcc';">
                <div class = bodyItem>
                <img src= "photos/AID8.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Financial Aid</div>
                <div class = "extra-text"> View FAFSA</div>
            </div> 
        </div>

        <div class="bodyContainer" onclick = "window.location.href='https://housing.uic.edu/';">
                <div class = bodyItem>
                <img src= "photos/housingP.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Campus Housing</div>
                <div class = "extra-text"> Learn More</div>
            </div> 
        </div>

        <div class="bodyContainer" onclick = "window.location.href='https://dos.uic.edu/events/uicare-week/';">
                <div class = bodyItem>
                <img src= "photos/iadvise8.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> iAdvise</div>
                <div class = "extra-text"> setup appointments</div>
            </div> 
        </div>

        <div class="bodyContainer" onclick = "window.location.href='https://dos.uic.edu/events/uicare-week/';">
                <div class = bodyItem>
                <img src= "photos/courses8.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Courses</div>
                <div class = "extra-text"> View Courses</div>
            </div> 
        </div>

        <div class="bodyContainer" onclick = "window.location.href='https://dos.uic.edu/events/uicare-week/';">
                <div class = bodyItem>
                <img src= "photos/mealplan8.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Meal Plan</div>
                <div class = "extra-text"> Learn More</div>
            </div> 
        </div>
    </div>
    `;


    const divArray = [
        `
        <div id = "bodyStuff">
        <div class="bodyContainer">
                <div class = bodyItem>
                    <img src= "photos/registerP.png" alt="register" width="200" height="200">
                    <div class = "bodyText"> Registration</div>
                    <div class = "extra-text"> View Registration Information</div>
                </div> 

        </div>`
    ,  
        `<div class="bodyContainer" onclick = "window.location.href='https://login.uillinois.edu/auth/SystemLogin/sm_login.fcc';">
                <div class = bodyItem>
                <img src= "photos/try.webp" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Financial Aid</div>
                <div class = "extra-text"> View FAFSA</div>
            </div> 
        </div> `
    ,

        `<div class="bodyContainer" onclick = "window.location.href='https://housing.uic.edu/';">
                <div class = bodyItem>
                <img src= "photos/housingP.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Campus Housing</div>
                <div class = "extra-text"> Learn More</div>
            </div> 
        </div> `
    ,

        `<div class="bodyContainer" onclick = "window.location.href='https://dos.uic.edu/events/uicare-week/';">
                <div class = bodyItem>
                <img src= "photos/iadvise.jpg" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> iAdvise</div>
                <div class = "extra-text"> setup appointments</div>
            </div> 
        </div>`
    ,

        `<div class="bodyContainer" onclick = "window.location.href='https://dos.uic.edu/events/uicare-week/';">
                <div class = bodyItem>
                <img src= "photos/course.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Courses</div>
                <div class = "extra-text"> View Courses</div>
            </div> 
        </div>`
    ,

        `<div class="bodyContainer" onclick = "window.location.href='https://dos.uic.edu/events/uicare-week/';">
                <div class = bodyItem>
                <img src= "photos/course.png" alt="FAFSA" width="200" height="200">
                <div class = "bodyText"> Meal Plan</div>
                <div class = "extra-text"> Learn More</div>
            </div> 
        </div>
        </div>`
    ];
    homePage.innerHTML = newBody;
    divContent.innerHTML = '';
    //const order = [1,3,2,4,5];


    // order.forEach(index => {
    //     homePage.innerHTML += divArray[index];
    // });
    
    divContent.append(homePage); 

}

function giveUserInfo(){

}
