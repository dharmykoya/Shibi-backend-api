module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vendorName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://via.placeholder.com/150',
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      website: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isNotified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      facebookHandle: {
        type: Sequelize.STRING,
        allowNull: true
      },
      twitterHandle: {
        type: Sequelize.STRING,
        allowNull: true
      },
      instagramHandle: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Vendors');
  }
};
