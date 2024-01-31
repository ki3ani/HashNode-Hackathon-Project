const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql/schema');
const socketHandler = require('./sockets');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

io.on('connection', socketHandler);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
