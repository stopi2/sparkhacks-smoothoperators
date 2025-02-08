// Get the modals and the <span> elements that close the modals
var modal = document.getElementById("welcomeModal");
var textFieldModal = document.getElementById("textFieldModal");
var span = document.getElementsByClassName("close")[0];
var spanTextField = document.getElementsByClassName("close-text-field")[0];

// Window load event
window.onload = function() {
    // Delay displaying the welcome modal by 5 seconds
    setTimeout(function() {
        modal.style.display = "block";
    }, 3000);

    // Close welcome modal when the close button (x) is clicked
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Close text field modal when the close button (x) is clicked
    spanTextField.onclick = function() {
        textFieldModal.style.display = "none";
    };

    // Close modals when clicking outside of them
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == textFieldModal) {
            textFieldModal.style.display = "none";
        }
    };

    // Display initial message
    displayMessage("Hi, this is Erica. How can I help you today?");
};

document.getElementById('ai-button').addEventListener('click', function() {
    textFieldModal.style.display = "block";
    document.getElementById('dynamic-input').focus(); // Focus the input field when modal shows
});

function sendDynamicMessage() {
    var input = document.getElementById('dynamic-input');
    var message = input.value.trim().toLowerCase();

    if (message) {
        displayLinksForQuery(message, "dynamic-messages"); // Display links inside the modal
        input.value = ''; // Clear input after sending
    }
}

// Function to display links for a query inside the modal
function displayLinksForQuery(query, targetId) {
    const targetContainer = document.getElementById(targetId);
    targetContainer.innerHTML = ""; // Clear previous results

    if (searchDatabase[query]) {
        let title = document.createElement("p");
        title.textContent = "Here are some relevant options:";
        targetContainer.appendChild(title);

        searchDatabase[query].forEach(option => {
            let button = document.createElement("button");
            button.textContent = option.text;
            button.classList.add("option-button");
            button.onclick = function () {
                window.open(option.link, "_blank");
            };
            targetContainer.appendChild(button);
        });
    } else {
        targetContainer.innerHTML = "<p>No relevant results found. Try a different keyword.</p>";
    }
}


const searchDatabase = {
    "graduation form": [
        { text: "Intent to Graduate", link: "https://banner.apps.uillinois.edu/StudentSelfService/ssb/graduationApplication?mepCode=2UIC#!/term" },
        { text: "Graduation Checklist", link: "#" },
        { text: "Commencement Info", link: "#" }
    ],
    "financial aid": [
        { text: "Financial Aid Office", link: "https://banner.apps.uillinois.edu/StudentSelfService/ssb/financialAid?mepCode=2UIC#!/dashboard/home/2425" },
        { text: "FAFSA Information", link: "#" },
        { text: "Scholarships", link: "#" }
    ],
    "commuter": [
        { text: "Commuter and off Campus Life", link: "https://csrc.uic.edu/" },
        { text: "Campus Services", link: "#" }
    ],
    "Studnet Perks": [
        { text: "i-Card Discounts", link: "https://sac.uic.edu/expo-homepage/discounts/icard-perks/" },
        { text: "Resounces", link: "#" }
    ],
    "audit": [
        { text: "Degree Audit (DARS)", link: "https://uachieve.apps.uillinois.edu/uachieve_uic_shib/audit/list.html?crossApp=CrossAppUrlAttributes!!!!ISEhIWluc3RpZHE9NzMhISEhaW5zdGlkPTAwMTc3NiAgISEhIWluc3RjZC5jb2RlPUNHRiEhISFpbnN0Y2QubmFtZT1BcHBsaWVkIEhlYWx0aCBTY2llbmNlcyAtIENHRiEhISFzdHVkZW50PW1zaGlmYTIhISEhY3JlYXRlUGxhbj0hISEhcmVmcmVzaENvbGxlY3Rpb249ZmFsc2UhISEhY29sbGVjdGlvblJlbG9hZGVkPWZhbHNlISEhIXRlcm1Ub1JlZ2lzdGVyPSEhISFjb3Vyc2VzVG9SZWdpc3Rlcj1udWxs" },
        { text: "Request a Transcript", link: "#" }
    ],
    "registration": [
        { text: "Dropping/Adding Classes", link: "https://banner.apps.uillinois.edu/StudentRegistrationSSB/ssb/term/termSelection?mode=registration" }
    ],
    "housing": [
        { text: "UIC Housing Portal", link: "https://my.uic.edu/uPortal/p/campus-housing-portal.ctf4/max/render.uP" }
    ],
    "student": [
        { text: "Student Health Services", link: "https://my.uic.edu/uPortal/p/student-health.ctf12/max/render.uP" },
        { text: "Advocacy/Health/Wellness", link: "https://my.uic.edu/uPortal/p/advocacy-health-wellness.ctf13/max/render.uP" }
    ],
    "parking": [
        { text: "UIC Parking Services", link: "https://my.uic.edu/uPortal/p/uic-parking.ctf14/max/render.uP" }
    ],
    "career": [
        { text: "UIC Career Services", link: "https://my.uic.edu/uPortal/p/career-information-cms.ctf15/max/render.uP" }
    ]
};

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim().toLowerCase();

    if (message) {
        displayMessage(`You: ${message}`);
        handleQuery(message);
        input.value = ''; // Clear input after sending
    }
}

function handleQuery(query) {
    if (searchDatabase[query]) {
        displayMessage("Here are some relevant options:");
        searchDatabase[query].forEach(option => {
            displayMessage(`<a href='${option.link}' target='_blank'>${option.text}</a>`, true);
        });
        logSearch(query, searchDatabase[query].map(o => o.text).join(", "));
    } else {
        displayMessage("Sorry, I couldn't find anything relevant. Try searching different keywords.");
    }
}

function displayMessage(message, isHTML = false) {
    const messagesContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    if (isHTML) {
        messageDiv.innerHTML = message;
    } else {
        messageDiv.textContent = message;
    }
    messageDiv.className = 'message';
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function logSearch(query, result) {
    fetch('log_search.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, result })
    });
}

// Autocomplete Feature
const chatInput = document.getElementById("chat-input");
chatInput.addEventListener("input", function() {
    let userInput = chatInput.value.toLowerCase();
    let suggestions = Object.keys(searchDatabase).filter(key => key.includes(userInput));
    showAutocompleteSuggestions(suggestions);
});

function showAutocompleteSuggestions(suggestions) {
    let suggestionBox = document.getElementById("autocomplete-suggestions");
    if (!suggestionBox) {
        suggestionBox = document.createElement("div");
        suggestionBox.id = "autocomplete-suggestions";
        chatInput.parentNode.appendChild(suggestionBox);
    }
    suggestionBox.innerHTML = "";

    suggestions.forEach(suggestion => {
        let suggestionItem = document.createElement("div");
        suggestionItem.textContent = suggestion;
        suggestionItem.classList.add("autocomplete-item");
        suggestionItem.onclick = function() {
            chatInput.value = suggestion;
            suggestionBox.innerHTML = "";
        };
        suggestionBox.appendChild(suggestionItem);
    });

    if (suggestions.length === 0) {
        suggestionBox.innerHTML = "";
    }
}