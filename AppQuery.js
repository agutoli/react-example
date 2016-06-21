import Relay from "react-relay";

export default {
  app: () => Relay.QL`
    query { app }
  `
};
