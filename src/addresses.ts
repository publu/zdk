import rinkebyAddresses from '@zoralabs/core/dist/addresses/4.json'
import mainnetAddresses from '@zoralabs/core/dist/addresses/1.json'

import mumbaiAddresses from './80001.json'
import polygonAddresses from './137.json'

interface AddressBook {
  [key: string]: {
    [key: string]: string
  }
}

/**
 * Mapping from Network to Officially & Unofficially Deployed Instances of the Zora Media Protocol
 */
export const addresses: AddressBook = {
  rinkeby: rinkebyAddresses,
  mainnet: mainnetAddresses,
  mumbai: mumbaiAddresses,
  polygon: polygonAddresses,
}
