const homeView = require('../views/home-view.js')

// Call views.publish with the built-in client
const publishView = async (event, client) => {

    // Call views.publish with the built-in client
    const result = await client.views.publish({
        // Use the user ID associated with the event
        user_id: event.user,
        view: homeView.json(event.user)
      });

      return result

}

module.exports = {
    publishView: publishView
}