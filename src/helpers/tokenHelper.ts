import AsyncStorage  from '@react-native-community/async-storage'


const setToken = async (token:string) =>{
    await AsyncStorage.setItem('jwt', token)
}

const getToken = async () =>{
    return await AsyncStorage.getItem('jwt')
}

const removeToken = async () =>{
    await AsyncStorage.removeItem('jwt')
}

export {
    setToken,
    getToken,
    removeToken
}