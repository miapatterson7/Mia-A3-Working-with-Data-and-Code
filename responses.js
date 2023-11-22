function getBotResponse(input) {
    //common questions
    if (input == "what service do you promote") {
        return "We are a public relations start-up that specilises in the thoroughbred industry!";
    } else if (input == "How can I contact you") {
        return "Our contact details are at the top menu of this page.";
    } else if (input == "Thankyou") {
        return "No worries! Have a great day";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}


