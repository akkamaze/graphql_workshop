const { GraphQLServer, PubSub } = require('graphql-yoga');

let defaultName = "Maze";

const pubsub = new PubSub();

const typeDefs = `
	type Query {
		hello(name: String, age: Int): String!
		greeting: String!
	}

	type Mutation {
		changeDefaultName(name: String!): String!
	}

	type Subscription {
		updateName: String!
	}
`;

const resolvers = {
	Query: {
		hello: (root, { name, age }, ctx, info) => {
			if (!name) 
				name = defaultName;
			age = !age ? "" : ` I'm ${age}.`
			return `Hello! You can call me ${name}!${age}`;
		},
		greeting: () => "GraphQL, good to see you."
	},
	Mutation: {
		changeDefaultName: (root, { name }, ctx, info) => {
			defaultName = name;
			pubsub.publish('update_name', {
				updateName: `Notify Update Default Name to ${name}`
			})
			return `Ok change the default name to ${defaultName}`;
		}
	},
	Subscription: {
		updateName: {
			subscribe(root, args, ctx, info) {
				return pubsub.asyncIterator('update_name');
			}
		}
	}
};

const server = new GraphQLServer({
	typeDefs,
	resolvers
});

const options = {
	port: 4000,
	endpoint: '/graphql'
};

server.start(options, (args) => { 
	const { port } = args;
  console.log(`Server start on port: ${port}`)
});
