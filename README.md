## Betting data app
The challenge is to consume and transform the proprietary mock data. The proprietary data format will need to be parsed and enriched with the relevant field names and data types. For more information about the feed please read the provider README: https://hub.docker.com/r/sbgfeedme/provider/

#### Tasks
- [x] Create an app that connects the provider service on the exposed TCP port
- [x] Transform the proprietary data format into JSON using the field names and data types defined in the provider /types endpoint
- [x] Write unit tests
- [x] Save the JSON into a NoSQL store with a document per fixture. Each document should contain the event data and the child markets and outcomes for the fixture
- [ ] Implement a way of sharding / partitioning the transformed JSON packets via one or more message queues
- [ ] Utilising the message queue(s) move your NoSQL logic into another app that can be run multiple times to enable concurrent NoSQL writes
- [ ] Implement a React front end that displays the hierarchical NoSQL data
- [ ] Create a Dockerfile for your app(s)

### Running app
To run app Node is required. When in app/ directory, type

```bash
  npm i
	npm run build
  npm run start
```

This will start the TCP server using the Node module Net. This recieves the packets and saves them to the mongoDb running in the docker container
