export default (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
    vendorName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your restaurant name'
      },
      validate: {
        isAlpha: {
          args: true,
          msg: 'Please enter a valid character'
        }
      }
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please provide a logo'
      },
      defaultValue: 'https://via.placeholder.com/150',
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Please enter a valid character'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Please enter a valid character'
        }
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Please enter a valid character'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your phone number'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password'
      }
    },
    isNotified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    twitterHandle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebookHandle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instagramHandle: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Vendor;
};
