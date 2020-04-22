const Sequelize = require("sequelize");
const sequelize = require("../config/database");




const Gig = sequelize.define("gig", {
    title : {
        type: Sequelize.STRING
    },
    technologies : {
        type: Sequelize.STRING
    },
    description : {
        type: Sequelize.STRING
    },
    budget : {
        type: Sequelize.STRING
    },
    contact_email : {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
}
);


module.exports = Gig;
