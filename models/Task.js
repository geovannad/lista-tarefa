const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.ENUM("Baixa", "Média", "Alta"),
    allowNull: false,
    defaultValue: "Baixa",
  },
  dueDate: {
    type: DataTypes.DATEONLY, // Armazena apenas a data (sem hora)
    allowNull: true, // Opcional
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;
