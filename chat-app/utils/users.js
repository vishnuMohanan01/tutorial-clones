users = [];


const userJoin = ({id, username, room}) => {
    const user = {id, username, room};
    users.push(user);
    return user;
};

const getuserById = (id) => {
    return users.find(user => user.id === id);
};

const getRoomusers = (room) => {
    return users.filter(user => user.room === room);
}; 

const userLeave = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1){
        return users.splice(index, 1).pop();
    }
};

module.exports = {userJoin, getuserById, userLeave, getRoomusers};