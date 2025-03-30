import usersRepository from '../repositories/user.repository.js'

const userServices = {
    getUsers(){
        return usersRepository.getUsers();
    }
}

export default userServices;