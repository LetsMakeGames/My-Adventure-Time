const json = () => {
    const jsonView = {
        "type": "modal",
        "callback_id": "story_view",
        "title": {
            "type": "plain_text",
            "text": "My Adventure Time",
            "emoji": true
        },
        "submit": {
            "type": "plain_text",
            "text": "Select",
            "emoji": true
        },
        "close": {
            "type": "plain_text",
            "text": "Cancel",
            "emoji": true
        },
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Please select an adventure:*"
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Wrath of Bahamut*\\n:star::star::star::star: 1528 reviews\\n A child of the dragon clan, Braden always dreamed of being a great warrior. He imagined the day when he would be strong enough to take to the skies and protect his clan from whatever darkness may arise. When he came of age, he left his home in search of adventure, and it wasn't long before he found himself in the middle of a war that threatened to tear his country apart. Now, with his dragon powers awakened, Braden must do what he can to stop the chaos that threatens to consume his homeland."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
                    "alt_text": "alt text for image"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*The Broken Fae*\\n:star::star::star::star: 1638 reviews\\n Brian always felt like he was different from the other children. While they seemed to enjoy their carefree lives, he always felt like something was missing. He wanted to leave the forest and explore the world, but his parents were very protective and told him that it was too dangerous for a wood elf to leave the safety of the trees. A curious teen, Brian left his home in the middle of the night and began his search for adventure. He didn't know what he would find on his journey, but he had a feeling that it would change his life forever."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
                    "alt_text": "alt text for image"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*The Bard of Corellon*\\n:star::star::star::star: 2082 reviews\\n A bard of Corellon is a rare thing. Most elves spend their lives dedicated to the study of magic and the arts, but not all elves live up to their potential. For some, the lure of the open road and the power of music proves too much to resist. In this tale, we follow one such bard as he sets out on a journey that will change him forever."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
                    "alt_text": "alt text for image"
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Wrath of Bahamut",
                            "emoji": true
                        },
                        "value": "click_me_123"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "The Broken Fae",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "url": "https://google.com"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "The Bard of Corellon",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "url": "https://google.com"
                    }
                ]
            }
        ]
    }

    return jsonView
}

module.exports = {
	json: json
}