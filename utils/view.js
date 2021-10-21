const request = require('postman-request')
const homeView = require('../views/home-view.js')
const storyView = require('../views/story-modal-view.js')

// Call views.publish with the built-in client
const publishView = async (data) => {

    const { event = {}, client = {}, actions = [{}] } = data

    if (event.type == 'app_home_opened') {

        // Call views.publish with the built-in client
        const result = await client.views.publish({
            // Use the user ID associated with the event
            user_id: event.user,
            view: homeView.json(event.user)
        });

        return result

    } else if (actions[0].value == 'create_adventure') {

        // Call views.publish with the built-in client
        const result = await request.post({

            url: 'https://slack.com/api/views.open',
            json: true,
            headers: {
                Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: {
                // Need to implement a select menu for approvals
                user_id: 'U023QQ7DPME',
                view: storyView.json()
            }

        });

        return result
    }
}

module.exports = {
    publishView: publishView
}