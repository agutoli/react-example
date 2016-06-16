import Relay from 'react-relay';

class DefaultVariantRoute extends Relay.Route {
  static routeName = 'HomePageDefaultVariant';
  static queries = {
    store: (Component) => Relay.QL`
      query Contentf15c1cae7882448b3fb0404682e17e61 {
        contents { ${Component.getFragment('contents') } }
      }
    `
  }
}
