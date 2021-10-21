require('dotenv').config()
const { App } = require('@slack/bolt');
const views = require('./utils/view.js')

// Initializes your app with your bot token and signing secret
const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add functionality here */

// Listens to incoming messages that contain "hello"
app.message('hello', async ({message, say}) => {

  // Say sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>`)

});

// Handle user's opening the app home
app.event('app_home_opened', async ({ event, client }) => {

  try {
    views.publishView(event, client)
  }

  catch ( error ) {
    console.error(error)
  }

});

app.action('create_button', async ({ ack }) => {
  await ack()
});

app.action('continue_button', async ({ ack }) => {
  await ack()
});

(async () => {

  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');

})();