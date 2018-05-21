### forecast-node-cli-app

Sample Node CLI app, based on Jason Maurer tutorial available here:

https://timber.io/blog/creating-a-real-world-cli-app-with-node/


#### Key takeaways

key takeaways from this tutorial for those who only skimmed it:

- Bin files are the entry point for any CLI app, and should only invoke the main function
- Command files shouldn't be required until they are needed
- Always include help and version commands
- Keep command files slim--their main purpose is to call functions and show user messages
- Always show some kind of activity indicator
- Exit with the correct error codes
