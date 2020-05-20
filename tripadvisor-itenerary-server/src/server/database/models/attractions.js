module.exports = function (sequelize, DataTypes) {
  const Attraction = sequelize.define('Attraction',
    {
      name: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      rating: DataTypes.FLOAT,
      attraction_url: DataTypes.STRING,
      image_path: DataTypes.STRING,
      image_alt: DataTypes.STRING,
    },
    {
      tableName: 'Attractions',
    });

  return Attraction;
};
