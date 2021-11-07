const { Publisher } = require("@pact-foundation/pact")
const opts = {
    pactBroker: 'https://devtodo.pactflow.io',
    pactBrokerToken: '94U6VkB3wHNnb3d3KLuYDQ',
    consumerVersion: "2",
    pactFilesOrDirs: ['./pact/pacts'],
};

new Publisher(opts).publishPacts()