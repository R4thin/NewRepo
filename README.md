# Konotor Demo App

##Clone The Project

## Automatic build with ant

Run the following command

    ant -Dapp_id="YOUR_APP_ID" -Dapp_key="YOUR_APP_KEY" -Dcolor="COLOR" -Dapp_icon="PATH_OF_ICON"  -Dnoimage="BOOLEAN" -Dnoaudio="BOOLEAN" -Dfeedbackscreentitle="FEEDBACK_SCREEN_TITLE" -Dsupportname="SUPPORT_NAME" -Dappheading="APP_HEADING"-Dapp_name="APP_NAME" -Dapp_package_name="APP_PACKAGE_NAME"

Of these except app_id and app_id all others are optional

## Manual steps

1. Add Platform Android.

2. Install the plugin using PhoneGap/Cordova cli:

        phonegap plugin add  https://bitbucket.org/bharaths/konotor.git --variable APP_ID="YOUR_APP_ID" --variable APP_KEY="YOUR_APP_KEY"

                                    or

        cordova plugin add  https://bitbucket.org/bharaths/konotor.git --variable APP_ID="YOUR_APP_ID" --variable APP_KEY="YOUR_APP_KEY"
