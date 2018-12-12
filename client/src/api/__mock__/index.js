export const login = (username, password) => {
  console.log('==============================test go to here')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        username: 'admin',
        name: 'admin'
      })
    }, 300)
  })
}
