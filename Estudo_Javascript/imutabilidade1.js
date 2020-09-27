const user = {
    name: 'Drika',
    lastName: 'Garibalde'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}
const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName)
