import {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} from 'sequelize-test-helpers';

import VendorModel from '../../database/models/vendor';

describe('src/models/User', () => {
  const Vendor = VendorModel(sequelize, dataTypes);
  const vendor = new Vendor();

  checkModelName(Vendor)('Vendor');

  context('properties', () => {
    [
      'vendorName',
      'logo',
      'address',
      'website',
      'phoneNumber',
      'email',
      'password',
      'isNotified',
      'isVerified',
      'logo',
      'about',
      'twitterHandle',
      'facebookHandle'
    ].forEach(checkPropertyExists(vendor));
  });
});
