const json = (user) => {
	const jsonView = {
		"type": "home",
		"callback_id": "home_view",
		"blocks": [{
				"type": "header",
				"text": {
					"type": "plain_text",
					"text": "Welcome to My Adventure Time!"
				}
			},
			{
				"type": "image",
				"title": {
					"type": "plain_text",
					"text": "Welcome to the adventure"
				},
				"block_id": "castle-dark-image1",
				"image_url": "https://files.slack.com/files-pri/T022U76576J-F02J22RJG9K/my-adventure-time-dark-castle.jpg?pub_secret=3c53fac868",
				"alt_text": "A dark castle"
			},
			{
				"type": "actions",
				"elements": [{
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Start New Adventure",
							"emoji": true
						},
						"style": "primary",
						"action_id": "create_button",
						"value": "create_adventure"
					},
					{
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Continue Adventure",
							"emoji": true
						},
						"action_id": "continue_button",
						"value": "continue_adventure"
					},
					{
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Help",
							"emoji": true
						},
						"value": "help"
					}
				]
			},
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "*Your Adventures - Placeholders*"
				}
			},
			{
				"type": "divider"
			},
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "*#a-knight-with-a-dragon*\\nThe kingdon is beset by a firey red dragon, a knight heeds their call."
				},
				"accessory": {
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Continue",
						"emoji": true
					},
					"value": "story-1"
				}
			},
			{
				"type": "divider"
			},
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "*#the-blight*\\nThey say each generation struggles with its own plague."
				},
				"accessory": {
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Continue",
						"emoji": true
					},
					"value": "story-2"
				}
			},
			{
				"type": "divider"
			}
		]
	}

	return jsonView
}

module.exports = {
	json: json
}